import { ImageResponse } from "next/og";

export const size = {
  width: 128,
  height: 128,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "128px",
          height: "128px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: "112px",
            height: "112px",
            borderRadius: "999px",
            background: "#d8d3c8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 22px rgba(0,0,0,0.24)",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "999px",
              background: "#f8f6ef",
              border: "3px solid rgba(255,255,255,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#171717",
              fontSize: "42px",
              fontWeight: 900,
              letterSpacing: "-5px",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            JS
          </div>
        </div>
      </div>
    ),
    size
  );
}
