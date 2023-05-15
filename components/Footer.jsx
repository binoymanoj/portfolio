import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import twitter from "@/assets/twitter.svg";
import linkedin from "@/assets/linkedin.svg";
import github from "@/assets/github.svg";
import instagram from "@/assets/instagram.svg";
import mail from "@/assets/mail.svg";

export default function Footer() {
  return (
    <footer id='contact' className="footer footer-center bg-white text-black dark:bg-zinc-700 dark:text-white p-10 font-bold rounded">
      <div className="flex gap-8 text-base">
        <Link href="/" className="hover:text-[var(--primary-color)]">Home</Link>
        <Link href="#about" className="hover:text-[var(--primary-color)]" >About</Link>
        <Link href="#projects" className="hover:text-[var(--primary-color)]" >Projects</Link>
        <Link href="#contact" className="hover:text-[var(--primary-color)]" >Contact</Link>
      </div>
      <div>


        <h3 className='text-xl text-[var(--primary-color)] pb-4'>Contact Me:</h3>
        <ul className=' flex gap-10 items-center'>
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
            <a href="https://twitter.com/binoy_manoj_" ><Image src={twitter} alt="Twitter" width="30" height="30" className='hover:scale-110' /></a>
          </li>
          <li>
            <a href="mailto:binoypm2002@gmail.com" ><Image src={mail} alt="Twitter" width="30" height="30" className='hover:scale-110' /></a>
          </li>
        </ul>

      </div>
      <div>
        <p>Copyright © 2023 - All right reserved.</p>
      </div>
    </footer>
  )
}

