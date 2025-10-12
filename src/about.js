import { createFooter } from "./footer.js";
import restaurantImg from "./images/restaurant-vintage.jpg";
import fryingPanImg from "./images/frying-pan.jpg";

const imagesAbout = [restaurantImg, fryingPanImg];

function createAboutModule() {
  console.log("createAboutModule()");
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createSectionValues());
  content.appendChild(createSectionTeam());
  content.appendChild(createSectionCuisine());
  content.appendChild(createFooter());
}

function createHeader() {
  const header = document.createElement("header");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
  const quote = document.createElement("q");
  header.classList.add("card", "about-header");
  img.classList.add("img-restaurant");
  img.src = restaurantImg;
  img.alt = "an old house in vintage style";

  h2.textContent = "About The Recovery Room";
  p.textContent = `The Recovery Room began in 1985 when Trevor Sr. and his wife
     opened a small diner on the edge of town. Built on grit, family
     recipes, and a refusal to serve frozen meat, it became a haven for
     night-shift workers and lost souls. Now, run by the next
     generation, we keep the same fire — same grill, same pride, same
     damn good coffee. This isn’t just a restaurant. It’s legacy.`;
  quote.textContent = "We don’t follow trends. We follow recipes.";

  header.appendChild(h2);
  header.appendChild(p);
  header.appendChild(img);
  header.appendChild(quote);
  return header;
}

function createSectionValues() {
  const data = [
    {
      icon: "fa-leaf",
      span: "Real Food",
      text: ": No frozen meat, no shortcuts — just fresh ingredients and time-honored recipes.",
    },
    {
      icon: "fa-heart",
      span: "Relentless Hospitality",
      text: ": Everyone is welcome, respected, and served with warmth, no matter the hour.",
    },
    {
      icon: "fa-users",
      span: "Family First",
      text: ": We lead with loyalty, love, and the belief that family includes staff and regulars alike.",
    },
    {
      icon: "fa-tools",
      span: "Pride in Craft",
      text: ": Every dish is made by hand with skill, care, and tradition — because great food starts with respect for the craft.",
    },
    {
      icon: "fa-home",
      span: "Community Anchor",
      text: ": A place where everyone is welcome to unwind, recharge, and find comfort — body, mind, and soul.",
    },
  ];

  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");
  section.classList.add("card", "section-values");
  h2.textContent = "Our Values";

  data.forEach((item) => {
    const li = document.createElement("li");
    const i = document.createElement("i");
    const span = document.createElement("span");
    i.classList.add("fas", `${item.icon}`);
    span.classList.add("span-value");

    span.textContent = item.span;
    const text = document.createTextNode(item.text);

    li.appendChild(i);
    li.appendChild(span);
    li.appendChild(text);

    ul.appendChild(li);
  });

  section.appendChild(h2);
  section.appendChild(ul);

  return section;
}

function createSectionTeam() {
  const data = [
    {
      name: "Olaf Hirsch",
      role: "Owner",
      bio: `Olaf Hirsch carries on his grandfather’s legacy with pride,
            running the restaurant alongside his wife Annika. Together, they
            uphold the family’s values, ensuring every meal reflects their
            shared dedication to quality, tradition, and community.`,
    },
    {
      name: "Sebastian Hirsch",
      role: "Head Cook",
      bio: `Sebastian Hirsch, son of the owner, brings passion and precision
            to every dish. Cooking is his calling, and he pours his heart
            and soul into the kitchen, honoring family recipes while adding
            his own fire.`,
    },
    {
      name: "Florian Schröder",
      role: "Cook",
      bio: `Florian Schröder is Sebastian’s closest friend and trusted right
            hand in the kitchen. More than a cook, he’s family — reliable,
            skilled, and always ready to back up his brother in arms.`,
    },
    {
      name: "Annika Hirsch",
      role: "Waitress",
      bio: `Annika Hirsch, wife of owner Olaf, brings warmth and care to
            every guest. With a big heart and a keen eye, she’s always ready
            to lend a hand wherever needed — the soul behind the service.`,
    },
    {
      name: "Susanne Polter",
      role: "Waitress",
      bio: `Susanne Polter has been a steady presence at the restaurant for
            over 15 years. Cool under pressure, always smiling, and never
            flustered — she’s the calm in the chaos and a favorite among
            guests.`,
    },
    {
      name: "Tobias Hirsch",
      role: "Helping Hand",
      bio: `Tobias Hirsch, Sebastian’s son, is still in school but already
            proud to support the family restaurant. Always ready to help,
            he’s learning the values of hard work and hospitality firsthand.`,
    },
  ];
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  section.classList.add("card", "section-team");
  h2.textContent = "Our Team";
  section.appendChild(h2);

  data.forEach((item) => {
    const article = document.createElement("article");
    const header = document.createElement("header");
    const h3_header = document.createElement("h3");
    const p_header = document.createElement("p");
    const p = document.createElement("p");

    h3_header.textContent = item.name;
    p_header.textContent = item.role;

    p.textContent = item.bio;

    header.appendChild(h3_header);
    header.appendChild(p_header);

    article.appendChild(header);
    article.appendChild(p);

    section.appendChild(article);
  });
  return section;
}

function createSectionCuisine() {
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const article = document.createElement("article");
  const p_1 = document.createElement("p");
  const img = document.createElement("img");
  const p_2 = document.createElement("p");

  section.classList.add("card", "section-cuisine");
  img.classList.add("img-frying-pan");

  img.src = fryingPanImg;

  img.alt = "Chef tossing fresh tomatoes in a sizzling frying pan";

  h2.textContent = "Cuisine";
  p_1.textContent = `Our food is made the old-fashioned way — fresh ingredients from
                local farmers, no pre-cooked or frozen items, and recipes passed
                down through generations. Simple, honest, and full of flavor.`;
  p_2.textContent = `A splash of oil, fresh tomatoes, and a flick of the wrist — this
                is how flavor begins. Every dish starts right here, made by
                hand, never rushed.`;

  article.appendChild(p_1);
  article.appendChild(img);
  article.appendChild(p_2);

  section.appendChild(h2);
  section.appendChild(article);

  return section;
}

export { createAboutModule, imagesAbout };
