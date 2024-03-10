import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Crew } from './components/CrewInfo';

function Example(props)
{
    var crew = Crew
    var items = crew

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img style={{ height: 'auto', width: '20vw' }} src={props.url} alt={"{props.name}"} />

            <Button className="CheckButton" style = {{ color: 'red'}}>
                See more info
            </Button>
        </Paper>
    )
}

export default Example