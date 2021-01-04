# Week1
## Section 2.Installing and Exploring Node.js

### 1.My first Node.js Script
	
   a. 'App.js' Script 만들기
		
   	console.log( ‘Hello Node.js!’)


 b.Script 실행하기

 
 	$ node app.js 

 result) Hello Node js!
## Section 3.Node.js Module System
>1.Importing core modules

	
    const fs = require('fs') // ‘fs’ module 로드하기
	fs.writeFileSync('notes.txt', 'I live in Philadelphia') // ‘notes’텍스트에 string 작성
>2. Importing your own file

-app.js
 
    
    const notes=require('./notes.js') *//notes .js 파일 실행*
	const string=notes()
	console.log(string)
    
-notes.js 
	
    const getNotes = function(){
    	const str="Your notes..."
    	return str;
	}
	module.exports=getNotes  *//getNotes 함수를 script사이에서 공유가능하도록 함.*

 

	
