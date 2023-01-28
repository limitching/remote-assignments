//Assignment-1: Asynchronous function

function delayedResult(n1, n2, delayTime, callback) {
  let result = n1 + n2;
  return setTimeout(callback, delayTime, result);
}
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

function delayedResultPromise(n1, n2, delayTime) {
  let result = n1 + n2;

  return new Promise((resolve, reject) => {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      reject(new Error("The input is not a number!"));
    } else {
      setTimeout(() => {
        resolve(result);
      }, delayTime);
    }
  });
}

delayedResultPromise(4, 5, 3000)
  .then(console.log)
  //add catch for testing error handler
  .catch((error) => {
    console.log(error.message);
  });
// 9 (4+5) will be shown in the console after 3 seconds

async function main() {
  try {
    let result = await delayedResultPromise(4, 5, 5000);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
main(); // result will be shown in the console after <delayTime> seconds
