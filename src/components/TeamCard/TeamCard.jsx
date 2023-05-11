import React, { useState } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import * as teamApi from '../../utils/teamApi'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import * as pokeApi from '../../utils/pokeApi'
import TeamCardRow from '../TeamCardRow/TeamCardRow'
import './TeamCard.css'

export default function TeamCard({team, handleDelete, handleDeletePokemon}){
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({
        team: team._id,
        poke: ''
    })

    async function handleSubmit(){
        handleDelete({id: team._id})
    }

    return(
        <Card raised className='teamcard'>
            <Card.Content>
                <Card.Header>{team.name}</Card.Header>
                <Card.Description>{team.description}</Card.Description>
            </Card.Content>
            
            <Card.Content>
                <table className='teamtable'>
                    <thead>
                            <th>Sprite</th>
                            <th>Nickname</th>
                            <th>Level</th>
                            <th>Remove</th>
                    </thead>
                    <tbody>
                        
                        {team.pokemon.map((poke, idx)=>{
                            return(
                                <TeamCardRow key={idx} poke={poke} team={team} handleDeletePokemon={handleDeletePokemon} />  
                            )
                        })}
                    </tbody>
                </table>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={handleSubmit}>Delete Team</Button>
            </Card.Content>
        </Card>
        )
}