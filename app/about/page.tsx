'use client';
import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
return (
    <div className = "text-center p-6">
        <div className = "flex flex-row p-6">
            <h1 className = "text-4xl font-bold">About AITE Pathways</h1>
    </div>
    <Image
        src = "/AITESpring2022-1.jpg"
        alt = "About AITE"
        width = {700}
        height = {500}
    />
        <div className = "flex flex-row p-6">
            <h4 className = "text-base">AITE is an interdistrict magnet high school located in Stamford, CT. AITE puts a focus on
            preparing students with 21st century skills through exposure to a technology-rich curriculum. AITE has recently transitioned 
            to a pathway model. The school's four pathways are: biomedical, computer science, digital media and engineering. Each student 
            will pick a pathway to follow at the end of their sophomore year.</h4>
        </div>
    </div>
    );
};
export default About;