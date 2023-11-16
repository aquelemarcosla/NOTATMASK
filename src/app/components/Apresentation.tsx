export default function Apresentation(props:any) {
    return(
        <div className={`
            flex justify-center items-center w-3/4 h-screen p-12
        `}>
            <div className="">
                <div className=" text-8xl mb-5">
                    <h1>{props.title}</h1>
                </div>
                <div className=" text-2xl">
                    <p >{props.description}</p>
                </div>
            </div>
        </div>
    )
}