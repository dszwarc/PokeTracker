import axios from "axios";

import tokenService from "./tokenService";

const BASE_URL = '/api/teams/'

export async function create(data){
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
            Authorization: "Bearer " + tokenService.getToken()
        }
    }).then(response => {
        if (response.ok) return response.json()

        throw new Error('Something went wrong with creating team')
    })
}

export async function edit(teamId, data){
    return fetch(BASE_URL)
}

export function deleteTeam(teamId){
    return fetch(`${BASE_URL}${teamId}`, {
        method: 'DELETE',
        headers:{
            Authorization: "Bearer " + tokenService.getToken()
        }
    }).then(res => res.json())
}

export async function index(){
    return fetch(BASE_URL, {
        headers: {
          // convention!
          // It's always going to Bearer + a space + the jwt token
          Authorization: 'Bearer ' + tokenService.getToken()
        }
      })
      .then(res => res.json());
}