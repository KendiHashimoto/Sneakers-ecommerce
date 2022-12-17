import "./tailwind.css"
import "./style.css"

const openBurgerMenuBtn = document.querySelector(".hamburger-icon")
const hamburgerMenu = document.querySelector(".hamburger-menu")
const closeBurgerMenuBtn = document.querySelector(".close-icon")

const cart = document.querySelector(".cart-icon")
const cartContainer = document.querySelector(".cart-container")
const emptyCart = document.querySelector(".empty-cart")
const filledCart = document.querySelector(".filled-cart")
const removeSneakersFromCartBtn = document.querySelector(".trash-icon")

const removeSneakerBtn = document.querySelector(".fa-minus")
const sneakersNumber = document.querySelector(".sneakers-number")
const addSneakerBtn = document.querySelector(".fa-plus")

const addToCartBtn = document.querySelector(".addToCart-button")

const cartSneakers = (number) => {
  sneakersNumber.innerText = +sneakersNumber.innerText + number
}

const openCart = () => {
  cartContainer.classList.toggle("active-cart-container")
}

const addToCart = () => {
  emptyCart.classList.add("inactive-empty-cart")
  filledCart.classList.add("active-filled-cart")
}

const removeSneakersFromCart = () => {
  emptyCart.classList.remove("inactive-empty-cart")
  filledCart.classList.remove("active-filled-cart")
}

const openMenu = () => {
  hamburgerMenu.classList.add("active-burger-menu")
  hamburgerMenu.classList.remove("hamburger-menu")
}

const closeMenu = () => {
  hamburgerMenu.classList.add("hamburger-menu")
  hamburgerMenu.classList.remove("active-burger-menu")
}

// * EVENTS
cart.addEventListener("click", () => {
  openCart()
})

addSneakerBtn.addEventListener("click", (e) => {
  cartSneakers(1)
})

removeSneakerBtn.addEventListener("click", (e) => {
  cartSneakers(-1)
})

addToCartBtn.addEventListener("click", () => {
  addToCart()
})

removeSneakersFromCartBtn.addEventListener("click", () => {
  removeSneakersFromCart()
})

openBurgerMenuBtn.addEventListener("click", () => {
  openMenu()
})

closeBurgerMenuBtn.addEventListener("click", () => {
  closeMenu()
})
