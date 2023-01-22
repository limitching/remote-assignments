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
      //if API use res.json use this section
      const response = JSON.parse(xhr.responseText);
      console.log(response.result);
      document.getElementById("result").value = response.result;
      /*
      //if API use res.send method, switch by remove the comments for this section and comments the upper section in if condition
      console.log(xhr.responseText);
      document.getElementById("result").value = xhr.responseText;
      */
    }
  };
  xhr.open("GET", `http://localhost:3000/data?number=${num}`, true);
  xhr.send();
  return xhr;
}
