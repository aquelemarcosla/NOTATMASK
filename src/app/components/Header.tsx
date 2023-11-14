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


    return (
      <div className={`
      flex w-full h-[65px] justify-between fixed p-5 
      ${scrolled ? 'bg-white bg-opacity-10' : ''}
      `} >
        <Link href="/" >
          <Image className={`
            m -mt-3 
          `}

          src="/logo.png" alt="Logo" width={50} height={50}></Image>
        </Link>
        <Link href="https://github.com/aquelemarcosla" className="flex text-white font-bold">
          <p>GitHub</p>
        </Link>
      </div>
    );
  }