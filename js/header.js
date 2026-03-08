const links = [
  { name: "Home", href: "index.html" },
  { name: "Biblioteca", href: "biblioteca.html" },
  { name: "Personagens", href: "personagens.html" },
  { name: "Cronologia", href: "cronologia.html" },
  { name: "Galeria", href: "galeria.html" },
  { name: "Sobre", href: "sobre.html" },
];

const header = document.getElementById("header");
header.className = "header";

const img = document.createElement("img");
img.src = "images/logo_RE.png";
img.alt = "Logo Resident Evil";
img.className = "img";


const ul = document.createElement("ul");
ul.className = "ul";

links.map((link) => {
  const li = document.createElement("li");
  
  const a = document.createElement("a");
  a.href = link.href;
  a.textContent = link.name;
  a.className = "a";

    li.appendChild(a);
    ul.appendChild(li);
});

header.appendChild(img);
header.appendChild(ul);
