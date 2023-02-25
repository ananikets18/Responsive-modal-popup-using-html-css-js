/*=============== SHOW MODAL ===============*/
const openBtn = document.querySelector(".share__modal_btn");
const modal = document.querySelector(".share__modal");

if (openBtn && modal) {
  openBtn.addEventListener("click", () => {
    modal.classList.add("show-modal");
  });
}

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelector(".close_modal_btn");

function closeModal() {
  modal.classList.remove("show-modal");
}
closeBtn.addEventListener("click", closeModal);

/*====== ESC BUTTON TO CLOSE MODAL ======*/
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
