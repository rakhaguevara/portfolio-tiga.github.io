// Navbar Scroll
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger Menu Toggle
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di Luar Hamburger untuk Menutup Menu
window.addEventListener("click", function (e) {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Set Toggle Posisi sesuai Mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Typing Effect
document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typing-text");
  const text = "Rakha Dzikra Guevara"; // The text to type
  let index = 0;

  // Function to start the typing animation
  function type() {
    typingText.textContent = ""; // Clear previous text content
    index = 0; // Reset index for the typing effect

    // Function to handle each typing step
    function typingStep() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typingStep, 100); // Adjust typing speed here
      }
    }

    typingText.classList.add("animate-typing");
    typingStep();
  }

  // Initial typing effect when the page loads
  type();

  // Listen for changes in theme (light/dark mode)
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Function to handle theme change and restart the typing animation
  function handleThemeChange() {
    typingText.textContent = ""; // Clear current text
    type(); // Restart typing animation
  }

  // Add listener to detect theme change
  mediaQuery.addEventListener("change", handleThemeChange);

  // If the page loads with a dark mode preference, start typing again
  if (mediaQuery.matches) {
    handleThemeChange();
  }
});

// Styling dan Filter Project
document.addEventListener("DOMContentLoaded", function () {
  const uiuxButton = document.getElementById("show-uiux");
  const frontendButton = document.getElementById("show-frontend");
  const allButton = document.getElementById("show-all");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  const buttons = [uiuxButton, frontendButton, allButton];

  // Fungsi untuk mengatur ulang warna tombol
  function resetButtonColors() {
    buttons.forEach((button) => {
      button.classList.remove("bg-primary", "text-white");
      button.classList.add("bg-secondary", "text-dark", "dark:text-white"); // Warna default
    });

    // Khusus untuk tombol "All Projects", biarkan tetap putih
    allButton.classList.remove("text-dark", "dark:text-white");
    allButton.classList.add("text-white");
  }

  // Fungsi untuk memfilter portofolio
  function filterPortfolio(category) {
    portfolioItems.forEach((item) => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block"; // Tampilkan item
        item.classList.remove("animate-fadeOut");
        item.classList.add("animate-fadeIn");
      } else {
        item.style.display = "none"; // Sembunyikan item
        item.classList.remove("animate-fadeIn");
        item.classList.add("animate-fadeOut");
      }
    });
  }

  // Set kategori default ke "uiux" saat halaman dimuat
  function setDefaultCategory() {
    resetButtonColors();
    uiuxButton.classList.add("bg-primary", "text-white"); // Tandai tombol "UI/UX Projects" sebagai aktif
    filterPortfolio("uiux"); // Tampilkan hanya kategori "uiux"
  }

  // Event Listener untuk tombol
  uiuxButton.addEventListener("click", function () {
    resetButtonColors();
    uiuxButton.classList.add("bg-primary", "text-white");
    filterPortfolio("uiux");
  });

  frontendButton.addEventListener("click", function () {
    resetButtonColors();
    frontendButton.classList.add("bg-primary", "text-white");
    filterPortfolio("frontend");
  });

  allButton.addEventListener("click", function () {
    resetButtonColors();
    allButton.classList.add("bg-primary", "text-white");
    filterPortfolio("all");
  });

  // Panggil fungsi untuk mengatur kategori default saat halaman dimuat
  setDefaultCategory();
});

// js for image

document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("animated-image");

  // Cek jika animasi sudah dijalankan sebelumnya menggunakan localStorage
  if (!localStorage.getItem("image-animated")) {
    // Jika belum, tambahkan kelas animasi
    image.classList.add("animate-fadeInUp");

    // Tandai di localStorage bahwa animasi sudah dijalankan
    localStorage.setItem("image-animated", "true");
  }
});
