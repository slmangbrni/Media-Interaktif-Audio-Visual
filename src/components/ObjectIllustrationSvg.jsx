import React from 'react';

/**
 * High-Clarity Vector Object Illustration Component
 * Provides clean, educational illustrations for all 20 school vocabulary items.
 */
export default function ObjectIllustrationSvg({ code, className = "w-full h-full" }) {
  switch (code) {
    case "V01": // PEN
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#EFF6FF" />
          <g transform="rotate(-30 80 60)">
            <rect x="68" y="24" width="16" height="52" rx="3" fill="#1D4ED8" stroke="#1E3A8A" strokeWidth="1.5" />
            <rect x="80" y="28" width="5" height="26" rx="2" fill="#F59E0B" />
            <rect x="71" y="76" width="10" height="18" rx="1" fill="#334155" />
            <polygon points="71,94 81,94 76,106" fill="#CBD5E1" />
            <polygon points="74,101 78,101 76,106" fill="#1D4ED8" />
          </g>
          {/* Ink line demonstration */}
          <path d="M96 82 Q115 70 125 84 T145 80" stroke="#1D4ED8" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="146" cy="80" r="3" fill="#1D4ED8" />
        </svg>
      );

    case "V02": // PENCIL
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#FFFBEB" />
          <g transform="rotate(-35 80 60)">
            <rect x="72" y="24" width="16" height="54" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
            <rect x="72" y="20" width="16" height="10" rx="2" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
            <rect x="72" y="28" width="16" height="4" fill="#94A3B8" />
            <polygon points="72,78 88,78 80,98" fill="#FED7AA" stroke="#D97706" strokeWidth="1" />
            <polygon points="77,91 83,91 80,98" fill="#1E293B" />
          </g>
        </svg>
      );

    case "V03": // BOOK
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#F8FAFC" />
          <g transform="translate(30, 25)">
            <rect x="0" y="10" width="95" height="65" rx="5" fill="#1E3A8A" stroke="#0F172A" strokeWidth="2" />
            <rect x="10" y="5" width="85" height="65" rx="3" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="8" y="10" width="6" height="58" fill="#D97706" />
            <line x1="25" y1="20" x2="85" y2="20" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
            <line x1="25" y1="32" x2="75" y2="32" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
            <line x1="25" y1="44" x2="80" y2="44" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
            <circle cx="55" cy="58" r="4" fill="#10B981" />
          </g>
        </svg>
      );

    case "V04": // BAG
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#F0FDF4" />
          <g transform="translate(35, 20)">
            <path d="M30 18 Q45 0 60 18" stroke="#1E293B" strokeWidth="4" fill="none" strokeLinecap="round" />
            <rect x="12" y="18" width="66" height="74" rx="14" fill="#047857" stroke="#064E3B" strokeWidth="2" />
            <rect x="22" y="44" width="46" height="38" rx="8" fill="#10B981" stroke="#064E3B" strokeWidth="1.5" />
            <line x1="24" y1="52" x2="66" y2="52" stroke="#064E3B" strokeWidth="2" />
            <circle cx="45" cy="52" r="3" fill="#F59E0B" />
          </g>
        </svg>
      );

    case "V05": // MAP
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#EFF6FF" />
          <g transform="translate(25, 20)">
            <polygon points="10,12 40,5 75,12 105,5 105,75 75,82 40,75 10,82" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <line x1="40" y1="5" x2="40" y2="75" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3,2" />
            <line x1="75" y1="12" x2="75" y2="82" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3,2" />
            <path d="M22 35 Q30 25 36 38 Q48 42 58 30 Q70 35 84 28" stroke="#0284C7" strokeWidth="3" fill="none" />
            {/* Map pin */}
            <circle cx="58" cy="30" r="4" fill="#DC2626" />
          </g>
        </svg>
      );

    case "V06": // MARKER
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#FDF2F8" />
          <g transform="rotate(-25 80 60)">
            <rect x="68" y="20" width="22" height="64" rx="4" fill="#E11D48" stroke="#881337" strokeWidth="2" />
            <rect x="68" y="84" width="22" height="12" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
            <polygon points="72,96 86,96 79,108" fill="#1E293B" />
            <rect x="74" y="32" width="10" height="30" rx="2" fill="#FFFFFF" opacity="0.4" />
          </g>
        </svg>
      );

    case "V07": // FAN
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#F0FDFA" />
          <g transform="translate(45, 12)">
            <circle cx="35" cy="40" r="34" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
            {/* Blades */}
            <ellipse cx="35" cy="22" rx="7" ry="16" fill="#0D9488" />
            <ellipse cx="35" cy="58" rx="7" ry="16" fill="#0D9488" />
            <ellipse cx="18" cy="40" rx="16" ry="7" fill="#0D9488" />
            <ellipse cx="52" cy="40" rx="16" ry="7" fill="#0D9488" />
            <circle cx="35" cy="40" r="8" fill="#0F766E" />
            {/* Stand */}
            <rect x="32" y="74" width="6" height="22" fill="#475569" />
            <rect x="15" y="94" width="40" height="6" rx="3" fill="#334155" />
          </g>
        </svg>
      );

    case "V08": // FOLDER
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#FFFBEB" />
          <g transform="translate(30, 25)">
            <path d="M5 20 L35 20 L45 30 L95 30 L95 85 L5 85 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            <rect x="12" y="35" width="85" height="50" rx="3" fill="#FCD34D" stroke="#B45309" strokeWidth="1.5" />
            <line x1="25" y1="50" x2="75" y2="50" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
            <line x1="25" y1="62" x2="60" y2="62" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "V09": // VASE
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#F5F3FF" />
          <g transform="translate(48, 12)">
            {/* Flowers */}
            <line x1="32" y1="35" x2="20" y2="12" stroke="#059669" strokeWidth="3" />
            <circle cx="20" cy="12" r="7" fill="#EC4899" />
            <line x1="32" y1="35" x2="44" y2="15" stroke="#059669" strokeWidth="3" />
            <circle cx="44" cy="15" r="6" fill="#F59E0B" />
            {/* Ceramic vase */}
            <path
              d="M20 35 L44 35 Q40 55 52 75 Q48 95 32 95 Q16 95 12 75 Q24 55 20 35 Z"
              fill="#6366F1"
              stroke="#4338CA"
              strokeWidth="2"
            />
            <ellipse cx="32" cy="35" rx="12" ry="3" fill="#C7D2FE" />
          </g>
        </svg>
      );

    case "V10": // VEST
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#EFF6FF" />
          <g transform="translate(40, 15)">
            <path
              d="M15 15 L32 28 L49 15 L65 22 L60 85 L20 85 L15 22 Z"
              fill="#1E40AF"
              stroke="#172554"
              strokeWidth="2"
            />
            <path d="M32 28 L40 50 L40 85" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="36" cy="55" r="2.5" fill="#F59E0B" />
            <circle cx="36" cy="68" r="2.5" fill="#F59E0B" />
          </g>
        </svg>
      );

    case "V11": // TABLE
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#F8FAFC" />
          <g transform="translate(25, 30)">
            <polygon points="10,25 25,10 100,10 85,25" fill="#D97706" stroke="#92400E" strokeWidth="2" />
            <rect x="10" y="25" width="75" height="10" fill="#B45309" stroke="#92400E" strokeWidth="1.5" />
            <rect x="15" y="35" width="8" height="42" fill="#78350F" />
            <rect x="72" y="35" width="8" height="42" fill="#78350F" />
            <rect x="28" y="25" width="6" height="35" fill="#92400E" opacity="0.6" />
            <rect x="85" y="25" width="6" height="35" fill="#92400E" opacity="0.6" />
          </g>
        </svg>
      );

    case "V12": // TAPE
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#F0FDFA" />
          <g transform="translate(40, 20)">
            <circle cx="40" cy="40" r="32" fill="#99F6E4" stroke="#0D9488" strokeWidth="2" />
            <circle cx="40" cy="40" r="18" fill="#F8FAFC" stroke="#0D9488" strokeWidth="2" />
            {/* Extended strip */}
            <path d="M40 8 L75 8 L85 18" stroke="#14B8A6" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case "V13": // DESK
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#F1F5F9" />
          <g transform="translate(25, 25)">
            <polygon points="12,22 28,8 102,8 86,22" fill="#2563EB" stroke="#1E3A8A" strokeWidth="2" />
            <rect x="12" y="22" width="74" height="8" fill="#1D4ED8" />
            <rect x="18" y="30" width="7" height="48" fill="#334155" />
            <rect x="73" y="30" width="7" height="48" fill="#334155" />
            {/* Drawer */}
            <rect x="52" y="30" width="28" height="26" fill="#CBD5E1" stroke="#334155" strokeWidth="1.5" />
            <rect x="62" y="40" width="8" height="3" rx="1" fill="#1E293B" />
          </g>
        </svg>
      );

    case "V14": // DOOR
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#EFF6FF" />
          <g transform="translate(50, 15)">
            <rect x="0" y="0" width="60" height="92" rx="3" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
            <rect x="6" y="6" width="48" height="84" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
            {/* Window in door */}
            <rect x="14" y="16" width="32" height="24" rx="2" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1" />
            {/* Handle */}
            <circle cx="44" cy="54" r="3.5" fill="#F59E0B" />
          </g>
        </svg>
      );

    case "V15": // NOTEBOOK
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#FEF2F2" />
          <g transform="translate(38, 20)">
            <rect x="10" y="5" width="72" height="74" rx="4" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
            <rect x="22" y="12" width="52" height="60" rx="2" fill="#FFFFFF" />
            <line x1="30" y1="24" x2="66" y2="24" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1="36" x2="66" y2="36" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1="48" x2="56" y2="48" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
            {/* Spiral binding rings */}
            {[14, 26, 38, 50, 62].map((y) => (
              <circle key={y} cx="10" cy={y} r="3" fill="#FFFFFF" stroke="#334155" strokeWidth="1.5" />
            ))}
          </g>
        </svg>
      );

    case "V16": // NAME TAG
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#F8FAFC" />
          <g transform="translate(35, 12)">
            {/* Lanyard neck strap */}
            <path d="M45 0 L45 22" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
            <rect x="39" y="20" width="12" height="6" rx="1" fill="#64748B" />
            {/* Plastic badge card */}
            <rect x="10" y="26" width="70" height="58" rx="6" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
            <rect x="10" y="26" width="70" height="16" rx="4" fill="#1E3A8A" />
            <text x="45" y="38" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
              STUDENT
            </text>
            <circle cx="28" cy="56" r="8" fill="#CBD5E1" />
            <line x1="42" y1="52" x2="68" y2="52" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            <line x1="42" y1="60" x2="60" y2="60" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "V17": // CUP
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#ECFDF5" />
          <g transform="translate(42, 22)">
            {/* Cup body */}
            <path
              d="M15 15 L55 15 L48 68 Q45 75 35 75 Q25 75 22 68 Z"
              fill="#059669"
              stroke="#064E3B"
              strokeWidth="2"
            />
            {/* Handle */}
            <path
              d="M52 24 Q68 24 68 42 Q68 56 48 56"
              stroke="#059669"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Steam hints */}
            <path d="M28 8 Q32 2 28 -2" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M42 8 Q46 2 42 -2" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "V18": // KEY
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#FFFBEB" />
          <g transform="rotate(-30 80 60)">
            {/* Key bow */}
            <circle cx="48" cy="60" r="18" fill="#F59E0B" stroke="#B45309" strokeWidth="2.5" />
            <circle cx="48" cy="60" r="7" fill="#FFFBEB" stroke="#B45309" strokeWidth="2" />
            {/* Key shaft */}
            <rect x="66" y="56" width="50" height="8" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            {/* Teeth */}
            <rect x="98" y="64" width="7" height="10" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <rect x="109" y="64" width="6" height="14" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
          </g>
        </svg>
      );

    case "V19": // GATE
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#F8FAFC" />
          <g transform="translate(30, 20)">
            {/* Pillars */}
            <rect x="5" y="10" width="12" height="74" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            <rect x="83" y="10" width="12" height="74" fill="#475569" stroke="#1E293B" strokeWidth="2" />
            {/* Iron Bars */}
            <line x1="17" y1="20" x2="83" y2="20" stroke="#1E293B" strokeWidth="3" />
            <line x1="17" y1="75" x2="83" y2="75" stroke="#1E293B" strokeWidth="3" />
            {[28, 38, 48, 58, 68, 76].map((x) => (
              <g key={x}>
                <line x1={x} y1="16" x2={x} y2="80" stroke="#1E293B" strokeWidth="2.5" />
                <polygon points={`${x - 2},16 ${x + 2},16 ${x},10`} fill="#D97706" />
              </g>
            ))}
          </g>
        </svg>
      );

    case "V20": // GLOBE
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#EFF6FF" />
          <g transform="translate(42, 12)">
            {/* Globe sphere */}
            <circle cx="38" cy="40" r="28" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
            {/* Continents */}
            <path d="M22 35 Q30 25 36 38 Q48 40 42 55 Q30 60 22 50 Z" fill="#10B981" />
            <path d="M46 25 Q56 22 58 35 Q52 42 45 35 Z" fill="#10B981" />
            {/* Metal arc */}
            <path d="M12 40 A34 34 0 0 0 64 40" stroke="#D97706" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Base */}
            <rect x="35" y="74" width="6" height="18" fill="#78350F" />
            <rect x="20" y="92" width="36" height="6" rx="3" fill="#D97706" />
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 160 120" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="120" rx="14" fill="#F1F5F9" />
          <circle cx="80" cy="60" r="20" fill="#CBD5E1" />
        </svg>
      );
  }
}
