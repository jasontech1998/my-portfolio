import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jason Yu — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          fontFamily: "monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative cubes — top-left cluster */}
        {[
          { top: 60, left: 80 },
          { top: 60, left: 160 },
          { top: 140, left: 80 },
        ].map((pos, i) => (
          <div
            key={`tl-${i}`}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              width: 40,
              height: 40,
              border: "3px solid #000",
              borderRadius: 8,
              backgroundColor: "#fff",
            }}
          />
        ))}

        {/* Decorative cubes — bottom-right cluster */}
        {[
          { bottom: 60, right: 80 },
          { bottom: 60, right: 160 },
          { bottom: 140, right: 80 },
        ].map((pos, i) => (
          <div
            key={`br-${i}`}
            style={{
              position: "absolute",
              ...pos,
              width: 40,
              height: 40,
              border: "3px solid #000",
              borderRadius: 8,
              backgroundColor: "#fff",
            }}
          />
        ))}

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#000",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            jason yu
          </h1>
          <p
            style={{
              fontSize: 24,
              color: "#666",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Drawn to teams building software that demands its own UI.
          </p>

          {/* Nav-style pill */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 20,
              border: "3px solid #000",
              borderRadius: 8,
              padding: "10px 28px",
              backgroundColor: "#fff",
            }}
          >
            {["Work", "Projects", "Creative"].map((item) => (
              <span
                key={item}
                style={{ fontSize: 20, color: "#666", fontWeight: 500 }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* URL */}
        <p
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 18,
            color: "#999",
            margin: 0,
          }}
        >
          jasonyu.app
        </p>
      </div>
    ),
    { ...size }
  );
}
