"use client";

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaAward } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbUpload } from "react-icons/tb";

export default function Header() {
    const [open, setOpen] = useState(false);

    const changeState = () => {
        setOpen(open => !open)
    }

    return (
        <header className="text-lg bg-white shadow-[0px_21px_19px_-7px_rgba(0,_0,_0,_0.1)]">
            <nav className="flex justify-between items-center mx-auto px-2 xl:px-10 lg:px-4 relative">
                <div>
                    <a href="#">
                        <Image src="/img/logo_nexus_hd.png" alt="Nexus Midia Logo" className="w-[5rem] min-w-16" width={100} height={88}></Image>
                    </a>
                </div>
                <div className={`absolute z-[100] bg-white lg:min-h-fit left-0 w-full flex px-5 py-4 items-center lg:static lg:w-auto lg:relative lg:top-0 lg:min-h-[100%] shadow-[0px_21px_19px_-7px_rgba(0,_0,_0,_0.1)] lg:shadow-none ${open ? 'top-[100%]' : 'top-[-200vh]'} `}>
                    <ul className="flex flex-col justify-center flex-1 items-center gap-8 text-lg lg:flex-row lg:items-center lg:gap-[2vw]">
                        <li>
                            <Link href="#" className="font-bold hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-gray-400">Pontos</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-gray-400">Contato</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-gray-400">Sobre Nós</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-gray-400 flex gap-1 items-center">Suporte <IoMdArrowDropdown /></Link>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4 items-center">
                    <Link href="#" className="bg-[#ffbd59] hover:bg-[#e3aa4f] text-nowrap p-2 rounded-full hidden xs:flex xs:items-center xs:gap-2">
                        <FaAward className="text-3xl" />
                        <span><b>Prêmio Nexus</b></span>
                        <span className="hidden xl:block">2024</span>
                    </Link>
                    <Link href="#" className="bg-[#dc0000] hover:bg-[#bd4444] text-nowrap text-white p-2 rounded-full hidden sm:flex sm:gap-1 sm:items-center outline hover:outline-4 hover:outline-red-400">
                    <TbUpload className="text-3xl"/>
                    Anunciar
                    </Link>
                    <button onClick={changeState}>
                        {(open) ? 
                        <IoMdClose className="text-4xl cursor-pointer lg:hidden" />
                        : 
                        <IoMdMenu className="text-4xl cursor-pointer lg:hidden"></IoMdMenu>
                        }
                    </button>
                    
                </div>
            </nav>
            
        </header>
    )
}

{/* <div className="ml-10 mr-10 flex flex-row items-center">
                <a href="/"className="flex flex-row items-center font-bold text-4xl ml-2">
                    
                </a>
                <div className="flex flex-row w-full">
                    <div className="flex flex-row">
                        <nav className="ml-14 flex flex-row flex-1">
                            
                        </nav>
                    </div>
                    <div className="flex flex-row text-2xl space-x-6 ml-auto whitespace-nowrap">
                        
                    </div>
                </div>
            </div> */}