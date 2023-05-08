import React, {useState, useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PokeDexIndex from '../../components/PokeDexIndex/PokeDexIndex';
import PokeDexDetail from '../../components/PokeDexDetail/PokeDexDetail';
import './PokeDexPage.css'
import  * as pokeApi from '../../utils/pokeApi'
import {Grid} from 'semantic-ui-react'


export default function PokeDexPage({loggedUser}){
    const [pokemon, setPokemon] = useState({})
    const [pokeIndex, setPokeIndex] = useState({})
    const [loading, setLoading] = useState({index: true, detail: true})

    async function getPokemonDetail(){
        try{
            setLoading({...loading, detail: true});
            const response = await pokeApi.getPoke(1,'','');
            
            console.log(response.data, ' <--- pokedetail data from pokeapi')
            setPokemon(response.data)
        }catch(err){
            console.log(err)
        }
        setLoading({...loading, detail: false});
    }

    async function getPokeIndex(){
        try{
            setLoading({...loading, index: true});
            const response = await pokeApi.getPoke('',20,0);
            console.log(response.data, ' <--- pokeindex data from pokeapi')
            setPokeIndex(response.data)
        }catch(err){
            console.log(err)
        }
        setLoading({...loading, index: false});
    }

    useEffect(()=>{
        getPokemonDetail()
        getPokeIndex()
    },[])

    if (!loading.detail || !loading.index){
        return(
            <>
                <PageHeader loggedUser={loggedUser}/>  
                <div id='pokepage'>
                    <PokeDexIndex pokeIndex={pokeIndex}/>
                    <PokeDexDetail pokemon={pokemon} />
                </div>
            </>
        )
    }

    return(
        <>
            <h3>Loading...</h3>
        </>
    )
}