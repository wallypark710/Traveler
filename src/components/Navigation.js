import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navBox">
            <NavLink className="navText" to="/">Home</NavLink>
            <NavLink className="navText" to="/youtube">Youtube</NavLink>
            <NavLink className="navText" to="/traveler">Traveler</NavLink>
        </div>
    )
}

export default Navigation;