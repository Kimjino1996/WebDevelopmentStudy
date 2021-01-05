const chalk = require("chalk");
const { Modifiers } = require("chalk");

const fs=require('fs')
const getNotes = ()=>"Your notes..."
const addNotes = (title, body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=> note.title==title)
    if(duplicateNotes.length ==0){//중복되는 노트가 없는경우
        notes.push({
            title:title,
            body:body
        })
        SaveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    }
    else{
        console.log(chalk.bgRed('Note title taken!'))
    }
}
const SaveNotes=(notes)=>{ //notes가 무슨 type이든 관계없음.
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}
const removeNotes=(title) =>{
    const notes=loadNotes()
    const keepNotes=notes.filter((note)=>note.title!=title)// return true to keep it
    // console.log(sameNotes)
    // console.log(notes)
    if(keepNotes.length==notes.length){//no note to remove
        console.log(chalk.bgGreen("No note found!")) //chalkg.green.inverse
    }
    else{
        SaveNotes(keepNotes)
        console.log(chalk.bgRed('Note removed!'))
    }

    
}
// function to load notes
const loadNotes = () =>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        //console.log(JSON.parse(dataBuffer.toString()))
        return JSON.parse(dataBuffer.toString()) //[{ },{ }] return array with object
    }catch(e){
        return [] //add first item to empty array and saved to the file
    }
}
const listNotes =()=>{
    const string=getNotes()
    const notes=loadNotes()
    console.log(chalk.inverse(string))
    // for (var i=0;i<notes.length;i++){
    //     console.log(notes[i].title)
    // } 
    notes.forEach((note)=>{
        console.log(note.title)
    })
}
const readNotes=function(title){
    const notes=loadNotes()
    const target=notes.find((note)=>note.title==title)
    if(target==undefined){
        console.log(chalk.red('No Note found!'))
    }
    else{
        console.log(chalk.inverse("Title :"+ target.title))
        console.log("content: "+target.body)
    }
}
//export multiple functions created
module.exports={
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}