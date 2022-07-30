import React from 'react'
import "./weather.css"

const Currentweather = ({data}) => {
  return (
    <div className='weather'>
        <div className='top'>
            <div>
                <p className='city'>{data.city}</p>
                <p className='description'>{data.weather[0].description}</p>
            </div>
            <img alt='weather' className='weathericon' src={`icons/${data.weather[0].icon}.png`}/>
        </div>

        <div className='bottom'>
            <p className='temperature'>{Math.round(data.main.temp)}ºC</p>
            <div className='details'>
                <div className='parameter-row'>
                    <span className='parameter-label'>{data.weather[0].main}</span>
                </div>
                <div className='parameter-row'>
                    <span className='parameter-label'>Feels like </span>
                    <span className='parameter-value'>{Math.round(data.main.feels_like)} ºC</span>
                </div>
                <div className='parameter-row'>
                    <span className='parameter-label'>Humidade </span>
                    <span className='parameter-value'>{data.main.humidity} %</span>
                </div>
                <div className='parameter-row'>
                    <span className='parameter-label'>Vento </span>
                    <span className='parameter-value'>{data.wind.speed} m/s</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Currentweather