import React, {useState, useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as userService from '../../utils/userService';


export default function UserTeams({loggedUser}){
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getTeams(){
        try{
            const response = await userService.userTeams();
        } catch(err){
            console.log(err);
        }
        setLoading(false);
    }


    return(
        <>
        <PageHeader loggedUser={loggedUser}/>
        <div>This is where my teams will be displayed</div>
        </>
    )
}