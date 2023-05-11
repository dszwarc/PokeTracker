import React, { useState } from 'react';
import {Card} from 'semantic-ui-react'
import * as teamApi from '../../utils/teamApi'
import TeamCard from '../TeamCard/TeamCard';

export default function TeamDisplay({teams, handleDeletePokemon}){

    const [loading, setLoading] = useState(false);

    async function handleDelete(id){
        setLoading(true)
        try{
            await teamApi.deleteTeam(id)
        } catch(err){
            console.log(err)
        }
        setLoading(false)
    }

    if (!loading){
        return(
            <div>
            {teams.map((team, idx)=>{
                return(
                    <TeamCard handleDelete={handleDelete} team={team} key={idx} handleDeletePokemon={handleDeletePokemon}/>
                )
            })}
            </div>
        )
    }
    return(
        <h1>Loading...</h1>
    )
}