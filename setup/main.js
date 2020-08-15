"use strict";

// UNIVERSAL SCRIPTS

const seasonsObj = [{
  image: 'seasons-images/winter-1.png',
  season: ['Winter','Spring'],
},
{
  image: 'seasons-images/Khali-MacIntyre-Photography-4749_2048x.jpg',
  season: ['Summer', 'Spring'],
},
{
  image: 'seasons-images/summer-1.jpg',
  season: ['Summer'],
},
{
  image: 'seasons-images/fall-1.jpg',
  season: ['Fall'],
},
{
  image: 'seasons-images/summer-3.jpg',
  season: ['Summer'],
},
{
  image: 'seasons-images/fall-2.jpg',
  season: ['Fall'],
},
{
  image: 'seasons-images/fall-3.jpg',
  season: ['Fall', 'Spring'],
},
{
  image: 'seasons-images/fall-4.jpg',
  season: ['Fall'],
},
{
  image: 'seasons-images/spring-2.jpg',
  season: ['Spring'],
},
{
  image: 'seasons-images/summer-4.jpg',
  season: ['Summer'],
},
{
  image: 'seasons-images/winter-2.jpg',
  season: ['Winter'],
},
{
  image: 'seasons-images/spring-3.jpeg',
  season: ['Spring'],
},
{
  image: 'seasons-images/winter-3.png',
  season: ['Winter'],
},
{
  image: 'seasons-images/fall-1.jpg',
  season: ['Fall'],
},
{
  image: 'seasons-images/winter-4.jpg',
  season: ['Winter'],
},
{
  image: 'seasons-images/winter-5.jpg',
  season: ['Winter', 'Fall', 'Spring'],
},
{
  image: 'seasons-images/summer-5.jpg',
  season: ['Summer'],
},
{
  image: 'seasons-images/summer-6.jpg',
  season: ['Summer', 'Spring'],
},
{
  image: 'seasons-images/summer-7.jpeg',
  season: ['Summer'],
},
{
  image: 'seasons-images/spring-4.jpg',
  season: ['Spring'],
},
{
  image: 'seasons-images/spring-5.jpg',
  season: ['Spring', 'Fall'],
},
]

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
const printToDomHome = (divId, textToPrint) => {
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

  printToDomHome("home-bloomers", domString);
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
  printToDomHome("home-bloomers", domString);
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
  printToDomHome("home-bloomers", domString);
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
  printToDomHome("home-bloomers", domString);
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
  if (document.getElementById('homePage')) {
    $(document).ready(function () {
      $('#bloom').hide().fadeIn(7000);
      $('#bloom').click(function () {
        $('#bloom').fadeOut(500).fadeIn(7000);
      });
    });
    $(document).ready(function () {
      $('#bottomCards').hide();
      $('#bloom').click(function () {
        $('#bottomCards').slideDown(1000);
      });
    });
  }
};

const homeInit = () => {
  buttonEvents();
};

homeInit();


// $(document).ready(function () {
//   $("#bloom").hide().fadeIn(7000);
//   $("#bloom").click(function () {
//     $("#bloom").fadeOut(500).fadeIn(7000);
//   });
// });

// $(document).ready(function () {
//   $("#bottomCards").hide();
//   $("#bloom").click(function () {
//     $("#bottomCards").slideDown(1000);
//   });
// });

// ABOUT SCRIPTS

// CONTACT US SCRIPTS

// EMPTY ARRAY TO STORE INPUT VALUE FROM NAME/EMAIL/RADIO BUTTON FORMS
let contactFormInput = [];

// FUNCTION THAT PUTS HTML ON THE DOM ONCE SUBMIT BUTTON IS CLICKED
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// FUNCTION THAT REMOVES HTML FROM THE DOM ONCE SUBMIT BUTTON IS CLICKED
const removeFromDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// FUNCTION THAT CAPTURES DATA FROM FORM INPUTS, STORES THEM IN AN OBJECT AND PUSHES THEM TO THE EMPTY ARRAY ABOVE
const getNameEmail = (e) => {
  let buttonId = e.target.id;
  if (buttonId === 'submit-button'){
  const name = document.querySelector('#nameInput').value;
  const email = document.querySelector('#emailInput').value;
  const radioSelection = document.querySelector('input[name="exampleRadios"]:checked').value;
  let contactFormObject = {name: name, email: email, bloomer: radioSelection};
  contactFormInput.push(contactFormObject);
  }
}

// FUNCTION THAT TRIGGERS getNameEmail AND thankYouMessage FUNCTIONS WHEN THE SUBMIT BUTTON IS CLICKED
const submitButtonClick = () => {
  if(document.getElementById('contactUsPage')){
  let el = document.querySelector('#submit-button');
  el.addEventListener("click", getNameEmail);
  el.addEventListener("click", thankYouMessage);
  }
};

// FUNCTION THAT TRIGGERS AN ALERT MESSAGE IF THE EMAIL INPUT VALUE IS EMPTY
const emptyForm = () => {
  let emailAddress = document.getElementById('emailInput').value;
      if (emailAddress === ''){
          alert("Please enter your email address");
          return false; 
      }
      return true;
};

// FUNCTION THAT RUNS WHEN NAME AND EMAIL INPUT IS PRESENT. PRINTING HTML THAT INCLUDES DATA FROM THE ARRAY TO THE DOM. ALSO, REMOVES DOM HTML WHEN ENGAGED.
const thankYouMessage = (e) => {
  let buttonId = e.target.id
  let domString = "";

  if (buttonId === "submit-button")
  for (let i = 0; i < contactFormInput.length; i++){
    if (contactFormInput[i].name){
      domString += `<div class="card text-center" id="thanks">
                      <div class="card-header" id="thanks-header">
                        Thank you!
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">${contactFormInput[i].name}, your interest in Bloomers is appreciated!</h5>
                        <p class="card-text">We will send a message to ${contactFormInput[i].email} about ${contactFormInput[i].bloomer} bloomers within 24 hours.</p>
                        <a href="index.html" class="btn btn-secondary">Home Page</a>
                      </div>
                      </div>`
      removeFromDom('#page-content', "");
    } else {
      emptyForm();
    }
  }
    printToDom('#contact-message', domString);
};
// CALLBACK FOR BUTTON CLICK FUNCTION
submitButtonClick();

// MOODS SCRIPTS

// SEASONS SCRIPTS
const displayCards = (e) => {
  const buttonClicked = e.target.id;
  let domString = '';

  for (let i = 0; i < seasonsObj.length; i++) {
    for (let j = 0; j < seasonsObj[i].season.length; j++) {
      if (seasonsObj[i].season[j] === buttonClicked) {
        domString += `<div class="seasons-card-div" style="width: 18rem;">
                        <img src="${seasonsObj[i].image}" class="card-img-top" id="seasonsCardImages" alt="...">
                      </div>`
      }
    }
  }
  printToDom('#seasonsCardContainer', domString);
  fadeSeasonsCards();
}

const seasonsFirstLoad = () => {

  if (document.getElementById('seasonsPage')) {
  let domString = '';

  for (let i = 0; i < seasonsObj.length; i++) {
    for (let j = 0; j < seasonsObj[i].season.length; j++) {
      if (seasonsObj[i].season[j] === 'Winter') {
        domString += `<div class="seasons-card-div" style="width: 18rem;">
                        <img src="${seasonsObj[i].image}" class="card-img-top" id="seasonsCardImages" alt="...">
                      </div>`
      }
    }
  }
  printToDom('#seasonsCardContainer', domString);
  fadeSeasonsCards();
}
}

const fadeSeasonsCards = () =>  {
  $('.seasons-card-div').hide().fadeIn(700)
}

const domEvents = () => {
  if(document.getElementById('seasonsPage')) {
  document.querySelector('#Winter').addEventListener('click', displayCards);
  document.querySelector('#Summer').addEventListener('click', displayCards);
  document.querySelector('#Spring').addEventListener('click', displayCards);
  document.querySelector('#Fall').addEventListener('click', displayCards);
  }
}

const init = () => {
  domEvents();
  seasonsFirstLoad();
}

init();
