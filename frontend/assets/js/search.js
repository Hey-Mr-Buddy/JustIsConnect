const triggerSearch = document.getElementById("triggerSearch");
const modalOverlay = document.getElementById("modalOverlay");
const mainContent = document.getElementById("content");

triggerSearch.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
  mainContent.classList.add("faded");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modalOverlay.style.display = "none";
  mainContent.classList.remove("faded");
}
