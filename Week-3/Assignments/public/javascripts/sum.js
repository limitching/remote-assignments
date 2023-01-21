//Select button
const btn = document.getElementById("submit");
//Add event listener to button
btn.addEventListener("click", () => {
  //Select the input number
  const num = document.getElementById("number").value;
  sendAJAX(num);
});

function sendAJAX(num) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response.result);
      document.getElementById("result").value = response.result;
    }
  };
  //For solving Cross-Origin Resource Sharing Issue, I use cors middleware to solve it.
  xhr.open("GET", `http://localhost:3000/data?number=${num}`, true);
  xhr.send();
  return xhr;
}
