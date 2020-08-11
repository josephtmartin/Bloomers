'use strict'


// UNIVERSAL SCRIPTS
const pantsObj = [{
  image: '/images/camo-1.jpeg',
  material: 'Wool',
  size: ['S', 'M', 'L'],
  age: 'Adult'
},
{
  image: '/images/silky-white.jpg',
  material: 'Silk',
  size: ['S', 'M', 'L'],
  age: 'Adult'
},
{
  image: '/images/winter-1.jpeg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/teen-2.jpeg',
  material: 'Down',
  size: ['S', 'M', 'L'],
  age: 'Teen'
  },
{
  image: '/images/kids-1.png',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Kid'
  },
{
  image: '/images/black-1.png',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/floral-1.png',
  material: 'Silk',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/stars.jpeg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/kids-2.jpg',
  material: 'Wool',
  size: ['S', 'M', 'L'],
  age: 'Kid'
  },
{
  image: '/images/navy-1.png',
  material: 'Down',
  size: ['S', 'M', 'L'],
  age: 'Teen'
  },
{
  image: '/images/pirate-1.jpeg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/pattern.jpeg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/light-blue.jpeg',
  material: 'Silk',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/tan-1.png',
  material: 'Wool',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/kids-3.jpeg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Kid'
  },
{
  image: '/images/camo-3.jpeg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/teen-1.jpeg',
  material: 'Down',
  size: ['S', 'M', 'L'],
  age: 'Teen'
  },
{
  image: '/images/kids-4.jpg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Kid'
  },
{
  image: '/images/floral-2.png',
  material: 'Silk',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/floral-3.jpg',
  material: 'Silk',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/kids-5.jpg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Kid'
  },
{
  image: '/images/kids-6.jpeg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Kid'
  },
{
  image: '/images/camo-4.jpeg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/checkered-1.jpeg',
  material: 'Cotton',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/camo-5.jpeg',
  material: 'Silk',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  },
{
  image: '/images/floral-4.jpeg',
  material: 'Down',
  size: ['S', 'M', 'L'],
  age: 'Adult'
  }
]
// HOME SCRIPTS
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildPantsCards = () => {
  let domString = '';

  for(let i = 0; i < pantsObj.length; i++){
      domString += `<div class="home-pants">`
      domString +=      `<img src= ${pantsObj[i].image} alt="bloomers image"/>`
      domString +=    `<p> Material: ${pantsObj[i].material}</p>`
      domString +=    `<p> Size: ${pantsObj[i].size}</p>`
      domString +=    `<p> Age: ${pantsObj[i].age} </p>`
      domString += `</div>`
  }

  printToDom('home-bloomers', domString)
}

document.getElementById('all').addEventListener('click', buildPantsCards);


const init = () => {
  buildPantsCards();
}


init();
// ABOUT SCRIPTS

// CONTACT US SCRIPTS

// MOODS SCRIPTS

// SEASONS SCRIPTS
