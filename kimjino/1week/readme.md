# 1주차 
## 1 Section
* Contents 설명

1. 	Weather Project 진행 Web application

    -  Web Server  with node JS

</br>

2. 	Task manager

    -  MongoDB 사용해여 개발

</br>

3.  Real time chat app

    - With socket IO

##	2 Section

1.	Node Js 설치

</br>

2.	What is Node JS

    -	 Js run only browser 

    - Node js 는 프로그래밍 영역으로 유도

    -	 Out side browser , building web server

    -	 V8 Java Script engine 사용

    -	C++ 기반, chrome browser 자체도 c++ 로 구성되어 있음. (V8 engine) 그렇기 때문에 java script 에서 구현할 수 없는 file 입출력 등을 구현 할 수 있다. chrome(browser) 과 Node js 는 DOM(parsing 을 거친 내용, 여기서는 v8을 통해서 겠네)기반. 기존의 JavaScript 관련 function 만을 쓰는 것이 아닌 C++ 의 파일 입출력 function 을 사용할 수 있다. 
 
 ![JavaScriptEngine](https://user-images.githubusercontent.com/45062255/103443422-7d910100-4ca2-11eb-8754-b7a4eaba4bc3.PNG)
  
  
   -  - node JS 는 global 등의 명령어 사용, Chrome(browser)같은 경우에는 DOM을 포함하고 있기 때문에 Document,window 명령어 사용가능

      - node 에는 현재 실행 중인 Node 의 상태를 확인하기 위한 Process 라는 명령어 존재

      - 런타임이 달라서 그렇다는 것을 확인하기 위한 작업

</br>

3.	Why is node JS a tool worth using

    - front User use little node  to compile their apps or serve up a Web Site
 
    - Back end User use node to make back end API and Command line app.

    - 2번에서 언급했던 V8 Engine 을 통한 build 뿐만 아니라 2. Non Blocking IO, Callback(Event Driven) 3. NPM , the Large Ecosystem

    - Non blocking IO 는 sever Side 에서 되게 좋은 특징이다. 같은 시간에 여러가지의 요청이 다른 유저로 부터 와도 효율적으로 일을 처리 할 수 있다.  (밑 사진 우측이 non blocking)

 ![nonblocking](https://user-images.githubusercontent.com/45062255/103443418-6fdb7b80-4ca2-11eb-81c0-c94778fa705f.PNG)

   - - NPM Package 들을 살펴보면, 상당히 많은 기능들을 제공하고 있어서 개발할 때 편리하다.

      - java script 는 프로그래밍 랭귀지가 아니라, script code 그 자체이다.

 > QnA 일반적인 프로그래밍 랭귀지도 Compiler 와 코드로 구성되어있는데 이 java script 도 따지고 보면 script code 와 실행 engine 으로 구성된 것 아닌가...? compiler 말고 실행 engine 이라 프로그래밍 랭귀지에 포함되지 않는 건가...

 > Study 내용 : java programming 은 스크립트 프로그래밍 언어 node js 는 개별적인 프로그래밍 언어가 아니다.단지 java script를 사용하면서 engine 을 통해 동작제어나 파일입출력을 할 수 있는 런타임.
 런타임은 프로그램이 실행되고 있는 때 존재하는 곳  == not frame work 단순히 라이브러리만 가지고 올 수 있다고 해서 프레임워크 x 


 ## 3Section
1. note taking app 만들기
        
    - file system 사용
    - node module 의 load
        - module 이란 이전의 사람들이 만들어 둔 코드
        - const fs = require('fs') 형식으로 모듈 임포트.== python 의 import pandas as pd
        
    - 내가 만든 파일을 load 할 수 도 있다.
        -  require(./utils.js)
        - load 한다고 할 수 있음
        - 하지만 load 한다고 해서 각자 영역에 있는 변수 명을 참조 할 수 없음.
        - 참조하기 위해서는 module.exports 사용해야함. 
            - const name ="mike"
            - module.exports= name과 같은 방식 사용
        - 해당 변수를 export 했을 때,
        const name= require('./utils.js') 형식으로 return 값 받듯 받아야함. 
        <br/>
       
        - function 을 export 했을 때는?
            - const add = function(a,b){

                return a+b
           
                }
            - module.exports =add ?
            - const add = require 로 집어넣었을 때.
            - sum = add (4,-2)가 원래 기존 파일에서 동작한다. 

    - NPM Module 을 load 할 때.
        - Java Script Object Notation ==JSON
        - NPM init 시 package.json 생성 package-lock.json 은 install 시 생성
        -  ex) const validator=require('validator')
        - validator install 하면 package.json 에도 변화가 생기고 package-lock.json 에도 변화가 생김. lock json 에는 command를 실행 하기 전의 데이터를 보관.
        - package 는 우리가 install 한 package 의 dependency 를 보관.
        - ES6(ECMAScirpt6): 기존에 사용하던 문법 ES 3로는 표현에 한계가 있고 기능이 적어서 새로 만들어진 표준. 페이스북 react 와 같은 최신 javascript 프레임 워크들이 ES6 기반으로 개발.
            - import validator from 'validator'
    - NPM install 을 하게되면 package json 과 package json lock 에 해당 내용이 기록되며 node module 이 만들어집니다.
    - git hub 나 code를 압축해서 다운 받았을 경우 node module 이 존재 하지 않을 수 있습니다. 해당 경우에는 package.json 이나 package-lock.json 파일 을 이용하여 node module 을 다시 만들 수 있습니다. 
        - npm install => contents of package , package-lock 의 dependencies 참고해서 node module 만들어줌
               
    
    - chalk package (text styling)
        - web server 를 구성할 때 error log 나 warning message log에 사용할 수 있음.
    
    - Nodemon
        - 만약 install 시 -g 옵션을 붙여준다면 프로젝트 안에서 파일이 생성되거나 json 에 표시되지 않는다.
        - nodemon install 이 error 가 날 경우 관리자 권한으로 install 한다.
        - demon 형식으로 프로그램이 back 에서 계속 돌아가며, restart 전까지 Code 에 change 가 발생하면, 해당 Code 로 새로운 Output 을 보여준다. 
        


