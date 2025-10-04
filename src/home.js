function createHomeModule() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createHours());
  content.appendChild(createEvents());
  content.appendChild(createFooter());
}

function createHeader() {
  const header = document.createElement("header");
  const h2 = document.createElement("h2");
  const para = document.createElement("p");

  header.classList.add("card", "card-home-header");

  h2.textContent = "The Recovery Room";
  para.textContent = `The Recovery Room — a place to unwind and recover from daily \
    stress. Just relax, breathe, and recharge. We use only good ingredients in all \
    our food and drinks — nothing fake, nothing cheap. Just honest, quality stuff \
    that fuels your recovery. Served in a friendly atmosphere where good vibes come \
    easy. No rush, no noise — just peace, flavor, and real moments.`;

  header.appendChild(h2);
  header.appendChild(para);

  return header;
}

function createHours() {
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");
  const list_1 = document.createElement("li");
  const list_2 = document.createElement("li");
  const list_3 = document.createElement("li");
  const list_4 = document.createElement("li");
  const span_list_1_day = document.createElement("span");
  const span_list_1_hours = document.createElement("span");
  const span_list_2_day = document.createElement("span");
  const span_list_2_hours = document.createElement("span");
  const span_list_3_day = document.createElement("span");
  const span_list_3_hours = document.createElement("span");
  const span_list_4_day = document.createElement("span");
  const span_list_4_hours = document.createElement("span");

  section.classList.add("card", "card-home-hours");
  span_list_1_day.classList.add("span-day");
  span_list_1_hours.classList.add("span-time-hours");
  span_list_2_day.classList.add("span-day");
  span_list_2_hours.classList.add("span-time-hours");
  span_list_3_day.classList.add("span-day");
  span_list_3_hours.classList.add("span-time-hours");
  span_list_4_day.classList.add("span-day");
  span_list_4_hours.classList.add("span-time-hours");

  h2.textContent = "Opening Hours";
  span_list_1_day.textContent = "Monday:";
  span_list_1_hours.textContent = "Closed";
  span_list_2_day.textContent = "Tuesday-Thursday:";
  span_list_2_hours.textContent = "12 PM - 9 PM";
  span_list_3_day.textContent = "Friday - Saturday:";
  span_list_3_hours.textContent = "12 PM - 11 PM";
  span_list_4_day.textContent = "Sunday:";
  span_list_4_hours.textContent = "1 PM - 8 PM";

  list_1.appendChild(span_list_1_day);
  list_1.appendChild(span_list_1_hours);
  list_2.appendChild(span_list_2_day);
  list_2.appendChild(span_list_2_hours);
  list_3.appendChild(span_list_3_day);
  list_3.appendChild(span_list_3_hours);
  list_4.appendChild(span_list_4_day);
  list_4.appendChild(span_list_4_hours);

  ul.appendChild(list_1);
  ul.appendChild(list_2);
  ul.appendChild(list_3);
  ul.appendChild(list_4);

  section.appendChild(h2);
  section.appendChild(ul);

  return section;
}

function createEvents() {
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");
  const list_1 = document.createElement("li");
  const list_2 = document.createElement("li");
  const list_3 = document.createElement("li");
  const list_4 = document.createElement("li");

  const span_list_1_day = document.createElement("span");
  const span_list_1_event = document.createElement("span");
  const span_list_1_hours = document.createElement("span");
  const span_list_2_day = document.createElement("span");
  const span_list_2_event = document.createElement("span");
  const span_list_2_hours = document.createElement("span");
  const span_list_3_day = document.createElement("span");
  const span_list_3_event = document.createElement("span");
  const span_list_3_hours = document.createElement("span");
  const span_list_4_day = document.createElement("span");
  const span_list_4_event = document.createElement("span");
  const span_list_4_hours = document.createElement("span");

  section.classList.add("card", "card-home-events");
  span_list_1_day.classList.add("span-day");
  span_list_1_hours.classList.add("span-time-event");
  span_list_2_day.classList.add("span-day");
  span_list_2_hours.classList.add("span-time-event");
  span_list_3_day.classList.add("span-day");
  span_list_3_hours.classList.add("span-time-event");
  span_list_4_day.classList.add("span-day");
  span_list_4_hours.classList.add("span-time-event");

  h2.textContent = "Events";
  span_list_1_day.textContent = "Fri:";
  span_list_1_event.textContent = "Live Acoustic Night";
  span_list_1_hours.textContent = "7pm";
  span_list_2_day.textContent = "Sat:";
  span_list_2_event.textContent = "Strongman Challenge";
  span_list_2_hours.textContent = "10AM";
  span_list_3_day.textContent = "Sun:";
  span_list_3_event.textContent = "Yoga Brunch";
  span_list_3_hours.textContent = "9AM";
  span_list_4_day.textContent = "Monthly:";
  span_list_4_event.textContent = "No-Screen Dinner";
  span_list_4_hours.textContent = "Last Wed";

  list_1.appendChild(span_list_1_day);
  list_1.appendChild(span_list_1_event);
  list_1.appendChild(span_list_1_hours);
  list_2.appendChild(span_list_2_day);
  list_2.appendChild(span_list_2_event);
  list_2.appendChild(span_list_2_hours);
  list_3.appendChild(span_list_3_day);
  list_3.appendChild(span_list_3_event);
  list_3.appendChild(span_list_3_hours);
  list_4.appendChild(span_list_4_day);
  list_4.appendChild(span_list_4_event);
  list_4.appendChild(span_list_4_hours);

  ul.appendChild(list_1);
  ul.appendChild(list_2);
  ul.appendChild(list_3);
  ul.appendChild(list_4);

  section.appendChild(h2);
  section.appendChild(ul);

  return section;
}

function createFooter(parent) {
  const footer = document.createElement("footer");
  const para = document.createElement("p");
  footer.classList.add("card", "card-home-footer");
  para.innerHTML = "<span>Good</span> food, <span>good</span> vibes, <span>good</span> people — welcome home.";
  footer.appendChild(para);
  return footer;
}

export { createHomeModule };
