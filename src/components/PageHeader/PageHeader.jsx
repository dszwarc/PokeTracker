import React from 'react'
import {Link} from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import './PageHeader.css'

export default function PageHeader(){
    return(
        <div className='navbar'>
        <Image avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png'/>
        <div className='navlinks'>
            <Link to='/signup'>SIGN UP</Link>
            <Link to='/login'>LOGIN</Link>
            <Link to='/'>POKEDEX</Link>
        </div>
        </div>
    )
}