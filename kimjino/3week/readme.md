# 3주차 

## Section6

- Contents
    - Making Weather App
        - User가 자신의 위치를 제공하는 Front-End 가 있을 경우
        - 이 어플리케이션이 로케이션을 통해 커뮤니케이션하는 써드파티(특정한 기능을 수행하는 라이브러리, 프로그램에서 호출되는 API 같은 역할)서비스를 제공
        - 해당 Forecast data를 다시 front-end(browser)로 send 한다.
        - 그렇기 때문에 이번 섹션에서는 asynchronous 와 call(back) 에 대하여 다룬다. 

1. Asynchronous == js advantage
    - real time weather api

    - view asynchronous program
         - 우리는 setTimeout function 을 통해서 asynchronous 프로그래밍을 맛 볼 수 있다. settimeout 은 handling function과 , time out 에 필요한 시간 두가지를 argument 로 가진다.
        - 해당 함수는 call back 함수이다. 
        - 하지만 settimeout 시간을 0 으로 해놓아도 밑에 서술된 command 보다 실행이 늦게 될 수 있다. 
        
        - 그렇다면 왜 settimeout 으로 실행된 콜백 함수가 뒤늦게 호출될까?
        - call stak, nodeAPI, Event Loop 을 통해 이해해보자.


        ![github용](https://user-images.githubusercontent.com/45062255/106477057-15c11680-64eb-11eb-81e5-f349d8a7af92.PNG)


        - call stack == 현재 진행하고 있는 function 을 나타냄.
            - Chrome browser 와 javaScript Engine 은 우리가 정의하지 않았지만 기본적으로 main 이라는 function 으로 code 를 wrap 하고 있음.
            - console.log, chalk 등의 이미 정의된 function 을 호출 할 경우, main 위에 call stack 이 쌓인다. 
            - 함수 정의 후 해당 함수를 const 변수에 할당 할 때는 call stack 에 쌓이지 않는다. 
        - setTimeout 에 경우 직접적으로 javaScript 스펙이나 v8에서 구현을 위해 명세된 부분이 없다. 
            - set time out 이 호출된다면, 일단 call stack에 호출된 뒤, node APIs 파트로 전달된다.
            >> java script 는 single thread run 이다. 그렇기 때문에 call stack 위에 여전히 올라가 있다면 해당 function 을 바로 실행해야 다음 것을 실행 할 수 있음.
            >> webAPI,nodeAPI 에서 해당 함수들이 실행된다.

        - call back queue 란 ready to excute 한 call back function 들을 리스트 형태로 보관하는 장소.
            - call stack 이 empty 할 경우 call back queue 를 동작한다. 
            - call back queue 에서 call stack 으로 옮겨주는 것이 event loop
2. http request
    - 바깥과 상호작용 할 수 있음.
    - access key 를 생성하고, end point(어떤 정보를 가질 것인가에 따라 url 이 달라짐 ) 를 정해주자
    - 접근할때는 url + / + endpoint + ?(query 문 시작이라는 것을 알림) + api 키와 + 접속 로케이션을 지정 + query 문
    - ex) api.weatherstack.com/current?acces_key=8cfdfqdfjpajfijf&query=37.8267,-122.4233
    - 접근하면 제공하고있는 json file(or 제공하고 있는 데이터 종류) 을 받을 수 있음.
    - npm request 를 통해서 원활한 http request 사용이 가능하다.
        - arugment 로는 url, callback function (호출했을 때 실행할 것, 실행 성공 여부와 내용을 인자로 사용)
        - response 를 사용하기 위해서는 parsing 해야함.
        - JSON.parse 를 사용한다.
        - ex) JSON.parse(response.body) , 여기서 body 는 해당 response 의 프로퍼티라 사용하였다.
            - 해당 parse 진행 후 data의 property ( 해당 api 에서 제공하는 ) 를 .~ 로 호출 할 수 있다. ex) data.current
        - request module 안에 json을 argument 추가하여 사용 할 수 있음.
    - url 에 option 을 추가하는 것으로 여러가지 형태의 json file 을 제공 받을 수 있음.
    - json property 중 temprature: 0 : "37" 이런 식으로 적혀있는 것이 있는데, index 처럼 temprature[0] 로 처리해주면 된다.

    - 해당 강의는 geocoding으로 mapbox를 사용한다. 

    - error 처리는 request의 error parameter을 활용해서 처리 하면 됨. 
    - if(error){ ~ } else { ~ } 이런식으로 처리하자
    - error 에 unconnect 도 있지만 원하는 data를 전부 받아오지 못하는 경우도 있다.( ex. os ver 차이, 혹은 target의 존재 유무 ) 그렇기 때문에 else if(response.body.error) 혹은 (response.body.features.length==0) 를 통해 error를 확인하고 재 처리 해주는 과정을 진행하자.

3. call back function
    - call back function 을 써도 synchronus 할 수 있다.
    - 3week example 에 array의 filter를 예를 들 수 있다.
        - 다른 함수의 매개변수로 함수를 전달(이게 call back function), 매개변수로 전달된 함수가 다른 함수에서 파라미터를 통해 실행 되는 것.
        - 해당 array.filter 함수 자체가 native node API 가 아닌 java script code 이므로 바로 call stack 에서 바로 실행, 인자를 전달하여 synchronus가 아닌 async 형태로 접근하게 되었다. 

    - reusable 한 abstract call back function 을 짜보자.

4. es6 에서 object 사용팁
    - Object property shorthand
        - object Destructuring
            - object 에서 필요한 값만 추출해 낸다.


```    
geocode(address,(error,{lat,lon,location}={})=>{
    if(error){
        return console.log('error',error)
    } // 끝낸다는것을 return으로 명시적으로 보여준다.
    else{        
        forecast(reponse.lat,response.lon,(error,data)=>{
            if(error){
                return console.log('error',error)
            }
            else{
                console.log('error',error)
                console.log('data',data)
            }
        })
    }
})
```
- short hand 할 시 위 코드와 같이 lat, lon, loc 을 인자로 쓰면 되지만, 해당 request 가 실패하여 undefined 로 인해 lat, lon,loc 이 제대로 선언되지 않을 경우를 대비하여 ={}와 같은 default empty 값을 대입한다.   

- 참고로 rename 시에 선언과 실행 시의 rename 순서는 다른 것 같다. 



        callback(undefined,{
            lat:body.feature[0].center[1],
            lon:body.feature[0].center[0],
            location:body.feature[0].place_name
         })
         
        vs

        const {label:productLable,stock}=product 
        console.log(productLabel)
        console.log(stock)


>> function 의 default 값을 설정 해놓는 것도 좋다.
>> yargs 를 통해 실행시킬 때, builder demand option
>> example code 에서 const data={ lat :0, lon :0 } 이 나오는데 lat=0, lon =0 을 하지 않는 이유는 lat lon 은 data 의 property 이기 때문이다.
>> 근본적 궁금증 var 과 const 의 차이는 ? 
>> var은 재선언이 되어 큰 크기의 프로그래밍을 할 때 적합하지 않음. let 의 경우 재 할당은 가능하지만 재선언 불가능, const 는 재선언 재할당 둘다 불가능. 

>>> rename 순서 확인