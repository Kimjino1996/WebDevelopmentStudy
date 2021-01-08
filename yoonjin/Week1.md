# 1주차
## Section 2. Installing and Exploring Node.js

### 1.My first Node.js Script
	
   a. 'App.js' Script 만들기
		
```javascript
console.log( ‘Hello Node.js!’)
```


 b.Script 실행하기

 
 	$ node app.js 

 result) Hello Node js!
## Section 3. Node.js Module System
>1.Importing core modules

```javascript	
const fs = require('fs') // ‘fs’ module 로드하기
fs.writeFileSync('notes.txt', 'I live in Philadelphia') // ‘notes’텍스트에 string 작성
```
>2. Importing your own file

-app.js
 
    
    const notes=require('./notes.js') *//notes .js 파일 실행*
	const string=notes()
	console.log(string)
    
-notes.js 
	
```javascript
	const getNotes = function(){
    	const str="Your notes..."
    	return str;
	}
	module.exports=getNotes  //getNotes 함수를 script사이에서 공유가능하도록 함.
```

 >3.Importing npm Modules

+ Step 1) initialize npm – npm init (from the root of the project)
	- npm init -y : 모든 항목을 default 설정 후 package.json file 생성
+ Step 2) npm install validator@10.8.0 ( npm모듈명@version)
+ validator 사용예제
		
```javascript
const validator =require('validator')
console.log(validator.isURL('https://www.udemy.com'))
```
 

+ npm module 관련 method & searching 참고 : www.npmjs.com


>4.Install npm module globally & Using nodemon

+ global 로 설치할 경우, 개별 project folder이 아닌 OS itself에 설치됨.
+ npm install nodemon@2.0.6 -g
+ nodemon은 terminal에서 node를 반복적 실행 할 필요 없이 파일의 코드가 변경될 때마다 자동으로 실행됨.
+ 종료는 Ctrl+c


	


	
