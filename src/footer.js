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
  const divContacts = document.createElement("div");
  const h3_address = document.createElement("h3");
  const ul_address = document.createElement("ul");
  const h3_contacts = document.createElement("h3");
  const ul_contacts = document.createElement("ul");
  const li_1 = document.createElement("li");
  const li_2 = document.createElement("li");
  const li_3 = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.target = "_blank";

  header.classList.add("sentence");
  divLocation.classList.add("location");
  divContacts.classList.add("contacts");

  footer.classList.add("card", "card-restaurant-footer");

  header.innerHTML =
    "<span>Good</span> food, <span>good</span> vibes, <span>good</span> people — welcome home.";

  h3_address.textContent = "Location";
  h3_contacts.textContent = "Contacts";

  // create list items and append to ul list
  dataLocation.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.text;

    ul_address.appendChild(li);
  });

  li_1.textContent = "(555) 867-5309";
  a.textContent = "info@recoveryroom.com";
  li_2.appendChild(a);
  li_3.innerHTML = `<a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
  `;

  ul_contacts.appendChild(li_1);
  ul_contacts.appendChild(li_2);
  ul_contacts.appendChild(li_3);

  divLocation.appendChild(h3_address);
  divLocation.appendChild(ul_address);

  divContacts.appendChild(h3_contacts);
  divContacts.appendChild(ul_contacts);

  footer.appendChild(header);
  footer.appendChild(divLocation);
  footer.appendChild(divContacts);
  return footer;
}

export { createFooter };