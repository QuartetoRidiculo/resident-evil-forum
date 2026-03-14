const personagens = [
  {
    imgUrl: "images/reviews/iconsPersonagens/Chris-Redfield.png",
    nome: "Chris Redfield",
    cargo: "Agente da B.S.A.A.",
    sobre:
      "Um dos membros originais da equipe S.T.A.R.S. e veterano no combate ao bioterrorismo. Chris...",
  },
  {
    imgUrl: "images/reviews/iconsPersonagens/Jill-Valentine.jpeg",
    nome: "Jill Valentine",
    cargo: "Ex-membro da S.T.A.R.S.",
    sobre:
      "Especialista em explosivos e uma das heroínas mais icônicas da franquia. Sobreviveu ao Incidente da Mansão e à...",
  },
  {
    imgUrl: "images/reviews/iconsPersonagens/Leon-S-Kennedy.jpg",
    nome: "Leon S. Kennedy",
    cargo: "Agente do Governo",
    sobre:
      "Ex-policial novato que sobreviveu à Raccoon City em seu primeiro dia de trabalho. Tornou-se agente especial do governo dos EUA.",
  },
  {
    imgUrl: "images/reviews/iconsPersonagens/Claire-Redfield.jpg",
    nome: "Claire Redfield",
    cargo: "Ativista da TerraSave",
    sobre:
      "Irmã mais nova de Chris Redfield. Estudante universitária que se tornou uma lutadora contra o bioterrorismo e...",
  },
  {
    imgUrl: "images/reviews/iconsPersonagens/Ada-Wong.jpg",
    nome: "Ada Wong",
    cargo: "Espiã Misteriosa",
    sobre:
      "Agente secreta com lealdades duvidosas. Trabalha nas sombras e aparece em momentos cruciais,...",
  },
  {
    imgUrl: "images/reviews/iconsPersonagens/Albert-Wesker.jpg",
    nome: "Albert Wesker",
    cargo: "Antagonista Principal",
    sobre:
      "Ex-capitão da S.T.A.R.S. e principal vilão da saga. Obcecado por poder e evolução humana, Wesker é uma das...",
  },
  {
    imgUrl: "images/reviews/iconsPersonagens/Ethan-Winters.jpg",
    nome: "Ethan Winters",
    cargo: "Protagonista de RE7/Village",
    sobre:
      "Homem comum que se viu envolvido em eventos sobrenaturais ao procurar sua esposa desaparecida. Protagonista...",
  },
  {
    imgUrl: "images/reviews/iconsPersonagens/Rebecca-Chambers.jpg",
    nome: "Rebecca Chambers",
    cargo: "Médica da B.S.A.A.",
    sobre:
      "A mais jovem membro da equipe Bravo dos S.T.A.R.S. Especialista em bioquímica que se tornou consultora...",
  },
];

const cards = document.getElementById("cards");

personagens.map((personagem) => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = personagem.imgUrl;
  image.alt = personagem.nome;

  const nome = document.createElement("h4");
  nome.textContent = personagem.nome;

  const cargo = document.createElement("h5");
  cargo.textContent = personagem.cargo;

  const sobre = document.createElement("h6");
  sobre.textContent = personagem.sobre;

  card.appendChild(image);
  card.appendChild(nome);
  card.appendChild(cargo);
  card.appendChild(sobre);
  cards.appendChild(card);
});
