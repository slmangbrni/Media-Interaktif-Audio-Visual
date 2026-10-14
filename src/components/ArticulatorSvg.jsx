import React from 'react';

/**
 * Sagittal Vocal Tract Articulator Diagram SVG Component
 * Retro Neo-Brutalism Edition:
 * - Lip shape in Bubblegum Pink (#FB7DA8) with crisp black outline (#000000)
 * - Tongue elevation in Retro Coral (#FD5A46) with crisp black outline (#000000)
 * - Airflow direction in Bright Retro Blue (#058CD7)
 * - Vocal cord vibration in Emerald Green (#00995E)
 * - Structural outlines in pitch black (#000000)
 * - Target phoneme stamp in Warm Mustard (#FFC567)
 */
export default function ArticulatorSvg({ phoneme, isVoiced, className = "w-full h-full" }) {
  const lipColor = "#FB7DA8";
  const lipStroke = "#000000";
  const teethColor = "#FFFFFF";
  const palateColor = "#552CB7";
  const tongueColor = "#FD5A46";
  const airflowColor = "#058CD7";
  const voiceColor = isVoiced ? "#00995E" : "#94A3B8";

  const lipsClosed = phoneme === "/p/" || phoneme === "/b/" || phoneme === "/m/";
  const labiodental = phoneme === "/f/" || phoneme === "/v/";
  const alveolar = phoneme === "/t/" || phoneme === "/d/" || phoneme === "/n/";
  const velar = phoneme === "/k/" || phoneme === "/g/";
  const isNasal = phoneme === "/m/" || phoneme === "/n/";

  return (
    <svg
      viewBox="0 0 100 90"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Diagram artikulasi vokal untuk fonem ${phoneme}`}
    >
      {/* Background container */}
      <rect width="100" height="90" rx="10" fill="#FAF8F5" stroke="#000000" strokeWidth="2.5" />

      {/* Head / Nasal & Oral Cavity Profile */}
      <path
        d="M15 15 Q40 10 70 20 Q80 25 82 45 L82 75 Q70 82 50 82"
        stroke="#000000"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Hard Palate (Roof of Mouth) */}
      <path
        d="M35 32 Q55 30 70 38"
        stroke={palateColor}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Soft Palate / Velum */}
      {velar ? (
        <path d="M68 38 Q74 44 76 52" stroke="#FD5A46" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      ) : isNasal ? (
        <path d="M68 38 Q72 45 74 54" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      ) : (
        <path d="M68 38 Q75 42 78 48" stroke={palateColor} strokeWidth="4" strokeLinecap="round" fill="none" />
      )}

      {/* Upper Incisor Teeth */}
      <rect x="33" y="32" width="5.5" height="9" rx="1.5" fill={teethColor} stroke="#000000" strokeWidth="1.5" />

      {/* Upper & Lower Lips */}
      {lipsClosed ? (
        <g>
          {/* Closed Bilabial Lips */}
          <ellipse cx="26" cy="38" rx="5.5" ry="4" fill={lipColor} stroke={lipStroke} strokeWidth="2" />
          <ellipse cx="26" cy="45" rx="5.5" ry="4" fill={lipColor} stroke={lipStroke} strokeWidth="2" />
          <line x1="20" y1="41.5" x2="32" y2="41.5" stroke={lipStroke} strokeWidth="2" />
        </g>
      ) : labiodental ? (
        <g>
          {/* Labiodental: Lower lip under upper teeth */}
          <ellipse cx="26" cy="35" rx="5.5" ry="4" fill={lipColor} stroke={lipStroke} strokeWidth="2" />
          <ellipse cx="32" cy="43" rx="6.5" ry="4.5" fill={lipColor} stroke={lipStroke} strokeWidth="2" />
          <line x1="33" y1="40" x2="38" y2="40" stroke="#058CD7" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      ) : (
        <g>
          {/* Open Lips */}
          <ellipse cx="25" cy="32" rx="5" ry="4" fill={lipColor} stroke={lipStroke} strokeWidth="2" />
          <ellipse cx="25" cy="48" rx="5" ry="4" fill={lipColor} stroke={lipStroke} strokeWidth="2" />
        </g>
      )}

      {/* Lower Incisor Teeth */}
      <rect
        x={labiodental ? '28' : '33'}
        y="45"
        width="5"
        height="8"
        rx="1.5"
        fill={teethColor}
        stroke="#000000"
        strokeWidth="1.5"
      />

      {/* Tongue Contours */}
      {alveolar ? (
        <g>
          <path
            d="M36 58 C42 54 41 35 37 35 C32 44 42 66 65 65"
            stroke={tongueColor}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="37" cy="35" r="4" fill="#000000" />
        </g>
      ) : velar ? (
        <g>
          <path
            d="M35 56 Q50 56 68 44 C66 54 62 66 65 65"
            stroke={tongueColor}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="68" cy="44" r="4.5" fill="#000000" />
        </g>
      ) : (
        <path
          d="M34 54 Q50 50 65 62"
          stroke={tongueColor}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      )}

      {/* Airflow Visual Indicator */}
      {isNasal ? (
        <g>
          <path
            d="M48 24 Q60 22 72 26"
            stroke={airflowColor}
            strokeWidth="3"
            strokeDasharray="3,2"
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="73,26 69,23 71,28" fill={airflowColor} />
          <text x="56" y="19" fontSize="6.5" fontWeight="900" fill={airflowColor} textAnchor="middle">
            HIDUNG
          </text>
        </g>
      ) : (
        <g>
          <path
            d="M30 40 L16 40"
            stroke={airflowColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="3,2"
          />
          <polygon points="14,40 18,37 18,43" fill={airflowColor} />
        </g>
      )}

      {/* Larynx / Vocal Cord Vibration Indicator */}
      <g transform="translate(62, 69)">
        <circle cx="6" cy="4" r="6" fill={voiceColor} opacity="0.3" />
        <circle cx="6" cy="4" r="3.5" fill={voiceColor} stroke="#000000" strokeWidth="1.5" />
        {isVoiced ? (
          <g>
            <path d="M-2 1 Q2 -2 6 -2 T14 1" stroke="#FFC567" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M-2 7 Q2 10 6 10 T14 7" stroke="#FFC567" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        ) : null}
      </g>

      {/* Target Phoneme Stamp Pill in Warm Mustard + Solid Black */}
      <g transform="translate(6, 65)">
        <rect width="26" height="19" rx="6" fill="#FFC567" stroke="#000000" strokeWidth="2" />
        <text
          x="13"
          y="13.5"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11"
          fontWeight="900"
          fill="#000000"
          textAnchor="middle"
        >
          {phoneme}
        </text>
      </g>
    </svg>
  );
}
