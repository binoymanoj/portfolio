import React from 'react';
import Image from 'next/image';
import portfolioscreenshot from "@/assets/portfolioscreenshot.png";
import blogpagescreenshot from "@/assets/blogpagescreenshot.png";
import htmlicon from "@/assets/html.svg";
import cssicon from "@/assets/css-icon.svg";
import javascripticon from "@/assets/javascript.svg";
import reactjsicon from "@/assets/react.svg";
import nextjsicon from "@/assets/nextjs.svg";
import tailwindcssicon from "@/assets/tailwind-css-icon.svg";
import bootstrapicon from "@/assets/Bootstrap_logo.svg";
import Link from 'next/link';

function Projects() {
    return (

        <div id='projects' className='projects py-28 dark:bg-zinc-900 dark:text-white'>

            <div className="flex-col md:pl-12 lg:mx-60 md::mx-72 justify-center pb-20">
                <h4 className='text-lg text-[var(--primary-color)] font-bold'>PROJECTS</h4><br />
                <h3 className='text-2xl font-bold'>Make sure that you go through each project 👨🏻‍💻</h3>
            </div>

            <div className='flex flex-wrap gap-12 items-center justify-center'>

                {/* portfolio site */}
                <div className="card w-[550px] flex-wrap card-side justify-center shadow-xl bg-gray-100 dark:bg-base-100 dark:text-gray-50">
                    <div className=''>
                        <Link href="/">
                            <Image src={portfolioscreenshot} width="550" alt="Movie" className='p-7 rounded-[48px] projectsc' />
                        </Link>
                    </div>
                    <div className="card-body max-w-xl">
                        <h2 className="card-title cardtitle">Personal portfolio page <div className="badge badge-warning gap-2">
                            this page
                        </div></h2>
                        <p>A page for showcasing my knowledge, skills, framework that I&apos;m working with, projects that i&apos;ve done and ways to contact me. This project is open-source and the code is available in my github. You can contact me if you want to collaborate on any projects.</p>

                        <div className="logos">
                            <ul className="flex flex-wrap items-center gap-10 justify-center py-3">

                                <div className="tooltip tooltip-bottom" data-tip="Next js">
                                    <li className="card p-4 py-5 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={nextjsicon} alt="Nest js" width="25" height="25" />
                                    </li>
                                </div>
                                <div className="tooltip tooltip-accent tooltip-bottom" data-tip="Tailwind CSS">
                                    <li className="card p-4 py-5 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={tailwindcssicon} alt="Tailwind Css" width="25" height="25" />
                                    </li>
                                </div>

                            </ul>
                        </div>
                        <div className="card-actions justify-end">
                            <Link href="https://github.com/binoymanoj/portfolio" >
                                <button className="btn btn-primary">Code <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github pl-2" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg></button>
                            </Link>
                            <Link href="/">
                                <button className="btn btn-primary">Live Demo <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-up-right pl-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg> </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* blog page card */}
                <div className="card w-[550px] flex-wrap card-side justify-center shadow-xl bg-gray-100 dark:bg-base-100 dark:text-gray-50">
                    <div className=''>
                        <Link href="https://binoymanojblog.netlify.app">
                            <Image src={blogpagescreenshot} width="550" alt="Movie" className='p-7 rounded-[48px] projectsc' />
                        </Link>
                    </div>
                    <div className="card-body max-w-xl">
                        <h2 className="card-title">Blog website</h2>
                        <p>Blogs were originally called weblogs, which were websites that consisted of a series of entries arranged in reverse chronological order, so the newest posts appeared at the top. They were frequently updated with new information about various topics.</p>

                        <div className="logos">
                            <ul className="flex flex-wrap items-center gap-10 justify-center py-3">

                                <div className="tooltip tooltip-bottom" data-tip="Next js">
                                    <li className="card p-4 py-5 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={nextjsicon} alt="Nest js" width="25" height="25" />
                                    </li>
                                </div>
                                <div className="tooltip tooltip-info tooltip-bottom" data-tip="CSS">
                                    <li className="card p-4 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={cssicon} alt="CSS" width="23" height="23" />
                                    </li>
                                </div>
                                <div className="tooltip tooltip-warning tooltip-bottom" data-tip="Javascript">
                                    <li className="card p-4 rounded-full shadow-lg shadow-gray-400 dark:bg-gray-300 dark:shadow-gray-700 hover:scale-110">
                                        <Image src={javascripticon} alt="JavaScript" width="25" height="25" />
                                    </li>
                                </div>

                            </ul>
                        </div>
                        <div className="card-actions justify-end">
                            <Link href="https://github.com/binoymanoj/binoymanoj_blog">
                                <button className="btn btn-primary">Code <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github pl-2" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg> </button>
                            </Link>
                            <Link href="https://binoymanojblog.netlify.app">
                                <button className="btn btn-primary">Live Demo <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-up-right pl-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg> </button>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>


            {/* <div className='flex justify-center'>
            <div className="carousel carousel-center max-w-6xl p-4 gap-5 bg-white space-x-4 rounded-box">
                    <div className="carousel-item">
                    <Image src={blogpagescreenshot} width="300" className="rounded-box" alt='slider image' />
                    </div>
                    <div className="carousel-item">
                    <Image src={blogpagescreenshot} width="300" height="300" className="rounded-box" alt='slider image' />
                    </div>
                    <div className="carousel-item">
                        <Image src={blogpagescreenshot} width="300" height="300" className="rounded-box" alt='slider image' />
                    </div>
                    <div className="carousel-item">
                        <Image src={blogpagescreenshot} width="300" height="300" className="rounded-box" alt='slider image' />
                    </div>
                    <div className="carousel-item">
                        <Image src={blogpagescreenshot} width="300" height="300" className="rounded-box" alt='slider image' />
                    </div>
                    <div className="carousel-item">
                        <Image src={blogpagescreenshot} width="300" height="300" className="rounded-box" alt='slider image' />
                    </div>
                    <div className="carousel-item">
                        <Image src={blogpagescreenshot} width="300" height="300" className="rounded-box" alt='slider image' />
                    </div>
                </div>
            </div> */}

        </div >
    )
}

export default Projects