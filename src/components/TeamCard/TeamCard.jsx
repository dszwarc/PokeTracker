import React, { useState } from 'react'
import { Card, Button } from 'semantic-ui-react'
import * as teamApi from '../../utils/teamApi'
import {Link} from 'react-router-dom'

export default function TeamCard({team, handleDelete}){

    async function handleSubmit(){
        handleDelete(team._id)
    }
    
    

        return(
            <Card>
                <Card.Content>
                    <Card.Header>{team.name}</Card.Header>
                    <Card.Description>{team.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button><Link to={team._id}>Edit Team</Link></Button>
                    <Button onClick={handleSubmit}>Delete Team</Button>
                </Card.Content>
            </Card>
        )
}