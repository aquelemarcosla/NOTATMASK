"use client"; 
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, []);

    const irProjetos = () => {
      document.getElementById('Projetos')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div className={`flex w-full h-[65px] justify-end fixed p-5 ${scrolled ? 'bg-white bg-opacity-5' : ''}`} >
        <div className="mr-5">
          <button onClick={irProjetos} className="outline-none text-lg text-white font-bold ">Projetos</button>
        </div>
        <Link href="https://github.com/aquelemarcosla" className="flex text-white font-bold text-lg">
          <p>GitHub</p>
        </Link>
      </div>
    );
  }