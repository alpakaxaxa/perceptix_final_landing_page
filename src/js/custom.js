window.onclick = function (e) {
  if (e.target.matches(".mobile-overlay")) {
    let overlay = document.querySelector(".mobile-overlay");
    let navbar = document.querySelector("#navbar");
    if (overlay.classList.contains("block")) {
      overlay.classList.add("hidden");
    }
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  }
};

// mobile nav
let burger = document.querySelector("#burger");
let navbar = document.querySelector("#navbar");
let overlay = document.querySelector(".mobile-overlay");
let cross = document.querySelector("#cross");
burger.addEventListener("click", () => {
  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
    overlay.classList.add("block");
  } else {
    overlay.classList.add("hidden");
    overlay.classList.remove("block");
  }
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});
