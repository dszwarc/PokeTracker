import React from "react";
import {Card, Form} from 'semantic-ui-react'


export default function PokeDexDetail({pokemon}){
    const pokeIdStr = pokemon.id?.toString();
    console.log(pokeIdStr)
    const pokeIdLen = pokeIdStr.length;
    let pokeId = ''
    if (pokeIdLen === 1){
        pokeId = '#000' + pokemon.id
    } else if(pokeIdLen === 2){
        pokeId = '#00' + pokemon.id
    } else if(pokeIdLen === 3){
        pokeId = '#0' + pokemon.id
    } else {
        pokeId = '#' + pokemon.id
    }

    return(
        <div id="pokeDetailDiv">
        <Card
        image={pokemon.sprites.front_default}
        header={pokemon.name}
        meta={pokeId}
        >
        </Card>
        
        <Form>
            <Form.Field>
                <label>Nickname</label>
                <input value=''/>
                <label>Pokemon</label>
                <input value={pokemon.name.toUpperCase()} disabled name='name'/>

            </Form.Field>
        </Form>

        </div>
       
    )
}