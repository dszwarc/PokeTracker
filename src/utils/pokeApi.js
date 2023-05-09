import axios from "axios"

const BASE_URL = 'https://pokeapi.co/api/v2'

export function getAll(filter){
    return axios.get(`${BASE_URL}/pokemon/${filter ? filter : ''}?limit=20`)
}

export function getPoke(pokeId, limit, offset){
    pokeId ? (pokeId + '/') : pokeId
    return axios.get(`${BASE_URL}/pokemon/${pokeId}?limit=${limit}&offset=${offset}`)
}