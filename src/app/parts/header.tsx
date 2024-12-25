import Image  from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header>
            <div>
                <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
                    <Image src="/img/logo.png" alt="Nexus Midia Logo" width={100} height={100}></Image>
                </a>
            </div>
        </header>
    )
}