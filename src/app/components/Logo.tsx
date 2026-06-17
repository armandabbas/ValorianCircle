import { forwardRef } from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-10" }: LogoProps) {
  // Generate radial lines for sunburst effect
  const generateLines = (centerX: number, centerY: number, innerRadius: number, count: number) => {
    const lines = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const variance = Math.random() * 0.3 + 0.85; // Random length variation
      const outerRadius = innerRadius + (12 * variance);
      
      const x1 = centerX + Math.cos(angle) * innerRadius;
      const y1 = centerY + Math.sin(angle) * innerRadius;
      const x2 = centerX + Math.cos(angle) * outerRadius;
      const y2 = centerY + Math.sin(angle) * outerRadius;
      
      lines.push({ x1, y1, x2, y2 });
    }
    return lines;
  };

  const lines = generateLines(20, 20, 7, 80);

  return (
    <svg 
      className={className}
      viewBox="0 0 180 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sunburst radial lines */}
      <g opacity="0.8">
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#38574A"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
        ))}
      </g>
      
      {/* Center circle */}
      <circle
        cx="20"
        cy="20"
        r="7"
        fill="white"
        stroke="#38574A"
        strokeWidth="0.9"
      />
      
      {/* Text - elegant serif feel */}
      <text 
        x="44" 
        y="25" 
        fontFamily="Fraunces, serif" 
        fontSize="16" 
        fontWeight="400" 
        fill="#38574A"
        letterSpacing="0.5"
      >
        VALORIAN
      </text>
    </svg>
  );
}

// Export a version for favicons
export const LogoIcon = forwardRef<SVGSVGElement, LogoProps>(({ className = "h-10" }, ref) => {
  const generateLines = (centerX: number, centerY: number, innerRadius: number, count: number) => {
    const lines = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const variance = Math.random() * 0.3 + 0.85;
      const outerRadius = innerRadius + (12 * variance);
      
      const x1 = centerX + Math.cos(angle) * innerRadius;
      const y1 = centerY + Math.sin(angle) * innerRadius;
      const x2 = centerX + Math.cos(angle) * outerRadius;
      const y2 = centerY + Math.sin(angle) * outerRadius;
      
      lines.push({ x1, y1, x2, y2 });
    }
    return lines;
  };

  const lines = generateLines(20, 20, 7, 80);

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="1">
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#0D1F3C"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
        ))}
      </g>
      <circle
        cx="20"
        cy="20"
        r="7"
        fill="none"
        stroke="#0D1F3C"
        strokeWidth="0.9"
      />
    </svg>
  );
});

// Export a version with full wordmark
export const LogoWithWordmark = forwardRef<SVGSVGElement, LogoProps>(({ className = "h-10" }, ref) => {
  const generateLines = (centerX: number, centerY: number, innerRadius: number, count: number) => {
    const lines = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const variance = Math.random() * 0.3 + 0.85;
      const outerRadius = innerRadius + (12 * variance);
      
      const x1 = centerX + Math.cos(angle) * innerRadius;
      const y1 = centerY + Math.sin(angle) * innerRadius;
      const x2 = centerX + Math.cos(angle) * outerRadius;
      const y2 = centerY + Math.sin(angle) * outerRadius;
      
      lines.push({ x1, y1, x2, y2 });
    }
    return lines;
  };

  const lines = generateLines(20, 20, 7, 80);

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sunburst radial lines */}
      <g opacity="1">
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#0D1F3C"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* Center circle */}
      <circle
        cx="20"
        cy="20"
        r="7"
        fill="white"
        stroke="#0D1F3C"
        strokeWidth="0.9"
      />

      {/* Text - elegant serif feel */}
      <text
        x="44"
        y="25"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="#0D1F3C"
        letterSpacing="0.5"
      >
        VALORIAN
      </text>
    </svg>
  );
});