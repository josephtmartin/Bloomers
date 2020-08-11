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

const aboutInfoBuilder = () => {
  let domString = '';
      domString += `<div class="info--container">
                    <h2>What We Do</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h2>Our Origin Story</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h2>Looking to the future of fashion</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>`;
  printToDom('about', domString);
};

const buttonEvents = () => {
  document.querySelector('#aboutUsBtn').addEventListener('click', aboutInfoBuilder);
};

const init = () => {
  buttonEvents();
};

init();
// CONTACT US SCRIPTS

// MOODS SCRIPTS

// SEASONS SCRIPTS
