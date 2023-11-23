import Apresentation from "../components/Info";

export default function BodyCenter() {
    return(
        <div className={`
             block h-screen text-white 
        `}>
            <Apresentation 
            title="
            Olá, eu sou o Marcos." 
            description="
                Tenho 19 e estou cursando ciência da computação pela PUC Minas
                a melhor universidade católica do mundo. 
                Desenvolvi este site do absoluto zero, no intuito de demonstrar meus conhecimentos
                práticos em programação, me considero um desenvolvedor full-stack. Espero que gostem." 
            />
        </div>
    )
}