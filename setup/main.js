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
    description: `Forget "puffy shirts!" Swash and/or buckle your way through life with our pirate-inspired bloomers. You'll shiver your timbers in a variety of solids and stripes. The breezy style of our bloomers will let the sea air cool your sunburnt skin. Also available for lil' buccanners as well. Your color palette is ruby, sea-green, barnacle, and and squid ink.`,
    imageURL: `https://www.medievalcollectibles.com/wp-content/uploads/2019/03/MY100097_5.jpg`
  },
]


const moodBuilder = () => {
  let domString = '';
  let randomMood = Math.floor(Math.random()* moodArray.length); 
      
  for (let i=0; i < moodArray.length; i++) {
   domString += `<div class="card my-2" style="width: 18rem;" id="${i}">  
                  <img src=${moodArray[i].imageURL} class="card-img-top" 
                  alt="This is an image of ${moodArray[i].moodName}">
                 <div class="card-body">
                 <p class="card-text">${moodArray[i].moodName}</p>
                 <p class="mood-text">${moodArray[i].description}</p>
                 </div>
                 </div>`
}   

printToDom('#moodyBloom', domString)

}


const handleButtonClick = (e) => {
    const buttonId = e.target.id;
   
}

const moodyEvents = () => {
 if (document.querySelector('#moodsPage')) {
    document.querySelector('#moodyBtn').addEventListener('click', handleButtonClick);
}}


const init = () => {
  moodyEvents();
  moodBuilder(moodArray);
 
}

init();


// SEASONS SCRIPTS
