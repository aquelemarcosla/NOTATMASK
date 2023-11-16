export default function Apresentation(props:any) {
    return(
        <div className={`
            flex justify-start  w-1/2 h-auto p-3
        `}>
            <div>
                <div className=" t text-8xl mb-5">
                    <h1>{props.title}</h1>
                </div>
                <div className=" t text-2xl ">
                    <p >{props.description}</p>
                </div>
            </div>
        </div>
    )
}