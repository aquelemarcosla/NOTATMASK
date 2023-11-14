import Link from "next/link";

export default function NotFound() {
    return(
        <div>
            <h1>Not Found</h1>
            <div>
                <Link href="/">GO BACK</Link>
            </div>
        </div>
    )
}