"use client";

import React from 'react';
import Lottie from "lottie-react";
import codinganimation from "@/assets/codinganimation.json"

function About() {
    return (
        <div id="about" className='about bg-white dark:bg-zinc-700 text-black dark:text-white'>
            <div className="h-[600px] flex items-center w-100 justify-center">
                <div className='flex flex-wrap gap-16 items-center justify-center' >
                    <Lottie loop={true} animationData={codinganimation} className='relative w-96 ' />
                    <div className="max-w-lg space-y-3">
                        <h4 className='text-lg text-[var(--primary-color)] font-bold'>ABOUT ME</h4>
                        <h3 className='text-2xl font-bold'>A dedicated Front-end Developer based in Tamilnadu, India. 📍</h3>
                        <p>
                            As a front-end developer, my goal is to create user-friendly and visually engaging websites and applications that provide a seamless user experience. I aim to stay up-to-date with the latest web technologies and design trends. Through my work, I strive to contribute to the world and to continuously grow and refine my skills as a front-end developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About