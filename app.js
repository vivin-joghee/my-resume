/* ── Render resume from RESUME object in data.js ── */

(function () {
  const R = RESUME;

  /* Helper: create element */
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  }

  /* ── Header ── */
  document.getElementById("name").textContent = R.name;
  document.getElementById("title").textContent = R.title;

  const contactRow = document.getElementById("contact");
  const icons = {
    email: "\u2709",
    phone: "\u260E",
    linkedin: "in",
    github: "\u2731",
    location: "\u25CB",
  };
  R.contact.forEach(function (c) {
    const span = el("span", "contact-item");
    const icon = icons[c.type] || "";
    if (c.url) {
      span.innerHTML = icon + ' <a href="' + c.url + '" target="_blank">' + c.value + "</a>";
    } else if (c.type === "email") {
      span.innerHTML = icon + ' <a href="mailto:' + c.value + '">' + c.value + "</a>";
    } else {
      span.textContent = icon + " " + c.value;
    }
    contactRow.appendChild(span);
  });

  /* ── Objective ── */
  document.getElementById("objective").textContent = R.objective;

  /* ── Experience ── */
  const expContainer = document.getElementById("experience");
  R.experience.forEach(function (job) {
    const div = el("div", "exp-item");
    const header = el("div", "exp-header");
    header.appendChild(el("span", "exp-role", job.role));
    header.appendChild(el("span", "exp-date", job.date));
    div.appendChild(header);
    div.appendChild(el("div", "exp-company", job.company));
    const ul = el("ul", "exp-bullets");
    job.bullets.forEach(function (b) {
      ul.appendChild(el("li", "", b));
    });
    div.appendChild(ul);
    expContainer.appendChild(div);
  });

  /* ── Skills ── */
  const skillsContainer = document.getElementById("skills");
  R.skills.forEach(function (s) {
    skillsContainer.appendChild(el("span", "tag", s));
  });

  /* ── Education ── */
  const eduContainer = document.getElementById("education");
  R.education.forEach(function (e) {
    const row = el("div", "edu-item");
    row.appendChild(el("span", "edu-name", e.name));
    row.appendChild(el("span", "edu-detail", e.detail));
    eduContainer.appendChild(row);
  });

  /* ── Certifications ── */
  const certContainer = document.getElementById("certifications");
  R.certifications.forEach(function (c) {
    const row = el("div", "cert-item");
    row.appendChild(el("span", "cert-name", c.name));
    row.appendChild(el("span", "cert-detail", c.detail));
    certContainer.appendChild(row);
  });

  /* ── Awards ── */
  const awardContainer = document.getElementById("awards");
  R.awards.forEach(function (a) {
    const row = el("div", "award-item");
    row.appendChild(el("span", "award-name", a.name));
    row.appendChild(el("span", "award-detail", a.detail));
    awardContainer.appendChild(row);
  });

  /* ── Volunteer ── */
  const volContainer = document.getElementById("volunteer");
  R.volunteer.forEach(function (v) {
    const row = el("div", "vol-item");
    row.appendChild(el("span", "vol-name", v.name));
    row.appendChild(el("span", "vol-detail", v.detail));
    volContainer.appendChild(row);
  });

  /* ── Books ── */
  const booksList = document.getElementById("books");
  R.books.forEach(function (b) {
    const li = el("li", "", "<strong>" + b.title + "</strong> <span class='book-author'>\u2014 " + b.author + "</span>");
    booksList.appendChild(li);
  });
})();
