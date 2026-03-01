'use client';
import React from 'react';
import { FaPhoenixSquadron } from 'react-icons/fa6';
const Header: React.FC = () => {
return (
    <header className = "flex items-center justify-between h-24 px-6 bg-white shadow ">
        <div className = "flex items-center space-x-4">
            <FaPhoenixSquadron className = "text-4xl"/>
            <h1 className = "text-4xl font-bold">My Application Header </h1>
        </div>
        <nav className = "flex space-x-6 text-base font-medium">
            <a href= "#" className = "hover:text-blue-600">Link 1</a>
            <a href= "#" className = "hover:text-blue-600">Link 2</a>
            <a href= "#" className = "hover:text-blue-600">Link 3</a>
        </nav>
    </header>
    );
};
export default Header;