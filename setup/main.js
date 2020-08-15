'use strict';

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
const joePrintToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const aboutInfoBuilder = (e) => {
  let buttonId = e.target.id;
  let domString = '';

  if (buttonId === 'aboutUsBtn') {
    domString += `<div class="info--container">
                    <h2>What We Do</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h2>Our Origin Story</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h2>Looking to The Future of Fashion</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>`;
  }
  joePrintToDom('about', domString);
};

const buttonEvents = () => {
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
  buttonEvents();
};

init();
