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
  if (!iframe) return;

  const dots = document.querySelectorAll(".video-dots .dot");
  const prevBtn = document.getElementById("prevVideo");
  const nextBtn = document.getElementById("nextVideo");

  const videos = [
    "https://www.youtube.com/embed/ViTG3HZfwgk?si=JnnQqrmHm_BV3mI_",
    "https://www.youtube.com/embed/mNOrxG7mDFU?si=hkhSXtpe9CEFkJH7",
    "https://www.youtube.com/embed/nrYGRF-mB10",
  ];

  let currentVideo = 0;

  function changeVideo(index) {
    if (index < 0 || index >= videos.length) return;

    currentVideo = index;
    iframe.src = videos[currentVideo] + "?t=" + Date.now();

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentVideo);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => changeVideo(index));
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentVideo = currentVideo > 0 ? currentVideo - 1 : videos.length - 1;
      changeVideo(currentVideo);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentVideo = currentVideo < videos.length - 1 ? currentVideo + 1 : 0;
      changeVideo(currentVideo);
    });
  }
});

// Testimonials
document.addEventListener("DOMContentLoaded", function () {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const testimonialDots = document.querySelectorAll(".testimonial-dots .dot");
  const testimonialsSection = document.querySelector(".testimonials-section");
  let currentTestimonial = 0;
  let autoRotateInterval;

  function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });

    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentTestimonial = index;
  }

  function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  }

  function stopAutoRotate() {
    clearInterval(autoRotateInterval);
  }

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => showTestimonial(index));
  });

  testimonialsSection.addEventListener("mouseenter", stopAutoRotate);
  testimonialsSection.addEventListener("mouseleave", startAutoRotate);

  startAutoRotate();
});

// Load More/Show Less Photos - Galerie
document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const showLessBtn = document.getElementById("showLessBtn");
  const hiddenPhotos = document.querySelectorAll(".photo-item.hidden");

  if (loadMoreBtn && hiddenPhotos.length > 0) {
    loadMoreBtn.addEventListener("click", function () {
      hiddenPhotos.forEach((photo) => {
        photo.classList.remove("hidden");
      });
      loadMoreBtn.classList.add("hidden");
      if (showLessBtn) {
        showLessBtn.classList.remove("hidden");
      }
    });
  }

  if (showLessBtn) {
    showLessBtn.addEventListener("click", function () {
      hiddenPhotos.forEach((photo) => {
        photo.classList.add("hidden");
      });
      showLessBtn.classList.add("hidden");
      if (loadMoreBtn) {
        loadMoreBtn.classList.remove("hidden");
      }
      document.querySelector("#photo-item-12").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});

// automate years
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();

  const availabilityCurrentYear = document.getElementById(
    "availability-current-year"
  );
  const availabilityNextYear = document.getElementById(
    "availability-next-year"
  );

  if (availabilityCurrentYear) {
    availabilityCurrentYear.textContent = currentYear;
  }

  if (availabilityNextYear) {
    availabilityNextYear.textContent = currentYear + 1;
  }

  const copyrightYear = document.getElementById("current-year");
  if (copyrightYear) {
    copyrightYear.textContent = currentYear;
  }
});

// Cookie Consent
document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookie-consent");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  if (!localStorage.getItem("cookieConsent")) {
    cookieConsent.style.display = "block";
  }

  acceptBtn.addEventListener("click", function () {
    gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
    });
    localStorage.setItem("cookieConsent", "accepted");
    cookieConsent.style.display = "none";
  });

  rejectBtn.addEventListener("click", function () {
    gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
    localStorage.setItem("cookieConsent", "rejected");
    cookieConsent.style.display = "none";
  });
});
