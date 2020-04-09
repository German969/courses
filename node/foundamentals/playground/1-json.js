const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'German'
data.age = 24

const newDataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', newDataJSON)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)