import Image from "next/image";
import AboudtImg1 from "../../../public/about-1.png";
import AboudtImg2 from "../../../public/about-2.png";
import { Check }  from "lucide-react";
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'


export default function About() {
    return (
        <section className="bg-yellow-100 overflow-hidden">
            <div className="min-h-auto">
                <article className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-24 p-12 lg:px-52">
                    <div className="relative h-full ">
                        {/* Imagem grande */}
                        <Image src={AboudtImg1} alt="Foto do cachorro" className='object-cover w-full h-full rounded-3xl'/>

                        {/* Imagem menor sobreposta */}
                        <div className="absolute hidden -bottom-9 md:block md:right-0 md:m-6 md:w-48 md:h-48 lg:w-48 lg:h-48 lg:right-12 border-2 border-solid border-white rounded-3xl">
                            <Image src={AboudtImg2} alt="Foto do cachorro" className='object-cover w-full h-full rounded-3xl'/>
                        </div>
                    </div>
                    <div className="text-gray-300 bg-gray-500 rounded-3xl p-12">
                        <h2 className="text-4xl font-bold pb-6">SOBRE</h2>

                        <p className="pb-14 pt-14 text-2xl">
                            Until one has loved an animal, a part of one's soul remains unawakened. We believe in it and we believe in easy access to things that are good for our mind, body and spirit. With a clever offering, superb support and a secure checkout you're in good hands.
                        </p>
                        <ul className="space-y-4 text-2xl">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinários.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa prioridade.
                            </li>
                        </ul>
                        <div className="flex min-w-full text-white">
                            <a href="" className="bg-[#E84C3D] rounded-2xl font-semibold mt-6 flex items-center justify-center gap-2 px-4 py-2 w-full">
                                <WhatsappLogo size={32}/>  
                                Contato via WhatsApp
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}