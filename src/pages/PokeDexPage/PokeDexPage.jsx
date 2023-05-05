import React, {useState, useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PokeDexIndex from '../../components/PokeDexIndex/PokeDexIndex';
import PokeDexDetail from '../../components/PokeDexDetail/PokeDexDetail';
import './PokeDexPage.css'
import  * as pokeApi from '../../utils/pokeApi'

export default function PokeDexPage({loggedUser}){
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)

    async function getPokemon(){
        try{
            const response = await pokeApi.getAll();
            console.log(response, ' <--- data from pokeapi')
        }catch(err){
            consoe.log(err)
        }
    }

    useEffect(()=>{
        const data = getPokemon()
    },[])

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