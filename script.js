document.addEventListener("DOMContentLoaded", function () {

  // 1. Mobile Navigation
  const menuToggle = document.querySelector(
    ".menu-toggle, #menu-toggle, .hamburger"
  );

  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      const isOpen = navLinks.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 2. Automatic Footer Year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. Back To Top Button
  const backToTop = document.querySelector(
    "#back-to-top, .back-to-top"
  );

  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 350) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 4. Smooth Scrolling
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // 5. Contact Form Validation
  const contactForm = document.querySelector(
    ".contact-form, #contact-form"
  );

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        contactForm.reportValidity();
        return;
      }

      const submitButton = contactForm.querySelector(
        'button[type="submit"], input[type="submit"]'
      );

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }
    });
  }

  // 6. FAQ (Only if FAQ section exists)
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    const question = item.querySelector(".faq-question");

    if (question) {
      question.addEventListener("click", function () {
        item.classList.toggle("active");
      });
    }
  });

  // 7. Console Confirmation
  console.log("WebNova Solutions website loaded successfully!");

});
