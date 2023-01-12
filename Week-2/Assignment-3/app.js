function count(input) {
  // define a empty object
  let count_ans = {};

  for (let i = 0; i < input1.length; i++) {
    //Before add key-value pair into this object, "count_ans[input1[i]]" will be undefined.
    if (count_ans[input1[i]] === undefined) {
      //if key-value pair not exist, create one and assign the value to 1
      count_ans[input1[i]] = 1;
    } else {
      //if key-value pair exist, value+=1
      count_ans[input1[i]] += 1;
    }
  }
  //return an "object"
  return count_ans;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // define a empty object
  let grouped = {};

  //loop through each object in input2 array
  for (let i = 0; i < input2.length; i++) {
    //check if the key in object exist in grouped object
    if (input2[i].key in grouped) {
      //if exist, add the value into current value
      grouped[input2[i].key] += input2[i].value;
    } else {
      //if not exist, create a key-value pair
      grouped[input2[i].key] = input2[i].value;
    }
  }
  //return resule
  return grouped;
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
