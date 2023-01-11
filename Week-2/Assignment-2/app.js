function avg(data) {
  // your code here
  let sum = 0;
  for (let i = 0; i < data.products.length; i++) {
    //select product price by data.products[i]["price"]
    sum += data.products[i]["price"];
  }
  return sum / data.products.length; //return average price of all products
}
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
