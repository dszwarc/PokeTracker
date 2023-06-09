import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import './PageHeader.css'
import userService from '../../utils/userService'

export default function PageHeader({loggedUser}){

    const navigate = useNavigate();

    function handleLogout(){
        userService.logout();
    }

    if (loggedUser){
        return(
            <div className='navbar'>
                <div id='leftsidenav'>
                    <Image avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png'/>
                    <h3>Pok&#233;Tracker</h3>
                </div>  
            <div className='navlinks'>
                <Link to='/'>POK&#201;DEX</Link>
                <Link to='/teams'>MY TEAMS</Link>
                <Link to='/login' onClick={handleLogout}>LOGOUT</Link>
            </div>
        </div>
        )
    }
    
    return(
        <div className='navbar'>
         <div id='leftsidenav'>
                    <Image avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png'/>
                    <h3>Pok&#233;Tracker</h3>
                </div>  
        <div className='navlinks'>
            <Link to='/signup'>SIGN UP</Link>
            <Link to='/login'>LOGIN</Link>
        </div>
        </div>
    )
}