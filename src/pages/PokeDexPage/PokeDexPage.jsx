import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PokeDexIndex from '../../components/PokeDexIndex/PokeDexIndex';
import PokeDexDetail from '../../components/PokeDexDetail/PokeDexDetail';
import './PokeDexPage.css'

export default function PokeDexPage({loggedUser}){

    return(
        <>
        <PageHeader loggedUser={loggedUser}/>
        <div className='pokepage'>
            <PokeDexIndex />
            <PokeDexDetail />
        </div>
        </>
    )
}