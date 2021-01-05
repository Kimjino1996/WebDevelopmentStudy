# Week2
## Section 4. File System and Cmd Line Args


### 1. Getting input from user (using command line argument)


-실행파일 : app.js

```javascript
console.log( process.argv )
```

   

 -console
	
    $ node app.js Yoonjin
  result)
  
[ 'C:\\Program Files\\nodejs\\node.exe',     *//argv[0]*
 
 'C:\\Users\\yoonjin\\Desktop\\web\\notes-app\\app.js',   *//argv[1]*
  
 'Yoonjin'	*//argv[2]*
 ]   


 
### 2. Using  *yargs*  npm module
```javascript
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"Note title",//description
            demandOption:true, //must provide 'title', default = false
            type:'string' //set the type of title
        },
        body:{
            describe:"main script of the note",
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Adding a new note!\nTitle:',argv.title)
        console.log('contents:\n',argv.body)
    }
})
yargs.parse()
```
+ 틀린 예시
		
		$ node app.js add
	result) (error) 필수 인자를 받지 못했습니다: title -->demandOption : true이기 때문
+ 옳은 예시

		$ node app.js add --title="Shopping List" --body="Milk,Yogurt,Cheese"

	result)
   			 Adding a new note!   
			Title: Shopping List   
			contents: Milk,Yogurt,Cheese

### 3. Storing Data using JSON

        
      

