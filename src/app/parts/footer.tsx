import Image from "next/image";

export default function Footer() {
    return (
        <footer className="text-lg bg-neutral-900 bottom-0 px-4 py-10 text-white mt-20">
            <div className="px-4 xl:container xl:w-full xl:m-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-3/12">
                        <div className="mb-12 flex flex-col items-center">
                            <a href="#">
                                <Image src="/img/logo_nexus_hd.png" alt="Nexus Midia Logo" className="w-24 min-w-24" width={100} height={88}></Image>
                            </a>
                            <span className="text-neutral-400 text-xl text-balance">Iluminando o caminho para <br></br>o sucesso da sua marca!</span>
                        </div>
                    </div>
                    <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
                        <div className="mb-12">
                            <h1 className="font-heading mb-6 font-heading text-xl font-medium text-dark dark:text-white">Suporte</h1>
                            <ul className="space-y-3">
                                <li className="text-neutral-400">FAQ</li>
                                <li className="text-neutral-400">Problemas</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
                        <div className="mb-12">
                            <h1 className="font-heading mb-6 font-heading text-xl font-medium text-dark dark:text-white text-nowrap">Saiba Mais</h1>
                            <ul className="space-y-3">
                                <li className="text-neutral-400">Pontos</li>
                                <li className="text-neutral-400">Representantes</li>
                                <li className="text-neutral-400">Parceiros</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-2/12">
                        <div className="mb-12">
                            <h1 className="font-heading mb-6 font-heading text-xl font-medium text-dark dark:text-white">Entre em Contato</h1>
                            <ul className="space-y-3">
                                <li className="text-neutral-400">(87) 8119-6876</li>
                                <li className="text-neutral-400">contato@nexusled.com.br</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-2/12">
                        <div className="mb-12">
                            <h1 className="font-heading mb-6 font-heading text-xl font-medium text-dark dark:text-white">Outros</h1>
                            <ul className="space-y-3">
                                <li className="text-neutral-400">Prêmio Nexus 2024</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-5 border-t-2 border-neutral-400 pt-2 flex justify-center">
                    <span className="text-neutral-400 text-base">© 2025 Nexus Midia. Todos os direitos reservados.</span>
                </div>
            </div>
        </footer>
    )
}

// export default function Footer() {
//     return (
//         <footer className="text-xl bg-neutral-900 w-screen w-full bottom-0 px-10 py-10 text-white">
//             <div className="flex flex-col justify-between gap-[2vh] lg:flex-row lg:gap-[12vw]">
//                 <div className="flex flex-col items-center justify-center pb-2">
//                     <a href="#">
//                         <Image src="/img/logo_nexus_hd.png" alt="Nexus Midia Logo" className="w-28 min-w-28" width={100} height={88}></Image>
//                     </a>
//                     <span className="text-neutral-400 text-xl text-balance">Iluminando o caminho para <br></br>o sucesso da sua marca!</span>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                     <h1 className="font-bold mb-1">Suporte</h1>
//                     <span className="text-neutral-400 text-lg">FAQ</span>
//                     <span className="text-neutral-400 text-lg">Problemas</span>
//                     <span className="text-neutral-400 text-lg">Item 3</span>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                     <h1 className="font-bold mb-1">Saiba Mais</h1>
//                     <span className="text-neutral-400 text-lg">Pontos</span>
//                     <span className="text-neutral-400 text-lg">Representantes</span>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                     <h1 className="font-bold mb-1">Entre em Contato</h1>
//                     <span className="text-neutral-400 text-lg">(87) 8119-6876</span>
//                     <span className="text-neutral-400 text-lg">nexus@Email</span>
//                 </div>
//             </div>
//             <div className="mt-5 border-t-2 border-neutral-400 pt-2 flex justify-center">
//                 <span className="text-neutral-400 text-base">© 2025 Nexus Midia. Todos os direitos reservados.</span>
//             </div>
//         </footer>
//     )
// }