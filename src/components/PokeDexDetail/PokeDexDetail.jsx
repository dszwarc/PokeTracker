import React, {useState, useEffect} from "react";
import {Card, Form, Button} from 'semantic-ui-react'
import * as teamApi from '../../utils/teamApi'
import { useNavigate } from "react-router-dom";

export default function PokeDexDetail({pokemon, user, getPokemonDetail, handleAddPoke}){

    const navigate = useNavigate();
    const [pokemonForm, setPokemonForm] = useState({
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
        nickname: '',
        level: '',
        teamId: '',
    })
    const [search, setSearch] = useState('')

    const [userTeams, setUserTeams] = useState([])

    function handleSelect(e, {value, name}){
        setPokemonForm({
            ...pokemonForm,
            [name]: value
        })
    }

    function handleChange(e){
        setPokemonForm({
            ...pokemonForm,
            [e.target.name]: e.target.value
        })
    }

    async function getUserTeams(){
        try{
            const response = await teamApi.index();
            setUserTeams(response.teams)
        } catch(err){
            console.log(err)
        }
    }

    function handleSearchSubmit(e){
        e.preventDefault()
        getPokemonDetail(search)
    }

    function handleSearchChange(e){
        setSearch(e.target.value)
    }

    useEffect(()=>{
        getUserTeams();
    },[])



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

    const teamOptions = userTeams.map((team, idx)=>{
        return(
            { key: idx, value: team._id, text: team.name }
        )
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(pokemonForm, ' <--- this is data from handleAddPoke')
        handleAddPoke(pokemonForm);
        navigate('/teams');
    }

    if(user && (pokemon.name != 'NOT FOUND')){
        return(
            <div id="pokeDetailDiv">
                <Form onSubmit={handleSearchSubmit}>
                    <Form.Input 
                    placeholder='Search for a Pokemon here! (either Name or ID e.g. "7" or "squirtle")'
                    value={search}
                    onChange={handleSearchChange}
                    name='search'
                    />
                    <Button type='submit'>Search!</Button>
                </Form>
                <Card
                    image={pokemon.sprites.front_default}
                    header={pokemon.name.toUpperCase()}
                    meta={pokeId}
                >
                </Card>

                <Form onSubmit={handleSubmit}>
                    <Form.Input
                        placeholder='Your Pokemon Nickname here'
                        name='nickname'
                        onChange={handleChange}
                        value={pokemonForm.nickname}
                        label='Nickname'
                    />
                     
                    <Form.Input 
                        placeholder='Current Pokemon Level'
                        label='Level'
                        name='level'
                        onChange={handleChange}
                        value={pokemonForm.level}
                    />
                    <Form.Input
                        label='Pokemon'
                        value={pokemon.name.toUpperCase()}
                        readOnly={true}
                        name='name'
                    />
                    <Form.Select
                        placeholder="What team should they be added to?"
                        label='Your Teams'
                        name='teamId'
                        fluid
                        options={teamOptions}
                        onChange={handleSelect}
                        value={pokemonForm.teamId}
                    />
                    <Button type='submit'>Add Pokemon</Button>
                </Form>
            </div>
        )
    } else {
        return(
            <div id="pokeDetailDiv">
                <Card
                    image={pokemon.sprites.front_default}
                    header={pokemon.name.toUpperCase()}
                    meta={pokeId}
                >
                </Card>
                <div>
                    <h4>Pokemon Not Found!</h4>
                    <h6>Check your spelling or number and try again!</h6>
                </div>
            </div>
             )
    } 

    
       
   
}