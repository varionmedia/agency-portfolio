import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Varion Media — Digital Marketing Agency";
export const size = { width: 1200, height: 1200 };
export const contentType = "image/png";

export default async function Image() {
  const iconData = await readFile(
    join(process.cwd(), "public/images/logo/icon-512.png")
  );
  const iconSrc = `data:image/png;base64,${Buffer.from(iconData).toString(
    "base64"
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 50% 38%, #0b1a44 0%, #020516 70%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconSrc} width={520} height={520} alt="" />
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "0.02em",
            marginTop: 24,
          }}
        >
          Varion Media
        </div>
        <div
          style={{
            display: "flex",
            width: 120,
            height: 4,
            background: "#00C8E8",
            margin: "36px 0",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 500,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.01em",
          }}
        >
          We build upward trajectories.
        </div>
      </div>
    ),
    { ...size }
  );
}
