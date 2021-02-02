console.log('Starting')

setTimeout(()=>{},2000)

console.log('stopping')


/////////////////////////////


const request = require('request')

const url='api.weatherstack.com/current?acces_key=8cfdfqdfjpajfijf&query=37.8267,-122.4233'

request({url:url},(error,response)=>{
    const data =JSON.parse (response.body)
    console.log(data.currently)

})
// 위와 같다. 
request ({url:url,json:true},(error,reponse)=>{
    console.log(resonse.body.currently)
})

// custumize

request ({url:url,json:true},(error,reponse)=>{
    console.log("it weather is"+resonse.body.currently.temprature)
})

//gecoder 까지 더해서 weather 구하는 작업을 진행해 보자.

const geocoderURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angles.json'
request({url:geocodeURL, json:true},(error,response)=>{
    const latitude=repsonse.body.features[0].center[1]
    const longtitude=response.body.features[0].center[0]
})

// error 처리
const geocoderURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angles.json'
request({url:geocodeURL, json:true},(error,response)=>{
    if(error){
        console.log('unable connect')
    }
    else if (response.body.error){
        console.log('it is not valid location')
    }
    else{
        const latitude=repsonse.body.features[0].center[1]
        const longtitude=response.body.features[0].center[0]
    }
})


// call back function

setTimeout(()=>{console.log('Two seconds are up')},2000)



// call back function but not async

const names =['Andrew', 'jen','jess']

const shortNames=nbames.filter((name)=>{return name.length<=4})

// gecoder 를 callback func pattern 으로 구현하는법
//1 단계 sync
const geocode =(address, callback)=>{
    const data={
        lat:0,
        long:0
    }    
    return data
}

const data= geocode('phil')
console.log(data)

//2단계 1단계 처럼 console log를 밑에 적으면 data 값을 받지 못하고 출력하게 된다.
// 여기서 데이터 수정하는부분에 request호출하면 되겠다.
const geocode =(address, callback)=>{
    setTimeout(() => {
        const data={
            lat:0,
            long:0
        }    
        callback(data)
    }, 20000);
}

geocode('phil',()=>console.log(data))

//3단계 이 코드를 구분해서 다른파일 저장 & 재 사용해보자
const geocode =(address, callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json'

    request({url:url,json:true},(error,response)=>{
        if (error){
            callback('unable',undefined)
        }
        else if(response.body.feature.length===0){
             callback('unfind',undefined)
        }
        else{
            callback(undefined,{
                lat:response.body.feature[0].center[1],
                lon:response.body.feature[0].center[0],
                location:response.body.feature[0].place_name
            })
        }
    })
}
//실사용
geocode('New york',(error,response)=>{
    console.log('error',error)
    console.log('data',response)

})

// call back function channing
geocode('New york',(error,response)=>{
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


// yargs 를 활용하여 argument를 통해 http request 를 할 target 받기

const address = process.argv[2]

if (!address) { } // 로 검사할 수 있음 ~ 전의 yargs.command demand option 도 기억해 놓기 ~


//object property original

const name= 'andrew'
const userAge=27

const user={
    name:name,
    age:userAge,
    location:'phila'
}

console.log(user)
//short hand object destructuring
const product={
    label: 'red notebook',
    price:3,
    stock:201,
    salePrice:undefined
}
const {label,stock}=product // 만약 없는 property 를 추출하려 하면 undefined 라고 나온다.
console.log(label)
console.log(stock)

//rename 예시
const {label:productLable,stock}=product // rename 하기 위해선
console.log(productLabel)
console.log(stock)

const {label,stock,refactoring=5}=product // 없는 값이라도 default 값을 주면 사용가능
//만약 refactoring 에 대해서 product 에서 선언하여 값을 수정한다면, 해당 값으로 출력됨.


