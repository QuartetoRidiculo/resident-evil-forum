let listaJogos = [

{
    nomeJogo: "Resident Evil 0",
    imagemJogo: "../images/reviews/resident_evil0/library_600x900_2x.jpg",
    dataJogo: 2002,
    notaMetacritic: 83,
    miniSinopse: "Em 1998, a cidade americana de Raccoon City sofreu uma série de estranhos e violentos assassinatos..."
},

{
    nomeJogo: "Resident Evil (1996)",
    imagemJogo: "../images/reviews/resident_evil1_1996/library.jpg",
    dataJogo: 1996,
    notaMetacritic: 91,
    miniSinopse: "Em 1998, membros da equipe especial S.T.A.R.S. (Chris Redfield e Jill Valentine) investigam..."

},

{
    nomeJogo: "Resident Evil",
    imagemJogo: "../images/reviews/resident_evil1/library_600x900.jpg",
    dataJogo: 2002,
    notaMetacritic: 91,
    miniSinopse:  "Em 1998, uma equipe das forças especiais é enviada para investigar alguns assassinatos bizarros nos arredores de Raccoon City..."
},

{
    nomeJogo: "Resident Evil 2 (1998)",
    imagemJogo: "../images/reviews/resident_evil2_1998/library.jpg",
    dataJogo: 1998,
    notaMetacritic: 89,
    miniSinopse: "Raccoon City se torna o campo de batalha para Leon Kennedy e Claire Redfield. Em uma corrida contra o tempo..."
},

{
    nomeJogo: "Resident Evil 2",
    imagemJogo: "../images/reviews/resident_evil2/library_600x900.jpg",
    dataJogo: 2019,
    notaMetacritic: 91,
    miniSinopse: "Um vírus maligno toma conta dos residentes de Raccoon City em setembro de 1998, afundando a cidade no caos..."
},

{
    nomeJogo: "Resident Evil 3 (2000)",
    imagemJogo: "../images/reviews/resident_evil3_2000/library.png",
    dataJogo: 2000,
    notaMetacritic: 91,
    miniSinopse: "Dois meses após o incidente da mansão nas Montanhas Arklay, Raccoon City está à beira do colapso..."
},

{
    nomeJogo: "Resident Evil 3",
    imagemJogo: "../images/reviews/resident_evil3/library_600x900.jpg",
    dataJogo: 2020,
    notaMetacritic: 79,
    miniSinopse: "Jill Valentine é uma das últimas pessoas em Raccoon City a testemunhar as atrocidades que a Umbrella cometeu..."
},

{
    nomeJogo: "Resident Evil 4 (2005)",
    imagemJogo: "../images/reviews/resident_evil4_2005/library_600x900.jpg",
    dataJogo: 2005,
    notaMetacritic: 96,
    miniSinopse: "O agente especial Leon S. Kennedy é enviado em uma missão para resgatar a filha do presidente dos Estados Unidos..."
},

{
    nomeJogo: "Resident Evil 4",
    imagemJogo: "../images/reviews/resident_evil4/library_600x900.jpg",
    dataJogo: 2023,
    notaMetacritic: 93,
    miniSinopse: "Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes..."
},

{
    nomeJogo: "Resident Evil 5",
    imagemJogo: "../images/reviews/resident_evil5/library_600x900.jpg",
    dataJogo: 2009,
    notaMetacritic: 83,
    miniSinopse: "Anos depois de sobreviver aos eventos em Raccoon City, Chris Redfield tem lutado contra o flagelo das armas bio-orgânicas..."
},

{
    nomeJogo: "Resident Evil 6",
    imagemJogo: "../images/reviews/resident_evil6/library_600x900.jpg",
    dataJogo: 2012,
    notaMetacritic: 67,
    miniSinopse: "Leon S. Kennedy e Chris Redfield devem se juntar para enfrentar novos surtos bioterroristas globais e uma nova ameaça..."
},

{
    nomeJogo: "Resident Evil 7 Biohazard",
    imagemJogo: "../images/reviews/resident_evil7/library_600x900.jpg",
    dataJogo: 2017,
    notaMetacritic: 86,
    miniSinopse: "Ethan Winters busca sua esposa, Mia, desaparecida há três anos, em uma casa de fazenda decadente na Louisiana..."
},

{
    nomeJogo: "Resident Evil Village",
    imagemJogo: "../images/reviews/resident_evil8/library_600x900.jpg",
    dataJogo: 2021,
    notaMetacritic: 84,
    miniSinopse: "Depois de escaparem dos pesadelos na Louisiana, Ethan e a esposa, Mia Winters, vivem em uma localidade isolada..."
},

{
    nomeJogo: "Resident Evil Requiem",
    imagemJogo: "../images/reviews/resident_evil9/library_capsule.jpg",
    dataJogo: 2026,
    notaMetacritic: 89,
    miniSinopse: "Retorne mais uma vez à cidade da catástrofe e do desespero. Uma cidade no centro-oeste dos Estados Unidos..."
}

]

listaJogos.forEach(jogo => {

    const elementoDiv = document.createElement("div");
    elementoDiv.classList.add("divCard");

    const divNomeNota = document.createElement("div");
    divNomeNota.classList.add("divNomeNota");

    elementoDiv.appendChild(divNomeNota);

    const img = document.createElement("img");
    img.src = jogo.imagemJogo;
    img.classList.add("img");
    elementoDiv.appendChild(img);

    const nome = document.createElement("h3");
    nome.textContent = jogo.nomeJogo;
    nome.classList.add("nome")
    divNomeNota.appendChild(nome);

    const nota = document.createElement("p");
    nota.textContent = jogo.notaMetacritic;
    nota.classList.add("nota");
    divNomeNota.appendChild(nota);

    if (jogo.notaMetacritic >= 75) {

        nota.style.backgroundColor = "#00ce7a";
        
    }
    else if(jogo.notaMetacritic >=50){
        nota.style.backgroundColor = "#ffbd3f"
    }
    else{
        nota.style.backgroundColor = "#ff6874"
    }
    

    const data = document.createElement("p");
    data.textContent = jogo.dataJogo;
    data.classList.add("data");
    elementoDiv.appendChild(data);


    const miniSinopse = document.createElement("p");
    miniSinopse.textContent = jogo.miniSinopse;
    miniSinopse.classList.add("miniSinopse");
    elementoDiv.appendChild(miniSinopse);

    document.getElementById("listaJogos").appendChild(elementoDiv);


}

)