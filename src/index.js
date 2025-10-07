import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { createHomeModule } from "./home.js";
import { createMenuModule } from "./menu.js";

const content = document.getElementById("content");
const btnHome = document.getElementById("btnHome");
const btnMenu = document.getElementById("btnMenu");

btnHome.addEventListener("click", () => {
  clearContent();
  content.classList.remove("menu-module");
  content.classList.add("home-module");
  createHomeModule();
});

btnMenu.addEventListener("click", () => {
  clearContent();
  content.classList.remove("home-module");
  content.classList.add("menu-module");
  createMenuModule();
});

function clearContent() {
  content.innerHTML = "";
}

function firstCall() {
  content.classList.add("home-module");
  createHomeModule();
}

firstCall();
