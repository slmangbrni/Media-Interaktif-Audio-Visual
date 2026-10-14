/* ═══════════════════════════════════════════════════════════════
   EPVM English — English Pronunciation Visual Media
   High-Performance Single-Page Application (SPA) Engine
   Special Education (SLB) & Inclusive High School (Inklusi SMA)
   Unified Video/Audio Engine • 4 Articulation Treatments • 20 Words
   ═══════════════════════════════════════════════════════════════ */

// ─── 1. COMPLETE 20-ITEM VOCABULARY DATASET ───
const vocabularyData = [
  // TREATMENT 1: BILABIAL (/p/, /b/, /m/)
  {
    code: "V01", treatment: "bilabial", treatmentTitle: "Bilabial (/p/, /b/, /m/)",
    word: "PEN", translation: "Pulpen", phoneme: "/p/", guide: "pen", ipa: "/pɛn/",
    voiced: false, voiceLabel: "Pita Suara Tidak Bergetar",
    objectDesc: "Pulpen tunggal di atas meja kelas, latar polos.",
    articulatorDesc: "Kedua bibir menutup rapat, lalu terbuka melepaskan udara; pita suara tidak bergetar.",
    artImage: "assets/art/art_p.png", objImage: "assets/images/pen.png",
    videoSrc: "assets/videos/pen.mp4", audioSrc: "assets/audio/pen.mp3",
    frequency: 180, shape: "bilabial"
  },
  {
    code: "V02", treatment: "bilabial", treatmentTitle: "Bilabial (/p/, /b/, /m/)",
    word: "PENCIL", translation: "Pensil", phoneme: "/p/", guide: "PEN-sel", ipa: "/ˈpɛnsəl/",
    voiced: false, voiceLabel: "Pita Suara Tidak Bergetar",
    objectDesc: "Pensil kayu dengan penghapus di ujung, latar polos.",
    articulatorDesc: "Kedua bibir menutup rapat, lalu terbuka melepaskan udara; pita suara tidak bergetar.",
    artImage: "assets/art/art_p.png", objImage: "assets/images/pencil.png",
    videoSrc: "assets/videos/pencil.mp4", audioSrc: "assets/audio/pencil.mp3",
    frequency: 180, shape: "bilabial"
  },
  {
    code: "V03", treatment: "bilabial", treatmentTitle: "Bilabial (/p/, /b/, /m/)",
    word: "BOOK", translation: "Buku", phoneme: "/b/", guide: "buk", ipa: "/bʊk/",
    voiced: true, voiceLabel: "Pita Suara Bergetar",
    objectDesc: "Buku pelajaran tertutup, latar polos.",
    articulatorDesc: "Kedua bibir menutup rapat lalu membuka; pita suara bergetar.",
    artImage: "assets/art/art_b.png", objImage: "assets/images/book.png",
    videoSrc: "assets/videos/book.mp4", audioSrc: "assets/audio/book.mp3",
    frequency: 140, shape: "bilabial"
  },
  {
    code: "V04", treatment: "bilabial", treatmentTitle: "Bilabial (/p/, /b/, /m/)",
    word: "BAG", translation: "Tas", phoneme: "/b/", guide: "beg", ipa: "/bæɡ/",
    voiced: true, voiceLabel: "Pita Suara Bergetar",
    objectDesc: "Tas sekolah atau ransel, latar polos.",
    articulatorDesc: "Kedua bibir menutup rapat lalu membuka; pita suara bergetar.",
    artImage: "assets/art/art_b.png", objImage: "assets/images/bag.png",
    videoSrc: "assets/videos/bag.mp4", audioSrc: "assets/audio/bag.mp3",
    frequency: 140, shape: "bilabial"
  },
  {
    code: "V05", treatment: "bilabial", treatmentTitle: "Bilabial (/p/, /b/, /m/)",
    word: "MAP", translation: "Peta", phoneme: "/m/", guide: "mep", ipa: "/mæp/",
    voiced: true, voiceLabel: "Aliran Hidung & Pita Suara Bergetar",
    objectDesc: "Peta kertas dunia/Indonesia yang dibentangkan di meja kelas.",
    articulatorDesc: "Kedua bibir menutup; udara keluar melalui hidung dan pita suara bergetar.",
    artImage: "assets/art/art_m.png", objImage: "assets/images/map.png",
    videoSrc: "assets/videos/map.mp4", audioSrc: "assets/audio/map.mp3",
    frequency: 210, shape: "bilabial"
  },
  {
    code: "V06", treatment: "bilabial", treatmentTitle: "Bilabial (/p/, /b/, /m/)",
    word: "MARKER", translation: "Spidol", phoneme: "/m/", guide: "MAR-ker", ipa: "/ˈmɑrkɚ/",
    voiced: true, voiceLabel: "Aliran Hidung & Pita Suara Bergetar",
    objectDesc: "Spidol papan tulis satu buah, latar polos.",
    articulatorDesc: "Kedua bibir menutup; udara keluar melalui hidung dan pita suara bergetar.",
    artImage: "assets/art/art_m.png", objImage: "assets/images/marker.png",
    videoSrc: "assets/videos/marker.mp4", audioSrc: "assets/audio/marker.mp3",
    frequency: 210, shape: "bilabial"
  },

  // TREATMENT 2: LABIODENTAL (/f/, /v/)
  {
    code: "V07", treatment: "labiodental", treatmentTitle: "Labiodental (/f/, /v/)",
    word: "FAN", translation: "Kipas angin", phoneme: "/f/", guide: "fen", ipa: "/fæn/",
    voiced: false, voiceLabel: "Tanpa Getaran Pita Suara",
    objectDesc: "Kipas angin meja di ruang kelas, latar polos.",
    articulatorDesc: "Gigi atas menyentuh atau mendekati bibir bawah; udara bergesekan, tanpa getaran pita suara.",
    artImage: "assets/art/art_f.png", objImage: "assets/images/fan.png",
    videoSrc: "assets/videos/fan.mp4", audioSrc: "assets/audio/fan.mp3",
    frequency: 190, shape: "labiodental"
  },
  {
    code: "V08", treatment: "labiodental", treatmentTitle: "Labiodental (/f/, /v/)",
    word: "FOLDER", translation: "Map dokumen", phoneme: "/f/", guide: "FOHL-der", ipa: "/ˈfoʊldɚ/",
    voiced: false, voiceLabel: "Tanpa Getaran Pita Suara",
    objectDesc: "Folder/map plastik untuk menyimpan dokumen sekolah, latar polos.",
    articulatorDesc: "Gigi atas menyentuh atau mendekati bibir bawah; udara bergesekan, tanpa getaran pita suara.",
    artImage: "assets/art/art_f.png", objImage: "assets/images/folder.png",
    videoSrc: "assets/videos/folder.mp4", audioSrc: "assets/audio/folder.mp3",
    frequency: 190, shape: "labiodental"
  },
  {
    code: "V09", treatment: "labiodental", treatmentTitle: "Labiodental (/f/, /v/)",
    word: "VASE", translation: "Vas bunga", phoneme: "/v/", guide: "veis", ipa: "/veɪs/",
    voiced: true, voiceLabel: "Pita Suara Bergetar",
    objectDesc: "Vas bunga sederhana di meja guru, latar polos.",
    articulatorDesc: "Gigi atas menyentuh atau mendekati bibir bawah; udara bergesekan disertai getaran pita suara.",
    artImage: "assets/art/art_v.png", objImage: "assets/images/vase.png",
    videoSrc: "assets/videos/vase.mp4", audioSrc: "assets/audio/vase.mp3",
    frequency: 160, shape: "labiodental"
  },
  {
    code: "V10", treatment: "labiodental", treatmentTitle: "Labiodental (/f/, /v/)",
    word: "VEST", translation: "Rompi", phoneme: "/v/", guide: "vest", ipa: "/vɛst/",
    voiced: true, voiceLabel: "Pita Suara Bergetar",
    objectDesc: "Rompi/vest digantung di ruang sekolah, tanpa model manusia.",
    articulatorDesc: "Gigi atas menyentuh atau mendekati bibir bawah; udara bergesekan disertai getaran pita suara.",
    artImage: "assets/art/art_v.png", objImage: "assets/images/vest.png",
    videoSrc: "assets/videos/vest.mp4", audioSrc: "assets/audio/vest.mp3",
    frequency: 160, shape: "labiodental"
  },

  // TREATMENT 3: ALVEOLAR (/t/, /d/, /n/)
  {
    code: "V11", treatment: "alveolar", treatmentTitle: "Alveolar (/t/, /d/, /n/)",
    word: "TABLE", translation: "Meja", phoneme: "/t/", guide: "TEI-bel", ipa: "/ˈteɪbəl/",
    voiced: false, voiceLabel: "Tanpa Getaran Pita Suara",
    objectDesc: "Meja kelas tampak utuh, latar polos.",
    articulatorDesc: "Ujung/daun lidah menyentuh gusi tepat di belakang gigi atas lalu dilepas; tanpa getaran pita suara.",
    artImage: "assets/art/art_t.png", objImage: "assets/images/table.png",
    videoSrc: "assets/videos/table.mp4", audioSrc: "assets/audio/table.mp3",
    frequency: 220, shape: "alveolar"
  },
  {
    code: "V12", treatment: "alveolar", treatmentTitle: "Alveolar (/t/, /d/, /n/)",
    word: "TAPE", translation: "Selotip", phoneme: "/t/", guide: "teip", ipa: "/teɪp/",
    voiced: false, voiceLabel: "Tanpa Getaran Pita Suara",
    objectDesc: "Gulungan selotip transparan, latar polos.",
    articulatorDesc: "Ujung/daun lidah menyentuh gusi tepat di belakang gigi atas lalu dilepas; tanpa getaran pita suara.",
    artImage: "assets/art/art_t.png", objImage: "assets/images/tape.png",
    videoSrc: "assets/videos/tape.mp4", audioSrc: "assets/audio/tape.mp3",
    frequency: 220, shape: "alveolar"
  },
  {
    code: "V13", treatment: "alveolar", treatmentTitle: "Alveolar (/t/, /d/, /n/)",
    word: "DESK", translation: "Meja belajar", phoneme: "/d/", guide: "desk", ipa: "/dɛsk/",
    voiced: true, voiceLabel: "Pita Suara Bergetar",
    objectDesc: "Meja siswa dengan permukaan belajar, latar polos.",
    articulatorDesc: "Ujung/daun lidah menyentuh gusi tepat di belakang gigi atas lalu dilepas; pita suara bergetar.",
    artImage: "assets/art/art_d.png", objImage: "assets/images/desk.png",
    videoSrc: "assets/videos/desk.mp4", audioSrc: "assets/audio/desk.mp3",
    frequency: 150, shape: "alveolar"
  },
  {
    code: "V14", treatment: "alveolar", treatmentTitle: "Alveolar (/t/, /d/, /n/)",
    word: "DOOR", translation: "Pintu", phoneme: "/d/", guide: "dor", ipa: "/dɔr/",
    voiced: true, voiceLabel: "Pita Suara Bergetar",
    objectDesc: "Pintu kelas sekolah tampak depan, latar polos.",
    articulatorDesc: "Ujung/daun lidah menyentuh gusi tepat di belakang gigi atas lalu dilepas; pita suara bergetar.",
    artImage: "assets/art/art_d.png", objImage: "assets/images/door.png",
    videoSrc: "assets/videos/door.mp4", audioSrc: "assets/audio/door.mp3",
    frequency: 150, shape: "alveolar"
  },
  {
    code: "V15", treatment: "alveolar", treatmentTitle: "Alveolar (/t/, /d/, /n/)",
    word: "NOTEBOOK", translation: "Buku catatan", phoneme: "/n/", guide: "NOUT-buk", ipa: "/ˈnoʊtbʊk/",
    voiced: true, voiceLabel: "Aliran Hidung & Pita Suara Bergetar",
    objectDesc: "Buku tulis spiral/buku catatan siswa, latar polos.",
    articulatorDesc: "Ujung/daun lidah menyentuh gusi tepat di belakang gigi atas, udara mengalir melalui hidung.",
    artImage: "assets/art/art_n.png", objImage: "assets/images/notebook.png",
    videoSrc: "assets/videos/notebook.mp4", audioSrc: "assets/audio/notebook.mp3",
    frequency: 230, shape: "alveolar"
  },
  {
    code: "V16", treatment: "alveolar", treatmentTitle: "Alveolar (/t/, /d/, /n/)",
    word: "NAME TAG", translation: "Tanda pengenal", phoneme: "/n/", guide: "NEIM teg", ipa: "/ˈneɪm tæɡ/",
    voiced: true, voiceLabel: "Aliran Hidung & Pita Suara Bergetar",
    objectDesc: "Kartu tanda pengenal siswa dengan tali gantungan, latar polos.",
    articulatorDesc: "Ujung/daun lidah menyentuh gusi tepat di belakang gigi atas, udara mengalir melalui hidung.",
    artImage: "assets/art/art_n.png", objImage: "assets/images/nametag.png",
    videoSrc: "assets/videos/nametag.mp4", audioSrc: "assets/audio/nametag.mp3",
    frequency: 230, shape: "alveolar"
  },

  // TREATMENT 4: VELAR (/k/, /g/)
  {
    code: "V17", treatment: "velar", treatmentTitle: "Velar (/k/, /g/)",
    word: "CUP", translation: "Cangkir", phoneme: "/k/", guide: "kap", ipa: "/kʌp/",
    voiced: false, voiceLabel: "Tanpa Getaran Pita Suara",
    objectDesc: "Cangkir minum polos di kantin atau meja sekolah.",
    articulatorDesc: "Bagian belakang lidah menempel pada langit-langit lunak lalu dilepas; tanpa getaran pita suara.",
    artImage: "assets/art/art_k.png", objImage: "assets/images/cup.png",
    videoSrc: "assets/videos/cup.mp4", audioSrc: "assets/audio/cup.mp3",
    frequency: 200, shape: "velar"
  },
  {
    code: "V18", treatment: "velar", treatmentTitle: "Velar (/k/, /g/)",
    word: "KEY", translation: "Kunci", phoneme: "/k/", guide: "kii", ipa: "/kiː/",
    voiced: false, voiceLabel: "Tanpa Getaran Pita Suara",
    objectDesc: "Satu anak kunci untuk ruang kelas, latar polos.",
    articulatorDesc: "Bagian belakang lidah menempel pada langit-langit lunak lalu dilepas; tanpa getaran pita suara.",
    artImage: "assets/art/art_k.png", objImage: "assets/images/key.png",
    videoSrc: "assets/videos/key.mp4", audioSrc: "assets/audio/key.mp3",
    frequency: 200, shape: "velar"
  },
  {
    code: "V19", treatment: "velar", treatmentTitle: "Velar (/k/, /g/)",
    word: "GATE", translation: "Gerbang", phoneme: "/g/", guide: "geit", ipa: "/ɡeɪt/",
    voiced: true, voiceLabel: "Pita Suara Bergetar",
    objectDesc: "Gerbang masuk sekolah, tanpa tulisan nama sekolah.",
    articulatorDesc: "Bagian belakang lidah menempel pada langit-langit lunak lalu dilepas; pita suara bergetar.",
    artImage: "assets/art/art_g.png", objImage: "assets/images/gate.png",
    videoSrc: "assets/videos/gate.mp4", audioSrc: "assets/audio/gate.mp3",
    frequency: 130, shape: "velar"
  },
  {
    code: "V20", treatment: "velar", treatmentTitle: "Velar (/k/, /g/)",
    word: "GLOBE", translation: "Bola dunia", phoneme: "/g/", guide: "gloub", ipa: "/ɡloʊb/",
    voiced: true, voiceLabel: "Pita Suara Bergetar",
    objectDesc: "Bola dunia/globe di kelas geografi, latar polos.",
    articulatorDesc: "Bagian belakang lidah menempel pada langit-langit lunak lalu dilepas; pita suara bergetar.",
    artImage: "assets/art/art_g.png", objImage: "assets/images/globe.png",
    videoSrc: "assets/videos/globe.mp4", audioSrc: "assets/audio/globe.mp3",
    frequency: 130, shape: "velar"
  }
];

// ─── 2. BUILT-IN CUSTOM SVG FALLBACK GENERATORS ───

/**
 * Built-in Sagittal Vocal Tract Articulator Diagram SVG Fallback
 */
function getArticulatorSvg(phoneme, isVoiced) {
  // Color tokens
  const lipColor = "#fca5a5";
  const lipStroke = "#e11d48";
  const teethColor = "#ffffff";
  const palateColor = "#cbd5e1";
  const tongueColor = "#f97316";
  const airflowColor = "#38bdf8";
  const voiceColor = isVoiced ? "#22c55e" : "#94a3b8";

  // Dynamic positions per phoneme
  let lipsClosed = phoneme === "/p/" || phoneme === "/b/" || phoneme === "/m/";
  let labiodental = phoneme === "/f/" || phoneme === "/v/";
  let alveolar = phoneme === "/t/" || phoneme === "/d/" || phoneme === "/n/";
  let velar = phoneme === "/k/" || phoneme === "/g/";
  let isNasal = phoneme === "/m/" || phoneme === "/n/";

  return `
    <svg viewBox="0 0 100 90" class="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="90" rx="8" fill="#f8fafc"/>
      <!-- Head / Palate Profile -->
      <path d="M15 15 Q40 10 70 20 Q80 25 82 45 L82 75 Q70 82 50 82" stroke="#94a3b8" stroke-width="2" fill="none"/>
      <!-- Hard & Soft Palate -->
      <path d="M35 32 Q55 30 70 38" stroke="${palateColor}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      ${velar ? `<path d="M68 38 Q74 44 76 52" stroke="#ea580c" stroke-width="4" stroke-linecap="round" fill="none"/>` : 
        (isNasal ? `<path d="M68 38 Q72 45 74 54" stroke="#64748b" stroke-width="3" stroke-linecap="round" fill="none"/>` : 
        `<path d="M68 38 Q75 42 78 48" stroke="${palateColor}" stroke-width="4" stroke-linecap="round" fill="none"/>`)}
      
      <!-- Upper Incisor Teeth -->
      <rect x="33" y="32" width="5" height="9" rx="1.5" fill="${teethColor}" stroke="#64748b" stroke-width="1"/>
      
      <!-- Upper & Lower Lip -->
      ${lipsClosed ? `
        <!-- Closed Bilabial Lips -->
        <ellipse cx="26" cy="38" rx="5" ry="3.5" fill="${lipColor}" stroke="${lipStroke}" stroke-width="1.5"/>
        <ellipse cx="26" cy="45" rx="5" ry="3.5" fill="${lipColor}" stroke="${lipStroke}" stroke-width="1.5"/>
      ` : (labiodental ? `
        <!-- Labiodental: Lower lip under upper teeth -->
        <ellipse cx="26" cy="35" rx="5" ry="4" fill="${lipColor}" stroke="${lipStroke}" stroke-width="1.5"/>
        <ellipse cx="32" cy="42" rx="6" ry="4" fill="${lipColor}" stroke="${lipStroke}" stroke-width="2"/>
        <line x1="33" y1="40" x2="38" y2="40" stroke="#0284c7" stroke-width="2" stroke-linecap="round"/>
      ` : `
        <!-- Open Lips -->
        <ellipse cx="25" cy="32" rx="5" ry="4" fill="${lipColor}" stroke="${lipStroke}" stroke-width="1.5"/>
        <ellipse cx="25" cy="48" rx="5" ry="4" fill="${lipColor}" stroke="${lipStroke}" stroke-width="1.5"/>
      `)}

      <!-- Lower Incisor Teeth -->
      <rect x="${labiodental ? '28' : '33'}" y="44" width="5" height="8" rx="1.5" fill="${teethColor}" stroke="#64748b" stroke-width="1"/>

      <!-- Tongue Contours -->
      ${alveolar ? `
        <!-- Tongue tip raised to alveolar ridge -->
        <path d="M36 58 C42 56 42 36 38 35 C32 45 42 66 65 65" stroke="${tongueColor}" stroke-width="8" stroke-linecap="round" fill="none"/>
        <circle cx="38" cy="35" r="3" fill="#ea580c"/>
      ` : (velar ? `
        <!-- Tongue back raised to soft palate -->
        <path d="M35 56 Q50 56 68 44 C66 54 62 66 65 65" stroke="${tongueColor}" stroke-width="8" stroke-linecap="round" fill="none"/>
        <circle cx="68" cy="44" r="3.5" fill="#ea580c"/>
      ` : `
        <!-- Relaxed / Low Tongue -->
        <path d="M34 54 Q50 50 65 62" stroke="${tongueColor}" stroke-width="8" stroke-linecap="round" fill="none"/>
      `)}

      <!-- Airflow Indicator -->
      ${isNasal ? `
        <!-- Nasal airflow arrows -->
        <path d="M48 24 Q60 22 72 26" stroke="${airflowColor}" stroke-width="2.5" stroke-dasharray="3,2" fill="none" stroke-linecap="round"/>
        <polygon points="73,26 69,23 71,28" fill="${airflowColor}"/>
      ` : `
        <!-- Oral airflow hint -->
        <path d="M30 40 L18 40" stroke="${airflowColor}" stroke-width="2" stroke-linecap="round" stroke-dasharray="2,2"/>
      `}

      <!-- Vocal Cord Vibration Indicator at Larynx -->
      <g transform="translate(62, 70)">
        <circle cx="6" cy="4" r="5" fill="${voiceColor}" opacity="0.3"/>
        <circle cx="6" cy="4" r="3" fill="${voiceColor}"/>
        ${isVoiced ? `
          <path d="M-1 2 Q2 0 6 0 T13 2" stroke="#eab308" stroke-width="1.5" fill="none"/>
          <path d="M-1 6 Q2 8 6 8 T13 6" stroke="#eab308" stroke-width="1.5" fill="none"/>
        ` : ``}
      </g>
      <!-- Phoneme Stamp Badge -->
      <rect x="5" y="66" width="22" height="18" rx="4" fill="#00236f"/>
      <text x="16" y="79" font-family="monospace" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">${phoneme}</text>
    </svg>
  `;
}

/**
 * Built-in High-Clarity Vector Object Artwork SVG Fallback
 */
function getObjectSvg(code) {
  switch (code) {
    case "V01": // PEN
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#f0f9ff"/>
          <g transform="rotate(-30 80 55)">
            <rect x="68" y="22" width="14" height="48" rx="3" fill="#0284c7"/>
            <rect x="80" y="26" width="4" height="24" rx="2" fill="#fe932c"/>
            <rect x="70" y="70" width="10" height="16" rx="1" fill="#334155"/>
            <polygon points="70,86 80,86 75,98" fill="#e2e8f0"/>
            <polygon points="73,94 77,94 75,98" fill="#0284c7"/>
          </g>
          <path d="M96 76 Q115 65 125 78 T145 74" stroke="#0284c7" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <circle cx="146" cy="74" r="2.5" fill="#0284c7"/>
        </svg>`;
    
    case "V02": // PENCIL
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#fefce8"/>
          <g transform="rotate(-35 80 55)">
            <rect x="72" y="24" width="16" height="52" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
            <rect x="72" y="20" width="16" height="8" rx="2" fill="#f472b6"/>
            <rect x="72" y="27" width="16" height="4" fill="#94a3b8"/>
            <polygon points="72,76 88,76 80,94" fill="#fed7aa"/>
            <polygon points="78,88 82,88 80,94" fill="#1e293b"/>
          </g>
        </svg>`;

    case "V03": // BOOK
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#f8fafc"/>
          <rect x="42" y="26" width="76" height="58" rx="6" fill="#00236f"/>
          <rect x="46" y="30" width="72" height="50" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
          <rect x="44" y="26" width="8" height="58" rx="3" fill="#1e3a8a"/>
          <line x1="60" y1="42" x2="105" y2="42" stroke="#fe932c" stroke-width="3" stroke-linecap="round"/>
          <line x1="60" y1="52" x2="98" y2="52" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
          <line x1="60" y1="62" x2="90" y2="62" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
          <path d="M85 30 L85 55 L81 50 L77 55 L77 30" fill="#e11d48"/>
        </svg>`;

    case "V04": // BAG
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#eff6ff"/>
          <path d="M68 28 C68 18 92 18 92 28" stroke="#00236f" stroke-width="4" fill="none" stroke-linecap="round"/>
          <rect x="52" y="28" width="56" height="64" rx="14" fill="#1e3a8a"/>
          <rect x="60" y="58" width="40" height="28" rx="8" fill="#fe932c"/>
          <line x1="64" y1="64" x2="96" y2="64" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          <rect x="44" y="52" width="8" height="26" rx="4" fill="#38bdf8"/>
        </svg>`;

    case "V05": // MAP
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#f0fdf4"/>
          <rect x="35" y="25" width="90" height="60" rx="6" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
          <path d="M45 45 Q60 35 70 50 T95 40 Q105 60 115 50" fill="none" stroke="#22c55e" stroke-width="5" stroke-linecap="round"/>
          <path d="M50 65 Q65 60 80 70 T110 65" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
          <!-- Compass star -->
          <circle cx="110" cy="38" r="6" fill="#ffffff" stroke="#e11d48" stroke-width="1.5"/>
          <path d="M110 33 L110 43 M105 38 L115 38" stroke="#e11d48" stroke-width="1.5"/>
        </svg>`;

    case "V06": // MARKER
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#faf5ff"/>
          <g transform="rotate(-20 80 55)">
            <rect x="55" y="32" width="50" height="18" rx="3" fill="#ffffff" stroke="#9333ea" stroke-width="2"/>
            <rect x="105" y="30" width="14" height="22" rx="3" fill="#9333ea"/>
            <polygon points="55,36 45,41 55,46" fill="#9333ea"/>
            <rect x="65" y="37" width="28" height="8" rx="2" fill="#e9d5ff"/>
          </g>
        </svg>`;

    case "V07": // FAN
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#f0fdfa"/>
          <!-- Stand & Base -->
          <rect x="76" y="58" width="8" height="26" rx="2" fill="#64748b"/>
          <ellipse cx="80" cy="86" rx="24" ry="6" fill="#334155"/>
          <!-- Cage & Blades -->
          <circle cx="80" cy="42" r="26" fill="#ffffff" stroke="#0d9488" stroke-width="3"/>
          <circle cx="80" cy="42" r="5" fill="#fe932c"/>
          <ellipse cx="80" cy="27" rx="6" ry="12" fill="#14b8a6"/>
          <ellipse cx="68" cy="49" rx="12" ry="6" fill="#14b8a6"/>
          <ellipse cx="92" cy="49" rx="12" ry="6" fill="#14b8a6"/>
        </svg>`;

    case "V08": // FOLDER
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#fffbeb"/>
          <path d="M40 32 L65 32 L72 38 L120 38 L120 82 L40 82 Z" fill="#f59e0b"/>
          <rect x="46" y="36" width="68" height="42" rx="3" fill="#ffffff"/>
          <path d="M40 44 L120 44 L114 82 L46 82 Z" fill="#fbbf24"/>
        </svg>`;

    case "V09": // VASE
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#fdf2f8"/>
          <!-- Flowers & Stems -->
          <line x1="80" y1="50" x2="68" y2="28" stroke="#16a34a" stroke-width="2.5"/>
          <line x1="80" y1="50" x2="80" y2="24" stroke="#16a34a" stroke-width="2.5"/>
          <line x1="80" y1="50" x2="92" y2="28" stroke="#16a34a" stroke-width="2.5"/>
          <circle cx="68" cy="26" r="6" fill="#ec4899"/>
          <circle cx="80" cy="22" r="7" fill="#fe932c"/>
          <circle cx="92" cy="26" r="6" fill="#8b5cf6"/>
          <!-- Vase Body -->
          <path d="M72 48 L88 48 Q94 65 92 78 Q90 88 80 88 Q70 88 68 78 Q66 65 72 48 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
        </svg>`;

    case "V10": // VEST
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#f1f5f9"/>
          <!-- Hanger -->
          <path d="M80 20 C76 16 84 14 84 18 L80 24 L58 32 L102 32 Z" fill="none" stroke="#64748b" stroke-width="2"/>
          <!-- Vest garment -->
          <path d="M60 32 L70 32 L80 50 L90 32 L100 32 L104 84 L56 84 Z" fill="#00236f"/>
          <!-- V-neck cut -->
          <polygon points="70,32 80,52 90,32" fill="#f1f5f9"/>
          <circle cx="80" cy="58" r="2" fill="#ffffff"/>
          <circle cx="80" cy="68" r="2" fill="#ffffff"/>
          <circle cx="80" cy="78" r="2" fill="#ffffff"/>
        </svg>`;

    case "V11": // TABLE
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#fefce8"/>
          <!-- Table Top Perspective -->
          <polygon points="35,46 125,46 115,36 45,36" fill="#d97706"/>
          <rect x="35" y="46" width="90" height="6" rx="1" fill="#b45309"/>
          <!-- 4 Legs -->
          <rect x="42" y="52" width="6" height="34" fill="#92400e"/>
          <rect x="52" y="46" width="5" height="34" fill="#78350f"/>
          <rect x="103" y="46" width="5" height="34" fill="#78350f"/>
          <rect x="112" y="52" width="6" height="34" fill="#92400e"/>
        </svg>`;

    case "V12": // TAPE
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#f8fafc"/>
          <!-- Spool Ring -->
          <circle cx="75" cy="55" r="28" fill="#e0f2fe" stroke="#38bdf8" stroke-width="3"/>
          <circle cx="75" cy="55" r="14" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
          <!-- Tape Dispenser / Strip -->
          <path d="M75 27 L115 27 L122 36 L100 36" fill="#38bdf8" opacity="0.8"/>
        </svg>`;

    case "V13": // DESK
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#f0fdf4"/>
          <!-- Slanted Desktop Surface -->
          <polygon points="40,48 120,48 112,34 48,34" fill="#15803d"/>
          <!-- Book Compartment -->
          <rect x="45" y="48" width="70" height="12" fill="#166534"/>
          <!-- Metal Legs -->
          <rect x="48" y="60" width="4" height="26" fill="#334155"/>
          <rect x="108" y="60" width="4" height="26" fill="#334155"/>
          <line x1="44" y1="86" x2="56" y2="86" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
          <line x1="104" y1="86" x2="116" y2="86" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
        </svg>`;

    case "V14": // DOOR
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#fff7ed"/>
          <!-- Frame & Door -->
          <rect x="55" y="16" width="50" height="78" rx="2" fill="#78350f"/>
          <rect x="58" y="19" width="44" height="72" rx="1" fill="#ea580c"/>
          <!-- Window Pane -->
          <rect x="66" y="26" width="28" height="22" rx="2" fill="#e0f2fe" stroke="#ffffff" stroke-width="1.5"/>
          <!-- Handle -->
          <circle cx="65" cy="58" r="3.5" fill="#facc15"/>
        </svg>`;

    case "V15": // NOTEBOOK
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#fdf4ff"/>
          <rect x="45" y="24" width="70" height="62" rx="4" fill="#c084fc"/>
          <rect x="52" y="24" width="63" height="62" rx="2" fill="#ffffff"/>
          <line x1="60" y1="36" x2="105" y2="36" stroke="#cbd5e1" stroke-width="1.5"/>
          <line x1="60" y1="46" x2="105" y2="46" stroke="#cbd5e1" stroke-width="1.5"/>
          <line x1="60" y1="56" x2="105" y2="56" stroke="#cbd5e1" stroke-width="1.5"/>
          <line x1="60" y1="66" x2="95" y2="66" stroke="#cbd5e1" stroke-width="1.5"/>
          <!-- Spiral binding rings -->
          <circle cx="50" cy="30" r="2" fill="#334155"/>
          <circle cx="50" cy="40" r="2" fill="#334155"/>
          <circle cx="50" cy="50" r="2" fill="#334155"/>
          <circle cx="50" cy="60" r="2" fill="#334155"/>
          <circle cx="50" cy="70" r="2" fill="#334155"/>
        </svg>`;

    case "V16": // NAME TAG
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#eff6ff"/>
          <!-- Lanyard Ribbon -->
          <path d="M80 12 L72 32 M80 12 L88 32" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
          <rect x="76" y="30" width="8" height="6" rx="1" fill="#94a3b8"/>
          <!-- ID Card Pocket -->
          <rect x="50" y="34" width="60" height="48" rx="4" fill="#ffffff" stroke="#60a5fa" stroke-width="2"/>
          <rect x="56" y="42" width="16" height="16" rx="2" fill="#cbd5e1"/>
          <line x1="78" y1="46" x2="102" y2="46" stroke="#1e3a8a" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="78" y1="54" x2="98" y2="54" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="56" y1="66" x2="102" y2="66" stroke="#fe932c" stroke-width="2" stroke-linecap="round"/>
        </svg>`;

    case "V17": // CUP
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#fef2f2"/>
          <!-- Steam lines -->
          <path d="M72 26 Q68 20 72 16" stroke="#94a3b8" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M82 26 Q86 20 82 16" stroke="#94a3b8" stroke-width="2" fill="none" stroke-linecap="round"/>
          <!-- Cup Mug Body & Handle -->
          <path d="M96 42 C108 42 108 64 96 64" stroke="#e11d48" stroke-width="4.5" fill="none"/>
          <rect x="58" y="34" width="40" height="44" rx="6" fill="#e11d48"/>
          <ellipse cx="78" cy="34" rx="20" ry="4" fill="#ffffff" stroke="#e11d48" stroke-width="1.5"/>
        </svg>`;

    case "V18": // KEY
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#fefce8"/>
          <g transform="rotate(-30 80 55)">
            <circle cx="50" cy="55" r="14" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
            <circle cx="50" cy="55" r="6" fill="#fefce8"/>
            <rect x="62" y="52" width="48" height="6" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
            <!-- Teeth -->
            <rect x="94" y="58" width="4" height="8" fill="#f59e0b"/>
            <rect x="104" y="58" width="4" height="12" fill="#f59e0b"/>
          </g>
        </svg>`;

    case "V19": // GATE
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#f1f5f9"/>
          <!-- Pillars -->
          <rect x="36" y="24" width="12" height="66" rx="2" fill="#78350f"/>
          <rect x="112" y="24" width="12" height="66" rx="2" fill="#78350f"/>
          <!-- Iron Bars -->
          <g stroke="#334155" stroke-width="2.5">
            <line x1="48" y1="36" x2="112" y2="36"/>
            <line x1="48" y1="80" x2="112" y2="80"/>
            <line x1="56" y1="28" x2="56" y2="84"/>
            <line x1="68" y1="28" x2="68" y2="84"/>
            <line x1="80" y1="24" x2="80" y2="84"/>
            <line x1="92" y1="28" x2="92" y2="84"/>
            <line x1="104" y1="28" x2="104" y2="84"/>
          </g>
        </svg>`;

    case "V20": // GLOBE
      return `
        <svg viewBox="0 0 160 110" class="w-full h-full max-h-[95px] object-contain select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="110" rx="14" fill="#f0fdf4"/>
          <!-- Stand & Arc -->
          <ellipse cx="80" cy="88" rx="20" ry="5" fill="#475569"/>
          <rect x="78" y="74" width="4" height="15" fill="#64748b"/>
          <path d="M52 48 C52 74 96 78 104 56" stroke="#94a3b8" stroke-width="3" fill="none"/>
          <!-- Sphere & Continents -->
          <circle cx="80" cy="46" r="24" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
          <path d="M70 38 Q76 30 86 36 Q84 48 76 52 Z" fill="#22c55e"/>
          <path d="M88 48 Q94 44 98 52 Q92 60 84 58 Z" fill="#22c55e"/>
        </svg>`;

    default:
      return `<svg viewBox="0 0 160 110" class="w-full h-full object-contain"><circle cx="80" cy="55" r="25" fill="#3b82f6"/></svg>`;
  }
}

// ─── 3. APPLICATION STATE & STACK NAVIGATION ───
const appState = {
  activeScreen: 'dashboard',
  history: ['dashboard'],
  currentTreatment: 'bilabial', // 'bilabial' | 'labiodental' | 'alveolar' | 'velar'
  currentWordIndex: 0,
  voiceGender: 'female',
  playbackSpeed: 1.0, // Strictly 1.0 or 0.5
  isVideoPlaying: false,
  isInstructionAudioMuted: false
};

// Unified Media Runtime Elements
const pronunVideo = document.getElementById('pronunVideo');
const fallbackAudio = document.getElementById('fallbackAudio');

// Screen DOM lookup map
const screenElements = {
  'dashboard': document.getElementById('screen-dashboard'),
  'instructions': document.getElementById('screen-instructions'),
  'categories': document.getElementById('screen-categories'),
  'learning': document.getElementById('screen-learning')
};

/**
 * Filter vocabulary data by active articulation treatment
 */
function getCurrentTreatmentWords() {
  return vocabularyData.filter(item => item.treatment === appState.currentTreatment);
}

/**
 * Navigate forward with history stack tracking
 */
function navigateTo(screenId) {
  if (appState.activeScreen === screenId) return;
  stopAllMedia();

  if (appState.history[appState.history.length - 1] !== screenId) {
    appState.history.push(screenId);
  }
  appState.activeScreen = screenId;
  renderView();
}

/**
 * Navigate backwards using strict history stack popping
 */
function navigateBack() {
  if (appState.history.length > 1) {
    stopAllMedia();
    appState.history.pop();
    appState.activeScreen = appState.history[appState.history.length - 1];
    renderView();
  } else {
    // Top of stack fallback: return to dashboard
    stopAllMedia();
    appState.activeScreen = 'dashboard';
    appState.history = ['dashboard'];
    renderView();
  }
}

/**
 * Render active view based on appState
 */
function renderView() {
  Object.keys(screenElements).forEach(id => {
    const el = screenElements[id];
    if (!el) return;
    if (id === appState.activeScreen) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  if (appState.activeScreen === 'learning') {
    renderLearningWord();
  }
}

// ─── 4. SOUNDWAVE WAVEFORM & WEB AUDIO RESONANCE ───
let audioWaveInterval = null;
const waveformBarsContainer = document.getElementById('waveformBars');
const waveformBars = waveformBarsContainer ? waveformBarsContainer.children : null;
let webAudioCtx = null;

function startWaveformAnimation() {
  if (!waveformBars) return;
  if (audioWaveInterval) clearInterval(audioWaveInterval);

  const heights = ['h-1', 'h-2', 'h-3', 'h-4', 'h-5', 'h-6'];
  const barsArray = Array.from(waveformBars);

  audioWaveInterval = setInterval(() => {
    barsArray.forEach((bar) => {
      heights.forEach(h => bar.classList.remove(h));
      const randomH = heights[Math.floor(Math.random() * heights.length)];
      bar.classList.add(randomH);

      if (Math.random() > 0.6) {
        bar.classList.add('active');
        bar.classList.remove('resonance');
      } else if (Math.random() > 0.65) {
        bar.classList.add('resonance');
        bar.classList.remove('active');
      } else {
        bar.classList.remove('active', 'resonance');
      }
    });
  }, 90);
}

function stopWaveformAnimation() {
  if (audioWaveInterval) {
    clearInterval(audioWaveInterval);
    audioWaveInterval = null;
  }
  if (!waveformBars) return;
  const heights = ['h-1', 'h-2', 'h-3', 'h-4', 'h-5', 'h-6'];
  const defaultHeights = ['h-2', 'h-3', 'h-5', 'h-6', 'h-4', 'h-5', 'h-3', 'h-6', 'h-4', 'h-5', 'h-6', 'h-3', 'h-2', 'h-5', 'h-4', 'h-2'];

  Array.from(waveformBars).forEach((bar, idx) => {
    heights.forEach(h => bar.classList.remove(h));
    bar.classList.add(defaultHeights[idx] || 'h-3');
    bar.classList.remove('active', 'resonance');
    if (idx % 4 === 2) bar.classList.add('active');
    if (idx % 5 === 4) bar.classList.add('resonance');
  });
}

function playResonanceTone(freq = 220, durationSec = 1.2) {
  try {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtxClass) return;
    if (!webAudioCtx) {
      webAudioCtx = new AudioCtxClass();
    }
    if (webAudioCtx.state === 'suspended') {
      webAudioCtx.resume();
    }

    const osc = webAudioCtx.createOscillator();
    const gain = webAudioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, webAudioCtx.currentTime);

    gain.gain.setValueAtTime(0.001, webAudioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, webAudioCtx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, webAudioCtx.currentTime + durationSec);

    osc.connect(gain);
    gain.connect(webAudioCtx.destination);

    osc.start();
    osc.stop(webAudioCtx.currentTime + durationSec);
  } catch (e) {}
}

function speakText(text, lang = 'en-US', gender = appState.voiceGender, rate = appState.playbackSpeed, onEnd = null) {
  if (!('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;
  utterance.pitch = gender === 'female' ? 1.15 : 0.85;

  const voices = window.speechSynthesis.getVoices();
  const langVoices = voices.filter(v => v.lang.startsWith(lang.split('-')[0]));
  if (langVoices.length > 0) {
    const pattern = gender === 'female' ? /female|woman|zira|samantha|victoria/i : /male|man|david|mark|guy/i;
    let chosen = langVoices.find(v => pattern.test(v.name)) || langVoices[0];
    utterance.voice = chosen;
  }

  utterance.onend = () => { if (onEnd) onEnd(); };
  utterance.onerror = () => { if (onEnd) onEnd(); };
  window.speechSynthesis.speak(utterance);
}

// ─── 5. UNIFIED VIDEO PLAYBACK & LIP-READING SIMULATION ───
let videoTimecodeTimer = null;
const btnPlayVideo = document.getElementById('btn-play-video');
const playIcon = document.getElementById('play-icon');
const playLabel = document.getElementById('play-label');
const btnReplayVideo = document.getElementById('btn-replay-video');
const videoLipActor = document.getElementById('video-lip-actor');
const videoTimecode = document.getElementById('video-timecode');
const centerPlayIcon = document.getElementById('video-center-play-icon');
const svgTongue = document.getElementById('svg-tongue');
const svgLipsShape = document.getElementById('svg-lips-shape');
const svgTeethTop = document.getElementById('svg-teeth-top');
const svgTeethBottom = document.getElementById('svg-teeth-bottom');

// Speed Toggle Controls (Strictly 0.5x and 1.0x)
const btnSpeedSlow = document.getElementById('btn-speed-slow');
const btnSpeedNormal = document.getElementById('btn-speed-normal');

function applyLipShape(shape) {
  if (!svgLipsShape || !svgTongue) return;
  svgLipsShape.setAttribute('rx', '42');
  svgLipsShape.setAttribute('ry', '22');
  svgTongue.setAttribute('cx', '60');
  svgTongue.setAttribute('cy', '35');
  svgTongue.setAttribute('rx', '16');
  svgTongue.setAttribute('ry', '8');
  svgTongue.style.opacity = '1';

  switch (shape) {
    case 'bilabial':
      svgLipsShape.setAttribute('rx', '44');
      svgLipsShape.setAttribute('ry', '12');
      svgTongue.style.opacity = '0';
      break;
    case 'labiodental':
      svgLipsShape.setAttribute('rx', '40');
      svgLipsShape.setAttribute('ry', '18');
      svgTeethTop?.setAttribute('y', '25');
      break;
    case 'alveolar':
      svgLipsShape.setAttribute('rx', '46');
      svgLipsShape.setAttribute('ry', '20');
      svgTongue.setAttribute('cy', '31');
      break;
    case 'velar':
      svgLipsShape.setAttribute('rx', '44');
      svgLipsShape.setAttribute('ry', '24');
      svgTongue.setAttribute('cy', '42');
      break;
    default:
      break;
  }
}

function setPlaybackSpeed(speed) {
  appState.playbackSpeed = speed === 0.5 ? 0.5 : 1.0;
  if (pronunVideo) pronunVideo.playbackRate = appState.playbackSpeed;
  if (fallbackAudio) fallbackAudio.playbackRate = appState.playbackSpeed;

  if (btnSpeedSlow && btnSpeedNormal) {
    if (appState.playbackSpeed === 0.5) {
      btnSpeedSlow.className = "px-2 py-1 rounded-md bg-surface-container-lowest text-primary font-bold text-[10px] shadow-xs transition-all";
      btnSpeedNormal.className = "px-2 py-1 rounded-md text-[10px] font-bold text-on-surface-variant hover:text-on-surface transition-all";
    } else {
      btnSpeedNormal.className = "px-2 py-1 rounded-md bg-surface-container-lowest text-primary font-bold text-[10px] shadow-xs transition-all";
      btnSpeedSlow.className = "px-2 py-1 rounded-md text-[10px] font-bold text-on-surface-variant hover:text-on-surface transition-all";
    }
  }
}

function updatePlayButtons(isPlaying) {
  if (playIcon) playIcon.innerText = isPlaying ? 'pause' : 'play_arrow';
  if (playLabel) playLabel.innerText = isPlaying ? 'Jeda' : 'Putar';
  if (centerPlayIcon) centerPlayIcon.innerText = isPlaying ? 'pause' : 'play_arrow';

  const btnAudioTrigger = document.getElementById('btn-audio-trigger');
  const resonanceBadge = document.getElementById('resonance-badge');
  const audioPanelCard = document.getElementById('audio-panel-card');

  if (isPlaying) {
    btnAudioTrigger?.classList.add('audio-playing-glow');
    resonanceBadge?.classList.add('vibrate-indicator', 'resonance-active');
    audioPanelCard?.classList.add('border-primary');
  } else {
    btnAudioTrigger?.classList.remove('audio-playing-glow');
    resonanceBadge?.classList.remove('vibrate-indicator', 'resonance-active');
    audioPanelCard?.classList.remove('border-primary');
  }
}

function stopVideoPlaybackUI() {
  if (videoTimecodeTimer) {
    clearInterval(videoTimecodeTimer);
    videoTimecodeTimer = null;
  }
  appState.isVideoPlaying = false;
  updatePlayButtons(false);
  videoLipActor?.classList.remove('lip-speaking-pulse');
  applyLipShape('neutral');
  stopWaveformAnimation();
}

/**
 * Unified Pronunciation Playback Method:
 * 1. Try Video element
 * 2. Fallback to Local MP3
 * 3. Fallback to SpeechSynthesis + Web Audio
 */
function playVideoPronunciation({ startTime = 0, speed = appState.playbackSpeed, slowMotion = false } = {}) {
  const words = getCurrentTreatmentWords();
  const currentWord = words[appState.currentWordIndex];
  if (!currentWord) return;

  const targetSpeed = slowMotion ? 0.5 : speed;
  setPlaybackSpeed(targetSpeed);

  // Trigger Acoustic Vibration Tone
  playResonanceTone(currentWord.frequency, 1.4 / targetSpeed);

  if (pronunVideo) {
    try {
      pronunVideo.playbackRate = targetSpeed;
      pronunVideo.currentTime = startTime;
      if (!pronunVideo.src || !pronunVideo.src.includes(currentWord.videoSrc)) {
        pronunVideo.src = currentWord.videoSrc;
      }
    } catch (e) {}

    const videoPlayPromise = pronunVideo.play();
    if (videoPlayPromise !== undefined) {
      videoPlayPromise
        .then(() => {
          onMediaPlayStarted(currentWord, targetSpeed);
        })
        .catch(() => {
          // Video unavailable: try local MP3 audio fallback
          playAudioFallback(currentWord, targetSpeed);
        });
    } else {
      playAudioFallback(currentWord, targetSpeed);
    }
  } else {
    playAudioFallback(currentWord, targetSpeed);
  }
}

function playAudioFallback(currentWord, targetSpeed) {
  if (fallbackAudio) {
    try {
      fallbackAudio.currentTime = 0;
      fallbackAudio.playbackRate = targetSpeed;
      fallbackAudio.src = currentWord.audioSrc;
      const audioPromise = fallbackAudio.play();
      if (audioPromise !== undefined) {
        audioPromise
          .then(() => {
            onMediaPlayStarted(currentWord, targetSpeed);
          })
          .catch(() => {
            // Both video and local audio failed: run Web Speech simulation
            runSyntheticSimulation(currentWord, targetSpeed);
          });
      } else {
        runSyntheticSimulation(currentWord, targetSpeed);
      }
    } catch (e) {
      runSyntheticSimulation(currentWord, targetSpeed);
    }
  } else {
    runSyntheticSimulation(currentWord, targetSpeed);
  }
}

function onMediaPlayStarted(word, speed) {
  appState.isVideoPlaying = true;
  updatePlayButtons(true);
  videoLipActor?.classList.add('lip-speaking-pulse');
  applyLipShape(word.shape || 'bilabial');
  startWaveformAnimation();
}

function runSyntheticSimulation(currentWord, speed) {
  stopAllMedia();
  appState.isVideoPlaying = true;
  updatePlayButtons(true);
  videoLipActor?.classList.add('lip-speaking-pulse');
  applyLipShape(currentWord.shape || 'bilabial');
  startWaveformAnimation();

  const totalSec = Math.max(2, Math.round(3 / speed));
  let currentSec = 0;
  if (videoTimecode) videoTimecode.innerText = `00:00 / 00:0${totalSec}`;

  const intervalMs = 1000 / speed;
  videoTimecodeTimer = setInterval(() => {
    currentSec++;
    if (videoTimecode) {
      videoTimecode.innerText = `00:0${Math.min(currentSec, totalSec)} / 00:0${totalSec}`;
    }
    if (currentSec >= totalSec) {
      stopVideoPlaybackUI();
    }
  }, intervalMs);

  speakText(currentWord.word, 'en-US', appState.voiceGender, speed, () => {
    if (currentSec >= totalSec - 1) {
      stopVideoPlaybackUI();
    }
  });
}

// Attach Unified Video and Audio Event Listeners
if (pronunVideo) {
  pronunVideo.addEventListener('play', () => {
    const words = getCurrentTreatmentWords();
    const current = words[appState.currentWordIndex];
    if (current) onMediaPlayStarted(current, pronunVideo.playbackRate);
  });
  pronunVideo.addEventListener('pause', () => {
    if (!window.speechSynthesis?.speaking && !videoTimecodeTimer && (!fallbackAudio || fallbackAudio.paused)) {
      stopVideoPlaybackUI();
    }
  });
  pronunVideo.addEventListener('ended', stopVideoPlaybackUI);
  pronunVideo.addEventListener('timeupdate', () => {
    if (videoTimecode && pronunVideo.duration) {
      const cur = Math.floor(pronunVideo.currentTime);
      const dur = Math.floor(pronunVideo.duration) || 3;
      videoTimecode.innerText = `00:0${cur} / 00:0${dur}`;
    }
  });
}

if (fallbackAudio) {
  fallbackAudio.addEventListener('ended', stopVideoPlaybackUI);
  fallbackAudio.addEventListener('pause', () => {
    if (!pronunVideo || pronunVideo.paused) stopVideoPlaybackUI();
  });
}

// ─── 6. FIVE (5) CORE CLICKABLE INTERACTIVE MODULES ───

function triggerCardPulse(el) {
  if (!el) return;
  el.classList.remove('card-pulse-active');
  void el.offsetWidth;
  el.classList.add('card-pulse-active');
  setTimeout(() => el.classList.remove('card-pulse-active'), 600);
}

// 1. [VIDEO PLAYER CONTAINER]: Click/tap toggles Play/Pause
const interactiveVideoCard = document.getElementById('interactive-video-card');
interactiveVideoCard?.addEventListener('click', () => {
  if (appState.isVideoPlaying) {
    if (pronunVideo && !pronunVideo.paused) {
      try { pronunVideo.pause(); } catch (e) {}
    }
    if (fallbackAudio && !fallbackAudio.paused) {
      try { fallbackAudio.pause(); } catch (e) {}
    }
    stopAllMedia();
  } else {
    playVideoPronunciation({ startTime: pronunVideo ? pronunVideo.currentTime : 0 });
  }
});
interactiveVideoCard?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    interactiveVideoCard.click();
  }
});

// 2. [VOCABULARY WORD CARD]: Click replays video from 0:00
const interactiveWordCard = document.getElementById('interactive-word-card');
interactiveWordCard?.addEventListener('click', () => {
  triggerCardPulse(interactiveWordCard);
  playVideoPronunciation({ startTime: 0 });
});
interactiveWordCard?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    interactiveWordCard.click();
  }
});

// 3. [INDONESIAN TRANSLATION CARD]: Click highlights & plays pronunciation
const interactiveTranslationCard = document.getElementById('interactive-translation-card');
interactiveTranslationCard?.addEventListener('click', () => {
  triggerCardPulse(interactiveTranslationCard);
  playVideoPronunciation({ startTime: 0 });
});
interactiveTranslationCard?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    interactiveTranslationCard.click();
  }
});

// 4. [DUAL PHONETIC & ARTICULATION CARD]: Click plays 0.5x slow motion & pulses waveform
const interactivePhoneticsCard = document.getElementById('interactive-phonetics-card');
interactivePhoneticsCard?.addEventListener('click', () => {
  triggerCardPulse(interactivePhoneticsCard);
  playVideoPronunciation({ startTime: 0, slowMotion: true });
});
interactivePhoneticsCard?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    interactivePhoneticsCard.click();
  }
});

// 5. [OBJECT ILLUSTRATION CARD]: Click triggers bounce animation & plays 0:00
const interactiveIllustrationCard = document.getElementById('interactive-illustration-card');
const objectContainer = document.getElementById('object-container');
interactiveIllustrationCard?.addEventListener('click', () => {
  if (objectContainer) {
    objectContainer.classList.remove('animate-bounce-once');
    void objectContainer.offsetWidth;
    objectContainer.classList.add('animate-bounce-once');
  }
  playVideoPronunciation({ startTime: 0 });
});
interactiveIllustrationCard?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    interactiveIllustrationCard.click();
  }
});

// Inner buttons in video control bar
btnPlayVideo?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (appState.isVideoPlaying) {
    stopAllMedia();
  } else {
    playVideoPronunciation({ startTime: pronunVideo ? pronunVideo.currentTime : 0 });
  }
});

btnReplayVideo?.addEventListener('click', (e) => {
  e.stopPropagation();
  stopAllMedia();
  if (videoTimecode) videoTimecode.innerText = '00:00 / 00:03';
  playVideoPronunciation({ startTime: 0 });
});

btnSpeedSlow?.addEventListener('click', (e) => {
  e.stopPropagation();
  setPlaybackSpeed(0.5);
  playVideoPronunciation({ startTime: 0, speed: 0.5 });
});

btnSpeedNormal?.addEventListener('click', (e) => {
  e.stopPropagation();
  setPlaybackSpeed(1.0);
  playVideoPronunciation({ startTime: 0, speed: 1.0 });
});

document.getElementById('btn-audio-trigger')?.addEventListener('click', (e) => {
  e.stopPropagation();
  playVideoPronunciation({ startTime: 0, slowMotion: true });
});

// ─── 7. SCREEN 4: WORKSPACE DATA RENDERING ENGINE ───
const wordDisplay = document.getElementById('word-display');
const wordPhonemeBadge = document.getElementById('word-phoneme-badge');
const wordTreatmentLabel = document.getElementById('word-treatment-label');
const wordCodeBadge = document.getElementById('word-code-badge');
const wordTranslation = document.getElementById('word-translation');
const wordTranslationDesc = document.getElementById('word-translation-desc');

const wordIpa = document.getElementById('word-ipa');
const wordPhoneticGuide = document.getElementById('word-phonetic-guide');
const vocalCordBadge = document.getElementById('vocal-cord-badge');
const vocalCordText = document.getElementById('vocal-cord-text');
const articulatorDesc = document.getElementById('articulator-desc');
const artDiagramImg = document.getElementById('art-diagram-img');
const artDiagramSvgFallback = document.getElementById('art-diagram-svg-fallback');

const objectImage = document.getElementById('object-image');
const objectSvgFallback = document.getElementById('object-svg-fallback');
const objectCaption = document.getElementById('object-caption');
const objectDesc = document.getElementById('object-desc');

const videoCuePill = document.getElementById('video-cue-pill');
const resonanceText = document.getElementById('resonance-text');
const treatmentBreadcrumb = document.getElementById('learning-treatment-breadcrumb');
const stepBadge = document.getElementById('learning-step-badge');
const stepDotsContainer = document.getElementById('step-dots-container');
const btnPrevWord = document.getElementById('btn-prev-word');
const btnNextWord = document.getElementById('btn-next-word');
const btnNextWordLabel = document.getElementById('btn-next-word-label');
const btnNextWordIcon = document.getElementById('btn-next-word-icon');

function renderLearningWord() {
  const words = getCurrentTreatmentWords();
  const current = words[appState.currentWordIndex];
  if (!current) return;

  // Header & Breadcrumbs
  if (treatmentBreadcrumb) treatmentBreadcrumb.innerText = `${current.treatment.toUpperCase()} •`;
  if (stepBadge) stepBadge.innerText = `${current.code} • ${current.word}`;

  // Word Module
  if (wordDisplay) wordDisplay.innerText = current.word;
  if (wordPhonemeBadge) wordPhonemeBadge.innerText = current.phoneme;
  if (wordTreatmentLabel) wordTreatmentLabel.innerText = current.treatmentTitle;
  if (wordCodeBadge) wordCodeBadge.innerText = current.code;

  // Translation Module
  if (wordTranslation) wordTranslation.innerText = current.translation;
  if (wordTranslationDesc) wordTranslationDesc.innerText = current.objectDesc;

  // Dual Phonetic & Articulator Module
  if (wordIpa) {
    // Highlight target phoneme inside IPA
    const cleanPhoneme = current.phoneme.replace(/\//g, '');
    const highlightedIpa = current.ipa.replace(
      cleanPhoneme,
      `<span class="text-secondary font-black bg-secondary-fixed px-1 rounded">${cleanPhoneme}</span>`
    );
    wordIpa.innerHTML = highlightedIpa;
  }
  if (wordPhoneticGuide) wordPhoneticGuide.innerText = `/${current.guide}/`;
  if (vocalCordText) vocalCordText.innerText = current.voiceLabel;
  if (vocalCordBadge) {
    if (current.voiced) {
      vocalCordBadge.className = "inline-flex items-center justify-center gap-1 text-[10px] font-bold mt-0.5 truncate text-tertiary-container";
    } else {
      vocalCordBadge.className = "inline-flex items-center justify-center gap-1 text-[10px] font-bold mt-0.5 truncate text-on-surface-variant";
    }
  }
  if (articulatorDesc) articulatorDesc.innerText = current.articulatorDesc;

  // Articulator Diagram with Automatic SVG Fallback
  if (artDiagramImg && artDiagramSvgFallback) {
    artDiagramImg.style.display = 'block';
    artDiagramSvgFallback.classList.add('hidden');
    artDiagramSvgFallback.innerHTML = '';
    artDiagramImg.src = current.artImage;
    artDiagramImg.onerror = function() {
      artDiagramImg.style.display = 'none';
      artDiagramSvgFallback.innerHTML = getArticulatorSvg(current.phoneme, current.voiced);
      artDiagramSvgFallback.classList.remove('hidden');
    };
  }

  // Object Illustration with Automatic SVG Fallback
  if (objectImage && objectSvgFallback) {
    objectImage.style.display = 'block';
    objectSvgFallback.classList.add('hidden');
    objectSvgFallback.innerHTML = '';
    objectImage.src = current.objImage;
    objectImage.onerror = function() {
      objectImage.style.display = 'none';
      objectSvgFallback.innerHTML = getObjectSvg(current.code);
      objectSvgFallback.classList.remove('hidden');
    };
  }
  if (objectCaption) objectCaption.innerText = `${current.word} • ${current.translation}`;
  if (objectDesc) objectDesc.innerText = current.objectDesc;

  // Video Cue Pill
  if (videoCuePill) {
    const cueMap = {
      'bilabial': 'Gerak Bibir Rapat',
      'labiodental': 'Gigi Atas & Bibir Bawah',
      'alveolar': 'Ujung Lidah di Gusi Atas',
      'velar': 'Pangkal Lidah di Langit Lunak'
    };
    videoCuePill.innerText = `${cueMap[current.treatment] || 'Fokus Artikulasi'} ${current.phoneme}`;
  }
  if (resonanceText) {
    resonanceText.innerText = current.voiced ? "Pita Suara: Bergetar" : "Pita Suara: Hening";
  }

  applyLipShape(current.shape);
  if (videoTimecode) videoTimecode.innerText = '00:00 / 00:03';
  setPlaybackSpeed(appState.playbackSpeed);

  // Update Navigation Controls
  if (btnPrevWord) btnPrevWord.disabled = appState.currentWordIndex === 0;
  const isLastWord = appState.currentWordIndex >= words.length - 1;
  if (btnNextWordLabel) btnNextWordLabel.innerText = isLastWord ? 'Selesai' : 'Selanjutnya';
  if (btnNextWordIcon) btnNextWordIcon.innerText = isLastWord ? 'check_circle' : 'chevron_right';

  // Step Progress Dots
  if (stepDotsContainer) {
    stepDotsContainer.innerHTML = '';
    words.forEach((_, idx) => {
      const dot = document.createElement('span');
      if (idx === appState.currentWordIndex) {
        dot.className = 'w-4 h-2 rounded-full bg-primary transition-all';
      } else {
        dot.className = 'w-1.5 h-1.5 rounded-full bg-outline-variant';
      }
      stepDotsContainer.appendChild(dot);
    });
  }
}

btnPrevWord?.addEventListener('click', () => {
  if (appState.currentWordIndex > 0) {
    stopAllMedia();
    appState.currentWordIndex--;
    renderLearningWord();
  }
});

btnNextWord?.addEventListener('click', () => {
  const words = getCurrentTreatmentWords();
  stopAllMedia();
  if (appState.currentWordIndex < words.length - 1) {
    appState.currentWordIndex++;
    renderLearningWord();
  } else {
    // Finished treatment category: return to categories view
    navigateTo('categories');
  }
});

// Voice Gender Selection
const btnVoiceFemale = document.getElementById('btn-voice-female');
const btnVoiceMale = document.getElementById('btn-voice-male');

btnVoiceFemale?.addEventListener('click', () => {
  appState.voiceGender = 'female';
  btnVoiceFemale.className = "flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container text-white text-[11px] font-bold shadow-xs transition-all";
  btnVoiceMale.className = "flex items-center gap-1 px-2.5 py-1 rounded-full text-on-surface-variant text-[11px] font-bold hover:text-on-surface transition-all";
  playVideoPronunciation({ startTime: 0 });
});

btnVoiceMale?.addEventListener('click', () => {
  appState.voiceGender = 'male';
  btnVoiceMale.className = "flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container text-white text-[11px] font-bold shadow-xs transition-all";
  btnVoiceFemale.className = "flex items-center gap-1 px-2.5 py-1 rounded-full text-on-surface-variant text-[11px] font-bold hover:text-on-surface transition-all";
  playVideoPronunciation({ startTime: 0 });
});

// ─── 8. SCREENS 1, 2, 3 EVENT LISTENERS & NAVIGATION ───

// Safe Universal Back Button Handlers
document.querySelectorAll('.btn-back-action').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateBack();
  });
});

// Screen 1: Dashboard
document.getElementById('btn-start-app')?.addEventListener('click', () => {
  navigateTo('instructions');
});

document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('click', function() {
    const msg = this.dataset.msg;
    speakText(msg, 'id-ID', 'female', 1.0);
    this.classList.add('bg-surface-container-highest');
    setTimeout(() => this.classList.remove('bg-surface-container-highest'), 300);
  });
});

// Screen 2: Instructions
document.getElementById('btn-instruct-next')?.addEventListener('click', () => {
  navigateTo('categories');
});

const toggleInstructAudio = document.getElementById('btn-toggle-instruct-audio');
const instructAudioIcon = document.getElementById('instruct-audio-icon');
const instructAudioLabel = document.getElementById('instruct-audio-label');

toggleInstructAudio?.addEventListener('click', () => {
  appState.isInstructionAudioMuted = !appState.isInstructionAudioMuted;
  if (appState.isInstructionAudioMuted) {
    window.speechSynthesis?.cancel();
    if (instructAudioIcon) instructAudioIcon.innerText = 'volume_off';
    if (instructAudioLabel) instructAudioLabel.innerText = 'Suara Hening (Mute)';
  } else {
    if (instructAudioIcon) instructAudioIcon.innerText = 'volume_up';
    if (instructAudioLabel) instructAudioLabel.innerText = 'Suara Aktif (Wanita Normal)';
    speakText("Suara instruksi telah diaktifkan kembali.", 'id-ID', 'female', 1.0);
  }
});

document.querySelectorAll('.instruct-card').forEach(card => {
  const triggerCard = () => {
    if (!appState.isInstructionAudioMuted) {
      const idText = card.dataset.idText;
      const enText = card.dataset.enText;
      speakText(`${idText}. ${enText}`, 'id-ID', 'female', 1.0);
    }
    card.classList.add('border-primary', 'bg-surface-container-high');
    setTimeout(() => card.classList.remove('border-primary', 'bg-surface-container-high'), 400);
  };

  card.addEventListener('click', triggerCard);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerCard();
    }
  });
});

// Screen 3: Categories (4 Treatments)
document.querySelectorAll('.topic-btn').forEach(card => {
  const selectTreatment = () => {
    const categoryKey = card.dataset.category;
    if (categoryKey) {
      appState.currentTreatment = categoryKey;
      appState.currentWordIndex = 0;
      navigateTo('learning');
    }
  };

  card.addEventListener('click', selectTreatment);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectTreatment();
    }
  });
});

// ─── 9. MODAL & GLOBAL ACCESSIBILITY KEYBOARD CONTROLLER ───
const guideModal = document.getElementById('guide-modal');
const guideCloseBtn = document.getElementById('guide-close-btn');
const guideOkBtn = document.getElementById('guide-ok-btn');

function openGuideModal() {
  guideModal?.classList.remove('hidden');
  guideModal?.classList.add('flex');
}

function closeGuideModal() {
  guideModal?.classList.remove('flex');
  guideModal?.classList.add('hidden');
}

document.getElementById('btn-dashboard-help')?.addEventListener('click', openGuideModal);
document.getElementById('btn-instruct-help')?.addEventListener('click', openGuideModal);
document.getElementById('btn-category-help')?.addEventListener('click', openGuideModal);
guideCloseBtn?.addEventListener('click', closeGuideModal);
guideOkBtn?.addEventListener('click', closeGuideModal);

guideModal?.addEventListener('click', (e) => {
  if (e.target === guideModal) closeGuideModal();
});

/**
 * Universal media cleaner
 */
function stopAllMedia() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (pronunVideo) {
    try { pronunVideo.pause(); } catch (e) {}
  }
  if (fallbackAudio) {
    try { fallbackAudio.pause(); } catch (e) {}
  }
  stopVideoPlaybackUI();
}

/**
 * Accessible Keyboard Shortcuts
 */
window.addEventListener('keydown', (e) => {
  if (guideModal && !guideModal.classList.contains('hidden')) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeGuideModal();
    }
    return;
  }

  // Escape always goes back across all screens
  if (e.key === 'Escape') {
    e.preventDefault();
    navigateBack();
    return;
  }

  switch (appState.activeScreen) {
    case 'dashboard':
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault();
        navigateTo('instructions');
      }
      break;

    case 'instructions':
      if (e.key === 'Enter' || e.key === 'ArrowRight') {
        e.preventDefault();
        navigateTo('categories');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateBack();
      }
      break;

    case 'categories':
      if (e.key >= '1' && e.key <= '4') {
        const treatments = ['bilabial', 'labiodental', 'alveolar', 'velar'];
        const chosen = treatments[parseInt(e.key) - 1];
        if (chosen) {
          appState.currentTreatment = chosen;
          appState.currentWordIndex = 0;
          navigateTo('learning');
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateBack();
      }
      break;

    case 'learning':
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        playVideoPronunciation({ startTime: 0 });
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        btnNextWord?.click();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (appState.currentWordIndex > 0) {
          btnPrevWord?.click();
        } else {
          navigateBack();
        }
      }
      break;
  }
});

// Initial boot
renderView();
console.log('✨ EPVM English SPA Engine Loaded — 4 Treatments & 20 Vocabulary Words Ready');
