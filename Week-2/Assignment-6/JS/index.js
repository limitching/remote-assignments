let welconTextContainer = $("section.welcome");
let welcomeText = $("section.welcome h1");
let btn_action = $("a.action");
let newBoxes = $("div.boxes2");
//when clicked, display "Have a Good Time!"
welconTextContainer.on("click", () => {
  welcomeText.html('<i lang="la">Have a Good Time!</i>');
});
//when btn was clicked, change attribute "isHide" to false
btn_action.on("click", () => {
  newBoxes.attr("isHide", false);
});
