import axios from "axios";

import tokenService from "./tokenService";

BASE_URL = '/api/teams/'

export function create(data){
    axios.post('/teams',{
        body: data
    })
}
