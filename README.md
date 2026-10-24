# 💍 Undangan Pernikahan Digital Interaktif (Digital Wedding Invitation)
> **Tugas Ujian Tengah Semester (UTS) — Pemrograman Berbasis Platform (PBP)**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

Aplikasi web undangan pernikahan digital interaktif, modern, dan responsif yang dibangun menggunakan **HTML5 Semantik, CSS3 Custom Theme, Framework Bootstrap 5.3, dan Vanilla JavaScript (ES6+)**. Mengusung harmoni kemewahan islami bernuansa **Hijau Emerald, Kuning Emas, dan Putih Bersih (*Green, Gold & White*)**.

---

## 📌 Identitas Mahasiswa & Informasi Pengumpulan

| Data Pengumpulan | Keterangan / Tautan |
|---|---|
| **Nama Lengkap:** | Ahmad Syaifulloh |
| **NIM:** | 25051204385 |
| **Mata Kuliah:** | Pemrograman Berbasis Platform (PBP) |
| **Link Repository GitHub:** | [https://github.com/el-mas-dev/the-wedding](https://github.com/el-mas-dev/the-wedding) |
| **Link Undangan (Live Website):** | https://the-wedding-kappa.vercel.app/ |
| **Link Video Penjelasan (On-Cam):** | [https://youtu.be/link-video-15-menit](https://youtube.com/) |

---

## 📸 Dokumentasi & Pratinjau Tampilan Antarmuka

Berikut adalah dokumentasi tangkapan layar antarmuka aplikasi dari setiap seksi halaman:

### 1. Cover Pembuka & Personalisasi Tamu
Layar pembuka *full-screen* dengan efek *Glassmorphism*, penangkap nama tamu otomatis via URL, dan tombol aksi "Buka Undangan" untuk memulai pemutaran lagu latar secara elegan.

![1. Cover Pembuka](dokumentation/Cuplikan%20layar%202026-10-22%20234830.png)

---

### 2. Hero Header & Kutipan Doa QS. Ar-Rum: 21
Salam pembuka dengan tipografi kaligrafi emas *Great Vibes* dan kartu kutipan suci berdesain modern *soft shadow*.

![2. Hero & Kutipan](dokumentation/Cuplikan%20layar%202026-10-22%20235027.png)

---

### 3. Profil Kedua Mempelai (The Couple)
Profil mempelai pria dan wanita berbingkai lingkaran gradasi hijau zamrud dan emas dengan proporsi foto presisi tanpa terpotong, disertai nama orang tua dan tautan media sosial.

![3. Profil Mempelai](dokumentation/Cuplikan%20layar%202026-10-22%20235114.png)

---

### 4. Countdown Timer & Jadwal Acara (Akad & Resepsi)
Indikator hitung mundur realtime hari, jam, menit, dan detik menuju hari pernikahan, serta dua kartu sesi acara dengan integrasi tombol navigasi Google Maps.

![4. Waktu & Tempat](dokumentation/Cuplikan%20layar%202026-10-22%20235143.png)

---

### 5. Galeri Momen Bahagia (Prewedding Showcase)
Grid responsif Bootstrap 6 foto prewedding dengan efek animasi perbesaran lembut (*zoom scale on hover*).

![5. Galeri Foto](dokumentation/Cuplikan%20layar%202026-10-22%20235205.png)

---

### 6. Amplop Digital & Fitur Salin Rekening
Kartu rekening bank bertema *Dark Emerald Luxury* dengan fitur interaktif salin nomor rekening instan (*Clipboard API*) dan notifikasi visual tombol hijau "Tersalin!".

![6. Amplop Digital](dokumentation/Cuplikan%20layar%202026-10-22%20235236.png)

---

### 7. Konfirmasi Kehadiran & Buku Tamu (RSVP)
Formulir input konfirmasi kehadiran dan pengiriman doa restu yang tersimpan secara lokal di *localStorage* peramban dan langsung muncul di daftar ucapan secara seketika.

![7. RSVP & Buku Tamu](dokumentation/Cuplikan%20layar%202026-10-22%20235301.png)

---

### 8. Footer & Safe Clearance Navigasi
Bagian penutup bernuansa hijau zamrud tua dengan jarak aman ekstra (*bottom clearance*) sehingga teks hak cipta tugas UTS terlihat bersih tanpa terhalang oleh tombol navigasi bawah melayang.

![8. Footer & Bottom Nav](dokumentation/Cuplikan%20layar%202026-10-22%20235554.png)

---

## ✨ Fitur-Fitur Unggulan

- **Cover Pembuka & Bypass Autoplay Audio**: Layar awal interaktif yang mematuhi standar *browser user-gesture policy* untuk memutar lagu latar (*Wana Maak*).
- **Personalisasi Tamu Dinamis via URL**: Mendukung penyebaran link personal menggunakan query parameter (Contoh: `?to=Bapak+Ahmad+Dahlan`).
- **Floating Vinyl Audio Control**: Tombol musik melayang di pojok kanan bawah dengan animasi rotasi piringan hitam saat lagu berputar.
- **Hitung Mundur Realtime (Countdown Timer)**: Penghitungan otomatis selisih waktu hari, jam, menit, dan detik dengan manipulasi DOM periodik setiap 1 detik.
- **Profil Mempelai Proporsional**: Foto berbingkai lingkaran simetris dengan penyesuaian *object-position* presisi agar wajah dan kepala tidak terpotong.
- **Integrasi Navigasi Lokasi**: Informasi Akad & Resepsi terintegrasi dengan tautan langsung ke Google Maps.
- **Amplop Digital (Wedding Gift)**: Fitur salin nomor rekening bank kilat menggunakan *Clipboard API* dengan *feedback toast* langsung pada tombol.
- **Buku Tamu & RSVP (*Client-Side Persistence*)**: Data konfirmasi kehadiran dan doa restu tersimpan di `localStorage` serta aman dari celah XSS (*Cross-Site Scripting*).
- **Animasi Scroll Reveal Dinamis**: Elemen-elemen halaman tersembunyi terlebih dahulu dan baru muncul secara halus saat pengguna menggulir layar ke bawah.
- **Safe Area Bottom Dock Navigation**: Bar navigasi bawah yang mempermudah tamu berpindah seksi dengan cepat pada layar ponsel tanpa menutupi konten footer.

---

## 🛠️ Arsitektur Teknologi & Dependensi

1. **HTML5**: Struktur semantik dokumen (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<audio>`).
2. **CSS3**: CSS Custom Properties (`:root`), Flexbox, CSS Grid, Glassmorphism (`backdrop-filter`), dan Animasi Keyframes (`@keyframes rotateDisc`).
3. **Bootstrap 5.3 CDN**: Sistem Grid 12 kolom responsif (`col-md-5`, `col-lg-6`, `row g-4`), komponen Card, Form, Badge, dan Flexbox utilities.
4. **Bootstrap Icons v1.11.3**: Library ikon resmi Bootstrap untuk kelengkapan tombol aksi dan menu navigasi.
5. **Vanilla JavaScript ES6+**: Logika manipulasi DOM murni tanpa jQuery, `URLSearchParams`, `setInterval`, Clipboard API, dan `localStorage`.
6. **AOS Library (Animate On Scroll)**: Engine pemrosesan efek visual scroll reveal.

---

## 📁 Struktur Direktori Proyek

```text
Ujian_tengah_semester_PBP/
├── index.html                   # Halaman utama aplikasi undangan digital
├── css/
│   └── style.css                # Styling kustom, palet warna, dan animasi
├── js/
│   └── main.js                  # Logika interaktivitas, timer, audio, dan RSVP
├── assets/
│   ├── audio/                   # Lagu latar pernikahan (Wana Maak ~ Mohammed Alsahli)
│   └── images/                  # Foto mempelai pria dan wanita
├── dokumentation/               # Kumpulan tangkapan layar pengujian antarmuka
│   ├── Cuplikan layar 2026-10-22 234830.png
│   ├── Cuplikan layar 2026-10-22 235027.png
│   ├── Cuplikan layar 2026-10-22 235114.png
│   ├── Cuplikan layar 2026-10-22 235143.png
│   ├── Cuplikan layar 2026-10-22 235205.png
│   ├── Cuplikan layar 2026-10-22 235236.png
│   ├── Cuplikan layar 2026-10-22 235301.png
│   └── Cuplikan layar 2026-10-22 235554.png
├── Draf_Laporan_UTS_PBP.docx    # Draf dokumen laporan lengkap versi Microsoft Word
├── LAPORAN_PROYEK.md            # Laporan resmi komprehensif dalam format Markdown
├── .gitignore                   # Konfigurasi file yang diabaikan oleh Git
└── README.md                    # Dokumentasi utama proyek GitHub
```

---

## 🚀 Panduan Menjalankan Proyek Secara Lokal

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/el-mas-dev/the-wedding.git
   cd the-wedding
   ```
2. **Jalankan di browser:**
   - Cukup klik ganda berkas `index.html`, ATAU
   - Buka folder di Visual Studio Code, klik kanan pada `index.html` dan pilih **Open with Live Server**.
3. **Uji personalisasi nama tamu:**
   Ketikkan parameter URL berikut di address bar browser Anda:
   ```text
   http://127.0.0.1:5500/index.html?to=Bapak+Budi+Santoso
   ```

---

## 🌐 Panduan Publikasi ke GitHub Pages (Hosting Gratis)

1. Inisialisasi Git dan simpan seluruh perubahan:
   ```bash
   git init -b main
   git add .
   git commit -m "feat: complete digital wedding invitation UTS PBP"
   ```
2. Hubungkan ke repositori GitHub:
   ```bash
   git remote add origin https://github.com/el-mas-dev/the-wedding.git
   git push -u origin main
   ```
3. Buka GitHub melalui browser:
   - Masuk ke tab **Settings** -> Pilih menu **Pages** di sebelah kiri.
   - Pada bagian **Build and deployment**, atur Branch ke **`main`** dan direktori **`/ (root)`**.
   - Klik tombol **Save**.
4. Website undangan Anda akan aktif dan dapat diakses publik pada alamat:
   ```text
   https://el-mas-dev.github.io/the-wedding/
   ```

---

## 📊 Matriks Pemenuhan Kriteria Penilaian Dosen

| No | Kriteria Penilaian | Implementasi Teknis pada Proyek |
|---|---|---|
| 1 | **HTML, CSS, BOOTSTRAP, JS** | Menerapkan struktur HTML5 semantik, CSS3 custom variables, Bootstrap 5.3 Grid & Forms, serta logika JavaScript ES6+ murni. |
| 2 | **Undangan Pernikahan Digital** | Menyediakan seluruh komponen undangan esensial: Cover, Profil, Akad/Resepsi, Hitung Mundur, Galeri, Amplop Digital, dan Buku Tamu. |
| 3 | **Kreatifitas & Tampilan** | Desain bertema *Green, Gold & White*, animasi rotasi vinyl, Glassmorphism, integrasi URL personalizer, dan 100% responsif mobile-friendly. |
| 4 | **Source Code Higienis** | Kode bersih, terstruktur modular, terdokumentasi dengan komentar developer murni, dan bebas dari baris divider berulang. |
| 5 | **Kelengkapan Pengumpulan** | Repositori GitHub terstruktur, dokumentasi galeri visual lengkap, siap deploy ke GitHub Pages, serta panduan rekaman presentasi video on-cam 15 menit. |

---

## 📜 Lisensi & Hak Cipta
Dibuat dengan sepenuh hati sebagai pemenuhan **Ujian Tengah Semester (UTS) Mata Kuliah Pemrograman Berbasis Platform**.  
© 2026 Seluruh hak cipta dilindungi.
