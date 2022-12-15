import "./tailwind.css"

const burgerMenu = document.querySelector(".hamburger-menu")
const cart = document.querySelector(".inactive-cart-icon")
const cartModal = document.querySelector(".cart-modal")

const removeSneakerIcon = document.querySelector(".fa-minus")
const sneakersNumber = document.querySelector(".sneakers-number")
const addSneakerIcon = document.querySelector(".fa-plus")

const addToCart = document.querySelector(".addToCart-button")

// const cartSneakers = (symbol) => {
//   if (symbol.classList.contains("addSneakerIcon")) {
//     console.log('josepe')
//   }
//     sneakersNumber.innerText = +sneakersNumber.innerText + number
// }

// * EVENTS
cart.addEventListener("click", () => {})

addSneakerIcon.addEventListener("click", (e) => {
  if(e.target.classList.contains(".fa-plus")) {
    console.log('josepe')
  }
  // cartSneakers(e.target)
  // cartSneakers(1)
})

// removeSneakerIcon.addEventListener("click", (e) => {
//   cartSneakers(-1)
// })

addToCart.addEventListener("click", () => {})

burgerMenu.addEventListener("click", () => {})
