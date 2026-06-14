"use strict";

// ===============================
// AOS INIT
// ===============================
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
}); // ===============================
// MOBILE MENU
// ===============================

var menuToggle = document.querySelector(".menu-toggle");
var mobileMenu = document.querySelector(".mobile-menu");
var closeMenu = document.querySelector(".close-menu");
menuToggle.addEventListener("click", function () {
  mobileMenu.classList.add("active");
});
closeMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
}); // Close menu on link click

document.querySelectorAll(".mobile-menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
}); // ===============================
// NAVBAR SCROLL EFFECT
// ===============================

var navbar = document.querySelector(".main-navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.style.top = "10px";
    navbar.querySelector(".nav-wrapper").style.background = "rgba(255,255,255,0.95)";
    navbar.querySelector(".nav-wrapper").style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
  } else {
    navbar.style.top = "20px";
    navbar.querySelector(".nav-wrapper").style.background = "rgba(255,255,255,.75)";
  }
}); // ===============================
// COUNTDOWN TIMER
// ===============================
// Wedding Date

var weddingDate = new Date("June 27, 2026 12:21:00").getTime();
var countdown = setInterval(function () {
  var now = new Date().getTime();
  var distance = weddingDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(distance % (1000 * 60) / 1000);
  document.getElementById("days").innerHTML = String(days).padStart(2, "0");
  document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000); // ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================

var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-menu a");
window.addEventListener("scroll", function () {
  var current = "";
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#".concat(current)) {
      link.classList.add("active");
    }
  });
}); // ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}); // ===============================
// HERO IMAGE PARALLAX
// ===============================

var heroImage = document.querySelector(".hero-image");
window.addEventListener("mousemove", function (e) {
  var x = (window.innerWidth / 2 - e.clientX) / 50;
  var y = (window.innerHeight / 2 - e.clientY) / 50;
  heroImage.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
}); // ===============================
// SCROLL REVEAL CLASS
// ===============================

window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});