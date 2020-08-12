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
  image: 'https://cdn11.bigcommerce.com/s-ca7b7/images/stencil/2048x2048/products/2361/10818/see_683_RGB__76274.1566763304.jpg?c=2',
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
  image: 'https://beyondshoping.com/wp-content/uploads/2020/05/30/Sanderala-Women-Flannel-Pajama-Bloomers-Pants-2019-Winter-Elastic-Loose-Trousers-Waist-Solid-Pajamas-Bottom-Home-1.jpg',
  season: ['Winter'],
},
{
  image: 'https://farm5.static.flickr.com/4017/4654116721_78bab84c32_b.jpg',
  season: ['Summer'],
},
{
  image: 'https://images-na.ssl-images-amazon.com/images/I/71Nxty8t-9L._AC_UY350_.jpg',
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
  image: 'https://lh3.googleusercontent.com/proxy/9VgYzPT-194FNmlUQBdYq-4gfrFL0rfB90QSU57sin5oOodCRZ49bgcWPtjN1aRw1IfX4mZ9R9tSDnbDJu8fFtbR0GLTRTUrODUrcc5p1i8zbgxhD-JrvitKUKpivScKMvOlbcAfskMKZZcAlNZa7X1TC60y_GctXQ',
  season: ['Winter'],
},
{
  image: 'https://ae01.alicdn.com/kf/HTB16rb6KFXXXXczXVXXq6xXFXXX5/28-33-2016-men-s-trousers-male-bloomers-personality-harem-pants-male-skinny-pants-singer-costumes.jpg',
  season: ['Winter'],
},
{
  image: 'https://cdn.shopify.com/s/files/1/0014/4454/4569/products/New-arrive-Japanese-cotton-flaxen-trousers-ankle-banded-pants-men-loose-harem-Chinese-style-large-bloomers.jpg_640x640_df8c04ab-3506-49ae-b6cc-744586cd187c_800x.jpg?v=1571715502',
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
        domString += `<div class="card" style="width: 18rem;">
                        <img src="${seasonsObj[i].image}" class="card-img-top" alt="...">
                      </div>`
      }
    }
  }
  printToDom('cardsSeason', domString);
}

const seasonsFirstLoad = () => {
  let domString = '';
  
  for (let i = 0; i < seasonsObj.length; i++) {
    for (let j = 0; j < seasonsObj[i].season.length; j++) {
      if (seasonsObj[i].season[j] === 'Winter') {
        domString += `<div class="card" style="width: 18rem;">
                        <img src="${seasonsObj[i].image}" class="card-img-top" alt="...">
                      </div>`
      }
    }
  }
  printToDom('cardsSeason', domString);
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
