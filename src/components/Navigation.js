import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink> <t/>
            <NavLink to="/youtube">Youtube</NavLink> <t/>
            <NavLink to="/traveler">Traveler</NavLink>
        </div>
    )
}

export default Navigation;