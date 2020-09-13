import React from 'react';

const WeatherIcon = ({description, day}) => {
    console.log(day)
    if(description==="Clear"){
        if(day){
          console.log('Should display')
          return(
            <div className="Clear">
                <i class="fas fa-sun"></i>
            </div>
          )
        }
        else{
          return(
            <div className="night">
                <i class="fas fa-moon"></i>
            </div>
          )
        }
      }
      else if(description==="Drizzle"){
        return(
          <div className="Drizzle">
              <i class="fas fa-cloud-rain"></i>
          </div>
        )
      }
      else if(description==="Rain"){
        return(
          <div className="Rain">
              <i class="fas fa-cloud-showers-heavy"></i>
          </div>
        )
      }
      else if(description==="Thunderstorm"){
        return(
          <div className="Thunderstorm">
              <i class="fas fa-cloud-showers-heavy"></i>
          </div>
        )
      }
      else if(description==="Clouds"){
        if(day){
         return(
          <div className="Clouds-morning">
          <i class="fas fa-cloud"></i>
        </div>
         )
        }
        else{
          return(
            <div className={description}>
                <i class="fas fa-cloud"></i>
            </div>
          )
        }
      }
      else{
        return(
          <div className={description}>
              <i class="fas fa-smog"></i>
          </div>
        )
      }
}

export default WeatherIcon;