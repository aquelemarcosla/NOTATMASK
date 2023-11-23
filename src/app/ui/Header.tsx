'use client'

import { useState, useEffect } from "react";
import Menu from "../components/Menu";

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
        <Menu />
      </div>
    );
  }