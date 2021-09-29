const fs = require('fs')

const readline = require('readline')

const rd = readline.createInterface({
  input: fs.createReadStream('./test.csv'),
  // output: process.stdout,
  console: false
})

let data = {}

let lineCount = 0
let headers = []
rd.on('line', function (line) {
  let arr = line.split(',')
  for (let i = 0; i < arr.length; i++) {
    if (lineCount <= 1) headers.push(arr[i])
    lineCount++
    if (lineCount == 2) {
      for (let i = 0; i < headers.length; i++) {
        data[headers[i]] = []
        lineCount++
      }
    } else {
      for (const key in data) {
        console.log(i)
        i == 0 ? data[key].push(arr[i]) : data[key].push(arr[i])
        i++
      }
    }
  }
  console.log('Data log', data)
})
