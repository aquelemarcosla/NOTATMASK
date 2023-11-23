'use client'

import Link from "next/link";

export default function Menu() {

    const irProjetos = () => {
      document.getElementById('Projetos')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-row justify-between">
            <div className="mr-5">
                <button onClick={irProjetos} className="outline-none text-lg text-white font-bold ">Projetos</button>
            </div>
            <Link href="https://github.com/aquelemarcosla" className="flex text-white font-bold text-lg">
                <p>GitHub</p>
            </Link>
        </div>
    );
  }