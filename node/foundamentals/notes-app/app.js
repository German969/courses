const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)

// 15.Getting input from users
// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

// 13. Printing in color
// const notes = getNotes()
// console.log(notes)

// const successMsg = chalk.green.inverse.bold('Success!')
// console.log(successMsg)

// console.log(process.argv[2])

// 11. Importing npm Modules
// const validator = require('validator')
// console.log(validator.isEmail('example.com'))
// console.log(validator.isURL('https/mead.io'))

// 10. Importing your own files
// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

// 9. Importing Node.js Core Modules
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'This was created by Node.js FileSystem.\n')
// fs.appendFileSync('notes.txt', 'My name is German.')