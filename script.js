document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA UNTUK HERO SLIDER ---
    const slider = document.querySelector('.hero-slider');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');

    // Cek apakah elemen slider ada di halaman
    if (slider && sliderWrapper && slides.length > 0) {
        let slideIndex = 0;
        const slideCount = slides.length;
        let autoSlideInterval;

        // Buat titik-titik (dots) secara dinamis
        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                goToSlide(i);
                // Reset interval saat dot diklik manual
                stopAutoSlide();
                startAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot');
        if(dots.length > 0) {
            dots[0].classList.add('active');
        }

        // Fungsi utama untuk menampilkan slide
        function goToSlide(index) {
            if (index < 0) {
                slideIndex = slideCount - 1;
            } else if (index >= slideCount) {
                slideIndex = 0;
            } else {
                slideIndex = index;
            }

            sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

            // Update titik aktif
            dots.forEach(dot => dot.classList.remove('active'));
            if(dots.length > 0) {
                dots[slideIndex].classList.add('active');
            }
        }

        // Fungsi untuk tombol
        nextBtn.addEventListener('click', () => {
            goToSlide(slideIndex + 1);
            stopAutoSlide();
            startAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            goToSlide(slideIndex - 1);
            stopAutoSlide();
            startAutoSlide();
        });

        // Fungsi slide otomatis
        function startAutoSlide() {
            stopAutoSlide(); // Hentikan dulu interval yang mungkin sudah ada
            autoSlideInterval = setInterval(() => {
                goToSlide(slideIndex + 1);
            }, 3000); // Pindah setiap 3 detik
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Mulai slide otomatis saat halaman dimuat
        startAutoSlide();
    }


    // --- KODE LAMA UNTUK FUNGSI LAIN (TETAP SEBAGAI PLACEHOLDER) ---

    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('Menu toggled!');
        });
    }

    const searchIcon = document.querySelector('.fa-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            alert('Fitur pencarian akan segera hadir!');
        });
    }

    const userIcon = document.querySelector('.fa-user');
    if (userIcon) {
        userIcon.addEventListener('click', () => {
            alert('Halaman profil/login akan segera hadir!');
        });
    }
});