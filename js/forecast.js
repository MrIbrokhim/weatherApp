const KEY = '96b947a45d33d7dc1c49af3203966408'
 


const requestToApi=async(city)=>{
    const base='https://api.openweathermap.org/data/2.5/weather'
    const query=`?q=${city}&units=metric&appid=${KEY}`

    const request= base+query
    const response=await fetch(request)
    const data=await response.json()
    return data
}

