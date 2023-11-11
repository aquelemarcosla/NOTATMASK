"use client"; 
import { useState, useEffect } from "react";
; 
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
      flex w-full h-min justify-end fixed p-5 
      ${scrolled ? 'bg-white bg-opacity-10' : ''}
      `} >
        <a href="https://github.com/aquelemarcosla" className="flex text-white font-bold">
          <p>GitHub</p>
        </a>
      </div>
    );
  }