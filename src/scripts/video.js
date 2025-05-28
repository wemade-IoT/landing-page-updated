const videoContainer = document.querySelector("#about-us .main-image");

videoContainer.addEventListener("click", (e) => {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <button class="modal-close">&times;</button>
    <div class="modal-content modal-pop">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VFVLQwdlmRs?si=M45GpVej2mhvEX_C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  `;

  document.body.style.overflow = "hidden";

  document.body.appendChild(modal);

  const modalContent = modal.querySelector(".modal-content");
  setTimeout(() => {
    modalContent.classList.add("modal-pop--active");
  }, 10);

  const closeBtn = document.querySelector(".modal-close");
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
});
