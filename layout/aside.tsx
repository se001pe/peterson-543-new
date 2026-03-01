'use client';
import React from 'react';
import ButtonUI from "@/layout/ui/button";
import { FaRegFile } from "react-icons/fa6";
const Aside: React.FC = () => {
  return (    
    <aside className="w-64 bg-zinc-600 p-6 border-r border-zinc-700">
        <FaRegFile />
        <p className="text-base text-white">Pathway Home</p>
        <FaRegFile />
        <p className="text-base text-white">About Pathway</p>
        <FaRegFile />
        <p className="text-base text-white">Courses</p>
        <FaRegFile />
        <p className="text-base text-white">Teachers</p>
        
    </aside>
    
  );
}
export default Aside;