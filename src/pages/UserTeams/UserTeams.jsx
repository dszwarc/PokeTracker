import React, {useState, useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as userService from '../../utils/userService';
import AddTeamForm from '../../components/AddTeamForm/AddTeamForm';
import * as teamApi from '../../utils/teamApi'
import TeamDisplay from '../../components/TeamDisplay/TeamDisplay';
import {Card} from 'semantic-ui-react'


export default function UserTeams({loggedUser}){
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    function handleAddTeam(data){
        teamApi.create(data);
    }

    async function getTeams(){
        try{
            const response = await teamApi.index();
        } catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    useEffect(()=>{
        getTeams()
    },[])



    return(
        <>
        <PageHeader loggedUser={loggedUser}/>
        <AddTeamForm handleAddTeam={handleAddTeam}/>
        <div>This is where my teams will be displayed</div>
        <Card.Group>
            <TeamDisplay teams={teams} />
        </Card.Group>
        </>
    )
}