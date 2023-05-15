import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTheme from '@/app/hooks/useTheme';
import barssolid from "@/assets/barssolid.svg";
import xmark from "@/assets/xmark.svg";


export default function Header() {

    const [navbar, setNavbar] = useState(false);

    const [nextTheme, setTheme] = useTheme();

    return (
        <header>

            <nav className="w-full backdrop-blur-md fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* LOGO */}
                            <Link href="/">
                                <h2 className="text-2xl text-zinc-600 dark:text-gray-50 font-bold pl-2">Binoy Manoj</h2>
                            </Link>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <label className="swap swap-rotate hover:text-[var(--primary-color)] pr-6 mt-3">
                                    <input type="checkbox" onClick={() => setTheme(nextTheme)} />
                                    <svg className="swap-on fill-slate-50 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                    <svg className="swap-off fill-zinc-600 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                </label>

                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg fill-zinc-600 dark:fill-slate-50" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list fill-zinc-600 dark:fill-slate-50" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center text-zinc-600 dark:text-gray-50 justify-center md:flex font-bold">
                                <li className="pb-5 pt-4 text-xl text-zinc-600inc py-2 px-6 text-center  border-b-2 md:border-b-0 border-[var(--primary-color)]  md:hover:text-[var(--primary-color)] md:hover:bg-transparent">
                                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="pb-5 pt-4 text-xl text-zinc-600 dark:text-gray-50 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-[var(--primary-color)]  md:hover:text-[var(--primary-color)] md:hover:bg-transparent">
                                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                        About
                                    </Link>
                                </li>
                                <li className="pb-5 pt-4 text-xl text-zinc-600 dark:text-gray-50 py-2 px-6 text-center  border-b-2 md:border-b-0 border-[var(--primary-color)]  md:hover:text-[var(--primary-color)] md:hover:bg-transparent">
                                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                        Projects
                                    </Link>
                                </li>
                                <li className="pb-5 pt-4 text-xl text-zinc-600 dark:text-gray-50 py-2 px-6 text-center  border-b-2 md:border-b-0 border-[var(--primary-color)]  md:hover:text-[var(--primary-color)] md:hover:bg-transparent">
                                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>

                                <div className="h-10 w-0.5 bg-slate-700 dark:bg-white lineswap"></div>

                                <label className="swap swap-rotate hover:text-[var(--primary-color)] pl-6 lineswap">
                                    <input type="checkbox" onClick={() => setTheme(nextTheme)} />
                                    <svg className="swap-on fill-slate-50 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                    <svg className="swap-off fill-zinc-600 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                </label>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <nav className='w-full h-20 backdrop-blur-sm fixed top-0 left-0 right-0 z-10 flex items-center justify-around'>
                <div className="pl-5 lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className='flex'>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block"></div>
                        <Link href="/">
                            <h2 className="text-2xl text-zinc-600 font-bold">Binoy Manoj</h2>
                        </Link>
                        <div className="md:hidden">
                            <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <Image src={xmark} width={30} height={30} alt='close' />
                                ) : (
                                    <Image src={barssolid} width={30} height={30} alt='menu' className="focus:border-none active:border-none" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                            }`}
                    >
                        <ul className="h-screen items-center md:h-auto min-h-full justify-center sm:flex font-bold text-zinc-600 flex gap-6">
                            <li className="text-xl md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                    About
                                </Link>
                            </li>
                            <li className="text-xl md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                                    Blogs
                                </Link>
                            </li>
                            <li className="text-xl md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                                    Contact
                                </Link>
                            </li>
                            <li className="text-xl md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            {/* <nav className="shadow fixed w-full top-0 bg-gray-50 dark:bg-neutral-800 dark:text-white p-5 flex justify-center gap-[600px] text-bold z-20">

                <Link href="/" className="logo text-2xl font-bold">Binoy Manoj</Link>
                <div className="">

                    <ul className='flex content-center gap-6 text-base font-bold items-center'>
                        <Link href="/" className="hover:text-[var(--primary-color)]">Home</Link>
                        <Link href="#about" className="hover:text-[var(--primary-color)]" >About</Link>
                        <Link href="#projects" className="hover:text-[var(--primary-color)]" >Projects</Link>
                        <Link href="#contact" className="hover:text-[var(--primary-color)]" >Contact</Link>

                        <div className="h-10 w-0.5 bg-slate-700 dark:bg-white "></div>

                        <label className="swap swap-rotate hover:text-[var(--primary-color)]">
                            <input type="checkbox" onClick={() => setTheme(nextTheme)} />
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </ul>

                </div>
            </nav> */}

            {/* <nav className='w-full h-20 fixed z-10 backdrop-blur-sm text-zinc-700 dark:text-gray-300 flex justify-center lg:gap-[600px] items-center'>


                <label htmlFor="" className='md:text-3xl text-2xl'>Binoy Manoj</label>
                <ul className='flex gap-7 uppercase rounded font-bold'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="#about"><li>About</li></Link>
                    <Link href="#projects"><li>Projects</li></Link>
                    <Link href="#contact"><li>Contact</li></Link>
                </ul >
            </nav > */}


        </header >
    )
}

