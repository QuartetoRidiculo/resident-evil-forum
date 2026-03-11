const posts = document.getElementById("posts")

const info = [
    {
        imgURL: "images/reviews/resident_evil2/re2.jpg",
        titulo: "Resident Evil 2",
        discricao: "O remake que redefiniu os padrões do survival horror moderno.",
    },

    {
        imgURL: "images/reviews/resident_evil4/library_hero.jpg",
        titulo: "Resident Evil 4",
        discricao: "Uma obra-prima reinventada para uma nova geração.",

    },

    {
        imgURL: "images/reviews/resident_evil8/library_hero.jpg",
        titulo: "Resident Evil Village",
        discricao: "Terror gótico europeu encontra a saga Resident Evil.",

    }
]

info.map((jogo) => {
    const card = document.createElement("div")
    card.className="card"
    const img = document.createElement("img")
    img.src = jogo.imgURL
   

    const div = document.createElement("div")
    div.className = "cardtxt"
    const titulo = document.createElement("h3")
    titulo.textContent = jogo.titulo
    const p = document.createElement("p")
    p.textContent = jogo.discricao

    card.appendChild(img)
    div.appendChild(titulo)
    div.appendChild(p)
    card.appendChild(div)
    card.appendChild(div)
    posts.appendChild(card)

}
)

