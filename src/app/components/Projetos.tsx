interface propsProjetos {
    nome: string,
    link: string,
    descricao: string
}

export default function Projetos(props: propsProjetos) {
    return (
    <div className="block justify-center items-center mt-5 text-center">
            <div className="font-bold -mt-5 text-4xl">
                <h1>Projetos</h1>
            </div>
            <div className="block h-auto w-auto p-8 rounded-lg mt-24 shadow-md bg-blue-950">
            <div className="text-2xl">
                <h1>{props.nome}</h1>
            </div>
            <div className="text-3xl">
                <p>{props.descricao}</p>
            </div>
            <div className="mt-16">
                <a href={props.link} className="p-2 bg-blue-600 rounded-md hover:bg-sky-800 shadow-xl">COMEÇAR</a>
            </div>
        </div>
    </div>
    )
}