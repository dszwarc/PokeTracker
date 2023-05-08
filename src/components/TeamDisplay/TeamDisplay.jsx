import React from 'react';
import {Card} from 'semantic-ui-react'

export default function TeamDisplay({teams}){
    const teamCards = teams.map((team, idx)=>{
            <div>{team._id}</div>
    })
    console.log(teamCards)
    return(
        <div>
        {teams.map((team)=>{
            return(
                <div>{team._id}</div>
            )
        })}
        </div>
    )
}