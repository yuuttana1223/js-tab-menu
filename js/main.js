"use strict";
{
  const menuItems = document.querySelectorAll(".menu li a");
  const contents = document.querySelectorAll(".content");

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("active");
      });
      menuItem.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      document.getElementById(menuItem.dataset.id).classList.add("active");
    });
  });
}
