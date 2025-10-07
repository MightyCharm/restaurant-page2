import sparklingWaterImg from "./images/sparkling-water.jpg";
import juiceImg from "./images/orange-juice.jpg";
import colaImg from "./images/cola.jpg";
import beerImg from "./images/beer.jpg";
import wineImg from "./images/wine.jpg";
import margaritaImg from "./images/margarita.jpg";
import soupTomatoImg from "./images/soup-tomato.jpeg";
import soupPumpkinImg from "./images/soup-pumpkin-cream.jpeg";
import soupAsparagusImg from "./images/soup-asparagus.jpg";
import shrimpSaladImg from "./images/shrimp-salad.jpeg";
import saladChickenImg from "./images/salad-chicken-egg.jpeg";
import saladTomatoImg from "./images/salad-tomato.jpg";
import steakFriesImg from "./images/steak-fries.jpeg";
import hamburgerFriesImg from "./images/hamburger-fries.jpg";
import pizzaSalamiImg from "./images/pizza-salami.jpg";
import pizzaMargheritaImg from "./images/pizza-margherita.jpeg";
import fishVegetablesImg from "./images/fish-vegetables.jpg";
import schnitzelImg from "./images/schnitzel.jpg";
import iceCreamVanillaImg from "./images/ice-cream-vanilla.jpeg";
import iceCreamChocolateImg from "./images/ice-cream-chocolate.jpeg";
import chocolateCakeImg from "./images/chocolate-cake.jpg";
import cheeseCakeImg from "./images/cheesecake.jpg";
import bananaSplitImg from "./images/banana-split.jpg";
import waffleIceImg from "./images/waffle-ice.jpg";

function createMenuModule() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createSectionDrinks());
  content.appendChild(createSectionStarter());
  content.appendChild(createSectionMainCourse());
  content.appendChild(createSectionDessert());
}

function createHeader() {
  const header = document.createElement("header");
  const h2 = document.createElement("h2");
  header.classList.add("card", "card-menu-header");
  h2.textContent = "MENU";
  header.appendChild(h2);

  return header;
}

function createSectionDrinks() {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  section.classList.add("section", "section-drinks");
  h3.classList.add("card");
  h3.textContent = "Drinks";
  section.appendChild(h3);

  const data = [
    {
      name: "Sparkling Water",
      img: sparklingWaterImg,
      alt: "Sparkling Water with ice cubes in a glass",
      caption: "Chilled sparkling water with a delicate effervescence",
      price: "2.00",
    },
    {
      name: "Orange Juice",
      img: juiceImg,
      alt: "Fresh orange juice in a glass with ice cubes and a slice of lemon",
      caption: "Freshly poured orange juice, bright and naturally sweet",
      price: "3.00",
    },
    {
      name: "Cola",
      img: colaImg,
      alt: "Cold cola in a clear glass with ice cubes",
      caption: "Classic cola with a crisp, refreshing finish",
      price: "3.00",
    },
    {
      name: "Beer",
      img: beerImg,
      alt: "A cold glass of beer with a smooth, creamy foam head",
      caption: "Cold draft beer, smooth and lightly hopped",
      price: "4.00",
    },
    {
      name: "Wine",
      img: wineImg,
      alt: "Glass of red wine in a stemmed glass",
      caption: "Glass of premium house wine, balanced and inviting",
      price: "6.00",
    },
    {
      name: "Margarita",
      img: margaritaImg,
      alt: "Citrus margarita in a salt-rimmed glass",
      caption: "Zesty margarita with fresh lime and a hint of orange",
      price: "6.50",
    },
  ];
  return createSection(section, data);
}

function createSectionStarter() {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  section.classList.add("section", "section-starter");
  h3.classList.add("card");
  h3.textContent = "Starter";
  section.appendChild(h3);

  const data = [
    {
      name: "Tomato Soup",
      img: soupTomatoImg,
      alt: "Creamy tomato soup in a white bowl with fresh basil garnish, bread and tomatoes",
      caption: "Creamy tomato bisque with fresh basil and a hint of garlic",
      price: "5.50",
    },
    {
      name: "Pumpkin Soup",
      img: soupPumpkinImg,
      alt: "Smooth pumpkin soup in a bowl with a swirl of cream",
      caption: "Velvety roasted pumpkin soup with a touch of nutmeg and cream",
      price: "5.99",
    },
    {
      name: "Asparagus Soup",
      img: soupAsparagusImg,
      alt: "Smooth asparagus soup in a white bowl topped with golden croutons",
      caption: "Creamy asparagus soup with a hint of leek and fresh herbs",
      price: "6.50",
    },
    {
      name: "Shrimp Salad",
      img: shrimpSaladImg,
      alt: "Shrimp salad with mixed greens, lemon slices, and a light dressing",
      caption: "Chilled Gulf shrimp on a bed of crisp greens with lemon-dill",
      price: "12.00",
    },
    {
      name: "Chicken Egg Salad",
      img: saladChickenImg,
      alt: "Chicken and egg salad with chopped herbs and mustard dressing",
      caption:
        "House-made egg salad with celery, chives, and a soft-boiled egg on top",
      price: "10.00",
    },
    {
      name: "Tomato Salad",
      img: saladTomatoImg,
      alt: "Tomato salad with mozzarella, olives, and fresh basil leaves",
      caption: "Fresh tomato salad with mozzarella, olives, and basil",
      price: "10.00",
    },
  ];
  return createSection(section, data);
}

function createSectionMainCourse() {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  section.classList.add("section", "section-main-course");
  h3.classList.add("card");
  h3.textContent = "Main Course";
  section.appendChild(h3);

  const data = [
    {
      name: "Steak and Fries",
      img: steakFriesImg,
      alt: "Grilled steak with a side of golden, crispy fries on a white round plate",
      caption: "Juicy grilled steak with golden fries, seasoned to perfection",
      price: "17.00",
    },
    {
      name: "Hamburger and Fries",
      img: hamburgerFriesImg,
      alt: "Juicy hamburger with melted cheese and a pile of fries on a black plate",
      caption: "Grilled beef patty with cheddar, lettuce, onion, and crispy fries",
      price: "11.00",
    },
    {
      name: "Pizza Salami",
      img: pizzaSalamiImg,
      alt: "Wood-fired salami pizza with bubbling cheese and fresh oregano",
      caption: "Wood-fired pizza with spicy salami, mozzarella, and fresh oregano",
      price: "16.00",
    },
    {
      name: "Pizza Margherita",
      img: pizzaMargheritaImg,
      alt: "Classic Margherita pizza with tomato, mozzarella, and basil",
      caption: "Classic Neapolitan-style with tomato, mozzarella, and fresh basil",
      price: "15.00",
    },
    {
      name: "Fish and Vegetables",
      img: fishVegetablesImg,
      alt: "Pan-seared fish fillet with roasted seasonal vegetables",
      caption:
        "Pan-seared cod with seasonal roasted veggies and lemon butter",
      price: "18.00",
    },
    {
      name: "Schnitzel",
      img: schnitzelImg,
      alt: "Schnitzel with crispy fried potatoes on a white plate",
      caption: "Crispy breaded schnitzel served with golden pan-fried potatoes",
      price: "15.00",
    },
  ];

  return createSection(section, data);
}

function createSectionDessert() {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  section.classList.add("section", "section-dessert");
  h3.classList.add("card");
  h3.textContent = "Dessert";
  section.appendChild(h3);

  const data = [
    {
      name: "Vanilla Ice Cream",
      img: iceCreamVanillaImg,
      alt: "Three scoops of vanilla ice cream",
      caption: "Creamy house-churned vanilla ice with a delicate floral finish",
      price: "5.00",
    },
    {
      name: "Chocolate Ice Cream",
      img: iceCreamChocolateImg,
      alt: "Three scoops of chocolate ice cream",
      caption: "Rich, dark chocolate gelato with a smooth, velvety texture",
      price: "5.00",
    },
    {
      name: "Chocolate Cake",
      img: chocolateCakeImg,
      alt: "Slice of chocolate layer cake with a small bowl of strawberries",
      caption: "Decadent chocolate layer cake with ganache and raspberry",
      price: "4.50",
    },
    {
      name: "Cheesecake",
      img: cheeseCakeImg,
      alt: "Slice of creamy cheesecake on a graham cracker crust, slightly glazed",
      caption: "Creamy vanilla cheesecake on a graham cracker crust",
      price: "5.00",
    },
    {
      name: "Banana Split",
      img: bananaSplitImg,
      alt: "Banana split with scoops of ice cream, whipped cream, and chocolate sauce",
      caption: "Classic banana split with scoops of ice cream, whipped cream and chocolate sauce",
      price: "7.00",
    },
    {
      name: "Waffle and Ice Cream",
      img: waffleIceImg,
      alt: "Warm waffle topped with a scoop of vanilla ice cream",
      caption: "Warm Belgian waffle topped with vanilla ice cream",
      price: "9.00",
    },
  ];

  
  return createSection(section, data);
}


function createSection(section, data) {
   data.forEach((item) => {
    const article = document.createElement("article");
    const strong = document.createElement("strong");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    const p = document.createElement("p");

    article.classList.add("card", "card-menu");
    figure.classList.add("card-img-description");
    img.src = item.img;
    img.alt = item.alt;
    strong.textContent = item.name;
    figcaption.textContent = item.caption;
    p.innerHTML = `<span class='currency'>$</span>${item.price}`;
    figure.appendChild(img);
    figure.appendChild(figcaption);

    article.appendChild(strong);
    article.appendChild(figure);
    article.appendChild(p);

    section.appendChild(article);
  });

  return section;
}

export { createMenuModule };
