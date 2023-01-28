async function ajax(src, callback) {
  // your code here

  var xhr = new XMLHttpRequest();
  xhr.open("GET", src);
  xhr.onload = await function () {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.responseText);
      callback(data);
    } else {
      console.error(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  };
  xhr.send();
}

function render(data) {
  productsContainer = document.querySelector("div.boxes");
  //Iterate all the data
  for (let i = 0; i < data.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "box");
    Object.entries(data[i]).forEach((entry) => {
      const [key, value] = entry;
      const newElement = document.createElement("p");
      //Make first char of key become UpperCase
      newElement.innerHTML = `${
        key.charAt(0).toUpperCase() + key.slice(1)
      }: ${value}`;
      newDiv.appendChild(newElement);
      productsContainer.appendChild(newDiv);
    });
  }
}

toSeeProducts = async function (event) {
  event.preventDefault();
  ajax(
    "https://appworks-school.github.io/Remote-Assignment-Data/products",
    await function (response) {
      render(response);
    }
  ); // you should get product information in JSON format and render data in the page
  document.querySelector("button.action").setAttribute("isHide", true);
};
