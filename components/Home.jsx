import React from 'react';
import Image from "next/image";
import linkedin from "@/assets/linkedin.svg";
import github from "@/assets/github.svg";
import instagram from "@/assets/instagram.svg";
import mail from "@/assets/mail.svg";
import htmlicon from "@/assets/html.svg";
import cssicon from "@/assets/css-icon.svg";
import javascripticon from "@/assets/javascript.svg";
import reactjsicon from "@/assets/react.svg";
import nextjsicon from "@/assets/nextjs.svg";
import tailwindcssicon from "@/assets/tailwind-css-icon.svg";
import bootstrapicon from "@/assets/Bootstrap_logo.svg";


export default function Home() {

    return (
        <>
            <main className="home w-100 pt-20 lg:pt-32 dark:bg-zinc-900 dark:text-white pb-20">
                <div className="h-full">
                    <div className="content-center flex flex-wrap-reverse justify-center items-center gap-8">
                        <div className="">
                            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-2xl md:text-5xl font-bold">
                                Front-End Developer 👋🏻
                            </h1>

                            <p className="text-xl pt-12">
                                Hi, I&apos;m Binoy Manoj. A passionate Front-end Developer based in <br /> Tamilnadu, India. 📍
                            </p>
                            <ul className='pt-8 flex gap-8 items-center'>
                                <li>
                                    <a href="https://github.com/binoymanoj/" ><Image src={github} alt="Github" width="30" height="30" className='hover:scale-110 ' /></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/binoy-manoj-29b5a3223/" ><Image src={linkedin} alt="Linked In" width="30" height="30" className='hover:scale-110' /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/binoy_manoj/" ><Image src={instagram} alt="Instagram" width="30" height="30" className='hover:scale-110' /></a>
                                </li>
                                <li>
                                    <a href="mailto:binoypm2002@gmail.com" ><Image src={mail} alt="Twitter" width="30" height="30" className='hover:scale-110' /></a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/profile.JPG"
                                alt="profile"
                                width='350'
                                height='350'
                                priority
                                className="profilepic rounded-full mt-7"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center content-center gap-6 pt-16">
                        <h3 className="text-xl font-bold">Tech Stack</h3>

                        <div className="h-10 w-0.5 bg-slate-700 dark:bg-white dividerline"></div>

                        <div className="logos">
                            <ul className="flex flex-wrap items-center gap-10">
                                <div className="tooltip tooltip-error tooltip-bottom" data-tip="HTML">
                                    <li className="card p-4 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700  hover:scale-110">

                                        <Image src={htmlicon} alt="HTML" width="35" height="35" />
                                    </li>
                                </div>
                                <div className="tooltip tooltip-info tooltip-bottom" data-tip="CSS">
                                    <li className="card p-4 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={cssicon} alt="CSS" width="32" height="32" />
                                    </li>
                                </div>
                                <div className="tooltip tooltip-warning tooltip-bottom" data-tip="Javascript">
                                    <li className="card p-4 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={javascripticon} alt="JavaScript" width="40" height="40" />
                                    </li>
                                </div>
                                <div className="tooltip tooltip-info tooltip-bottom" data-tip="React js">
                                    <li className="card p-4 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={reactjsicon} alt="React js" width="40" height="40" />
                                    </li>
                                </div>
                                <div className="tooltip tooltip-bottom" data-tip="Next js">
                                    <li className="card p-4 py-6 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={nextjsicon} alt="Nest js" width="40" height="40" />
                                    </li>
                                </div>
                                <div className="tooltip tooltip-accent tooltip-bottom" data-tip="Tailwind CSS">
                                    <li className="card p-4 py-6 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={tailwindcssicon} alt="Tailwind Css" width="40" height="40" />
                                    </li>
                                </div>
                                <div className="tooltip tooltip-primary tooltip-bottom" data-tip="Bootstrap">
                                    <li className="card p-4 py-5 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={bootstrapicon} alt="Bootstrap" width="40" height="40" />
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="">

                </div>
            </main>
        </>
    )
}

