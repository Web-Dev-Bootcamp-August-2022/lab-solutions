// Write your Pizza Builder JavaScript in this file.

// Constants 
const basePrice = 10;
const ingredients = {
  pepperonni: {
    name: 'Pepperonni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
}

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false
}


// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  console.log(state);
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  console.log('all pep items: ', document.querySelectorAll('.pep'));
  document.querySelectorAll('.pep').forEach(function (pep) {
    if (state.pepperonni) {
      pep.style.visibility = 'visible';
    } else {
      pep.style.visibility = 'hidden';
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class='mushroom'>`
  console.log(document.querySelectorAll('.mushroom'));
  document.querySelectorAll('.mushroom').forEach(function (mush) {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers(event) {
  // Iteration 1: set the visibility of `<section class='green-pepper'>`
  document.querySelectorAll('.green-pepper').forEach(function (gp) {
    if (state.greenPeppers) {
      gp.style.visibility = 'visible';
    } else {
      gp.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class 'sauce-white' of `<section class='sauce'>`
  const section = document.querySelector('.sauce');
  if (state.whiteSauce) {
    section.classList.add('sauce-white');
  } else {
    section.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class 'crust-gluten-free' of `<section class='crust'>`
  const section = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    section.classList.add('crust-gluten-free');
  } else {
    section.classList.remove('crust-gluten-free');
  }
}

const classFor = {
  pepperonni: '.btn-pepperoni',
  mushrooms: '.btn-mushrooms',
  greenPeppers: '.btn-green-peppers',
  whiteSauce: '.btn-sauce',
  glutenFreeCrust: '.btn-crust'
}

function renderButtons() {
  // iterate over state
  for (let ingredient in state) {
    console.log(ingredient)
    // const button = document.querySelector(classFor[ingredient])
    // console.log(button)
    if (state[ingredient]) {
      document.querySelector(classFor[ingredient]).classList.add('active')
    } else {
      document.querySelector(classFor[ingredient]).classList.remove('active')
    }
  }



  // if (state.pepperonni) {
  //   document.querySelector('.btn-pepperoni').classList.add('active')
  // } else {
  //   document.querySelector('.btn-pepperoni').classList.remove('active')
  // }
  // if (state.mushrooms) {
  //   document.querySelector('.btn-mushrooms').classList.add('active')
  // } else {
  //   document.querySelector('.btn-mushrooms').classList.remove('active')
  // }
  // if (state.greenPeppers) {
  //   document.querySelector('.btn-green-peppers').classList.add('active')
  // } else {
  //   document.querySelector('.btn-green-peppers').classList.remove('active')
  // }
  // if (state.whiteSauce) {
  //   document.querySelector('.btn-sauce').classList.add('active')
  // } else {
  //   document.querySelector('.btn-sauce').classList.remove('active')
  // }
  // if (state.glutenFreeCrust) {
  //   document.querySelector('.btn-crust').classList.add('active')
  // } else {
  //   document.querySelector('.btn-crust').classList.remove('active')
  // }
}

function renderPrice() {
  let list = '';
  let price = basePrice;
  for (let ingredient in state) {
    console.log('ingredient in loop: ', ingredient);
    console.log(ingredients[ingredient])
    if (state[ingredient]) {
      list += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
      price += ingredients[ingredient].price
    }
  }
  console.log('this is the price list: ', list);
  console.log('this is the total price', price);

  console.log(document.querySelector('.panel.price ul'))
  document.querySelector('.panel.price ul').innerHTML = list;
  document.querySelector('.panel.price strong').innerText = '$ ' + price;
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class='btn btn-pepperonni'>`
document.querySelector('.btn.btn-pepperoni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class='btn btn-mushrooms'>`

document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class='btn btn-green-peppers'>`

document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class='btn btn-sauce'>`

document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class='btn btn-crust'>`

document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}