'use client';
import React from 'react';
import Link from 'next/link';

const NavUI: React.FC = () => {
    return (
        <nav className = "background-gray-800 p-4">
            <ul className = "flex flex-row gap-4">
                <li className = "border border-double px-2 py-3">
                    <Link href = "/ ">Home</Link>                    
                </li>
                <li className = "border border-double px2 py-3">
                    <Link href = "/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};
export default NavUI;