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
  image: 'https://cdn.shopify.com/s/files/1/0802/6795/products/Khali-MacIntyre-Photography-4749_2048x.jpg?v=1503344735',
  season: ['Summer', 'Spring'],
},
{
  image: 'https://cdn.shopify.com/s/files/1/2550/3694/products/C35A0591_97f28e6a-769f-4d0f-a198-76029ea92b25_500x500.jpg?v=1581098202',
  season: ['Summer'],
},
{
  image: 'https://imcut.jollychic.com//uploads/jollyimg/imageLibrary/201711/3PW/18/IL201711181814343262.jpg_600x800x80.jpg',
  season: ['Fall'],
},
{
  image: 'https://images.vogue.it/imgs/galleries/trends/notizie-bellezza/005329/nina-ricci-263920_0x440.jpg',
  season: ['Summer'],
},
{
  image: 'https://cdn.shopify.com/s/files/1/1833/4459/products/H3955e5c0de384b239b6e520005b62f32t_large.jpg?v=1594052174',
  season: ['Fall'],
},
{
  image: 'https://i.etsystatic.com/19549035/r/il/b6d1d4/2106874587/il_570xN.2106874587_npf2.jpg',
  season: ['Fall', 'Spring'],
},
{
  image: 'https://i.etsystatic.com/20451029/r/il/fd0b5f/1918629658/il_570xN.1918629658_9adu.jpg',
  season: ['Fall'],
},
{
  image: 'https://img.alicdn.com/i2/autumn-and-winter-childrens-clothing-girls-corduroy-trousers-casual-pants-boys-trousers-korean-children-bib-baby-spring/TB1Y1PeHXXXXXXoXpXXXXXXXXXX_!!0-item_pic.jpg',
  season: ['Spring'],
},
{
  image: 'https://i.pinimg.com/originals/4a/bf/f9/4abff9f78a21712e56389e790579d581.jpg',
  season: ['Summer'],
},
{
  image: 'https://i.etsystatic.com/8167972/r/il/f5ffb4/1483994194/il_570xN.1483994194_giuw.jpg',
  season: ['Summer'],
},
{
  image: 'seasons-images/winter-2.jpg',
  season: ['Winter'],
},
{
  image: 'https://farm5.static.flickr.com/4017/4654116721_78bab84c32_b.jpg',
  season: ['Summer'],
},
{
  image: 'seasons-images/winter-3.png',
  season: ['Winter'],
},
{
  image: 'https://cdn.shopify.com/s/files/1/0035/7600/4654/products/21_5ff03a89-1378-4021-8839-edc1ab8eefd2_800x.jpg?v=1581014286',
  season: ['Fall'],
},
{
  image: 'https://image.made-in-china.com/2f0j00LNPEHTaGVgqw/P1294-Ladies-Fashion-Wool-Bloomers-Bloused-Knickers-Loose-Dance-Sport-Pants-Bloomers-Harem-Casual-Trousers-Wide-Legged-Pocket-Knitted-Pants.jpg',
  season: ['Spring'],
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
        domString += `<div class="seasonsCardDiv" style="width: 18rem;">
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
        domString += `<div class="seasonsCardDiv" style="width: 18rem;">
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
