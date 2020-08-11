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


let contactFormInput = [];

const contactSubmitButton = (e) => {
  let buttonId = e.target.id;
  if (buttonId === "submit-button") {
    const name = document.querySelector("#nameInput").value;
    const email = document.querySelector("#emailInput").value;
    let contactFormObject = {username: name, useremail: email};
    contactFormInput.push(contactFormObject);
  }
};

const contactErrorMessage = (name) => {
  if (name) {
    document.querySelector("#nameInput" && "#emailInput").innerHTML = ""
  } else {
    document.querySelector("#nameInput" && "#emailInput").innerHTML = 
      `<div style="color: red; margin-bottom: 10px;">
          <b>Enter your name and email, pretty please</b>
      </div>`
  }
}

const contactSuccessMessage = (name) => {
  if (name) {
    document.querySelector()
  }
}

// MOODS SCRIPTS

// SEASONS SCRIPTS
