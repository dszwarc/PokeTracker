import React , {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Form, Button} from 'semantic-ui-react'
import * as teamApi from '../../utils/teamApi'

export default function EditTeamPage(){
    const teamId = useParams();
    const [team, setTeam] = useState({})
    useEffect(()=>{
        response = teamApi.findOne(teamId);
    },[])

    async function editTeam(data){
        await teamApi.edit(teamId, data)
    }

    return(

        <Form>
            <Form.Input name='name' placeholder={team.name}></Form.Input>
            <Button type='submit'>Submit Edit</Button>
        </Form>
    )
}