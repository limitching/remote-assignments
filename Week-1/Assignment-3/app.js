//this app.js is made by Hung Wei-Ching,2023 for Boot camp AppWorks School Batch #19

function countAandB(input) {
  //declare n_a as number count of 'a'
  let n_a = 0;
  //declare n_b as number count of 'b'
  let n_b = 0;
  //declare i as index for input
  let i = 0;
  //set a loop for checking each index in the array
  while (i < input.length) {
    //console.log(input[i]);

    if (input[i] == "a") {
      n_a++;
    }
    if (input[i] == "b") {
      n_b++;
    }
    i++;
  }
  return n_a + " 'a' letter and " + n_b + " 'b' letter";
}

function toNumber(input) {
  //delacre an empty array to store the result
  let result = [];
  //declare i as index for input
  let i = 0;
  while (i < input.length) {
    if (input[i] == "a") {
      result[i] = 1;
    } else if (input[i] == "b") {
      result[i] = 2;
    } else if (input[i] == "c") {
      result[i] = 3;
    } else if (input[i] == "d") {
      result[i] = 4;
    } else if (input[i] == "e") {
      result[i] = 5;
    }
    i++;
  }
  return result;
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
