// Function to toggle the navigation bar
function toggleNav() {
  var navBar = document.getElementById("myTopnav");
  var icon = navBar.querySelector(".icon");

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

const grids = document.querySelectorAll(".square");

var revertedGridOrder = [];

// Flag to prevent rapid clicks
let isReverting = false;

grids.forEach((grid) => {
  grid.addEventListener("click", () => {
    const isCenterGrid = grid.id === "b22";

    if (isReverting) {
      return;
    }

    if (isCenterGrid) {
      revertColorsWithOrder();
      return;
    }

    grid.style.backgroundColor = "red";
    revertedGridOrder.push(grid.id);
  });
});

function revertColorsWithOrder() {
  console.log(revertedGridOrder);
  isReverting = true;

  const delayBetweenRevert = 500;
  let index = 0;

  function revertNextGrid() {
    if (index < revertedGridOrder.length) {
      const gridId = revertedGridOrder[index];

      const grid = document.getElementById(gridId);

      grid.style.backgroundColor = "rgba(0, 64, 122, 1)";

      index++;

      setTimeout(revertNextGrid, delayBetweenRevert);
    } else {
      isReverting = false;
      revertedGridOrder = [];
    }
  }

  // Start reverting grids
  console.log("Reverted Grid Order:", revertedGridOrder);
  revertNextGrid();
}
