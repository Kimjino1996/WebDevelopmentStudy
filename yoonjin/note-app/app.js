
const chalk= require('chalk')
const { describe, demandOption } = require('yargs')
const yargs = require('yargs')
const notes=require('./notes.js') //object with two properties(getNotes&addNote)

//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true, //must provide 'title'
            type:'string' //set the type of title
        },
        body:{
            describe:"main script of the note",
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})
//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
//Create list command
yargs.command({
    command:'list',
    describe:'List the title of notes',
    handler(){
       notes.listNotes()
    }
})
//Create read command
yargs.command({
    command:'read',
    describe:'Reading the note',
    builder:{
        title:{
            demandOption:true,
            describe:'Note the title',
            type:'string'
        }
    },
    handler(argv){  notes.readNotes(argv.title)}
})
//console.log(process.argv)
yargs.parse()