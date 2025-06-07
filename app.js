console.log("Hello Workdl"); lightMode = document.querySelector("#light-mode");
const darkMode = document.querySelector("#dark-mode");
const body = document.querySelector("body");

lightMode.addEventListener("click", function() {
  body.style.backgroundColor = "#FFF3EB"
});
darkMode.addEventListener("click", function() {
  body.style.backgroundColor = "#A54800"
})

const mainSection = document.querySelector("#main");
mainSection.style.color = "blue"












