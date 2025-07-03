import PhotoSwipeLightbox from "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe-lightbox.esm.min.js";

const displayGalleryBtn = document.querySelector(".bento__button");

const lightbox = new PhotoSwipeLightbox({
  gallery: "#bento-grid",
  children: "a",
  pswpModule: () => import("https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe.esm.min.js"),
  padding: { top: 20, bottom: 20, left: 80, right: 80 },
});

lightbox.init();

displayGalleryBtn.addEventListener("click", () => {
  lightbox.loadAndOpen(0);
});