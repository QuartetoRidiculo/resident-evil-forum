const images = [
  {
    text: "Atmosfera sombria — Resident Evil",
    imgUrl: "images/reviews/galeria/atmosfera_re.jpg",
    tipo: "Arte",
  },
  {
    text: "Vilarejo sinistro — RE Village",
    imgUrl: "images/reviews/galeria/re8.jpg",
    tipo: "Screenshot",
  },
  {
    text: "Terror na escuridão — RE4",
    imgUrl: "images/reviews/galeria/re4_banner.jpeg",
    tipo: "Arte",
  },
  {
    text: "Cidade em ruínas — RE2",
    imgUrl: "images/reviews/galeria/re2_del.jpg",
    tipo: "Screenshot",
  },
  {
    text: "Laboratório Umbrella — Concept Art",
    imgUrl: "images/reviews/galeria/art_lab.jpg",
    tipo: "Conceitual",
  },
  {
    text: "Arsenal de armas — RE Series",
    imgUrl: "images/reviews/galeria/armas.jpg",
    tipo: "Screenshot",
  },
];

const galeria = document.getElementById("galeria");

images.map((item) => {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = item.imgUrl;

  const p = document.createElement("p");
  p.textContent = item.text;

  const span = document.createElement("span");
  span.textContent = item.tipo;

  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(span);
  galeria.appendChild(div);
});
