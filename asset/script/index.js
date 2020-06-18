let fruits = [
    {
        img: "../../buah.jpg",
        name: "Apple",
        latinName: "Malus sylvestris",
        seed: "single seed",
    },
    {
        img: "../../buah.jpg",
        name: "Banana",
        latinName: "Musa paradisiaca",
        seed: "double seed",
    },
    {
        img: "../../buah.jpg",
        name: "Blueberry",
        latinName: "Vaccinium corymbosum",
        seed: "single seed",
    },
    {
        img: "../../buah.jpg",
        name: "Cherry",
        latinName: "Prunus apetala",
        seed: "double seed",
    },
    {
        img: "../../buah.jpg",
        name: "Lemon",
        latinName: "Citrus limon",
        seed: "single sedd",
    },
    {
        img: "../../buah.jpg",
        name: "Mango",
        latinName: "Citrus reticulata",
        seed: "double seed",
    },
    {
        img: "../../buah.jpg",
        name: "Orange",
        latinName: "Malus sylvestris",
        seed: "single seed",
    },
    {
        img: "../../buah.jpg",
        name: "Pear",
        latinName: "Pyrus caucasica",
        seed: "double seed",
    },
    {
        img: "../../buah.jpg",
        name: "Pineapple",
        latinName: "Ananas comocus",
        seed: "single seed",
    },
    {
        img: "../../buah.jpg",
        name: "Raspberry",
        latinName: "Rubus fraxinifolius",
        seed: "double seed",
    },
    {
        img: "../../buah.jpg",
        name: "Strawberry",
        latinName: "Fragaria daltoniana",
        seed: "single seed",
    },
    {
        img: "../../buah.jpg",
        name: "Tomato",
        latinName: "Solanum Iycopersicum",
        seed: "double seed",
    },
];

let position = document.querySelector(".position");

let display = () => {
    fruits.forEach((element) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width: 18rem;");

        card.innerHTML = `
        <img src="${element.img}" class="card-img-top"/>
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">
                Biji: ${element.seed}
            </p>
            <p class="card-text">
                Nama Latin: ${element.latinName}
            </p>
        </div>`;
        position.appendChild(card);
    });
};

display();
