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
### 4. Arrow functions
```javascript
    //일반적인 함수 형태
    const square =function(x){
		return x*x
    }
    
    //Arrow function type 1
    const square = (x) =>{
    	return x*x
    }

    //Arrow function wiht shorthand syntax
    const square = (x) => x*x
```
+ Arrow function
	- this 바인딩 하지 않는다.
	- object의 method로 사용하지 않음.
	
+ Method 로는 ES6에서 제공하는 간단한 함수의 형태를 사용한다

  ```javascript
  	//example
    const event ={
    	printGuestList(){
     	//body
     	}
    }
    ```
    ## Section 5. Debugging Node.js
    1. console. log 사용하기
   		- 너무 많은 variable 출력하여 확인하기 힘들다
    
    2. Node debugger 사용
    
    	- built-in tool
    	- V8 & 크롬 브라우저와 통합 
		- application을 중단 후 모든 것을 볼 수 있다.
        - 사용 방법
        <br/>
   	  	  1. 코드에 debugger 추가
   		  2. node inspect app.js add -- title='course' --body='Node.js'
   		  3. chrome 통해 chrome://inspect 접속
   		  4.  device 등록 (127.0.0.1:9229 입력) - device inspect
   		  5.  <img src="./img/debugging.PNG" width="450px" height="300px"  ></img>
        
      

