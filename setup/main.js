'use strict';

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
{
  image: 'seasons-images/winter-6.jpg',
  season: ['Winter', 'Fall'],
},
{
  image: 'seasons-images/spring-6.jpg',
  season: ['Spring', 'Summer'],
},
{
  image: 'seasons-images/summer-8.jpg',
  season: ['Summer'],
},
{
  image: 'seasons-images/summer-9.jpg',
  season: ['Summer', 'Fall'],
},
{
  image: 'seasons-images/fall-7.jpg',
  season: ['Fall'],
},
]

const pantsObj = [
  {
    image: '/images/camo-1.jpeg',
    price: '$19.65',
    material: 'Wool',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/silky-white.jpg',
    price: '$40.25',
    material: 'Silk',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/winter-1.jpeg',
    price: '$78.43',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/teen-2.jpeg',
    price: '$35.67',
    material: 'Down',
    size: ['S', ' M', ' L'],
    age: 'Teen',
  },
  {
    image: '/images/kids-1.png',
    price: '$25.34',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Kid',
  },
  {
    image: '/images/black-1.png',
    price: '$19.65',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/floral-1.png',
    price: '$55.43',
    material: 'Silk',
    size: ['S', ' M', ' L'],
    age: 'Teen',
  },
  {
    image: '/images/stars.jpeg',
    price: '$25.43',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/kids-2.jpg',
    price: '$32.87',
    material: 'Wool',
    size: ['S', ' M', ' L'],
    age: 'Kid',
  },
  {
    image: '/images/navy-1.png',
    price: '$19.65',
    material: 'Down',
    size: ['S', ' M', ' L'],
    age: 'Teen',
  },
  {
    image: '/images/pirate-1.jpeg',
    price: '$75.12',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/pattern.jpeg',
    price: '$32.92',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/light-blue.jpeg',
    price: '$19.65',
    material: 'Silk',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/tan-1.png',
    price: '$15.36',
    material: 'Wool',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/kids-3.jpeg',
    price: '$19.65',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Kid',
  },
  {
    image: '/images/camo-3.jpeg',
    price: '$19.65',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/teen-1.jpeg',
    price: '$43.05',
    material: 'Down',
    size: ['S', ' M', ' L'],
    age: 'Teen',
  },
  {
    image: '/images/kids-4.jpg',
    price: '$43.05',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Kid',
  },
  {
    image: '/images/floral-2.png',
    price: '$19.65',
    material: 'Silk',
    size: ['S', ' M', ' L'],
    age: 'Teen',
  },
  {
    image: '/images/floral-3.jpg',
    price: '$35.55',
    material: 'Silk',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/kids-5.jpg',
    price: '$20.25',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Kid',
  },
  {
    image: '/images/kids-6.jpeg',
    price: '$12.65',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Kid',
  },
  {
    image: '/images/camo-4.jpeg',
    price: '$25.25',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/checkered-1.jpeg',
    price: '$19.65',
    material: 'Cotton',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/camo-5.jpeg',
    price: '$24.43',
    material: 'Silk',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
  {
    image: '/images/floral-4.jpeg',
    price: '$25.65',
    material: 'Down',
    size: ['S', ' M', ' L'],
    age: 'Adult',
  },
];

// HOME SCRIPTS
const printToDomHome = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildPantsCards = () => {
  let domString = '';

  for (let i = 0; i < pantsObj.length; i++) {
    domString += `<div class="home-pants">`;
    domString += `<img class="card--image" src= ${pantsObj[i].image} alt="bloomers image"/>`;
    domString += `<p><b>USD:</b> ${pantsObj[i].price}</p>`;
    domString += `<p><b>Material:</b> ${pantsObj[i].material}</p>`;
    domString += `<p> ${pantsObj[i].size}</p>`;
    domString += `<p> ${pantsObj[i].age} </p>`;
    domString += `</div>`;
  }

  printToDomHome('home-bloomers', domString);
};
const adultCards = () => {
  let domString = '';

  for (let i = 0; i < pantsObj.length; i++) {
    if (pantsObj[i].age === 'Adult') {
      domString += `<div class="home-pants">`;
      domString += `<img class="card--image" src= ${pantsObj[i].image} alt="bloomers image"/>`;
      domString += `<p><b>USD:</b> ${pantsObj[i].price}</p>`;
      domString += `<p><b>Material:</b> ${pantsObj[i].material}</p>`;
      domString += `<p> ${pantsObj[i].size}</p>`;
      domString += `<p> ${pantsObj[i].age} </p>`;
      domString += `</div>`;
    }
  }
  printToDomHome('home-bloomers', domString);
};

const teenCards = () => {
  let domString = '';

  for (let i = 0; i < pantsObj.length; i++) {
    if (pantsObj[i].age === 'Teen') {
      domString += `<div class="home-pants">`;
      domString += `<img class="card--image" src= ${pantsObj[i].image} alt="bloomers image"/>`;
      domString += `<p><b>USD:</b> ${pantsObj[i].price}</p>`;
      domString += `<p><b>Material:</b> ${pantsObj[i].material}</p>`;
      domString += `<p> ${pantsObj[i].size}</p>`;
      domString += `<p> ${pantsObj[i].age} </p>`;
      domString += `</div>`;
    }
  }
  printToDomHome('home-bloomers', domString);
};

const kidCards = () => {
  let domString = '';

  for (let i = 0; i < pantsObj.length; i++) {
    if (pantsObj[i].age === 'Kid') {
      domString += `<div class="home-pants">`;
      domString += `<img class="card--image" src= ${pantsObj[i].image} alt="bloomers image"/>`;
      domString += `<p><b>USD:</b> ${pantsObj[i].price}</p>`;
      domString += `<p><b>Material:</b> ${pantsObj[i].material}</p>`;
      domString += `<p> ${pantsObj[i].size}</p>`;
      domString += `<p> ${pantsObj[i].age} </p>`;
      domString += `</div>`;
    }
  }
  printToDomHome('home-bloomers', domString);
};

const buttonEvents = () => {
  if (document.getElementById('homePage')) {
    buildPantsCards();
  }
  if (document.getElementById('homePage')) {
    document.getElementById('all').addEventListener('click', buildPantsCards);
    document.getElementById('adult').addEventListener('click', adultCards);
    document.getElementById('teen').addEventListener('click', teenCards);
    document.getElementById('kids').addEventListener('click', kidCards);
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


// ABOUT SCRIPTS
const joePrintToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const aboutInfoBuilder = (e) => {
  let buttonId = e.target.id;
  let domString = '';

  if (buttonId === 'aboutUsBtn') {
    domString += `<div class="info--container">
                    <h2>Our Origin Story</h2>
                      <p>Bloomers was founded in 2014 by Iona Abernathy-Cooper and Jasper Abernathy. This sibling duo was inspired to start something new-but-old when they researched the life of their great-great-aunt Eleanore Abernathy. Ms. Abernathy was a prominent member of the women's suffrage movement and spent the remainder of her life championing equality for all people. Iona and Jasper wanted to honor their relative while inspiring a new generation to "bloom" and pursue their passions.</p>
                      <p>After interning at Parisian fashion house Lanvin, Jasper returned to the U.S. and partnered with Iona to start Bloomers. A successful Kickstarter campaign allowed them to start operations in late 2014. Bloomers seeks to disrupt the norm by encouraging individuals to "Be Weird." Styles are available for adults, teens, and children.  Bloomers seeks sustainable sourcing with a commitment to zero-waste practices. Recognizing the need for innovation, Bloomers partners with local design schools to encourage up-and-coming talent while promoting partnerships to give back to the community.</p>
                  </div>`;
  }
  joePrintToDom('about', domString);
};

const buttonEventsJoe = () => {
  if (document.getElementById('aboutPage')) {
    document.querySelector('#aboutUsBtn').addEventListener('click', aboutInfoBuilder);
  }
  if (document.getElementById('faqPage')) {
    createfaq(faqObj);
    document.querySelector('#searchBar').addEventListener('keyup', handleKeyup);
  }
};

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
  if (buttonId === 'submit-button') {
    const name = document.querySelector('#nameInput').value;
    const email = document.querySelector('#emailInput').value;
    const radioSelection = document.querySelector('input[name="exampleRadios"]:checked').value;
    let contactFormObject = { name: name, email: email, bloomer: radioSelection };
    contactFormInput.push(contactFormObject);
  }
};

// FUNCTION THAT TRIGGERS getNameEmail AND thankYouMessage FUNCTIONS WHEN THE SUBMIT BUTTON IS CLICKED
const submitButtonClick = () => {
  if (document.getElementById('contactUsPage')) {
    let el = document.querySelector('#submit-button');
    el.addEventListener('click', getNameEmail);
    el.addEventListener('click', thankYouMessage);
  }
};

// FUNCTION THAT TRIGGERS AN ALERT MESSAGE IF THE EMAIL INPUT VALUE IS EMPTY
const emptyForm = () => {
  let emailAddress = document.getElementById('emailInput').value;
  if (emailAddress === '') {
    alert('Please enter your email address');
    return false;
  }
  return true;
};

// FUNCTION THAT RUNS WHEN NAME AND EMAIL INPUT IS PRESENT. PRINTING HTML THAT INCLUDES DATA FROM THE ARRAY TO THE DOM. ALSO, REMOVES DOM HTML WHEN ENGAGED.
const thankYouMessage = (e) => {
  let buttonId = e.target.id;
  let domString = '';

  if (buttonId === 'submit-button')
    for (let i = 0; i < contactFormInput.length; i++) {
      if (contactFormInput[i].name) {
        domString += `<div class="card text-center" id="thanks">
                      <div class="card-header" id="thanks-header">
                        Thank you!
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">${contactFormInput[i].name}, your interest in Bloomers is appreciated!</h5>
                        <p class="card-text">We will send a message to ${contactFormInput[i].email} about ${contactFormInput[i].bloomer} bloomers within 24 hours.</p>
                        <a href="index.html" class="btn btn-secondary">Home Page</a>
                      </div>
                      </div>`;
        removeFromDom('#page-content', '');
      } else {
        emptyForm();
      }
    }
  printToDom('#contact-message', domString);
};
// CALLBACK FOR BUTTON CLICK FUNCTION
submitButtonClick();

// MOODS SCRIPTS

const moodArray = [
  { 
    moodName: `Hipster of NYC`,
    description: `You are into upcycling and abhor all things "pedestrian." If you cannot cycle there, it's just not worth it. Our locally-sourced bloomers will take you from fifth wave coffee shops to the next search for mustache wax. Your color palette is a melange of avocado, teak, harvest gold, and burnt sienna. `,
    imageURL: `https://i.pinimg.com/736x/56/b1/ce/56b1ce00ee1a1cec6d38ccdaccdf0175.jpg` 
  },
  { 
    moodName: `Quarantine Vibe`,
    description: `Weeks spent working from home have nudged you in a new direction. Sourdough bread, endless binge-watching sessions, and DIY have replaced your always-on-the-go-buttoned-up aesthetic with something revolutionary. Your bloomer style is comfortable and functional. Poly-blends and rayon ensure you can transition from Zoom meetings to deck renovation with ease. Your color palette is beige, greige, navy, and grey.`,
    imageURL: `https://ae01.alicdn.com/kf/Hca7ecc1d94af4667a94dd28f6ffaaa29j/Unisex-top-quality-Cotton-Spring-Autumn-buddhist-zen-lay-meditation-trousers-shaolin-monk-kung-fu-pants.jpg`
  },
  { 
    moodName: `Steam Punk`,
    description: `If smoke-tinted goggles, top hats, suspenders, and cogs excite you, try our vintage yet futuristic corduroy or wool bloomers. They are perfect for hot air balloon rides with your favorite sidekick or an afternoon of larping in the park.  Your color palette is royal purple, tobacco, magenta, onyx, and persimmon.`,
    imageURL: `https://www.bytheswordinc.com/images/product/medium/PR-6141.jpg`
  },
  { 
    moodName: `Outdoor Adventures`,
    description: `Looking for the next thrill? Can't stop trail-running? Our fitness bloomers will protect you from pesky briars as you geocache or search for non-ferrous metals with your detector. Your color palette is stone, moss, charcoal, and sky.`,
    imageURL: `https://images.beautifulhalo.com/images/392x588/201905/B/fashion-chinese-style-printed-baggy-bloomers-harem-pants-for-men_1558205297425.jpg`
  },
  { 
    moodName: `21st Century Pirate`,
    description: `Forget "puffy shirts!" Swash and/or buckle your way through life with our pirate-inspired bloomers. You'll shiver your timbers in a variety of solids and stripes. The breezy style of our bloomers will let the sea air cool your sunburnt skin. Also available for lil' buccanners as well. Your color palette is ruby, sea-green, barnacle, and squid ink.`,
    imageURL: `https://www.medievalcollectibles.com/wp-content/uploads/2019/03/MY100097_5.jpg`
  },
  
]
const printAllMoods = () => {
  let domString = '';
  for (let i=0; i < moodArray.length; i++) {
    domString += `<div class="mood--card" style="width: 18rem;" id="${i}">  
                   <img src=${moodArray[i].imageURL} class="card-img-top" id="moodCardImage" 
                   alt="This is an image of ${moodArray[i].moodName}">
                  <div class="card-body">
                  <p class="card-mood">${moodArray[i].moodName}</p>
                  <p class="mood-text">${moodArray[i].description}</p>
                  </div>
                  </div>`
 }   
 
 printToDom('#moodyBloom', domString);
}

const randomMoodGenerator = () => {
  let domString = '';
    const randomMood = moodArray[Math.floor(Math.random()* moodArray.length)];
        domString += `<div class="mood--card" style="width: 18rem;" id=${moodyBloom}>  
                  <img src=${randomMood.imageURL} class="card-img-top" id="moodCardImage" 
                  alt="This is an image of ${randomMood.imageURL}">
                 <div class="card-body">
                 <p class="card-mood">${randomMood.moodName}</p>
                 <p class="mood-text">${randomMood.description}</p>
                 </div>
                 </div>`
 
printToDom('#moodyBloom', domString);

}


const moodyEvents = () => {
 if (document.querySelector('#moodsPage')) {
    document.querySelector('#randomBloom').addEventListener('click', randomMoodGenerator);
    document.querySelector('#playItSafe').addEventListener('click', printAllMoods);
}}


const moodInit = () => {
  moodyEvents();
  
}

moodInit();


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
      if (seasonsObj[i].season[j] === 'Spring') {
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

const seasonsInit = () => {
  domEvents();
  seasonsFirstLoad();
}

seasonsInit();

// FAQ SCRIPTS
const faqObj = [
  {
    question: 'What is the return/exchange policy?',
    answer: '30 days with receipt',
  },
  {
    question: 'When will I receive my order?',
    answer: 'We process same day and ship the next business day',
  },
  {
    question: 'What to do if I never received my order?',
    answer: 'Contact us via email with your order number and we will get it fixed ASAP',
  },
  {
    question: 'What to do if I received a defective order? ',
    answer: 'Contact us via email with your order number and we will get it fixed ASAP',
  },
  {
    question: 'Where are you located?',
    answer: 'We are located at 1234 Elm Street, Nashville, TN 37214',
  },
  {
    question: 'How do I make sure to order the correct size?',
    answer: 'All of our products are sized generally (XS, S, M, L, XL, etc.)',
  },
  {
    question: 'How do I contact your company if my question isn’t answered here?',
    answer: 'Use the contact us page to send us an email',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'We do not currently ship internationally.',
  },
  {
    question: 'How are your products shipped?',
    answer:
      'They are shipped in bubblewrap and placed inside a cardboard box to insure safe shipping',
  },
  {
    question: 'What is your privacy policy?',
    answer: 'We never share your name, email, or contact information with anyone - ever! ',
  },
];

const handleKeyup = (e) => {
  const searchString = e.target.value.toLowerCase();
  const searchFaq = [];

  for (let i = 0; i < faqObj.length; i++) {
    if (
      faqObj[i].question.toLowerCase().includes(searchString) ||
      faqObj[i].answer.toLowerCase().includes(searchString)
    ) {
      searchFaq.push(faqObj[i]);
    }
  }
  createfaq(searchFaq);
};

const createfaq = (doggoButts) => {
  let domString = '';

  for (let i = 0; i < doggoButts.length; i++) {
    domString += `<div class="faq--results">
                    <ul id"myUL>
                      <li class="question">Q: ${doggoButts[i].question}</li>
                      <li class="answer">A: ${doggoButts[i].answer}</li>
                    </ul>
                  </div>`;
  }
  joePrintToDom('faq', domString);
};

// FILTER FUNCTION

const init = () => {
  buttonEventsJoe();
};

init();
