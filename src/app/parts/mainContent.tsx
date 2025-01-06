import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function MainContent() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    }, [Autoplay({
        playOnInit: false,
        stopOnMouseEnter: true,
        delay: 4000
    })]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="flex-1 relative pt-10">
            <div className="embla relative">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide bg-red-400">
                            <Image src="/img/TESTE SLIDE.png" alt="teste" width={1152} height={512}></Image>
                        </div>
                        <div className="embla__slide bg-red-400">
                            <Image src="/img/TESTE SLIDE.png" alt="teste" width={1152} height={512}></Image>
                        </div>
                        <div className="embla__slide bg-red-400">
                            <a href="https://nexusled.com.br">
                            <Image src="/img/TESTE SLIDE.png" alt="teste" width={1152} height={512}></Image>
                            </a>
                        </div>
                    </div>
                </div>
                <button className="embla__prev p-2 absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg opacity-[70%]" onClick={scrollPrev}>
                    <FaArrowLeft className="text-2xl" />
                </button>
                <button className="embla__next p-2 absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg opacity-[70%]" onClick={scrollNext}>
                    <FaArrowRight className="text-2xl" />
                </button>
            </div>
        </div>
    )
}