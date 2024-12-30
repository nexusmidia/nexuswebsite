import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header>
            <div className="ml-10 mr-10 flex flex-row items-center">
                <a href="/"className="flex flex-row items-center font-bold text-4xl ml-2">
                    <Image src="/img/logo_nexus_hd.png" alt="Nexus Midia Logo" width={128} height={88}></Image>
                </a>
                <div className="flex flex-row w-full">
                    <div className="flex flex-row">
                        <nav className="ml-14 flex flex-row flex-1">
                            <ul className="flex flex-row text-2xl space-x-10">
                                <li><Link href="#" className="font-bold">Home</Link></li>
                                <li><Link href="#">Pontos</Link></li>
                                <li><Link href="#">Contato</Link></li>
                                <li><Link href="#">Sobre Nós</Link></li>
                                <li><Link href="#">Suporte</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-row text-2xl space-x-6 ml-auto whitespace-nowrap">
                        <a>
                            <Link href="#" className="bg-[#ffbd59] p-3 rounded-2xl"><b>Prêmio Nexus</b> 2024</Link>
                        </a>
                        <a>
                            <Link href="#" className="bg-[#dc0000] text-white p-3 rounded-2xl">Anunciar</Link>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}