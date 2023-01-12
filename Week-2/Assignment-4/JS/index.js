let welcomeText = document.querySelector("section.welcome h1");
let btn_action = document.querySelector("a.action");
let newBoxes = document.querySelector("div.boxes2");
//when clicked, display "Have a Good Time!"
welcomeText.addEventListener("click", (e) => {
  e.target.innerHTML = '<i lang="la">Have a Good Time!</i>';
});
//when btn was clicked, change attribute "isHide" to false
btn_action.addEventListener("click", (e) => {
  newBoxes.setAttribute("isHide", false);
});
