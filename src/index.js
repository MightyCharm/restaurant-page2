import "./shared.css";
import "./home.css";
import "./menu.css";
import "./about.css";

import "@fortawesome/fontawesome-free/css/all.css";
import { createHomeModule } from "./home.js";
import { createMenuModule } from "./menu.js";
import { createAboutModule } from "./about.js";

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

function firstCall() {
  setActiveModule("home-module", createHomeModule);
}

firstCall();
