import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Varion Media — Digital Marketing Agency That Drives Leads";
export const size = { width: 1200, height: 630 };
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
            "radial-gradient(circle at 25% 30%, #0a1640 0%, #020516 65%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "2px",
              background: "#00C8E8",
            }}
          />
          <span
            style={{
              color: "#00C8E8",
              letterSpacing: "0.28em",
              fontSize: "22px",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Digital Marketing Agency
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: "1000px",
          }}
        >
          <span>We don&apos;t just run campaigns.</span>
          <span style={{ color: "#00C8E8" }}>
            We build upward trajectories.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={iconSrc}
              width={72}
              height={72}
              alt=""
              style={{ borderRadius: 14 }}
            />
            <span
              style={{
                fontSize: "30px",
                fontWeight: 800,
                letterSpacing: "0.04em",
              }}
            >
              Varion Media
            </span>
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "20px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            varionmedia.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
