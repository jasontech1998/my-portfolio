import { Connect } from "@/components/Connect";

export default function Home() {
  return (
    <main className="py-24 pl-4">
      <h1 className="text-2xl self-end font-semibold tracking-tighter mb-8">jason yu</h1>
      <p className="mb-4">
        Hi, I&apos;m a front end engineer based in Bay Area, CA.
      </p>
      <p className="mb-4">
        I bring over four years of expertise in crafting appealing and
        user-friendly interfaces that seamlessly blend aesthetics with
        functionality. My passion lies in creating visually captivating and
        intuitive digital experiences that resonate with people.
      </p>
      <p className="mb-4">
        Beyond my professional pursuits, I enjoy technology, art, fashion,
        music, and movies. These diverse interests fuel my
        creativity and inspire me to approach design challenges with a unique
        perspective, blending technical expertise with artistic vision.
      </p>
      <Connect />
    </main>
  );
}
