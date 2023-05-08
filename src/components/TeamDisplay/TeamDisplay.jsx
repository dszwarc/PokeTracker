import React from 'react';
import {Card} from 'semantic-ui-react'

export default function TeamDisplay({teams}){
    teams.map((team, idx)=>{
        return(
            <Card>
                <Card.Content>
                    This is a test for every team
                </Card.Content>
            </Card>
        )
    })
}