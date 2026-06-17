import React, { useState } from "react";
import circleImg from "../../assets/Circle.png";

export function MenuPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="min-h-screen w-full bg-[#FFF8E7] relative overflow-hidden select-none flex items-center justify-start"
    >
      {/* Decorative premium radial gradient to add depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at 0% 50%, rgba(212, 175, 55, 0.15) 0%, rgba(255, 248, 231, 0) 60%)",
        }}
      />

      {/* The Half Circle on the Left Side of the Screen */}
      <div
        className="absolute left-0 top-1/2 z-10"
        style={{
          height: "90vh",
          width: "90vh",
          maxWidth: "90vw",
          maxHeight: "90vw",
          opacity: imageLoaded ? 1 : 0.05, // Render with very low opacity even if not loaded, as fallback/indicator
          transform: imageLoaded 
            ? "translate(-50%, -50%) scale(1) rotate(0deg)" 
            : "translate(-50%, -50%) scale(0.95) rotate(-15deg)",
          transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform, opacity",
        }}
      >
        <img
          src={circleImg}
          alt="Circle"
          onLoad={() => {
            console.log("Circle.png loaded successfully");
            setImageLoaded(true);
          }}
          onError={() => {
            console.error("Failed to load Circle.png");
            setHasError(true);
          }}
          className="w-full h-full object-contain pointer-events-none select-none"
          style={{
            filter: "drop-shadow(0 15px 35px rgba(13, 31, 60, 0.08))",
          }}
        />
      </div>

      {/* Diagnostic elements (Visible to verify page routing and load state) */}
      <div className="absolute bottom-4 right-4 text-[#0D1F3C]/40 text-xs font-mono pointer-events-none">
        Menu Page Active {hasError && "• Image Load Error"} {!imageLoaded && !hasError && "• Image Loading..."} {imageLoaded && "• Image Loaded"}
      </div>
    </div>
  );
}
