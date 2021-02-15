// Modal Controler
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".modal-button").addEventListener("click", function() {
    document.querySelector(".modal-container").classList.add("fade-in");
  })
  document.querySelectorAll(".modal-exit").forEach((elem) => {
    elem.addEventListener("click", () => {
      document.querySelector(".modal-container").classList.remove("fade-in");
    })
  })
})