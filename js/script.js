var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

var openModal = function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!";
};

button.addEventListener("click", function () {
  openModal();
});

var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

modalX.addEventListener("click", function () {
  //modal.classList.remove("show-modal");
  //button.innerText = "Who's got this?";
  closeModal();
});

document.addEventListener("keydown", function (e) { 
  //console.log(e.key);
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal")) {
      closeModal();
  }
  }
});

