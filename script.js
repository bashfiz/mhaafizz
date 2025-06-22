document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA UNTUK HERO SLIDER ---
    const slider = document.querySelector('.hero-slider');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');

    if (slider && sliderWrapper && slides.length > 0) {
        let slideIndex = 0;
        const slideCount = slides.length;
        let autoSlideInterval;

        // ---- BAGIAN BARU: Variabel untuk deteksi sentuhan/swipe ----
        let touchStartX = 0;
        let touchEndX = 0;
        let isDragging = false;
        const slideWidth = slides[0].clientWidth;

        // Buat titik-titik (dots) secara dinamis
        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot');
        if (dots.length > 0) {
            dots[0].classList.add('active');
        }

        function goToSlide(index) {
            if (index < 0) {
                slideIndex = slideCount - 1;
            } else if (index >= slideCount) {
                slideIndex = 0;
            } else {
                slideIndex = index;
            }
            sliderWrapper.style.transition = 'transform 0.5s ease-in-out'; // Pastikan transisi aktif
            sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
            updateDots();
        }

        function updateDots() {
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots.length > 0) {
                dots[slideIndex].classList.add('active');
            }
        }

        // Fungsi untuk tombol (hanya untuk desktop)
        nextBtn.addEventListener('click', () => {
            goToSlide(slideIndex + 1);
            resetAutoSlide();
        });
        prevBtn.addEventListener('click', () => {
            goToSlide(slideIndex - 1);
            resetAutoSlide();
        });

        // --- BAGIAN BARU: Event Listener untuk Geser (Swipe) ---
        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            touchStartX = e.touches[0].clientX;
            sliderWrapper.style.transition = 'none'; // Matikan transisi saat jari menempel
            stopAutoSlide();
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            touchEndX = e.touches[0].clientX;
            const diff = touchEndX - touchStartX;
            // Geser slide mengikuti pergerakan jari secara real-time
            sliderWrapper.style.transform = `translateX(calc(-${slideIndex * 100}% + ${diff}px))`;
        });

        slider.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            const diff = touchEndX - touchStartX;

            // Tentukan apakah geserannya cukup jauh untuk pindah slide
            if (diff < -50) { // Geser ke kiri
                goToSlide(slideIndex + 1);
            } else if (diff > 50) { // Geser ke kanan
                goToSlide(slideIndex - 1);
            } else { // Jika geseran tidak cukup jauh, kembali ke posisi semula
                goToSlide(slideIndex);
            }
            startAutoSlide(); // Mulai lagi otomatis setelah jari diangkat
        });

        // Fungsi slide otomatis
        function startAutoSlide() {
            stopAutoSlide();
            autoSlideInterval = setInterval(() => {
                goToSlide(slideIndex + 1);
            }, 3000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        function resetAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }
        
        startAutoSlide();
    }

    // --- KODE LAMA UNTUK FUNGSI LAIN (TETAP SEBAGAI PLACEHOLDER) ---
    // (Tidak ada perubahan di bagian ini)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => alert('Menu toggled!'));
    }

    const searchIcon = document.querySelector('.fa-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', () => alert('Fitur pencarian akan segera hadir!'));
    }

    const userIcon = document.querySelector('.fa-user');
    if (userIcon) {
        userIcon.addEventListener('click', () => alert('Halaman profil/login akan segera hadir!'));
    }
});