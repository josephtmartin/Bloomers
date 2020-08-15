'use strict'


// UNIVERSAL SCRIPTS

const pantsObj = [{
  image: 'https://img.alicdn.com/imgextra/i1/51768288/O1CN012B5x46hZVdJdhAO_!!51768288.jpg_640x640q90.jpg',
  material: 'Wool',
  size: ['S', 'M', 'L'],
  age: 'Adult'
},
{
  image: 'https://i.ebayimg.com/images/g/QwoAAOSw0ZJajkIn/s-l400.jpg',
  material: 'Silk',
  size: ['S', 'M', 'L'],
  age: 'Adult'
},
{
  image: 'https://i.ebayimg.com/images/g/QwoAAOSw0ZJajkIn/s-l400.jpg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Teen'
  },
{
  image: 'https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/r9QAAOSw29Zdup3B/$_12.JPG?set_id=880000500F',
  material: 'Down',
  size: ['S', 'M', 'L'],
  age: ['Adult', 'Teen', 'Children']
  },
]

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
]
// HOME SCRIPTS

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
