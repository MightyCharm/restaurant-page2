function createFooter() {
  const footer = document.createElement("footer");
  const para1 = document.createElement("p");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const para2 = document.createElement("p");

  para1.classList.add("sentence");
  div.classList.add("location");
  footer.classList.add("card", "card-home-footer");

  para1.innerHTML =
    "<span>Good</span> food, <span>good</span> vibes, <span>good</span> people — welcome home.";
  h3.textContent = "Location";
  para2.innerHTML =
    "The Recovery Room<br />123 Serenity Lane<br />Portland, OR 97205<br />USA";

  div.appendChild(h3);
  div.appendChild(para2);

  footer.appendChild(para1);
  footer.appendChild(div);
  return footer;
}

export { createFooter };