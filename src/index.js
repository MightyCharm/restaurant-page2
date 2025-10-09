import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { createHomeModule } from "./home.js";
import { createMenuModule } from "./menu.js";
import { createAboutModule } from "./about.js";

const content = document.getElementById("content");
const btnHome = document.getElementById("btnHome");
const btnMenu = document.getElementById("btnMenu");

btnHome.addEventListener("click", () => {
  setActiveModule("home-module", createHomeModule);
});

btnMenu.addEventListener("click", () => {
  setActiveModule("menu-module", createMenuModule);
});

btnAbout.addEventListener("click", () => {
  setActiveModule("about-module", createAboutModule);
});

function setActiveModule(module, createModule) {
  content.innerHTML = "";
  content.classList.remove("menu-module", "home-module", "about-module");
  content.classList.add(module);
  createModule();
}

function firstCall() {
  setActiveModule("home-module", createHomeModule);
}

firstCall();
