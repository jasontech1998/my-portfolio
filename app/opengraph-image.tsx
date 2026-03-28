import { ImageResponse } from "next/og";

export const revalidate = 0;
export const runtime = "edge";
export const alt = "Jason Yu — AI-Native Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const s = 48;
  const gap = 14;

  const cube = {
    width: s,
    height: s,
    border: "3px solid #ffffff",
    borderRadius: 10,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#09090b",
          position: "relative",
        }}
      >
        {/* Cube cluster — 3 cubes in L-shape */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap,
          }}
        >
          <div style={{ display: "flex", gap }}>
            <div style={cube} />
            <div style={cube} />
          </div>
          <div style={{ display: "flex" }}>
            <div style={cube} />
          </div>
        </div>

        {/* Tag — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            display: "flex",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 8,
            padding: "8px 16px",
          }}
        >
          <span
            style={{
              fontSize: 16,
              color: "#a1a1aa",
              fontFamily: "monospace",
              letterSpacing: "0.02em",
            }}
          >
            Jason Yu | AI-Native Product Engineer
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
