import { ImageResponse } from "next/og";

export const alt = "Projetos de Fabio Coutinho";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#050712",
        color: "#f8f7ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ color: "#725aef", fontSize: 32 }}>Fabio Coutinho</div>
      <div style={{ fontSize: 72, fontWeight: 700, marginTop: 20 }}>
        Projetos Full Stack
      </div>
      <div style={{ color: "#b2aec1", fontSize: 32, marginTop: 32 }}>
        Aplicações web com Java, Spring Boot, React e mais
      </div>
    </div>,
  );
}
