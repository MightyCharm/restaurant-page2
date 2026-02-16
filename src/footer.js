function createFooter() {
  const dataLocation = [
    {
      text: "The Recovery Room",
    },
    {
      text: "123 Serenity Lane",
    },
    {
      text: "Portland, OR 97205",
    },
    {
      text: "USA",
    },
  ];
  const footer = document.createElement("footer");
  const header = document.createElement("header");

  const divLocation = document.createElement("div");
  const divLocationHeader = document.createElement("div");
  const iconLocation = document.createElement("i");
  const h3Location = document.createElement("h3");
  const ulLocation = document.createElement("ul");

  const divContact = document.createElement("div");
  const divContactHeader = document.createElement("div");
  const iconContact = document.createElement("i");
  const h3Contact = document.createElement("h3");

  const ulContact = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.target = "_blank";

  footer.classList.add("restaurant-footer");
  header.classList.add("sentence");

  divLocation.classList.add("location");
  divLocationHeader.classList.add("location-header");
  iconLocation.classList.add("fas", "fa-location-dot");
  iconLocation.setAttribute("aria-hidden", "true");
  ulLocation.classList.add("ul-location");

  divContact.classList.add("contacts");
  divContactHeader.classList.add("contact-header");
  iconContact.classList.add("fas", "fa-phone");
  iconContact.setAttribute("aria-hidden", "true");
  ulContact.classList.add("ul-contact");
  a.classList.add("link-email-contact");

  header.innerHTML =
    "<span>Good</span> food, <span>good</span> vibes, <span>good</span> people — welcome home.";

  h3Location.textContent = "Location";
  h3Contact.textContent = "Contact";

  // create list items and append to ul list
  dataLocation.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.text;

    ulLocation.appendChild(li);
  });

  li1.textContent = "(555) 867-5309";
  a.textContent = "info@recoveryroom.com";
  li2.appendChild(a);
  li3.innerHTML = `<a href="#" target="_blank"><i class="fa fa-twitter link-twitter"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-facebook link-facebook"></i></a>
  `;

  divLocationHeader.appendChild(iconLocation);
  divLocationHeader.appendChild(h3Location);
  divLocation.appendChild(divLocationHeader);
  divLocation.appendChild(ulLocation);

  divContactHeader.appendChild(iconContact);
  divContactHeader.appendChild(h3Contact);

  ulContact.appendChild(li1);
  ulContact.appendChild(li2);
  ulContact.appendChild(li3);

  divContact.appendChild(divContactHeader);
  divContact.appendChild(ulContact);

  footer.appendChild(header);
  footer.appendChild(divLocation);
  footer.appendChild(divContact);
  return footer;
}

export { createFooter };
