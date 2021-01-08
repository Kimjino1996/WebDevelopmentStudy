# 2주차 
## 4 Section
* Contents 설명

1.    command line argument


        -  Web Server  with node JS

</br>

2.    file system


</br>


1.   command line argument

        - process.argv 로 호출하면 진행되는 node 상태를 호출
        - 1 - node js 가 실행되는 경로 호출
        - 2 - app.js (파일)의 경로 호출
        - 3 - 우리가 진짜 호출했던 value 를 out put 함.
        - index 를 넣어 원하는 정보를 빼낼 수 있음.

        * 참고 ) Triple equality in JS, (===) 형과 타입 모두 같아야 함.

        * == 의 경우 data의 type 만 비교한다. 

            - argument 에 집어넣을 경우 --title ="this is a title" 의 경우 쌍 따옴표 (double quotes)의 경우 쌍 따옴표를 붙여주면 별개의 argument 로 판단하지 않고 묶어서 보여줌. argv 호출 시 double quotes 는 제거된다.
            - arugment 는 parsing 해서 쓴다.

        - yarg module 을 이용하여 process.argv 가 아닌 yarg.argv 로 사용 할 수 있음.
            - command,=> _로 표시(add) 와 title ( --title="things to buy") 형식으로 출력.
            - help 입력시 Option 과 정의된 command 를 확인 할 수 있음. 
            - 실행시 argument 로 version 을 쳐서, 도움말과 yarg version 을 확인 할 수 있음.
            - yarg.command 로 첫번째 위치의 argv(command 자리) 를 호출 가능.
                - yarg.command({ ~~ property ~~ }) 안에 property인 command (이름) , describe (커맨드 설명), handler (함수), builder 를 가지고 있음.
                - builder 의 경우는 command line 에서 node 를 실행 (build)시 주어지는 option 에 대한 설정이 가능
                    - --title 의 option 의 describe (설명 ), demandOption(꼭 포함 해야하는지 여부), 그리고 해당 Option이 argument 를 통해서 받는 value 값의 type 등을 설정 할 수 있다. 
                    - builder :{title: { ~ } } 등으로 설정.
                    - 즉, command 가 돌아갈 때 사용되는 parameter에 대해 정의한다.
                    
            - 이렇게 정의를 해놓아도 자동으로 돌아가지 않는다. yargs 모듈을 호출해서 argument 를 parsing 하는 과정을 진행해야 해당 handler 가 동작하던가 한다.
            - console.log(yargs.argv) 방법으로 한번 호출 해도 되고, yargs.parse() 함수를 호출 해도 됨. 
            - parsing 후에는 argv.title, (추후에는 body Option 도 가져옴) argv.body 이런 방식으로 호출 하는 것도 가능하다.
        
2. Json file 로 note App 안에 Data storing
    - Json 으로 파일을 저장하는 것은 중요하다. 나중에 API 같은 것들도 JSON 파일로 왔다갔다 거리는데, 내가 API 를 만들기 위해서는 이런 과정들을 배울 필요가 있음.
    - JSON.stringfy(JSON object)
    - JSON.parse(JSON String)
    - JSON String object 에서 parsing 을 진행하면 parseData.title 이런 식으로 호출하는게 가능핟. 
    - Json 파일을 fs.readfile 로 읽어오면 bit 로 표현 => .toString 으로 변형시켜줘야됨.
    - fs module 로 저장할 때는 다시 Parse 했던 값을 다시 string 으로 변환시켜 줘야함.
    - file 호출 시 파일이 없으면, defensive (error handling - try { ~ } catch(e){ ~ } ) 하게 코드를 짜던가 or 파일을 생성해 버리던가 하는 방식으로 짜야함.
3. Making Note
    - module.exports 다양한 property를 내보낼 수 있음.
    - const notes=require(./note.js)
    - notes.addNote(argument) 와 같은 방식으로 호출
    - .parse 로 output 된 Json array 의 형태 경우 .push(array의 method) 로 새로운 data 를 추가할 수 있음.
    - note 내용을 add 할 시 notes.filter 을 활용하여 title 중복을 check 할 수 있음.
        - ex) dup_notes=notes.filter (function(note){

            return note.title===title
        
        })
        - if (dup_notes.length === 0)
        - remove 시 응용해서
        - ex)toKeep=notes.filter(function(notes){

            return note.title !==title

            })
         
         방식으로 짤 수도 있음.

         - const 함수이름 = 함수정의 이런식으로 진행되나 보다. 호출할 때는 함수 이름을 기준으로 해서 뒤에 부분을 다 날리는 듯.


-  ES6 문법의 arrow function 으로 짜보기
    1) const square=function(x){

       return x*x;

        }   
    
    to Arrow function
    
    * const square = (argument list) =>{

        function ~~~~
 
        }

    2) 더 간단히 const square = (x) => x*x 로 표현 가능
    3) arrow function 이 object의 property 로 사용 될 때
        - const event = {

            printGuestList:function(){

            console.log('Guest list for'+this.name)
                }
                
            }
            
         을 printGuestList:()=>{  ~  } 로 바꿀 수 있음. but 이렇게 하면 this. 의 value 를 못받음.
            
        - 그렇다면 어떻게 해야할까?
            - printGuestList () {
                   
                ~
                  
                }

            방식으로 바꿔야함.
        
        * 즉, 해당 케이스에서 arrow func 을 사용할 경우 this 를 사용하지 못하므로, 이와 같은 적절한 대체자를 활용한다.


        cf)
        - array.filter( function(~) ) : array 안의 값을 parameter 로 넘기고, 해당 값이 filter에 걸리는지 아닌지 true, false로 받아옴.
        - array.forEach( function(element){ ~ } )   // array 안의 값을 parameter 로 넘기고, return 을 받지 않음. void 형임. 

    - const tasks ={
        
        task:[{

        text:'Grocery Shopping'
        
        complete:true

        },
  
        {

         ~

        }]

        gettasksToDo(){ 
            
        return this.tasks.filter((task)=>return task.complete===false)
        
        }

        }

    와 같이 arrow function 을 적절히 사용하여 const 객체를 생성 할 수 있다.

    - 아마 arrow function 과 대체 표현의 차이점은, 다시 재사용할 때 object.function_name 을 할 필요가 있는가 없는가 정도의 차이.

    - filter, foreach 다음에는 find 이다.
    
        notes.find((note)=>note.title ===title)
        가장 처음만난 title 이 같은 element 를 반환한다. 




> QnA build 와 실행, 실행 engine 에 올라가는 것에 정확한 구분 필요.

