"use strict";

// UNIVERSAL SCRIPTS
const pantsObj = [
  {
    image: "/images/camo-1.jpeg",
    price: "$19.65",
    material: "Wool",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/silky-white.jpg",
    price: "$40.25",
    material: "Silk",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/winter-1.jpeg",
    price: "$78.43",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/teen-2.jpeg",
    price: "$35.67",
    material: "Down",
    size: ["S", " M", " L"],
    age: "Teen",
  },
  {
    image: "/images/kids-1.png",
    price: "$25.34",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Kid",
  },
  {
    image: "/images/black-1.png",
    price: "$19.65",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/floral-1.png",
    price: "$55.43",
    material: "Silk",
    size: ["S", " M", " L"],
    age: "Teen",
  },
  {
    image: "/images/stars.jpeg",
    price: "$25.43",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/kids-2.jpg",
    price: "$32.87",
    material: "Wool",
    size: ["S", " M", " L"],
    age: "Kid",
  },
  {
    image: "/images/navy-1.png",
    price: "$19.65",
    material: "Down",
    size: ["S", " M", " L"],
    age: "Teen",
  },
  {
    image: "/images/pirate-1.jpeg",
    price: "$75.12",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/pattern.jpeg",
    price: "$32.92",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/light-blue.jpeg",
    price: "$19.65",
    material: "Silk",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/tan-1.png",
    price: "$15.36",
    material: "Wool",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/kids-3.jpeg",
    price: "$19.65",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Kid",
  },
  {
    image: "/images/camo-3.jpeg",
    price: "$19.65",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/teen-1.jpeg",
    price: "$43.05",
    material: "Down",
    size: ["S", " M", " L"],
    age: "Teen",
  },
  {
    image: "/images/kids-4.jpg",
    price: "$43.05",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Kid",
  },
  {
    image: "/images/floral-2.png",
    price: "$19.65",
    material: "Silk",
    size: ["S", " M", " L"],
    age: "Teen",
  },
  {
    image: "/images/floral-3.jpg",
    price: "$35.55",
    material: "Silk",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/kids-5.jpg",
    price: "$20.25",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Kid",
  },
  {
    image: "/images/kids-6.jpeg",
    price: "$12.65",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Kid",
  },
  {
    image: "/images/camo-4.jpeg",
    price: "$25.25",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/checkered-1.jpeg",
    price: "$19.65",
    material: "Cotton",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/camo-5.jpeg",
    price: "$24.43",
    material: "Silk",
    size: ["S", " M", " L"],
    age: "Adult",
  },
  {
    image: "/images/floral-4.jpeg",
    price: "$25.65",
    material: "Down",
    size: ["S", " M", " L"],
    age: "Adult",
  },
];
// HOME SCRIPTS
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildPantsCards = () => {
  let domString = "";

  for (let i = 0; i < pantsObj.length; i++) {
    domString += `<div class="home-pants">`;
    domString += `<img src= ${pantsObj[i].image} alt="bloomers image"/>`;
    domString += `<p><b>USD:</b> ${pantsObj[i].price}</p>`;
    domString += `<p><b>Material:</b> ${pantsObj[i].material}</p>`;
    domString += `<p> ${pantsObj[i].size}</p>`;
    domString += `<p> ${pantsObj[i].age} </p>`;
    domString += `</div>`;
  }

  printToDom("home-bloomers", domString);
};
const adultCards = () => {
  let domString = "";

  for (let i = 0; i < pantsObj.length; i++) {
    if (pantsObj[i].age === "Adult") {
      domString += `<div class="home-pants">`;
      domString += `<img src= ${pantsObj[i].image} alt="bloomers image"/>`;
      domString += `<p><b>USD:</b> ${pantsObj[i].price}</p>`;
      domString += `<p><b>Material:</b> ${pantsObj[i].material}</p>`;
      domString += `<p> ${pantsObj[i].size}</p>`;
      domString += `<p> ${pantsObj[i].age} </p>`;
      domString += `</div>`;
    }
  }
  printToDom("home-bloomers", domString);
};

const teenCards = () => {
  let domString = "";

  for (let i = 0; i < pantsObj.length; i++) {
    if (pantsObj[i].age === "Teen") {
      domString += `<div class="home-pants">`;
      domString += `<img src= ${pantsObj[i].image} alt="bloomers image"/>`;
      domString += `<p><b>USD:</b> ${pantsObj[i].price}</p>`;
      domString += `<p><b>Material:</b> ${pantsObj[i].material}</p>`;
      domString += `<p> ${pantsObj[i].size}</p>`;
      domString += `<p> ${pantsObj[i].age} </p>`;
      domString += `</div>`;
    }
  }
  printToDom("home-bloomers", domString);
};

const kidCards = () => {
  let domString = "";

  for (let i = 0; i < pantsObj.length; i++) {
    if (pantsObj[i].age === "Kid") {
      domString += `<div class="home-pants">`;
      domString += `<img src= ${pantsObj[i].image} alt="bloomers image"/>`;
      domString += `<p><b>USD:</b> ${pantsObj[i].price}</p>`;
      domString += `<p><b>Material:</b> ${pantsObj[i].material}</p>`;
      domString += `<p> ${pantsObj[i].size}</p>`;
      domString += `<p> ${pantsObj[i].age} </p>`;
      domString += `</div>`;
    }
  }
  printToDom("home-bloomers", domString);
};

const buttonEvents = () => {
  if (document.getElementById("homePage")) {
    buildPantsCards();
  }
  if (document.getElementById("homePage")) {
    document.getElementById("all").addEventListener("click", buildPantsCards);
    document.getElementById("adult").addEventListener("click", adultCards);
    document.getElementById("teen").addEventListener("click", teenCards);
    document.getElementById("kids").addEventListener("click", kidCards);
  }
};

const homeInit = () => {
  buttonEvents();
};

homeInit();

$(document).ready(function () {
  $("#bloom").hide().fadeIn(7000);
  $("#bloom").click(function () {
    $("#bloom").fadeOut(500).fadeIn(7000);
  });
});

$(document).ready(function () {
  $("#bottomCards").hide();
  $("#bloom").click(function () {
    $("#bottomCards").slideDown(1000);
  });
});

// ABOUT SCRIPTS

// CONTACT US SCRIPTS

// MOODS SCRIPTS

// SEASONS SCRIPTS
