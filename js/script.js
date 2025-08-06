var sidebar = document.querySelector(".sidebar");
var sidebarToggleBtn = document.querySelector(".sidebar-toggle");
var themeToggleBtn = document.querySelector(".theme-toggle");
var iconMode = document.querySelector(".theme-lable span i");

// Function to apply theme based on localStorage
function applyTheme() {
  var mode = localStorage.getItem("mode");
  if (mode === "dark") {
    document.body.classList.add("dark-theme");
    iconMode.classList.remove("bx-moon");
    iconMode.classList.add("bx-sun");
  } else {
    document.body.classList.remove("dark-theme");
    iconMode.classList.remove("bx-sun");
    iconMode.classList.add("bx-moon");
  }
}

applyTheme();

sidebarToggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("collapsed");
});

themeToggleBtn.addEventListener("click", function () {
  // Toggle the dark-theme class on the body
  document.body.classList.toggle("dark-theme");

  // Update localStorage and icon based on the new theme
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("mode", "dark");
    iconMode.classList.remove("bx-moon");
    iconMode.classList.add("bx-sun");
  } else {
    localStorage.setItem("mode", "light");
    iconMode.classList.remove("bx-sun");
    iconMode.classList.add("bx-moon");
  }
});

