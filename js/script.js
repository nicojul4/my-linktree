// Menunggu seluruh konten halaman dimuat sebelum menjalankan skrip
window.addEventListener("load", () => {
  // --- Inisialisasi Elemen ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleIcon = themeToggleBtn.querySelector("i");
  const htmlElement = document.documentElement;

  // --- Fungsi untuk Mengatur Tema ---
  function setTheme(theme) {
    if (theme === "dark") {
      htmlElement.classList.add("dark");
      themeToggleIcon.classList.remove("fa-sun");
      themeToggleIcon.classList.add("fa-moon");
      // Simpan pilihan tema pengguna
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      themeToggleIcon.classList.remove("fa-moon");
      themeToggleIcon.classList.add("fa-sun");
      // Simpan pilihan tema pengguna
      localStorage.setItem("theme", "light");
    }
  }

  // --- Event Listener untuk Tombol Tema ---
  themeToggleBtn.addEventListener("click", () => {
    const isDarkMode = htmlElement.classList.contains("dark");
    setTheme(isDarkMode ? "light" : "dark");
  });

  // --- Logika Saat Halaman Dimuat ---

  // 1. Atur tema berdasarkan preferensi yang tersimpan atau setelan OS
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Jika tidak ada tema tersimpan, gunakan preferensi OS
    setTheme(prefersDark ? "dark" : "light");
  }

  // 2. Jalankan animasi muat untuk setiap item
  const revealItems = document.querySelectorAll(".reveal-item");
  revealItems.forEach((item, index) => {
    // Beri jeda animasi untuk efek berurutan
    setTimeout(() => {
      item.classList.add("revealed");
    }, index * 100);
  });
});
