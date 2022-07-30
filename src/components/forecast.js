import React from 'react'
import { Accordion,AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton} from "react-accessible-accordion"
import "./forecast.css"

const WEEK_DAYS = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']


const Forecast = ({ data }) => {

    const dayWeek = new Date().getDay();
    const forecasteDays = WEEK_DAYS.slice(dayWeek, WEEK_DAYS.lenght).concat(WEEK_DAYS.slice(0, dayWeek));

  return (
    <>
        <label className='title'>Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.slice(0,7).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className='daily'>
                                <img alt='weather' className='icon-small' src={`icons/${item.weather[0].icon}.png`}/>
                                <label className="day">{forecasteDays[idx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">{Math.round(item.main.temp_min)} ºC / {Math.round(item.main.temp_max)} ºC</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className='daily-details-grid'>
                            <div className='daily-details-grid-item'>
                                <label>Humidity </label>
                                <label>{item.main.humidity} %</label>
                            </div>
                        </div>
                        <div className='daily-details-grid'>
                            <div className='daily-details-grid-item'>
                                <label>Clounds </label>
                                <label>{item.main.humidity} %</label>
                            </div>
                        </div>
                        <div className='daily-details-grid'>
                            <div className='daily-details-grid-item'>
                                <label>Feels like </label>
                                <label>{Math.round(item.main.feels_like)} ºC</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>               
            ))}
            
        </Accordion>
    </>
  )
}

export default Forecast