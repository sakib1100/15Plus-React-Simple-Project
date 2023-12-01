import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
           <div className='nav'>
                <ul className='navbar'>
                    <li><NavLink to='/counter'>Counter</NavLink></li>
                    <li><NavLink to='/toggle'>Toggle</NavLink></li>
                    <li><NavLink to='/form'>Form</NavLink></li>
                    <li><NavLink to='/toDoList'>ToDo</NavLink></li>
                    <li><NavLink to="/practic">Practic</NavLink></li>
                </ul>
            </div> 
        </div>
    );
};

export default Navbar;