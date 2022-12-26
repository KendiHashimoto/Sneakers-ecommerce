import PhotoSwipeLightbox from "photoswipe/lightbox"
import "photoswipe/style.css"

const sneaker = new PhotoSwipeLightbox({
  gallery: "#sneaker",
  children: "a",
  pswpModule: () => import("photoswipe"),
})
sneaker.init()

const sneakers = new PhotoSwipeLightbox({
  gallery: "#sneakers",
  children: "a",
  pswpModule: () => import("photoswipe"),
})
sneakers.init()
