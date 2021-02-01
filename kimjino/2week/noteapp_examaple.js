const fs = require('fs')
const chalk=require('chalk')

const addNote=(title,body)=>{
    const notes= loadNotes()
    const duplicateNote=notes.find((note)=>note.title===title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    }
    else{
        console.log(chalk.yellow.inverse('already exist'))
    }
}

const loadNotes=()=>{
    try{
        const dataBuffer = fs.readFileSync('note.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const removeNote=(title =>{
    const notes=loadNotes()
    const notesToKeep=notes.filter ((note)=>note.title !==title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.green('removed'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.yellow.inverse('NotFound'))
    }
})
const listNote=()=>{
    const notes=loadNotes()
    console.log(chalk.yellow('Your notes'))
    notes.forEach((note)=>{
        console.log (note.title)
    })
}
const readNote=(title)=>{
    const notes =loadNotes()
    const note=notes.find((note)=>note.title===title)

    if (note){
        console.log(chalk.yellow(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Not Found'))
    }
}

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('note.json',dataJSON)

}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote

}