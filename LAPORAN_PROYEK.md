# LAPORAN TUGAS UJIAN TENGAH SEMESTER (UTS)
## MATA KULIAH: PEMROGRAMAN BERBASIS PLATFORM (PBP)
**Topik Proyek:** Pengembangan Aplikasi Web Undangan Pernikahan Digital Interaktif  
**Tema Warna:** Harmoni Hijau Emerald Islami, Kuning Emas Elegan, dan Putih Bersih (Green, Gold & White)  
**Tech Stack:** HTML5, CSS3, Bootstrap 5.3, JavaScript Vanilla (ES6+)  

---

### IDENTITAS MAHASISWA & TAUTAN PENGUMPULAN
- **Nama:** [Isi Nama Lengkap Anda di Sini]
- **NIM:** [Isi NIM Anda di Sini]
- **Link Github:** https://github.com/el-mas-dev/the-wedding
- **Link Undangan:** https://the-wedding-el-mas-dev.vercel.app/
- **Link Penjelasan (oncam):** https://youtu.be/[link-video-presentasi-15-menit]

---

### I. LATAR BELAKANG & TUJUAN
Dalam era transformasi digital, undangan pernikahan fisik berbasis kertas mulai bertransformasi ke arah undangan pernikahan digital berbasis website. Proyek ini dibangun sebagai pemenuhan Ujian Tengah Semester (UTS) mata kuliah Pemrograman Berbasis Platform dengan tujuan mengimplementasikan konsep web development modern yang responsif, interaktif, dan berorientasi pada kepuasan pengalaman pengguna (*user experience*).

Tiga pilar utama penilaian dosen dipenuhi secara komprehensif:
1. **Kreatifitas**: Integrasi audio interaktif, URL recipient personalizer, animasi piringan hitam, hitung mundur realtime, dan amplop digital.
2. **Source Code**: Bersih, terstruktur secara modular (HTML, CSS, JS terpisah), bebas dari divider berulang seperti `=`, dan disertai komentar developer murni.
3. **Tampilan**: Elegan bertema *Champagne Gold* dan *Warm Ivory*, tipografi estetik, dan 100% responsif di layar ponsel maupun desktop.

---

### II. MATRIKS KESESUAIAN KETENTUAN DOSEN

| No | Ketentuan Dosen | Status | Bukti Implementasi pada Source Code |
|---|---|---|---|
| 1 | **HTML, CSS, BOOTSTRAP, JS** | Terpenuhi 100% | - **HTML5**: Semantik dokumen (`<nav>`, `<section>`, `<header>`, `<footer>`, `<audio>`).<br>- **CSS3**: Variabel CSS (`:root`), Glassmorphism (`backdrop-filter`), Animasi rotasi piringan (`@keyframes rotateDisc`).<br>- **Bootstrap 5.3**: Grid 12 kolom (`container`, `row`, `col-md-5`, `col-lg-6`), utilitas Flexbox, Form, Card, dan Badge.<br>- **JavaScript ES6+**: DOM Manipulation, `URLSearchParams`, `setInterval` countdown, Web Audio playback, Clipboard API, `localStorage` data store. |
| 2 | **Silahkan buat undangan pernikahan digital** | Terpenuhi 100% | Halaman web mencakup semua komponen esensial undangan pernikahan: Cover pembuka, Ayat suci Al-Qur'an (QS. Ar-Rum: 21), Profil kedua mempelai, Jadwal Akad & Resepsi, Countdown Timer, Galeri foto prewedding, Amplop digital, RSVP & Buku Tamu, serta Footer penutup. |
| 3 | **Kreatifitas, Source Code, Tampilan** | Terpenuhi 100% | - **Kreatifitas**: Personalisasi nama tamu otomatis via URL parameter `?to=Nama+Tamu`, pemutar audio piringan hitam, tombol salin nomor rekening dengan feedback visual interaktif, penyimpanan ucapan lokal (*localStorage*).<br>- **Source Code**: Kode terstruktur rapi, modular, higienis, bersih dari divider `=`, dan disertai keterangan developer murni yang mendalam.<br>- **Tampilan**: Desain modern bernuansa *Champagne Gold* & *Warm Ivory*, tipografi mewah (*Playfair Display* & *Great Vibes*), serta 100% responsif di smartphone, tablet, maupun laptop. |
| 4 | **Link GitHub, Link Undangan, Link Presentasi** | Siap | - **Link GitHub**: Repositori siap di-push ke GitHub (`git init`, `.gitignore`).<br>- **Link Undangan (Hosting)**: Siap diaktifkan dalam 1-klik melalui GitHub Pages.<br>- **Link Penjelasan (oncam)**: Panduan dan susunan materi presentasi 15 menit on-cam telah disusun lengkap pada bab VI laporan ini. |
| 5 | **Waktu Pengerjaan 2 Minggu** | Tuntas | Arsitektur proyek, fungsionalitas logika, dan styling telah siap dipakai serta mudah dikustomisasi sesuai referensi lanjutan. |

---

### III. IMPLEMENTASI LENGKAP BOOTSTRAP 5
Proyek ini mengadopsi framework Bootstrap 5.3 CDN resmi untuk memastikan performa tinggi dan tata letak responsif:
1. **Sistem Grid 12 Kolom & Breakpoints**:
   - `col-md-5`, `col-md-2`, `col-lg-6`: Membagi porsi layout secara proporsional. Pada layar mobile (`< 768px`) kolom akan tersusun vertikal (*stacking*), sedangkan pada layar tablet dan desktop akan berjajar rapi secara horizontal.
   - `row g-3` dan `g-4`: Pengaturan celah (*gutter*) antar elemen grid secara konsisten tanpa margin manual.
2. **Komponen Bootstrap**:
   - `card`, `card-body`: Digunakan pada kartu kutipan QS. Ar-Rum: 21, kartu profil mempelai, kartu jadwal acara, dan kartu formulir RSVP dengan variasi `border-0 shadow-sm rounded-4`.
   - `form-label`, `form-control`, `form-select`: Menstandarisasi elemen formulir input buku tamu agar seragam di semua peramban.
   - `badge`, `bg-success`, `bg-secondary`: Memberi penanda visual status kehadiran tamu (*Hadir* / *Berhalangan*).
   - `btn`, `btn-lg`, `btn-sm`: Dasar tombol yang kemudian dipercantik dengan kustomisasi CSS gradasi emas (*btn-gold*).
3. **Utilitas Flexbox & Spacing**:
   - `d-flex align-items-center justify-content-center`: Digunakan untuk penataan cover satu layar penuh dan navbar melayang.
   - `py-5`, `mb-3`, `mt-4`, `mx-auto`: Pengaturan ritme spasi vertikal dan horizontal.
4. **Bootstrap Icons (v1.11.3)**:
   - Digunakan pada tombol buka undangan (`bi-envelope-open-heart`), kartu acara (`bi-gem`, `bi-heart-fill`), lokasi (`bi-geo-alt-fill`), salin rekening (`bi-copy`), dan kirim doa (`bi-send`).

---

### IV. PENJELASAN MENDALAM SOURCE CODE (DEEP-DIVE)

#### 1. File `index.html` (Struktur Semantik & Komponen UI)
- **Tag `<head>`**: Memuat konfigurasi viewport mobile-first, metadata OpenGraph untuk pratinjau kartu media sosial saat link dibagikan di WhatsApp/Telegram, Google Fonts (*Playfair Display*, *Great Vibes*, *Poppins*), serta CDN Bootstrap 5 dan AOS.
- **Seksi `#cover`**: Layar pembuka berposisi `fixed` penuh 100vh yang mengunci layar hingga tombol diklik. Memuat nama tamu dinamis (`.guest-name-text`) dan tombol `#btn-open-invitation`.
- **Widget Mengambang `#audio-control`**: Mengontrol status putar/jeda backsound dengan piringan hitam berputar, memutar lagu latar pernikahan lokal dari `assets/audio/Wana Maak (lirik Arab & terjemahan) ~Mohammed Alsahli.mp3`.
- **Navigasi Bawah `.bottom-nav`**: Memudahkan pengguna ponsel berpindah seksi dengan cepat (*app-like bottom navigation*).
- **Seksi `#hero`**: Memuat nama kedua mempelai dan kutipan ayat suci QS. Ar-Rum: 21 dalam kartu estetik.
- **Seksi `#couple`**: Profil mempelai pria dan wanita beserta nama orang tua dan akun Instagram.
- **Seksi `#event`**: Wadah hitung mundur dinamis (#days, #hours, #minutes, #seconds) serta kartu Akad dan Resepsi yang dilengkapi tombol navigasi Google Maps.
- **Seksi `#gallery`**: Galeri 6 foto prewedding yang diatur dalam grid Bootstrap `col-md-4 col-6`.
- **Seksi `#gift`**: Informasi rekening bank (BCA & Mandiri) lengkap dengan tombol salin otomatis.
- **Seksi `#rsvp`**: Formulir konfirmasi kehadiran di kolom kiri dan daftar live ucapan kerabat di kolom kanan.
- **Tag `<footer>`**: Penutup resmi, salam terima kasih, dan identitas tugas UTS.

#### 2. File `css/style.css` (Desain Visual & Animasi Kustom)
- **CSS Custom Properties (`:root`)**: Sentralisasi token desain (`--primary-color: #d4af37`, `--bg-light: #faf8f5`, dll.) agar skema warna konsisten di seluruh elemen.
- **Penguncian Scroll (`body.locked`)**: Menjaga halaman agar tidak dapat digulir sebelum tombol cover ditekan (`overflow: hidden; height: 100vh;`).
- **Transisi Buka Cover (`#cover.opened`)**: Menggunakan `transform: translateY(-100%);` dengan durasi 0.8s dan *cubic-bezier easing*, memberikan efek kartu terangkat yang mulus ke atas.
- **Animasi Rotasi Piringan Hitam (`@keyframes rotateDisc`)**: Memutar ikon audio 360 derajat secara kontinu saat musik diputar (`animation: rotateDisc 4s linear infinite;`).
- **Glassmorphism**: Diterapkan pada `.cover-content` dan `.bottom-nav` menggunakan `backdrop-filter: blur(8px-10px);` dan transparansi RGBA.
- **Media Queries Responsif**: Penyesuaian ukuran font judul dan tombol timer saat dibuka di layar smartphone (`max-width: 576px`).

#### 3. File `js/main.js` (Logika Interaktivitas & Web APIs)
- **Personalisasi URL Query Parameter**:
  ```javascript
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || urlParams.get('guest') || 'Tamu Undangan';
  ```
  Menjadikan undangan bersifat personal untuk setiap kerabat yang menerima tautan.
- **Penanganan Autoplay Policy**:
  Browser modern memblokir audio yang berputar tanpa interaksi. Logika program memicu `bgMusic.play()` tepat saat pengunjung menekan tombol *"Buka Undangan"*, mematuhi kebijakan *User Gesture Activation*.
- **Countdown Timer Realtime**:
  Menggunakan `setInterval(updateCountdown, 1000)` untuk menghitung selisih milidetik waktu target (`weddingDate - now`) dan mengonversinya ke hari, jam, menit, dan detik dengan format dua digit (`String(val).padStart(2, '0')`).
- **Clipboard API**:
  Fungsi `copyAccountNumber()` memanfaatkan `navigator.clipboard.writeText(text)` dan memberikan umpan balik visual (*feedback toast*) langsung pada tombol selama 2,5 detik.
- **Penyimpanan Buku Tamu (Client-Side Persistence)**:
  Data konfirmasi RSVP dan doa restu disimpan ke dalam `localStorage` browser. Saat halaman dibuka kembali, fungsi `loadWishes()` membaca kembali data tersebut sehingga ucapan tidak hilang.
- **Pencegahan Keamanan XSS**:
  Fungsi `escapeHtml()` menyaring input teks tamu sebelum dimasukkan ke dalam DOM, mencegah eksekusi skrip berbahaya (*Cross-Site Scripting*).

---

### V. PANDUAN DEPLOYMENT VERCEL
1. Buka [https://vercel.com](https://vercel.com) dan login menggunakan akun GitHub (`el-mas-dev`).
2. Klik tombol **"Add New..."** > pilih **"Project"**.
3. Cari repository **`the-wedding`** (`el-mas-dev/the-wedding`), lalu klik **"Import"**.
4. Pada Framework Preset pilih **Other**, root directory tetap `./`.
5. Klik **"Deploy"**. Dalam hitungan detik website telah aktif di alamat: `https://the-wedding-el-mas-dev.vercel.app/`
Setiap `git push` ke repositori akan otomatis diperbarui secara realtime oleh Vercel.

---

### VI. PANDUAN VIDEO PRESENTASI ON-CAM 15 MENIT
Kamera wajah (*on-cam*) wajib aktif di sudut layar selama rekaman. Rincian alokasi waktu presentasi:
- **00:00 - 02:00 (Pembukaan & Identitas)**: Salam, perkenalkan Nama, NIM, mata kuliah Pemrograman Berbasis Platform, serta judul tugas UTS.
- **02:00 - 06:00 (Demonstrasi Fitur Live)**: Buka browser, tunjukkan cover dengan nama tamu via URL `?to=Bapak+Dosen`, klik buka undangan (musik berputar), jelaskan profil, countdown timer, lokasi Google Maps, salin rekening amplop digital, dan demonstrasikan pengisian form RSVP hingga pesan tampil seketika.
- **06:00 - 09:30 (Bedah HTML & Bootstrap 5)**: Buka VS Code, perlihatkan struktur semantik, sistem grid 12 kolom responsif (`col-md-5`, `col-lg-6`), komponen Card, Form, Badge, dan perlihatkan mode mobile di *Inspect Element*.
- **09:30 - 13:00 (Bedah CSS & JavaScript)**: Jelaskan variabel warna `:root`, animasi piringan hitam `@keyframes`, dan kode JS (`URLSearchParams`, mitigasi autoplay, rumus countdown timer, clipboard API, dan localStorage aman XSS).
- **13:00 - 15:00 (Deployment & Penutup)**: Tunjukkan repository GitHub yang aktif dan link GitHub Pages yang dapat diakses publik. Sampaikan kesimpulan dan salam penutup.
