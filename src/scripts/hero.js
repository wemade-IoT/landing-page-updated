document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.querySelector(".hero__image");
  const images = [
    "/images/farmer2.png",
    "/images/business.png",
  ];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;

    heroImage.style.opacity = "0";
    setTimeout(() => {
      heroImage.src = images[currentIndex];
      heroImage.style.opacity = "1";
    }, 400);
  }, 5000);
});