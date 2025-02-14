const words = ["Software Developer", "Data Scientist"];
let wordIndex = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingText = document.querySelector(".typing-text");
  const cursor = document.querySelector(".cursor");

  if (isDeleting) {
    currentText = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    currentText = words[wordIndex].substring(0, letterIndex + 1);
    letterIndex++;
  }

  typingText.innerHTML = `A ${currentText}<span class="cursor">|</span>`;

  if (!isDeleting && letterIndex === words[wordIndex].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents default jump behavior

    const targetId = this.getAttribute("href"); // Get section ID
    const targetSection = document.querySelector(targetId); // Find the section

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop, // Scroll to section
        behavior: "smooth", // Enable smooth scrolling
      });
    }
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Replace with your FormSubmit email handler
    const formAction = "https://formsubmit.co/prathampmahajan28@gmail.com";

    const formData = new FormData(this);

    fetch(formAction, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("successMessage").style.display = "block";
          document.getElementById("contactForm").reset();
        } else {
          alert("Something went wrong. Please try again!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error sending your message.");
      });
  });

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check for saved user preference in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
}

// Toggle Dark Mode
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");

  // Save user preference in localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Update the toggle button icon
  darkModeToggle.innerHTML = isDarkMode
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a'); // Select all the links inside the menu

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('active');
        });
    });

    // Close the menu on scroll
    window.addEventListener('scroll', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });

    // Optional: Close menu when clicking outside of it (useful on larger screens)
    document.addEventListener('click', (event) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu.querySelectorAll('a'); // Select all the links inside the menu

  menuIcon.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuIcon.classList.toggle('active');
  });

  // Close the menu when a link is clicked
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          menuIcon.classList.remove('active');
      });
  });

  // Close the menu on scroll
  window.addEventListener('scroll', () => {
      if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          menuIcon.classList.remove('active');
      }
  });

  // Optional: Close menu when clicking outside of it (useful on larger screens)
  document.addEventListener('click', (event) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
          navMenu.classList.remove('active');
          menuIcon.classList.remove('active');
      }
  });
});