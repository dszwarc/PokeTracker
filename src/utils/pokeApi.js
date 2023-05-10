import axios from "axios"
import tokenService from '../utils/tokenService'

const BASE_URL = 'https://pokeapi.co/api/v2'
const TEAMS_URL = '/api/teams/'

export function getAll(low, high){
    let limit = low > 1 ? (low-1): 0;
    let filter = high;
    return axios.get(`${BASE_URL}/pokemon/?limit=${filter ? filter : ''}&offset=${limit}`)
}

export function getPoke(pokeId){
    return axios.get(`${BASE_URL}/pokemon/${pokeId}`)
}

export function create(data){
    return fetch(TEAMS_URL + data.teamId + '/pokemon', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
            Authorization: "Bearer " + tokenService.getToken()
        }
    }).then(response => {
        if (response.ok) return response.json()

        throw new Error('Something went wrong with creating pokemon')
    })
}