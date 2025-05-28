document.addEventListener("DOMContentLoaded", () => {
  const domesticBtn = document.querySelector(".bento__button--domestic");
  const bentoItems = document.querySelectorAll(".bento__item");
  const btnText = domesticBtn.querySelector(".bento__button-text");
  const btnIcon = domesticBtn.querySelector(".bento__button-icon-domestic");

  // SVGs: negocio (maletín) y doméstico (casa)
  const svgNegocio = `
    <svg class="bento__button-icon-domestic" fill="#3D90D7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/>
    </svg>
  `;
  const svgCasa = `
    <svg class="bento__button-icon-domestic" fill="#3D90D7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
  `;

  // Empieza como "Negocio"
  let showingAlpha = false;
  btnText.textContent = "Sector negocio";
  btnIcon.outerHTML = svgNegocio;

  const originalImages = [
    "/images/bento-slide-one.jpg",
    "/images/bento-slide-nine.jpg",
    "/images/bento-slide-two.webp",
    "/images/bento-slide-four.webp",
    "/images/bento-slide-six.jpg",
  ];
  const alphaImages = [
    "/images/bento-slide-one-alpha.webp",
    "/images/bento-slide-nine-alpha.webp",
    "/images/bento-slide-two-alpha.webp",
    "/images/bento-slide-four-alpha.jpeg",
    "/images/bento-slide-six-alpha.jpg",
  ];

  domesticBtn.addEventListener("click", () => {
    showingAlpha = !showingAlpha;
    btnText.textContent = showingAlpha ? "Sector doméstico" : "Sector negocio";
    domesticBtn.querySelector(".bento__button-icon-domestic").outerHTML =
      showingAlpha ? svgCasa : svgNegocio;
    bentoItems.forEach((item, idx) => {
      const img = item.querySelector(".bento__item-image");
      img.src = showingAlpha ? alphaImages[idx] : originalImages[idx];
    });
  });
});
