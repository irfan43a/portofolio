import type { PersonalInfo, StatItem, ServiceItem, SkillCategory, Project, Experience, Testimonial } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Irfan Abidin",
  role: "Frontend Developer & UI Engineer",
  tagline: "Merancang dan membangun antarmuka web modern yang cepat, interaktif, dan mudah digunakan.",
  bio: "Halo! Saya Irfan Abidin, seorang Frontend Developer dengan pengalaman selama 3,5 tahun dalam membangun aplikasi web modern berbasis React dan TypeScript. Saya memiliki fokus mendalam pada arsitektur komponen yang bersih, optimasi performa web (Core Web Vitals), aksesibilitas (a11y), serta desain antarmuka yang intuitif dan responsif.",
  shortBio: "Frontend Developer dengan pengalaman 3,5 tahun spesialis React, TypeScript, dan Tailwind CSS berfokus pada performa tinggi dan desain bersih.",
  location: "Jakarta, Indonesia (Tersedia Remote)",
  email: "irfan.abidin.dev@example.com",
  phone: "+62 812-3456-7890",
  availableForHire: true,
  resumeUrl: "#",
  socials: {
    github: "https://github.com/irfanabidin",
    linkedin: "https://linkedin.com/in/irfanabidin",
    twitter: "https://twitter.com/irfanabidin",
  }
};

export const statsData: StatItem[] = [
  {
    value: "3.5+",
    label: "Tahun Pengalaman",
    description: "Pengalaman konsisten dalam engineering frontend web apps"
  },
  {
    value: "20+",
    label: "Proyek Terselesaikan",
    description: "Mulai dari SaaS dashboard, e-commerce, hingga design system"
  },
  {
    value: "98+",
    label: "Skor Lighthouse Rata-rata",
    description: "Performa cepat, SEO optimal, dan aksesibilitas tinggi"
  },
  {
    value: "100%",
    label: "Komitmen Kualitas",
    description: "Kode bersih, terstruktur, terdokumentasi, dan maintainable"
  }
];

export const servicesData: ServiceItem[] = [
  {
    icon: "Layout",
    title: "Pengembangan Web App React",
    description: "Membangun Single Page Application (SPA) dan antarmuka web dinamis dengan React, TypeScript, dan arsitektur state management yang handal.",
    features: ["Komponen Modular & Reusable", "State Management (Zustand/Redux)", "Integrasi REST API & GraphQL"]
  },
  {
    icon: "Sparkles",
    title: "Modern UI/UX & Design Systems",
    description: "Menerjemahkan wireframe/desain Figma menjadi kode antarmuka responsif yang pixel-perfect dengan Tailwind CSS dan animasi halus.",
    features: ["Desain Responsif Mobile-First", "Dark / Light Mode Support", "Aksesibilitas (WCAG & Radix UI)"]
  },
  {
    icon: "Zap",
    title: "Optimasi Performa & Web Vitals",
    description: "Menganalisis dan mengoptimalkan performa halaman web, meminimalkan bundle size, code-splitting, dan mempercepat interaksi pengguna.",
    features: ["Lighthouse Score 90+", "Bundle Size Minification", "SEO-Friendly & Asset Optimization"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Core Frontend",
    description: "Fondasi bahasa dan teknologi inti pengembangan frontend",
    items: [
      { name: "React.js", level: 95, experience: "3.5 tahun", highlight: true },
      { name: "TypeScript", level: 92, experience: "3 tahun", highlight: true },
      { name: "JavaScript (ES6+)", level: 96, experience: "3.5 tahun", highlight: true },
      { name: "HTML5 & Semantic Web", level: 98, experience: "3.5+ tahun" },
      { name: "CSS3 & Modern CSS", level: 94, experience: "3.5+ tahun" },
      { name: "Next.js", level: 86, experience: "2.5 tahun" }
    ]
  },
  {
    category: "Styling & UI",
    description: "Framework styling dan pustaka antarmuka pengguna",
    items: [
      { name: "Tailwind CSS", level: 96, experience: "3.5 tahun", highlight: true },
      { name: "Framer Motion", level: 85, experience: "2 tahun" },
      { name: "Radix UI / Shadcn", level: 90, experience: "2 tahun", highlight: true },
      { name: "Lucide Icons & SVG", level: 92, experience: "3 tahun" },
      { name: "Responsive Design", level: 98, experience: "3.5 tahun" }
    ]
  },
  {
    category: "State & Data Fetching",
    description: "Manajemen state aplikasi dan komunikasi data server",
    items: [
      { name: "Zustand", level: 90, experience: "2 tahun", highlight: true },
      { name: "TanStack Query", level: 88, experience: "2 tahun" },
      { name: "Redux Toolkit", level: 82, experience: "2 tahun" },
      { name: "Context API", level: 92, experience: "3 tahun" },
      { name: "Axios / Fetch API", level: 95, experience: "3+ tahun" }
    ]
  },
  {
    category: "Tools & Testing",
    description: "Ekosistem build tool, version control, dan pengujian",
    items: [
      { name: "Vite", level: 94, experience: "2.5 tahun", highlight: true },
      { name: "Git & GitHub", level: 90, experience: "3+ tahun" },
      { name: "npm / pnpm", level: 90, experience: "3+ tahun" },
      { name: "Vitest / Jest", level: 80, experience: "1.5 tahun" },
      { name: "Chrome DevTools", level: 92, experience: "3+ tahun" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "pulse-analytics",
    title: "PulseAnalytics Dashboard",
    tagline: "Platform visualisasi metrik bisnis dan analitik real-time dengan grafik interaktif",
    category: "Dashboard",
    description: "Dashboard analitik modern yang dirancang untuk memonitor KPI perusahaan SaaS, tingkat konversi pengguna, dan grafik arus kas secara real-time. Dilengkapi fitur filter rentang waktu dinamis, ekspor data CSV, dan kustomisasi widget.",
    challenge: "Menampilkan ribuan titik data metrik tanpa lag pada browser, serta menjaga rendering grafik tetap mulus saat pengguna berpindah tab atau memfilter tanggal.",
    solution: "Menggunakan virtualized list, memoization dengan useMemo/useCallback, dan library visualisasi yang dioptimalkan untuk mengurangi re-render hingga 60%.",
    metrics: [
      "99/100 Skor Performa Lighthouse",
      "60% Pengurangan render latency",
      "Dukungan multi-tenant & Dark Mode"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Zustand"],
    liveUrl: "https://example.com/demo/pulse-analytics",
    githubUrl: "https://github.com/example/pulse-analytics",
    featured: true,
    mockupType: "dashboard"
  },
  {
    id: "lumina-store",
    title: "Lumina Fashion E-Commerce",
    tagline: "Toko online modern dengan cart interaktif, instant search, dan checkout instan",
    category: "E-Commerce",
    description: "Platform e-commerce pakaian minimalis yang menghadirkan pengalaman belanja super cepat. Fitur mencakup katalog produk dengan filter multi-kategori, pencarian instan (debounced search), slide-over shopping bag, dan simulasi pembayaran.",
    challenge: "Menjaga konsistensi status keranjang belanja saat pengguna melakukan navigasi halaman atau menyegarkan browser, serta optimasi pemuatan gambar produk beresolusi tinggi.",
    solution: "Implementasi persistent state management dengan local storage synchronization, lazy loading gambar dengan progressive placeholder blur.",
    metrics: [
      "Instant checkout flow < 3 klik",
      "Ukuran bundle awal di bawah 120KB",
      "100% Mobile responsive"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "Headless UI"],
    liveUrl: "https://example.com/demo/lumina-store",
    githubUrl: "https://github.com/example/lumina-store",
    featured: true,
    mockupType: "ecommerce"
  },
  {
    id: "devcanvas-uikit",
    title: "DevCanvas UI Component Kit",
    tagline: "Sistem desain dan koleksi komponen antarmuka yang aksesibel dan mudah disesuaikan",
    category: "UI Library",
    description: "Kumpulan lebih dari 40+ komponen React siap pakai yang dibangun dengan standar aksesibilitas WCAG, dukungan keyboard navigation penuh, dan API yang ergonomis untuk tim developer.",
    challenge: "Memastikan semua komponen lulus uji screen reader dan keyboard navigation tanpa mengorbankan estetika visual yang modern dan minimalis.",
    solution: "Mengintegrasikan primitif Radix UI tanpa styling untuk logika aksesibilitas dan melapisi dengan utility classes Tailwind CSS yang dapat di-override dengan aman.",
    metrics: [
      "40+ Komponen siap pakai",
      "Aksesibilitas WCAG 2.1 AA",
      "Zero CSS bundle overhead"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Accessibility"],
    liveUrl: "https://example.com/demo/devcanvas",
    githubUrl: "https://github.com/example/devcanvas-uikit",
    featured: true,
    mockupType: "uikit"
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Collaborative Board",
    tagline: "Aplikasi manajemen proyek drag-and-drop dengan workspace terorganisir",
    category: "Web Apps",
    description: "Aplikasi produktivitas berbasis Kanban board yang memungkinkan pengguna mengatur tugas, menetapkan prioritas, menambahkan checklist, dan mengelola deadline dengan interaksi drag-and-drop yang sangat halus.",
    challenge: "Menghadirkan drag-and-drop yang responsif di perangkat layar sentuh (mobile) maupun desktop dengan feedback visual instan.",
    solution: "Memanfaatkan pustaka modern dnd-kit yang ringan dengan touch sensor custom dan animasi transisi layout otomatis.",
    metrics: [
      "60 FPS Drag animation",
      "Penyimpanan offline lokal otomatis",
      "Keyboard shortcut untuk power user"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Dnd-kit", "Vite"],
    liveUrl: "https://example.com/demo/taskflow",
    githubUrl: "https://github.com/example/taskflow-pro",
    featured: false,
    mockupType: "saas"
  }
];

export const experiencesData: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "Nusantara Digital Tech",
    location: "Jakarta (Hybrid)",
    period: "2023 — Sekarang",
    type: "Full-Time",
    description: "Memimpin pengembangan modul frontend untuk aplikasi enterprise berbasis cloud. Berkolaborasi erat dengan tim desain UI/UX dan backend engineer.",
    achievements: [
      "Memigrasikan arsitektur frontend dari legacy code ke React 18 & TypeScript, memangkas waktu build sebesar 45%.",
      "Membangun design system internal yang digunakan oleh 4 tim produk berbeda.",
      "Meningkatkan skor performa Core Web Vitals rata-rata dari 68 menjadi 96+."
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Vite", "REST API"]
  },
  {
    role: "Frontend Web Developer",
    company: "Kreatif Studio Indonesia",
    location: "Bandung (Remote)",
    period: "2021 — 2023",
    type: "Full-Time",
    description: "Bertanggung jawab atas implementasi antarmuka landing page, dashboard klien, dan web apps untuk berbagai startup dan UMKM teknologi.",
    achievements: [
      "Mengembangkan lebih dari 15 aplikasi web interaktif dengan tingkat kepuasan klien 98%.",
      "Mengimplementasikan otomatisasi CI/CD untuk preview deploy di Vercel.",
      "Mengurangi ukuran payload bundle JavaScript hingga 35% melalui code-splitting dan image optimization."
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Next.js", "Git", "Figma"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Rian Hidayat",
    role: "Head of Product",
    company: "Nusantara Digital",
    content: "Irfan memiliki kemampuan luar biasa dalam menerjemahkan kebutuhan produk yang rumit menjadi tampilan web yang bersih, responsif, dan sangat mudah digunakan. Kualitas kodenya selalu rapi dan mudah dirawat.",
    avatar: "RH",
    relationship: "Atasan Langsung"
  },
  {
    id: "2",
    name: "Sarah Wijaya",
    role: "Lead UI/UX Designer",
    company: "Finix FinTech",
    content: "Bekerja bersama Irfan adalah impian setiap desainer. Ia sangat teliti terhadap detail jarak, tipografi, dan animasi mikro. Hasil implementasinya selalu persis sama dengan desain di Figma.",
    avatar: "SW",
    relationship: "Kolaborator Desain"
  },
  {
    id: "3",
    name: "Budi Santoso",
    role: "CTO & Co-Founder",
    company: "StartupLab ID",
    content: "Kecepatan eksekusi dan pemahaman mendalam tentang performa web membuat proyek dashboard kami selesai 2 minggu lebih cepat dari target dengan skor Lighthouse yang memuaskan.",
    avatar: "BS",
    relationship: "Klien Proyek"
  }
];
