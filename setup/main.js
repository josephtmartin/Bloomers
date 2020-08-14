'use strict';

// UNIVERSAL SCRIPTS
const pantsObj = [
  {
    image:
      'https://img.alicdn.com/imgextra/i1/51768288/O1CN012B5x46hZVdJdhAO_!!51768288.jpg_640x640q90.jpg',
    material: 'Wool',
    size: ['S', 'M', 'L'],
    age: 'Adult',
  },
  {
    image: 'https://i.ebayimg.com/images/g/QwoAAOSw0ZJajkIn/s-l400.jpg',
    material: 'Silk',
    size: ['S', 'M', 'L'],
    age: 'Adult',
  },
  {
    image: 'https://i.ebayimg.com/images/g/QwoAAOSw0ZJajkIn/s-l400.jpg',
    material: 'Cotton',
    size: ['S', 'M', 'L'],
    age: 'Teen',
  },
  {
    image: 'https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/r9QAAOSw29Zdup3B/$_12.JPG?set_id=880000500F',
    material: 'Down',
    size: ['S', 'M', 'L'],
    age: ['Adult', 'Teen', 'Children'],
  },
];
// HOME SCRIPTS

// ABOUT SCRIPTS
const printToDom = (divId, textToPrint) => {
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
  printToDom('about', domString);
};

const buttonEvents = () => {
  if (document.getElementById('aboutPage')) {
  document.querySelector('#aboutUsBtn').addEventListener('click', aboutInfoBuilder);
  }
  if (document.getElementById('faqPage')) {
    createfaq();
  }
};

// CONTACT US SCRIPTS

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

const createfaq = () => {
  let domString = '';

  for (let i = 0; i < faqObj.length; i++) {
    domString += `<div class="faq--results">
                    <ul id"myUL>
                      <li class="question">Q: ${faqObj[i].question}</li>
                      <li class="answer">A: ${faqObj[i].answer}</li>
                    </ul>
                  </div>`;
  }
  printToDom('faq', domString);
};

// FILTER FUNCTION


const init = () => {
  buttonEvents();
};

init();
