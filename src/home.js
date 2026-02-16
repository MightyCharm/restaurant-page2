import { createFooter } from "./footer.js";
import { data } from "./menu.js";

let dailyDish = null;

function createHomeModule() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createHours());
  content.appendChild(createEvents());
  content.appendChild(getRandomDish());
  content.appendChild(createFooter());
}

function createHeader() {
  const header = document.createElement("header");
  const para = document.createElement("p");
  header.classList.add("home-header");
  para.textContent = `The Recovery Room — a place to unwind and recover from daily \
    stress. Just relax, breathe, and recharge. We use only good ingredients in all \
    our food and drinks — nothing fake, nothing cheap. Just honest, quality stuff \
    that fuels your recovery. Served in a friendly atmosphere where good vibes come \
    easy. No rush, no noise — just peace, flavor, and real moments.`;
  header.appendChild(para);
  return header;
}

function createDailyDish(dish) {
  console.log(dish);
  const section = document.createElement("section");
  const article = document.createElement("article");
  const p = document.createElement("p");
  const strongName = document.createElement("strong");
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  const divPriceInfo = document.createElement("div");
  const del = document.createElement("del");
  const span = document.createElement("span");
  const strongDiscountPrice = document.createElement("strong");

  p.textContent = "Our daily special today";
  strongName.textContent = dish.name;
  figcaption.textContent = dish.caption;

  section.classList.add("featured-dish");
  img.classList.add("img-featured-dish");
  divPriceInfo.classList.add("price-info");
  span.classList.add("discount");
  strongDiscountPrice.classList.add("discount");

  del.innerHTML = `<span class='currency'>$</span>${dish.price}`;
  span.textContent = "10%";
  strongDiscountPrice.textContent = `$${dish.discount}`;

  img.src = dish.img;
  img.alt = dish.alt;

  figure.appendChild(img);
  figure.appendChild(figcaption);
  divPriceInfo.appendChild(del);
  divPriceInfo.appendChild(span);
  divPriceInfo.appendChild(strongDiscountPrice);
  article.appendChild(p);
  article.appendChild(strongName);
  article.appendChild(figure);
  article.appendChild(divPriceInfo);
  section.appendChild(article);

  return section;
}

function getRandomDish() {
  if (!dailyDish) {
    dailyDish = data[Math.floor(Math.random() * data.length)];
  }
  return createDailyDish(dailyDish);
}

function createHours() {
  // data
  const hoursList = [
    { day: "Monday:", time: "Closed" },
    { day: "Tuesday - Thursday:", time: "12 PM - 9 PM" },
    { day: "Friday - Saturday:", time: "12 PM - 11 PM" },
    { day: "Sunday:", time: "1 PM - 8 PM" },
  ];

  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");

  section.classList.add("home-hours");

  h2.textContent = "Opening Hours";

  hoursList.forEach((data) => {
    const li = document.createElement("li");
    const span_day = document.createElement("span");
    const span_hours = document.createElement("span");

    span_day.classList.add("span-day");
    span_hours.classList.add("span-time-hours");

    span_day.textContent = data.day;
    span_hours.textContent = data.time;

    li.appendChild(span_day);
    li.appendChild(span_hours);

    ul.appendChild(li);
  });

  section.appendChild(h2);
  section.appendChild(ul);

  return section;
}

function createEvents() {
  const events = [
    { day: "Fri:", description: "Live Acoustic Night", time: "7 PM" },
    { day: "Sat:", description: "Strongman Challenge", time: "10 AM" },
    { day: "Sun:", description: "Yoga Brunch", time: "9 AM" },
    { day: "Monthly:", description: "No-Screen Dinner", time: "Last Wed" },
  ];

  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");

  section.classList.add("home-events");

  h2.textContent = "Events";

  events.forEach((data) => {
    const li = document.createElement("li");
    const span_day = document.createElement("span");
    const span_description = document.createElement("span");
    const span_hours = document.createElement("span");

    span_day.classList.add("span-day");
    span_hours.classList.add("span-time-event");

    span_day.textContent = data.day;
    span_description.textContent = data.description;
    span_hours.textContent = data.time;

    li.appendChild(span_day);
    li.appendChild(span_description);
    li.appendChild(span_hours);

    ul.appendChild(li);
  });

  section.appendChild(h2);
  section.appendChild(ul);

  return section;
}

export { createHomeModule };
