const link = document.querySelector(".sidebar__list");
const item = document.querySelectorAll(".sidebar__item");
const icon = document.querySelectorAll(".sidebar__icon");

link.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("sidebar__item")) {
    item.forEach((item) => {
      item.classList.remove("sidebar__item_active");
    });
    target.classList.add("sidebar__item_active");
  }
});

const paginList = document.querySelector(".customers__pagination-list");
const links = document.querySelectorAll(".customers__pagination-link");
paginList.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("customers__pagination-link")) {
    links.forEach((item) => {
      item.classList.remove("customers__pagination-link_active");
    });
    target.classList.add("customers__pagination-link_active");
  }
});

const buttonOpen = document.querySelector(".sidebar__open_right");
const buttonClose = document.querySelector(".sidebar__close");
const sidebar = document.querySelector(".sidebar");
const sidebarClosed = document.querySelector(".sidebar_closed");

buttonOpen.addEventListener("click", () => {
  if (sidebarClosed.style.display === "block") {
    sidebarClosed.style.display = "none";
    sidebar.style.display = "block";
  } else {
    sidebarClosed.style.display = "block";
    sidebar.style.display = "none";
  }
});

buttonClose.addEventListener("click", () => {
  if (sidebarClosed.style.display === "block") {
    sidebarClosed.style.display = "none";
    sidebar.style.display = "block";
  } else {
    sidebarClosed.style.display = "none";
    sidebar.style.display = "block";
  }
});
