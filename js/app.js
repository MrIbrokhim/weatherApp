const details = document.getElementById('showingInfoPlace')
const weatherIcon = document.getElementById('weather-icon')
const card = document.getElementById('iconDiv')

const appealToCityName=document.getElementById('cityName')
const appealToCityCloud=document.getElementById('cityCloud')
const appealToCityTemp=document.getElementById('cityTemp')



const changeLocation = document.getElementById('inputSection')
const appealToInput=document.getElementById('inputPlace')


 appealToInput.focus()


//  Error Func
 const errorFunc=()=>{
  alert('Please Enter a Valid City Name')
 }

// FuncForUpdatingourDetails

const updateUI=(weather)=>{
 appealToCityName.innerHTML=`${weather.name},${weather.sys.country}`
 appealToCityCloud.innerHTML=`${weather.weather[0].main}`
 appealToCityTemp.innerHTML=`${Math.round(weather.main.temp)}`
 weatherIcon.src=`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

 if(card.classList.contains('d-none')){
  card.classList.remove('d-none')
 }

}

// FuncForConnectingWithAPI

const funcForConnectWithApi=async(city)=>{

  const data=await requestToApi(city)
  return data
}



//  AppealToButton

changeLocation.addEventListener('submit',(e)=>{

  e.preventDefault()

  const inputValue=appealToInput.value.trim()
  changeLocation.reset()

  funcForConnectWithApi(inputValue).then((data)=>{

      
    updateUI(data)
  })
  .catch((err)=>{
     errorFunc(err)
    })

})