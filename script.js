const currentLevel = document.getElementById("currentLevel");
const maxLevel = document.getElementById("maxLevel");
const range = document.getElementById("range");
const lightLevel = document.getElementById("light");
const button = document.getElementById("button");

let lastLightLevel;

range.defautValue = 5;
maxLevel.innerText = range.defautValue;
currentLevel.innerText = range.defautValue;
range.value = range.defautValue;
lastLightLevel = range.value;

range.addEventListener("change", () => {
  currentLevel.innerText = range.value;
  lightLevel.style.setProperty("--light-level", range.value * 0.2);
  lastLightLevel = range.value;
});

button.addEventListener("click", () => {
  if (button.classList.contains("off")) {
    button.classList.remove("off");

    currentLevel.innerText = lastLightLevel;

    range.value = lastLightLevel;
    range.removeAttribute("disabled");

    lightLevel.style.setProperty("--light-level", range.value * 0.2);

    currentLevel.classList.remove("off");
  } else {
    button.classList.add("off");

    currentLevel.innerText = "0";

    range.value = 0;
    range.setAttribute("disabled", "disabled");

    lightLevel.style.setProperty("--light-level", 0);

    currentLevel.classList.add("off");
  }
});

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const darkBack = document.getElementById("darkBack");
const navBar = document.getElementsByClassName("nav-bar")[0];

openMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
    darkBack.classList.toggle("active");
});
closeMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
    darkBack.classList.toggle("active");
});