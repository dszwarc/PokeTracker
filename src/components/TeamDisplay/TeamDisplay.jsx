import React, { useState } from 'react';
import {Card} from 'semantic-ui-react'
import * as teamApi from '../../utils/teamApi'

export default function TeamDisplay({teams}){

    const [loading, setLoading] = useState(false);

    async function handleDelete(e, id){
        console.log(e)
        e.preventDefault()
        console.log(id, ' <---- id from handleDelete function')
        try{
            await teamApi.deleteTeam(id)
        } catch(err){
            console.log(err, '<--- error from handleDelete')
        }
    }

    if (!loading){
        return(
            <table>
                <tbody>
                    {teams.map((team, idx)=>{
                        return(
                            <tr key={idx}>
                                <td>{team._id}</td>
                                <td><form onSubmit={((e)=>handleDelete(e, team._id))}><button type='submit'>Delete Team</button></form></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
    return(
        <h1>Loading...</h1>
    )
}