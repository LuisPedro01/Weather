import React from 'react'
import { Card } from "semantic-ui-react"

const Card1 = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className='header'>{weatherData.name}</Card.Header>
            <p>Temperatura {weatherData.main.temp}</p>
        </Card.Content>
    </Card>
)

export default Card1;