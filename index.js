// let fs = require('fs').promises
// let args = process.argv[2] //[node path, file path, argument]

// if (args == '-c') {
//     countBytes()
// }
// else if (args == '-l') {
//     countLines()
// }
// else if (args == '-w') {
//     countWords()
// }
// else if (args == '-m') {
//     countCharacters()
// }
// else {
//     countBytes()
//     countWords()
//     countLines()
// }

// //Logic
// async function countBytes() {
//     try {
//         let data = await fs.stat('test.txt')
//         console.log(`Total number of bytes are ${data.size}`)
//     } catch (error) {
//         console.log(error)
//     }
// }

// async function countLines() {
//     try {
//         let data = await fs.readFile('test.txt', 'utf-8')
//         let count = data.split('\n').length
//         console.log(`Total number of lines are ${count}`)
//     } catch (error) {
//         console.log(error)
//     }
// }

// async function countWords() {
//     try {
//         let data = await fs.readFile('test.txt', 'utf-8')
//         let count = data.split(/\s+/).length // considering non white space characters
//         console.log(`Total number of words are ${count}`)
//     } catch (error) {
//         console.log(error)
//     }
// }

// async function countCharacters() {
//     try {
//         let data = await fs.readFile('test.txt', 'utf-8')
//         let count = data.split('').length
//         console.log(`Total number of characters are ${count}`)
//     } catch (error) {
//         console.log(error)
//     }
// }

let fs = require('fs').promises;
let args = process.argv.slice(2); //[node path, file path, arguments]

if (args.length === 0 || (args.length === 1 && args[0].startsWith('-'))) {
    // No filename specified, read from stdin
    readFromStdin();
} else {
    // Filename is provided, use the filename
    let option = args[0];
    let filename = args[1] || 'test.txt'; // Default to 'test.txt' if no filename is provided with the option

    if (option == '-c') {
        countBytes(filename);
    } else if (option == '-l') {
        countLines(filename);
    } else if (option == '-w') {
        countWords(filename);
    } else if (option == '-m') {
        countCharacters(filename);
    } else {
        countBytes(filename);
        countWords(filename);
        countLines(filename);
    }
}

// Logic
async function countBytes(filename) {
    try {
        let data = await fs.stat(filename);
        console.log(`Total number of bytes are ${data.size}`);
    } catch (error) {
        console.log(error);
    }
}

async function countLines(filename) {
    try {
        let data = await fs.readFile(filename, 'utf-8');
        let count = data.split('\n').length;
        console.log(count);
    } catch (error) {
        console.log(error);
    }
}

async function countWords(filename) {
    try {
        let data = await fs.readFile(filename, 'utf-8');
        let count = data.split(/\s+/).length; // considering non white space characters
        console.log(`Total number of words are ${count}`);
    } catch (error) {
        console.log(error);
    }
}

async function countCharacters(filename) {
    try {
        let data = await fs.readFile(filename, 'utf-8');
        let count = data.split('').length;
        console.log(`Total number of characters are ${count}`);
    } catch (error) {
        console.log(error);
    }
}

function readFromStdin() {
    let input = '';

    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', chunk => {
        input += chunk;
    });

    process.stdin.on('end', () => {
        // Assuming default behavior if no specific option is provided
        console.log(input.split('\n').length);
    });

    process.stdin.resume();
}
