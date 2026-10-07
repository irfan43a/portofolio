# Modern Frontend Developer Portfolio ⚡

Portofolio web modern, responsif, dan minimalis yang dibangun khusus untuk **Frontend Developer / UI Engineer** menggunakan **React 19**, **TypeScript**, **Tailwind CSS**, dan **Vite**.

---

## ✨ Fitur Utama

- 🎨 **Minimalist & Clean Design**: Tipografi elegan (*Plus Jakarta Sans* & *Inter*), tata letak bersih, micro-interactions, dan kontras tajam.
- 🌓 **Dark & Light Mode**: Switcher tema otomatis tersimpan di `localStorage` dengan transisi warna halus.
- ⚡ **Interactive UI Playground**: Showcase interaktif di mana pengunjung/recruiter dapat menguji komponen UI (Button, Metric Card, Badge), mengganti warna, border radius, variant, dan menyalin kode React/Tailwind secara real-time.
- 📂 **Studi Kasus Proyek & Modal Deep-Dive**:
  - Filter proyek berdasarkan kategori (*Dashboard*, *E-Commerce*, *UI Library*, *Web Apps*).
  - Modal studi kasus lengkap: tantangan frontend, solusi arsitektur, metrik performa (Core Web Vitals & Lighthouse), serta link demo & kode GitHub.
  - Mockup UI interaktif berbasis SVG/CSS untuk tampilan tanpa gambar rusak.
- 📄 **Curriculum Vitae (CV) Modal**: Preview CV interaktif dengan fitur cetak / ekspor PDF langsung (`window.print()`).
- 🛠️ **Tech Stack & Skills Matrix**: Filter kategori keahlian, toggle skill unggulan, serta daftar tools sehari-hari.
- ⏱️ **Timeline Pengalaman Kerja & Sertifikasi**: Rekam jejak karir dengan pencapaian kuantitatif, pendidikan formal, dan sertifikasi.
- 💬 **Formulir Kontak Realistis**:
  - Validasi input formulir client-side.
  - Tombol **Salin Alamat Email** dengan feedback instan ke clipboard.
  - Simulasi loading state & feedback sukses pengiriman pesan.
- 📱 **100% Responsif**: Mobile-first, navigasi drawer responsif, dan scroll halus (*smooth scroll*).

---

## 🚀 Cara Menjalankan Proyek

### 1. Jalankan Development Server

```bash
npm run dev
```

Buka browser di alamat yang muncul di terminal (biasanya `http://localhost:5173`).

### 2. Build untuk Produksi

```bash
npm run build
```

Hasil build yang siap di-deploy ke Vercel, Netlify, atau GitHub Pages akan berada di folder `dist/`.

### 3. Preview Hasil Build

```bash
npm run preview
```

---

## ⚙️ Kustomisasi Data Pribadi

Semua informasi portofolio (nama, bio, kontak, proyek, skill, pengalaman, dan testimoni) berada di satu file terpusat:

📁 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

Cukup edit data di file tersebut sesuai dengan profil Anda:
- `personalInfo`: Nama, email, media sosial, headline, dan bio singkat.
- `projectsData`: Daftar proyek, deskripsi, teknologi yang dipakai, tantangan, dan link live/repo.
- `skillCategories`: Kategori teknologi, tingkat kemahiran, dan tahun pengalaman.
- `experiencesData`: Perjalanan karir, nama perusahaan, durasi, dan daftar pencapaian.
- `testimonialsData`: Testimoni atau rekomendasi dari rekan kerja.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG icons
- **Fonts**: [Google Fonts (Plus Jakarta Sans & Inter)](https://fonts.google.com/)
