import "./tailwind.css"
import "./style.css"

const openBurgerMenuBtn = document.querySelector(".hamburger-icon")
const hamburgerMenu = document.querySelector(".hamburger-menu")
const closeBurgerMenuBtn = document.querySelector(".close-icon")

const cartIndicator = document.querySelector(".cart-indicator")
const cart = document.querySelector(".cart-icon")
const cartContainer = document.querySelector(".cart-container")
const emptyCart = document.querySelector(".empty-cart")
const filledCart = document.querySelector(".filled-cart")
const removeSneakersFromCartBtn = document.querySelector(".trash-icon")
const sneakersInCart = document.querySelector(".sneakers-number-cart")
const totalPrice = document.querySelector(".total-sneakers")

const removeSneakerBtn = document.querySelector(".fa-minus")
const sneakersNumber = document.querySelector(".sneakers-number")
const addSneakerBtn = document.querySelector(".fa-plus")
const addToCartBtn = document.querySelector(".addToCart-button")

const cartSneakers = (amount) => {
  sneakersNumber.innerText = +sneakersNumber.innerText + amount
}

const sneakerPrice = () => {
  let sneakerPrice = 125
  let sneakersPrice = sneakersNumber.textContent * sneakerPrice

  totalPrice.innerText = `$` + sneakersPrice + `.00`
}

const addToCart = () => {
  cartIndicator.innerText = sneakersNumber.textContent
  sneakersInCart.innerText = sneakersNumber.textContent

  sneakerPrice()

  emptyCart.classList.add("inactive-empty-cart")
  filledCart.classList.add("active-filled-cart")
}

const clearCart = () => {
  emptyCart.classList.remove("inactive-empty-cart")
  filledCart.classList.remove("active-filled-cart")

  cartIndicator.classList.remove("active-cart-indicator")
}

const openCart = () => {
  cartContainer.classList.toggle("active-cart-container")
}

const cartStatus = () => {
  cartIndicator.classList.add("active-cart-indicator")
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

addSneakerBtn.addEventListener("click", () => {
  cartSneakers(1)
})

removeSneakerBtn.addEventListener("click", () => {
  sneakersNumber.textContent <= 0 ? 0 : cartSneakers(-1)
})

addToCartBtn.addEventListener("click", () => {
  if (sneakersNumber.textContent === "0") {
    clearCart()
  } else {
    addToCart()
    cartStatus()
  }
})

removeSneakersFromCartBtn.addEventListener("click", () => {
  clearCart()
})

openBurgerMenuBtn.addEventListener("click", () => {
  openMenu()
})

closeBurgerMenuBtn.addEventListener("click", () => {
  closeMenu()
})

// LIGHTBOXES
const previousLightboxBtn = document.querySelector(".previousLightboxBtn")
const nextLightboxBtn = document.querySelector(".nextLightboxBtn")

const imagesContainer = document.querySelector(".bigSneaker-container")
const images = imagesContainer.getElementsByClassName("bigSneaker-img")
let currentIndex = 0

const previousPicture = () => {
  images[currentIndex].classList.remove("active")
  images[currentIndex].classList.add("inactive")

  currentIndex = (currentIndex - 1 + images.length) % images.length

  images[currentIndex].classList.remove("inactive")
  images[currentIndex].classList.add("active")
}

const nextPicture = () => {
  images[currentIndex].classList.remove("active")
  images[currentIndex].classList.add("inactive")

  // Incrementa o ??ndice da imagem atual
  currentIndex = (currentIndex + 1) % images.length

  images[currentIndex].classList.remove("inactive")
  images[currentIndex].classList.add("active")
}

// EVENTS
previousLightboxBtn.addEventListener("click", () => {
  previousPicture()
})

nextLightboxBtn.addEventListener("click", () => {
  nextPicture()
})
