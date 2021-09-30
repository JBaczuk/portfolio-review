const fs = require("fs");

const readline = require("readline");

const rd = readline.createInterface({
  input: fs.createReadStream("./test2.csv"),
  // output: process.stdout,
  console: false,
});

let data = {};

let lineCount = 0;
let headers = [];
rd.on("line", function (line) {
  let arr = line.split(",");
  for (let i = 0; i < arr.length; i++) {
    if (lineCount < 1) {
      data[arr[i]] = [];
    } else {
      data[Object.keys(data)[i]].push(arr[i]);
    }
  }
  lineCount++;
  // console.log("Data log", data);
});

// rd.on("line", function (line) {
//   const lineItems = line.split(",");
//   const headers = Object.keys(data);

//   for (let i = 0; i < lineItems.length; i++) {
//     const currentLineItem = lineItems[i];
//     if (lineCount === 0) {
//       data[currentLineItem] = [];
//     } else {
//       const currentHeader = headers[i];
//       data[currentHeader].push(currentLineItem);
//     }
//   }

//   lineCount++;
// });

rd.on("close", () => {
  console.log("data", data);
});
