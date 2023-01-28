(() => {
  const $btn = document.querySelector(".nav-btn"),
    $menu = document.querySelector(".nav-items");

  document.addEventListener("click", (e) => {
    if (e.target.matches(`.nav-btn *`)) {
      $btn.firstElementChild.classList.toggle("none");
      $btn.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("active");
    }
  });
})();
