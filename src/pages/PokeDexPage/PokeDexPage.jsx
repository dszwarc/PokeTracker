import React, {useState, useEffect} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PokeDexIndex from '../../components/PokeDexIndex/PokeDexIndex';
import PokeDexDetail from '../../components/PokeDexDetail/PokeDexDetail';
import './PokeDexPage.css'
import  * as pokeApi from '../../utils/pokeApi'
import {Grid} from 'semantic-ui-react'
import { useParams } from 'react-router-dom';


export default function PokeDexPage({loggedUser}){
    const {id} = useParams();
    console.log(id)
    let searchId;
    if (id){
        searchId = id;
    } else {
        searchId = (Math.floor(1008 * Math.random()));
    } 

    const [pokeIdSearch, setPokeIdSearch] = useState(searchId);
    const [pokemon, setPokemon] = useState({});
    const [pokeIndex, setPokeIndex] = useState({});
    const [loadingIndex, setLoadingIndex] = useState(true);
    const [loadingDetail, setLoadingDetail] = useState(true);
    const [search, setSearch] = useState({minP: 1, maxP: 20});

    async function getPokemonDetail(id){
        try{
            setLoadingDetail(true)
            const response = await pokeApi.getPoke(id);
            console.log(response, ' <--- response from detail search')
            setPokemon(response.data)    
        }catch(err){
            console.log(err)
            setPokemon({
                name: 'NOT FOUND',
                sprites: {front_default:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png'},
                id: '0'
            })
        }
        setLoadingDetail(false);
    }

    async function getPokeIndex(){
        try{
            setLoadingIndex(true)
            const response = await pokeApi.getAll(search.minP, search.maxP);
            console.log(response)
            setPokeIndex(response.data)
            console.log(response.data, ' <-- pokeindex response')
        }catch(err){
            console.log(err)
        }
        setLoadingIndex(false);
    }

    function handleMinMax(minP, maxP){
        setSearch({minP: minP, maxP: maxP})
    }

    async function handleAddPoke(poke){
        await pokeApi.create(poke);
    }

    useEffect(()=>{
        getPokemonDetail(searchId)
        getPokeIndex()
    },[search.maxP, search.minP, id])

    if (!loadingDetail && !loadingIndex){
        return(
            <>
                <PageHeader loggedUser={loggedUser}/>  
                <div id='pokepage'>
                    <PokeDexIndex handleMinMax={handleMinMax} pokeIndex={pokeIndex}/>
                    <PokeDexDetail getPokemonDetail={getPokemonDetail} handleAddPoke={handleAddPoke} user={loggedUser} pokemon={pokemon} />
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