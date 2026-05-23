import React from "react";

const AllpetsLoading = () => {
  return (
    <div className="container-div">
      <h1 className="section-heading mt-40 mb-20">All Pets For Adoption</h1>
      <div className="pet-container grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 w-fit ms-auto">
        <div
          className="mx-auto"
          style={{
            width: 380,
            background: "#fff",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          }}
        >
          <style>{`
      @keyframes shimmer {
        0%   { background-position: -600px 0; }
        100% { background-position:  600px 0; }
      }
      .sk {
        border-radius: 8px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 600px 100%;
        animation: shimmer 1.6s infinite linear;
      }
    `}</style>

          {/* Image placeholder */}
          <div
            style={{ position: "relative", height: 260, overflow: "hidden" }}
          >
            <div
              className="sk"
              style={{ position: "absolute", inset: 0, borderRadius: 0 }}
            />
            <div style={{ position: "absolute", top: 14, left: 14 }}>
              <div
                className="sk"
                style={{ width: 72, height: 24, borderRadius: 999 }}
              />
            </div>
            <div style={{ position: "absolute", bottom: 14, right: 14 }}>
              <div
                className="sk"
                style={{ width: 52, height: 26, borderRadius: 999 }}
              />
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>
            {/* Name + badges row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div
                  className="sk"
                  style={{ width: 140, height: 28, borderRadius: 6 }}
                />
                <div
                  className="sk"
                  style={{ width: 100, height: 14, borderRadius: 4 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  alignItems: "flex-end",
                }}
              >
                <div
                  className="sk"
                  style={{ width: 58, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 70, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 80, height: 22, borderRadius: 999 }}
                />
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              <div
                className="sk"
                style={{ width: 70, height: 14, borderRadius: 4 }}
              />
              <div
                className="sk"
                style={{ width: 100, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Contact box */}
            <div
              style={{
                background: "#f4f9ff",
                border: "0.5px solid #B5D4F4",
                borderRadius: 10,
                padding: "10px 14px",
                marginBottom: 16,
              }}
            >
              <div
                className="sk"
                style={{
                  width: 50,
                  height: 12,
                  borderRadius: 4,
                  marginBottom: 8,
                }}
              />
              <div
                className="sk"
                style={{ width: 180, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Button */}
            <div
              className="sk"
              style={{ width: "100%", height: 44, borderRadius: 12 }}
            />
          </div>
        </div>
        <div
          className="mx-auto"
          style={{
            width: 380,
            background: "#fff",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          }}
        >
          <style>{`
      @keyframes shimmer {
        0%   { background-position: -600px 0; }
        100% { background-position:  600px 0; }
      }
      .sk {
        border-radius: 8px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 600px 100%;
        animation: shimmer 1.6s infinite linear;
      }
    `}</style>

          {/* Image placeholder */}
          <div
            style={{ position: "relative", height: 260, overflow: "hidden" }}
          >
            <div
              className="sk"
              style={{ position: "absolute", inset: 0, borderRadius: 0 }}
            />
            <div style={{ position: "absolute", top: 14, left: 14 }}>
              <div
                className="sk"
                style={{ width: 72, height: 24, borderRadius: 999 }}
              />
            </div>
            <div style={{ position: "absolute", bottom: 14, right: 14 }}>
              <div
                className="sk"
                style={{ width: 52, height: 26, borderRadius: 999 }}
              />
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>
            {/* Name + badges row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div
                  className="sk"
                  style={{ width: 140, height: 28, borderRadius: 6 }}
                />
                <div
                  className="sk"
                  style={{ width: 100, height: 14, borderRadius: 4 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  alignItems: "flex-end",
                }}
              >
                <div
                  className="sk"
                  style={{ width: 58, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 70, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 80, height: 22, borderRadius: 999 }}
                />
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              <div
                className="sk"
                style={{ width: 70, height: 14, borderRadius: 4 }}
              />
              <div
                className="sk"
                style={{ width: 100, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Contact box */}
            <div
              style={{
                background: "#f4f9ff",
                border: "0.5px solid #B5D4F4",
                borderRadius: 10,
                padding: "10px 14px",
                marginBottom: 16,
              }}
            >
              <div
                className="sk"
                style={{
                  width: 50,
                  height: 12,
                  borderRadius: 4,
                  marginBottom: 8,
                }}
              />
              <div
                className="sk"
                style={{ width: 180, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Button */}
            <div
              className="sk"
              style={{ width: "100%", height: 44, borderRadius: 12 }}
            />
          </div>
        </div>
        <div
          className="mx-auto"
          style={{
            width: 380,
            background: "#fff",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          }}
        >
          <style>{`
      @keyframes shimmer {
        0%   { background-position: -600px 0; }
        100% { background-position:  600px 0; }
      }
      .sk {
        border-radius: 8px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 600px 100%;
        animation: shimmer 1.6s infinite linear;
      }
    `}</style>

          {/* Image placeholder */}
          <div
            style={{ position: "relative", height: 260, overflow: "hidden" }}
          >
            <div
              className="sk"
              style={{ position: "absolute", inset: 0, borderRadius: 0 }}
            />
            <div style={{ position: "absolute", top: 14, left: 14 }}>
              <div
                className="sk"
                style={{ width: 72, height: 24, borderRadius: 999 }}
              />
            </div>
            <div style={{ position: "absolute", bottom: 14, right: 14 }}>
              <div
                className="sk"
                style={{ width: 52, height: 26, borderRadius: 999 }}
              />
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>
            {/* Name + badges row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div
                  className="sk"
                  style={{ width: 140, height: 28, borderRadius: 6 }}
                />
                <div
                  className="sk"
                  style={{ width: 100, height: 14, borderRadius: 4 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  alignItems: "flex-end",
                }}
              >
                <div
                  className="sk"
                  style={{ width: 58, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 70, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 80, height: 22, borderRadius: 999 }}
                />
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              <div
                className="sk"
                style={{ width: 70, height: 14, borderRadius: 4 }}
              />
              <div
                className="sk"
                style={{ width: 100, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Contact box */}
            <div
              style={{
                background: "#f4f9ff",
                border: "0.5px solid #B5D4F4",
                borderRadius: 10,
                padding: "10px 14px",
                marginBottom: 16,
              }}
            >
              <div
                className="sk"
                style={{
                  width: 50,
                  height: 12,
                  borderRadius: 4,
                  marginBottom: 8,
                }}
              />
              <div
                className="sk"
                style={{ width: 180, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Button */}
            <div
              className="sk"
              style={{ width: "100%", height: 44, borderRadius: 12 }}
            />
          </div>
        </div>
        <div
          className="mx-auto"
          style={{
            width: 380,
            background: "#fff",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          }}
        >
          <style>{`
      @keyframes shimmer {
        0%   { background-position: -600px 0; }
        100% { background-position:  600px 0; }
      }
      .sk {
        border-radius: 8px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 600px 100%;
        animation: shimmer 1.6s infinite linear;
      }
    `}</style>

          {/* Image placeholder */}
          <div
            style={{ position: "relative", height: 260, overflow: "hidden" }}
          >
            <div
              className="sk"
              style={{ position: "absolute", inset: 0, borderRadius: 0 }}
            />
            <div style={{ position: "absolute", top: 14, left: 14 }}>
              <div
                className="sk"
                style={{ width: 72, height: 24, borderRadius: 999 }}
              />
            </div>
            <div style={{ position: "absolute", bottom: 14, right: 14 }}>
              <div
                className="sk"
                style={{ width: 52, height: 26, borderRadius: 999 }}
              />
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>
            {/* Name + badges row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div
                  className="sk"
                  style={{ width: 140, height: 28, borderRadius: 6 }}
                />
                <div
                  className="sk"
                  style={{ width: 100, height: 14, borderRadius: 4 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  alignItems: "flex-end",
                }}
              >
                <div
                  className="sk"
                  style={{ width: 58, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 70, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 80, height: 22, borderRadius: 999 }}
                />
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              <div
                className="sk"
                style={{ width: 70, height: 14, borderRadius: 4 }}
              />
              <div
                className="sk"
                style={{ width: 100, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Contact box */}
            <div
              style={{
                background: "#f4f9ff",
                border: "0.5px solid #B5D4F4",
                borderRadius: 10,
                padding: "10px 14px",
                marginBottom: 16,
              }}
            >
              <div
                className="sk"
                style={{
                  width: 50,
                  height: 12,
                  borderRadius: 4,
                  marginBottom: 8,
                }}
              />
              <div
                className="sk"
                style={{ width: 180, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Button */}
            <div
              className="sk"
              style={{ width: "100%", height: 44, borderRadius: 12 }}
            />
          </div>
        </div>
        <div
          className="mx-auto"
          style={{
            width: 380,
            background: "#fff",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          }}
        >
          <style>{`
      @keyframes shimmer {
        0%   { background-position: -600px 0; }
        100% { background-position:  600px 0; }
      }
      .sk {
        border-radius: 8px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 600px 100%;
        animation: shimmer 1.6s infinite linear;
      }
    `}</style>

          {/* Image placeholder */}
          <div
            style={{ position: "relative", height: 260, overflow: "hidden" }}
          >
            <div
              className="sk"
              style={{ position: "absolute", inset: 0, borderRadius: 0 }}
            />
            <div style={{ position: "absolute", top: 14, left: 14 }}>
              <div
                className="sk"
                style={{ width: 72, height: 24, borderRadius: 999 }}
              />
            </div>
            <div style={{ position: "absolute", bottom: 14, right: 14 }}>
              <div
                className="sk"
                style={{ width: 52, height: 26, borderRadius: 999 }}
              />
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>
            {/* Name + badges row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div
                  className="sk"
                  style={{ width: 140, height: 28, borderRadius: 6 }}
                />
                <div
                  className="sk"
                  style={{ width: 100, height: 14, borderRadius: 4 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  alignItems: "flex-end",
                }}
              >
                <div
                  className="sk"
                  style={{ width: 58, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 70, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 80, height: 22, borderRadius: 999 }}
                />
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              <div
                className="sk"
                style={{ width: 70, height: 14, borderRadius: 4 }}
              />
              <div
                className="sk"
                style={{ width: 100, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Contact box */}
            <div
              style={{
                background: "#f4f9ff",
                border: "0.5px solid #B5D4F4",
                borderRadius: 10,
                padding: "10px 14px",
                marginBottom: 16,
              }}
            >
              <div
                className="sk"
                style={{
                  width: 50,
                  height: 12,
                  borderRadius: 4,
                  marginBottom: 8,
                }}
              />
              <div
                className="sk"
                style={{ width: 180, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Button */}
            <div
              className="sk"
              style={{ width: "100%", height: 44, borderRadius: 12 }}
            />
          </div>
        </div>
        <div
          className="mx-auto"
          style={{
            width: 380,
            background: "#fff",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          }}
        >
          <style>{`
      @keyframes shimmer {
        0%   { background-position: -600px 0; }
        100% { background-position:  600px 0; }
      }
      .sk {
        border-radius: 8px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 600px 100%;
        animation: shimmer 1.6s infinite linear;
      }
    `}</style>

          {/* Image placeholder */}
          <div
            style={{ position: "relative", height: 260, overflow: "hidden" }}
          >
            <div
              className="sk"
              style={{ position: "absolute", inset: 0, borderRadius: 0 }}
            />
            <div style={{ position: "absolute", top: 14, left: 14 }}>
              <div
                className="sk"
                style={{ width: 72, height: 24, borderRadius: 999 }}
              />
            </div>
            <div style={{ position: "absolute", bottom: 14, right: 14 }}>
              <div
                className="sk"
                style={{ width: 52, height: 26, borderRadius: 999 }}
              />
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>
            {/* Name + badges row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div
                  className="sk"
                  style={{ width: 140, height: 28, borderRadius: 6 }}
                />
                <div
                  className="sk"
                  style={{ width: 100, height: 14, borderRadius: 4 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  alignItems: "flex-end",
                }}
              >
                <div
                  className="sk"
                  style={{ width: 58, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 70, height: 22, borderRadius: 999 }}
                />
                <div
                  className="sk"
                  style={{ width: 80, height: 22, borderRadius: 999 }}
                />
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              <div
                className="sk"
                style={{ width: 70, height: 14, borderRadius: 4 }}
              />
              <div
                className="sk"
                style={{ width: 100, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Contact box */}
            <div
              style={{
                background: "#f4f9ff",
                border: "0.5px solid #B5D4F4",
                borderRadius: 10,
                padding: "10px 14px",
                marginBottom: 16,
              }}
            >
              <div
                className="sk"
                style={{
                  width: 50,
                  height: 12,
                  borderRadius: 4,
                  marginBottom: 8,
                }}
              />
              <div
                className="sk"
                style={{ width: 180, height: 14, borderRadius: 4 }}
              />
            </div>

            {/* Button */}
            <div
              className="sk"
              style={{ width: "100%", height: 44, borderRadius: 12 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllpetsLoading;
