import React from 'react';

const Logo = ({ className = "", light = false }) => {
    // Exact colors from reference
    const orange = "#ea580c"; // bright orange
    const blue = "#1e3a8a"; // deep blue
    const red = "#dc2626"; // red for 'E'
    const yellow = "#facc15"; // yellow line

    // Light mode overwrites - but we keep logo colors mostly consistent for brand identity
    // unless on a very dark background where we might need to lighten them slightly
    const globeColor = light ? "#fdba74" : orange;
    const swooshColor = light ? "#93c5fd" : blue;
    const textColorBlue = light ? "#ffffff" : blue;
    const textColorOrange = light ? "#fdba74" : orange;
    const textColorRed = light ? "#fca5a5" : red;
    const accentLine = light ? "#fcd34d" : yellow;

    return (
        <div className={`flex items-center ${className}`}>
            <div className="relative h-16 w-auto flex items-center justify-center">
                <svg viewBox="0 0 200 120" className="h-full w-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Globe */}
                    <circle cx="100" cy="45" r="30" fill={globeColor} />
                    <path d="M70 45 H 130" stroke="white" strokeWidth="2" strokeOpacity="0.8" />
                    <path d="M75 30 H 125" stroke="white" strokeWidth="2" strokeOpacity="0.8" />
                    <path d="M75 60 H 125" stroke="white" strokeWidth="2" strokeOpacity="0.8" />
                    <path d="M100 15 V 75" stroke="white" strokeWidth="2" strokeOpacity="0.8" />
                    <ellipse cx="100" cy="45" rx="15" ry="30" stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="none" />

                    {/* Swoosh */}
                    <path
                        d="M140 20 Q 150 45 130 80 L 120 70 Q 135 45 130 25 Z"
                        fill={swooshColor}
                    />
                    <path
                        d="M60 80 Q 40 50 60 20"
                        stroke={swooshColor}
                        strokeWidth="5"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* TSR Text (Curved/Integrated) */}
                    <text x="35" y="55" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill={textColorBlue} transform="rotate(-20 35,55)">TSR</text>

                    {/* IMPORT */}
                    <text x="100" y="90" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill={textColorOrange} textAnchor="middle" letterSpacing="1">IMPORT</text>

                    {/* Yellow Line */}
                    <line x1="60" y1="95" x2="140" y2="95" stroke={accentLine} strokeWidth="3" />

                    {/* EXPORT */}
                    <text x="100" y="112" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill={textColorBlue} textAnchor="middle" letterSpacing="1">
                        <tspan fill={textColorRed}>E</tspan>XPORT
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default Logo;
