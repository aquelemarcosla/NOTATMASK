import Apresentation from "./Apresentation";

export default function BodyCenter(props: any) {
    return(
        <div className={`
             flex-row h-auto mt-16 p-7 text-white
        `}>
            <Apresentation title="Olá, eu sou o Marcos." description="
                Tenho 19 e estou cursando ciência da computação pela PUC Minas
                a melhor universidade católica do mundo. 
                Desenvolvi este site do absoluto zero, no intuito de demonstrar meus conhecimentos
                práticos em programação. Espero que gostem.
            " />
        </div>
    )
}