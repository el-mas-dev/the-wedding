// inisialisasi awal pas web pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
  // ambil nama tamu dari parameter URL (?to=nama atau ?guest=nama)
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || urlParams.get('guest') || 'Tamu Undangan';
  
  // tampilkan nama tamu ke elemen undangan
  const guestDisplayElements = document.querySelectorAll('.guest-name-text');
  guestDisplayElements.forEach(element => {
    element.textContent = guestName;
  });

  // ambil data ucapan yang tersimpan di browser
  loadWishes();

  // jalankan animasi scroll
  setupScrollAnimations();
});

// setup animasi scroll AOS
function setupScrollAnimations() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 120,
      anchorPlacement: 'top-bottom'
    });
  }
}

// elemen kontrol buka cover & audio
const cover = document.getElementById('cover');
const btnOpenInvitation = document.getElementById('btn-open-invitation');
const bgMusic = document.getElementById('bg-music');
const audioControl = document.getElementById('audio-control');
const audioIcon = document.getElementById('audio-icon');
let isPlaying = false;

// klik tombol buka undangan
if (btnOpenInvitation) {
  btnOpenInvitation.addEventListener('click', () => {
    cover.classList.add('opened');
    document.body.classList.remove('locked');

    // putar backsound otomatis setelah klik
    playAudio();

    // refresh posisi elemen AOS setelah cover terbuka
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refreshHard();
      }
    }, 600);
  });
}

// play musik & putar icon vinyl
function playAudio() {
  if (bgMusic) {
    bgMusic.play().then(() => {
      isPlaying = true;
      audioControl.classList.add('rotating');
      audioIcon.classList.remove('bi-play-fill');
      audioIcon.classList.add('bi-pause-fill');
    }).catch(error => {
      console.warn('Autoplay dicegah browser:', error);
    });
  }
}

// pause musik
function pauseAudio() {
  if (bgMusic) {
    bgMusic.pause();
    isPlaying = false;
    audioControl.classList.remove('rotating');
    audioIcon.classList.remove('bi-pause-fill');
    audioIcon.classList.add('bi-play-fill');
  }
}

// tombol toggle musik di pojok kanan bawah
if (audioControl) {
  audioControl.addEventListener('click', () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  });
}

// target tanggal acara pernikahan
const weddingDate = new Date('2026-18-12T09:00:00').getTime();

const timerDays = document.getElementById('days');
const timerHours = document.getElementById('hours');
const timerMinutes = document.getElementById('minutes');
const timerSeconds = document.getElementById('seconds');

// fungsi hitung mundur
function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (timerDays) timerDays.textContent = String(days).padStart(2, '0');
    if (timerHours) timerHours.textContent = String(hours).padStart(2, '0');
    if (timerMinutes) timerMinutes.textContent = String(minutes).padStart(2, '0');
    if (timerSeconds) timerSeconds.textContent = String(seconds).padStart(2, '0');
  } else {
    if (timerDays) timerDays.textContent = '00';
    if (timerHours) timerHours.textContent = '00';
    if (timerMinutes) timerMinutes.textContent = '00';
    if (timerSeconds) timerSeconds.textContent = '00';
  }
}

// update countdown setiap 1 detik
setInterval(updateCountdown, 1000);
updateCountdown();

// tombol copy nomor rekening
function copyAccountNumber(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalContent = btnElement.innerHTML;
    btnElement.innerHTML = '<i class="bi bi-check-circle-fill me-1"></i> Tersalin!';
    btnElement.classList.remove('btn-outline-gold', 'btn-light');
    btnElement.classList.add('btn-success');

    setTimeout(() => {
      btnElement.innerHTML = originalContent;
      btnElement.classList.remove('btn-success');
      btnElement.classList.add('btn-outline-light');
    }, 2500);
  }).catch(err => {
    console.error('Gagal salin rekening:', err);
  });
}

// form rsvp & daftar ucapan
const rsvpForm = document.getElementById('rsvp-form');
const wishesList = document.getElementById('wishes-list');

// ucapan default awal
const defaultWishes = [
  {
    name: 'Dimas & Keluarga',
    status: 'Hadir',
    message: 'Selamat berbahagia untuk kedua mempelai! Semoga menjadi keluarga yang sakinah, mawaddah, dan warahmah. Aamiin.',
    time: '1 jam yang lalu'
  },
  {
    name: 'Siti Rahmawati',
    status: 'Hadir',
    message: 'Barakallahu lakuma wa baraka alaikuma wa jamaa bainakuma fii khoir. Lancar sampai hari H ya!',
    time: '3 jam yang lalu'
  }
];

// load ucapan dari localStorage
function loadWishes() {
  if (!wishesList) return;

  let storedWishes = JSON.parse(localStorage.getItem('wedding_wishes'));
  if (!storedWishes || storedWishes.length === 0) {
    storedWishes = defaultWishes;
    localStorage.setItem('wedding_wishes', JSON.stringify(storedWishes));
  }

  wishesList.innerHTML = '';
  storedWishes.forEach(item => {
    const badgeClass = item.status === 'Hadir' ? 'bg-success' : 'bg-secondary';
    const card = document.createElement('div');
    card.className = 'wish-item';
    card.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-1">
        <strong class="text-dark">${escapeHtml(item.name)}</strong>
        <span class="badge ${badgeClass}">${escapeHtml(item.status)}</span>
      </div>
      <p class="mb-1 text-muted small">${escapeHtml(item.message)}</p>
      <span class="text-muted" style="font-size: 0.75rem;">
        <i class="bi bi-clock me-1"></i>${escapeHtml(item.time || 'Baru saja')}
      </span>
    `;
    wishesList.appendChild(card);
  });
}

// submit form rsvp
if (rsvpForm) {
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('rsvp-name').value.trim();
    const status = document.getElementById('rsvp-status').value;
    const message = document.getElementById('rsvp-message').value.trim();

    if (!name || !status || !message) {
      alert('Mohon lengkapi semua kolom formulir.');
      return;
    }

    const newWish = {
      name: name,
      status: status,
      message: message,
      time: 'Baru saja'
    };

    let storedWishes = JSON.parse(localStorage.getItem('wedding_wishes')) || [];
    storedWishes.unshift(newWish);
    localStorage.setItem('wedding_wishes', JSON.stringify(storedWishes));

    rsvpForm.reset();
    loadWishes();

    alert('Terima kasih atas konfirmasi kehadiran dan doa restunya!');
  });
}

// sanitasi input teks untuk hindari XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
