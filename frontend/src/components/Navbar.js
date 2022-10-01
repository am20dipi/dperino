import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar(){
    return (
        <nav>
            <ul className="navbar-nav">
                <li className="nav-item" >
                    <NavLink 
                        className="nav-link" 
                        to="/"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null,
                        })}>
                        home
                    </NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink 
                        className="nav-link" 
                        to="/"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null,
                        })}>
                        commissions
                    </NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink 
                        className="nav-link" 
                        to="/"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : null,
                        })}>
                        contact
                    </NavLink>
                </li>
             </ul>               
        </nav>
    )
}

export default Navbar