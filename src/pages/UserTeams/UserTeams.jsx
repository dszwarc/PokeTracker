import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function UserTeams({loggedUser}){
    return(
        <>
        <PageHeader loggedUser={loggedUser}/>
        <div>This is where my teams will be displayed</div>
        </>
    )
}