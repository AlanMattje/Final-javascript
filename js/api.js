window.addEventListener('load', ()=> {
    let lon
    let lat
    let temperaturaValor = document.getElementById('temperatura-valor')  
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
    let ubicacion = document.getElementById('ubicacion')  
    let iconoAnimado = document.getElementById('icono-animado') 
    let vientoVelocidad = document.getElementById('viento-velocidad') 

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=e9adb4731d570dc7bbf3c5688b70ab80`
            
            fetch(url)
            .then( response => { return response.json()})
            .then( data => {          
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp} ° C`
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                ubicacion.textContent = data.name
                vientoVelocidad.textContent = `${data.wind.speed} m/s`
            })
            .catch( error => {
                console.log(error)
            })
       })
          
    }
})
