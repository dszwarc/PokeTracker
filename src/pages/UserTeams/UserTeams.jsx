import React, {useState, useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as userService from '../../utils/userService';
import AddTeamForm from '../../components/AddTeamForm/AddTeamForm';
import * as teamApi from '../../utils/teamApi'
import TeamDisplay from '../../components/TeamDisplay/TeamDisplay';
import {Card} from 'semantic-ui-react';

export default function UserTeams({loggedUser}){
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    async function handleAddTeam(team){
        await teamApi.create(team);
        getTeams();
    }

    async function getTeams(){
        try{
            const response = await teamApi.index();
            setTeams(response.teams);
        } catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    useEffect(()=>{
        getTeams()
    },[])

if (!loading){
    return(
        <>
        <PageHeader loggedUser={loggedUser}/>
        <AddTeamForm handleAddTeam={handleAddTeam}/>
        <div>This is where my teams will be displayed</div>
        <TeamDisplay teams={teams} />
        
        </>
    )
}
return(
    <div>Loading</div>
)

    
}