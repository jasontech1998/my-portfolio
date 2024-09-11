import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const pineconeApiKey = process.env.PINECONE_API_KEY;
const pineconeIndexName = process.env.PINECONE_INDEX_NAME;

if (!pineconeApiKey || !pineconeIndexName) {
  throw new Error("Missing Pinecone API key or index name");
}

const pc = new Pinecone({ apiKey: pineconeApiKey });
const openai = new OpenAI();

const index = pc.Index(pineconeIndexName);

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json(
        { message: "Text is required" },
        { status: 400 }
      );
    }

    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
      encoding_format: "float",
    });

    const searchResponse = await index.query({
      vector: embedding.data[0].embedding,
      topK: 3,
      includeMetadata: true,
    });

    // Format Pinecone results for the prompt
    const formattedResults = searchResponse.matches
      .map((match, index) => {
        return `Result ${index + 1}:
                ID: ${match.id}
                Score: ${match.score.toFixed(4)}
                Metadata: ${JSON.stringify(match.metadata)}
                `;
      })
      .join("\n");

    const prompt = `Based on the following information from Jason's resume: ${formattedResults}

Please answer this question about Jason: ${text}`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that answers questions about Jason based on his resume. Respond in a natural, conversational tone, as if you're a friend discussing Jason. Keep your answers concise, under 100 words. Only answer questions related to the information provided about Jason. If the question isn't about Jason or can't be answered with the given information, politely say you don't have that information.",
        },
        { role: "user", content: prompt },
      ],
      model: "gpt-4",
      max_tokens: 150, // This helps ensure the response stays under 100 words
    });

    return NextResponse.json({
      message: "Analysis completed successfully",
      analysis: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Detailed error:", error);
    return NextResponse.json(
      { message: "An error occurred", error: error.toString() },
      { status: 500 }
    );
  }
}
