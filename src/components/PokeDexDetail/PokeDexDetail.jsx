import React, {useState} from "react";
import {Card, Form} from 'semantic-ui-react'


export default function PokeDexDetail({pokemon}){
    const [pokemonForm, setPokemonForm] = useState({
        nickname: '',
        level: ''
    })

    function handleChange(e){
        setPokemonForm({
            ...pokemonForm,
            [e.target.name]: e.target.value
        })
    }

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
            header={pokemon.name.toUpperCase()}
            meta={pokeId}
        >
        </Card>
        
        <Form>
            <Form.Field>
                <label>Nickname</label>
                <input name='nickname' onChange={handleChange} value={pokemonForm.nickname}/>
                <label>Pokemon</label>
                <input value={pokemon.name.toUpperCase()} readOnly={true} name='name'/>
            </Form.Field>
        </Form>

        </div>
       
    )
}