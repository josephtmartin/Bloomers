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

// MOODS SCRIPTS

// SEASONS SCRIPTS

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

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
  printToDom('seasonsCardContainer', domString);
}

const seasonsFirstLoad = () => {
  let domString = '';

  for (let i = 0; i < seasonsObj.length; i++) {
    for (let j = 0; j < seasonsObj[i].season.length; j++) {
      if (seasonsObj[i].season[j] === 'Winter') {
        domString += `<div class="seasons-card-div" style="width: 18rem;">
                        <img src="${seasonsObj[i].image}" class="card-img-top" alt="...">
                      </div>`
      }
    }
  }
  printToDom('seasonsCardContainer', domString);
}

const domEvents = () => {
  document.querySelector('#Winter').addEventListener('click', displayCards);
  document.querySelector('#Summer').addEventListener('click', displayCards);
  document.querySelector('#Spring').addEventListener('click', displayCards);
  document.querySelector('#Fall').addEventListener('click', displayCards);
}

const init = () => {
  domEvents();
  seasonsFirstLoad();
}

init();
