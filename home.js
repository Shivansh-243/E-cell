function toggleNav() {
  var navBar = document.getElementById("myTopnav");
  var icon = navBar.querySelector(".icon");
  var x = document.getElementById("myTopnav");
  if (navBar.classList.contains("open")) {
    // Close the navbar
    navBar.classList.remove("open");
    icon.textContent = "☰"; // Change back to "☰" when closing
  } else {
    // Open the navbar
    navBar.classList.add("open");
    icon.textContent = "✕"; // Change to "✕" when opening
  }

  if (navBar.classList.contains("responsive")) {
    navBar.classList.remove("responsive");
  } else {
    navBar.classList.add("responsive");
  }
}
