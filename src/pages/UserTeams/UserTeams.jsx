import React, {useState, useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as userService from '../../utils/userService';
import AddTeamForm from '../../components/AddTeamForm/AddTeamForm';
import * as teamApi from '../../utils/teamApi'
import TeamDisplay from '../../components/TeamDisplay/TeamDisplay';
import {Card} from 'semantic-ui-react';
import * as pokeApi from '../../utils/pokeApi'
import './UserTeams.css'

export default function UserTeams({loggedUser}){
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    async function handleAddTeam(team){
        console.log(team, '< --- this is team from handleAddTeam')
        await teamApi.create(team);
        getTeams();
    }

    async function handleDeletePokemon(team, poke){
        setLoading(true)        
        // console.log(poke, team, 'Poke then team')
        // handleDeletePokemon(poke, team)
        const data = {team: team, poke: poke}
        try{
            await pokeApi.deletePoke(data);
        }catch(err){
            console.log(err)
        }
        setLoading(false)
    }

    async function handleDelete(id){
        setLoading(true)
        try{
            await teamApi.deleteTeam(id)
        } catch(err){
            console.log(err)
        }
        setLoading(false)
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
    },[loading])

if (!loading){
    return(
        <>
        <PageHeader loggedUser={loggedUser}/>
        <AddTeamForm handleAddTeam={handleAddTeam}/>
        <div>This is where my teams will be displayed</div>
        <TeamDisplay teams={teams} handleDelete={handleDelete} handleDeletePokemon={handleDeletePokemon}/>
        
        </>
    )
}
return(
    <div>Loading</div>
)

    
}