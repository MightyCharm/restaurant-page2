import "@fortawesome/fontawesome-free/css/all.css";
import "./shared.css";
import "./home.css";
import "./menu.css";
import "./about.css";
import { createHomeModule } from "./home.js";
import { createMenuModule, imagesMenu } from "./menu.js";
import { createAboutModule, imagesAbout } from "./about.js";

const content = document.getElementById("content");
const btnHome = document.getElementById("btnHome");
const btnMenu = document.getElementById("btnMenu");
const btnAbout = document.getElementById("btnAbout");

btnHome.addEventListener("click", () => {
  setActiveModule("home-module", createHomeModule);
  setActiveButton(btnHome);
});

btnMenu.addEventListener("click", () => {
  setActiveModule("menu-module", createMenuModule);
  setActiveButton(btnMenu);
});

btnAbout.addEventListener("click", () => {
  setActiveModule("about-module", createAboutModule);
  setActiveButton(btnAbout);
});

function setActiveModule(module, createModule) {
  content.innerHTML = "";
  content.classList.remove("menu-module", "home-module", "about-module");
  content.classList.add(module);
  createModule();
}

function setActiveButton(btn) {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  btn.classList.add("active");
}

function preloadImages(images) {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function firstCall() {
  setActiveModule("home-module", createHomeModule);
  setActiveButton(btnHome);
  preloadImages(imagesMenu);
  preloadImages(imagesAbout);
}

firstCall();