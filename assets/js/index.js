// Navbar

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamMenu = document.querySelector(".ham-menu");
  const navLinks = document.querySelector(".nav-links");
  const mobileActive = document.querySelector(".phone-button");

  hamMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamMenu.classList.toggle("active");
    mobileActive.classList.toggle("mobile-active");
  });
});

// Image
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const galleryImages = document.querySelectorAll(".photo-item img");

  galleryImages.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      lightbox.style.display = "block";
      lightboxImg.src = this.src;
    });
  });

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
});

// Video player
document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.getElementById("mainVideo");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevVideo");
  const nextBtn = document.getElementById("nextVideo");

  const videos = [
    "https://www.youtube.com/embed/tAGnKpE4NCI?si=obTmSRDPNaAotOwx",
    "https://www.youtube.com/embed/CD-E-LDc384?si=dt6uEKS0AunLOuEf",
    "https://www.youtube.com/embed/E0ozmU9cJDg?si=9Axlo0Y4uISdzczG",
  ];

  let currentVideo = 0;

  function changeVideo(index) {
    currentVideo = index;
    iframe.src = videos[currentVideo];

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentVideo);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => changeVideo(index));
  });

  prevBtn.addEventListener("click", () => {
    currentVideo = currentVideo > 0 ? currentVideo - 1 : videos.length - 1;
    changeVideo(currentVideo);
  });

  nextBtn.addEventListener("click", () => {
    currentVideo = currentVideo < videos.length - 1 ? currentVideo + 1 : 0;
    changeVideo(currentVideo);
  });
});
