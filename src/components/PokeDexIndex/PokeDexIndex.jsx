import React, {useState} from "react";
import './PokeDexIndex.css'
import { Card, Button, Form, Feed, CardDescription } from "semantic-ui-react";
import {Link} from 'react-router-dom'

export default function PokeDexIndex({pokeIndex, handleMinMax}){

    const [search, setSearch] = useState({minP: 1, maxP: 20})

    function handleChange(e){
        setSearch({
            ...search,
            [e.target.name]:e.target.value
        })
        
    }

    function handleSubmit(e){
        e.preventDefault()
        if (search.minP < search.maxP){
            handleMinMax(search.minP, search.maxP)
        } else {
            handleMinMax(search.maxP, search.minP)
        }
        
    }

    const pokeDisplay = pokeIndex.results?.map((poke, idx) => {
        const pokeUrl = poke.url.split('/')
        let pokeId = pokeUrl[6]
        const pokeLink = '/' + pokeId
        const pokeNameCap = poke.name.toUpperCase()
        const pokeIdLen = pokeId.length;
        if (pokeIdLen === 1){
            pokeId = '#000' + pokeId
        } else if(pokeIdLen === 2){
            pokeId = '#00' + pokeId
        } else if(pokeIdLen === 3){
            pokeId = '#0' + pokeId
        } else {
            pokeId = '#' + pokeId
        }

        

        return (
            <Link key={idx} to={pokeLink}>
                <Card className="pokeIndexCards">
                    <Card.Content>{pokeId} {pokeNameCap}</Card.Content>
                </Card>
            </Link>
        )
    })

    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <label>Low</label>
                <input name='minP' onChange={handleChange} value={search.minP}/>
                <label>High</label>
                <input name='maxP' onChange={handleChange} value={search.maxP}/>
                <Button type='submit'>Search!</Button>
            </Form>
            <Card.Group>
                {pokeDisplay}
            </Card.Group>
        </div>
    )
}