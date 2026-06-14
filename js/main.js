// ===============================
// AOS INIT
// ===============================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

// Close menu on link click

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".main-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.top = "10px";

        navbar.querySelector(".nav-wrapper").style.background =
            "rgba(255,255,255,0.95)";

        navbar.querySelector(".nav-wrapper").style.boxShadow =
            "0 10px 30px rgba(0,0,0,.12)";

    } else {

        navbar.style.top = "20px";

        navbar.querySelector(".nav-wrapper").style.background =
            "rgba(255,255,255,.75)";

    }

});

// ===============================
// COUNTDOWN TIMER
// ===============================

// Wedding Date
const weddingDate = new Date("June 27, 2026 12:21:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

    }

}, 1000);

// ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// ===============================
// HERO IMAGE PARALLAX
// ===============================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

// ===============================
// SCROLL REVEAL CLASS
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});