import React, { Suspense } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/menu.scss'
import {data} from '../data.js'
import Loading from './Loading'

const Menu = ({menuOpen, setMenuOpen}) => {

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            {data.map((d, index) => (
             <Link to={`/planet/${d.name}`} className='link' key={index}>
             <li onClick={() => setMenuOpen(false)}>
                 {d.name}
            </li>
            </Link>
            ))}
            <Link to='/home' className='link'  >
              
            <li onClick={() => setMenuOpen(false)}>
                Home
            </li>
            </Link>
        </ul>
    </div>
  )
}

export default Menu