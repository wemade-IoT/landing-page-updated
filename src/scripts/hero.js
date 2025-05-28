document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.getElementById("hero");
  const heroImage = document.querySelector(".hero__image");

  const backgrounds = [
    "/images/hero-background.png",
    "/images/hero-background-alpha.webp"
  ];
  const images = [
    "/images/farmer2.png",
    "/images/negro.webp"
  ];

  let currentIndex = 0;

  backgrounds.forEach(src => {
    const img = new Image();
    img.src = src;
  });
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;

    heroImage.style.opacity = "0";
    setTimeout(() => {
      heroImage.src = images[currentIndex];
      heroImage.style.opacity = "1";
    }, 400);

    heroSection.style.transition = "background-image 0.5s ease-in-out";
    heroSection.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
  }, 5000);
});