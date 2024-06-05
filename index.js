let fs = require('fs').promises
let args = process.argv[2] //[node path, file path, argument]

if (args == '-c') {
    countBytes()
}
else if (args == '-l') {
    countLines()
}
else if (args == '-w') {
    countWords()
}
else if (args == '-m') {
    countCharacters()
}
else {
    countBytes()
    countWords()
    countLines()
}

//Logic
async function countBytes() {
    try {
        let data = await fs.stat('test.txt')
        console.log(`Total number of bytes are ${data.size}`)
    } catch (error) {
        console.log(error)
    }
}

async function countLines() {
    try {
        let data = await fs.readFile('test.txt', 'utf-8')
        let count = data.split('\n').length
        console.log(`Total number of lines are ${count}`)
    } catch (error) {
        console.log(error)
    }
}

async function countWords() {
    try {
        let data = await fs.readFile('test.txt', 'utf-8')
        let count = data.split(/\s+/).length // considering non white space characters
        console.log(`Total number of words are ${count}`)
    } catch (error) {
        console.log(error)
    }
}

async function countCharacters() {
    try {
        let data = await fs.readFile('test.txt', 'utf-8')
        let count = data.split('').length
        console.log(`Total number of characters are ${count}`)
    } catch (error) {
        console.log(error)
    }
}

