import axios from "axios"

const BASE_URL = 'https://pokeapi.co/api/v2'

export function getAll(){
    return axios.get(`${BASE_URL}/pokemon/`)
}

export default{
    getAll
}