document.addEventListener('DOMContentLoaded', () => {
    // Contoh fungsionalitas sederhana: Klik tombol Discover
    const discoverButton = document.querySelector('.discover-button');
    if (discoverButton) {
        discoverButton.addEventListener('click', () => {
            alert('Tombol Discover clicked! Anda bisa menambahkan navigasi ke bagian lain di sini.');
            // Contoh: scroll ke bagian "Hair to Toe"
            // document.querySelector('.section-title').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Contoh fungsionalitas sederhana: Klik ikon menu (fas-bars)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('Ikon menu diklik! Di sini Anda bisa menampilkan/menyembunyikan menu navigasi mobile.');
            // Anda bisa menambahkan class ke body atau nav untuk menampilkan menu
            // Misalnya: document.body.classList.toggle('menu-open');
        });
    }

    // Contoh fungsionalitas untuk ikon pencarian atau user
    const searchIcon = document.querySelector('.fa-search');
    const userIcon = document.querySelector('.fa-user');

    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            alert('Ikon pencarian diklik! Anda bisa menampilkan form pencarian di sini.');
        });
    }

    if (userIcon) {
        userIcon.addEventListener('click', () => {
            alert('Ikon user diklik! Anda bisa menampilkan halaman login/profil di sini.');
        });
    }
});