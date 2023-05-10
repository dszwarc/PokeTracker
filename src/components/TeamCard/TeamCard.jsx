import React, { useState } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import * as teamApi from '../../utils/teamApi'
import {Link} from 'react-router-dom'

export default function TeamCard({team, handleDelete}){

    async function handleSubmit(){
        handleDelete(team._id)
    }
    
    async function handleDeletePokemon(team, poke){
        
    }
    

        return(
            <Card>
                <Card.Content>
                    <Card.Header>{team.name}</Card.Header>
                    <Card.Description>{team.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={handleSubmit}>Delete Team</Button>
                </Card.Content>
                <Card.Content>
                    <table>
                        <tbody>
                            {team.pokemon.map((poke, idx)=>{
                                return(
                                    <tr>
                                        <td><img src={poke.sprite} alt={poke.name} /></td>
                                        <td>{poke.nickname}</td>
                                        <td>Level: {poke.level}</td>
                                        <td><Link onClick={handleDeletePokemon}> <Icon name="trash alternate"/></Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </Card.Content>
            </Card>
        )
}