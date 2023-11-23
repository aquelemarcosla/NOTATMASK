export default function Footer() {
    return(
        <footer className=" rounded-lg shadow m-4 bg-blue-950 text-white mt-52">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
                <span className="text-sm sm:text-center">© 2023 <a href="^5^" className="hover:underline">Notatmask™</a>. Todos os direitos reservados. </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li> <a href="#" className="hover:underline me-4 md:me-6">Sobre</a> </li>
                    <li> <a href="https://linkedin.com/in/aquelemarcosla" target="_blank" className="hover:underline">Contato</a> </li>
                </ul>
            </div>
        </footer>

    )
}