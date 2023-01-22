function binarySearchPosition(numbers, target) {
  // set the initial search range
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    let check = numbers[Math.floor((start + end) / 2)];
    if (target > check) {
      //if target > check, update the starting search index
      start = Math.floor((start + end) / 2) + 1;
    } else if (target < check) {
      //if target > check, update the ending search index
      end = Math.floor((start + end) / 2) - 1;
    } else {
      //if target = check, return the index value of check
      return Math.floor((start + end) / 2);
    }
  }
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
//New test case from instructor
console.log(binarySearchPosition([1, 2, 5, 6, 7], 7)); // should print 4
console.log(binarySearchPosition([1, 2, 5, 6, 7], -1)); // should print -1
console.log(binarySearchPosition([1, 2, 5, 6, 7], 9)); // should print -1
