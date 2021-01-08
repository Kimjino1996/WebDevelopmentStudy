const chal=require('chalk')
const yargs=require('yargs')
const notes=require('./noteapp_examaple.js')


yargs.command({
    command:'add',
    describe:'add',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }

})

yargs.command({
    command:'remove',
    describe:'remove',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'read',
    describe:'read',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})
yargs.command({
    command:'list',
    describe:'list',
    handler(argv){
        notes.listNote()
    }

})


yargs.parse()
