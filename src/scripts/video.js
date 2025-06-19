const videoContainer = document.querySelector("#about-us .main-image");
const videoTeam = document.querySelector("#about-team .about-team__video-btn");

function createVideoModal(videoSrc, title = "YouTube video player") {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <button class="modal-close">&times;</button>
    <div class="modal-content modal-pop">
      <iframe 
        width="1200" 
        height="675" 
        src="${videoSrc}" 
        title="${title}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
        style="max-width: 90vw; max-height: 80vh; border-radius: 8px;">
      </iframe>
    </div>
  `;

  document.body.style.overflow = "hidden";
  document.body.appendChild(modal);

  const modalContent = modal.querySelector(".modal-content");
  setTimeout(() => {
    modalContent.classList.add("modal-pop--active");
  }, 10);

  const closeBtn = modal.querySelector(".modal-close");
  closeBtn.addEventListener("click", () => {
    modal.remove();
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.remove();
      document.body.style.overflow = "";
    }
  });
}

videoContainer.addEventListener("click", (e) => {
  createVideoModal("https://www.youtube.com/embed/xdOzNHovALA?si=ABe2IalnMgfw3quq", "YouTube video player");
});

videoTeam.addEventListener("click", (e) => {
  createVideoModal("https://www.youtube.com/embed/2BaLgVPwyto?si=_Xoscg3pocRz9Oh2", "Meet Our Team - YouTube video player");
});