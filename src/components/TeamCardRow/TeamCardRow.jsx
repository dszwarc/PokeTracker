import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react'
import * as pokeApi from '../../utils/pokeApi'
import { useNavigate } from "react-router-dom";
export default function TeamCardRow({team, poke, handleDeletePokemon}){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function handleSubmit(){
        handleDeletePokemon(team, poke)
    }

    if(!loading){
    return(
        <tr>
            <td><img className="teamsprite" src={poke.sprite} alt={poke.name} /></td>
            <td>{poke.nickname}</td>
            <td>lvl {poke.level}</td>
            <td><Link onClick={handleSubmit}> <Icon name="trash alternate"/></Link></td>
        </tr>
    )
    }
    return(
        <h1>Loading...</h1>
    )
}