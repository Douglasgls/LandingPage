import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image';
import DogPng from '../../../public/hero-dog.webp'
import catImg from '../../../public/cat-hero.png'

export default function Header() {
    return (
        <section className="bg-[#E84C3D] text-white relative xs:flex flex-col justify-center items-center overflow-hidden">
            <div className='absolute top-0 right-0 max-h-96 w-auto xs:absolute opacity-60 lg:hidden xs:w-3/5 xs:pt-12 '>
                {/* FOTO DO CACHORRO FUNDO-2  */}
                <Image src={DogPng} alt="Foto do cachorro" className='object-cover w-full h-full  '/>
            </div>
            <div className="w-screen ">
                <article className=" text-white flex md:flex-row px-7 pt-7 justify-center">
                    <div className="text-white  relative">
                        <h1 className="text-4xl w-auto p-6 xs:text-4x2 sm:text-4xl lg:text-7xl font-bold">
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>
                        <p className="text-2xl p-6 md:text-2xl lg:text-4xl">
                            Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
                        </p>
                        <a href="https://wa.me/5587981796249" className="flex items-center w-64 p-2 bg-green-500 rounded-2xl border-2 border-gray-200 font-semibold gap-4 m-6 lg:text-1/2">
                            <WhatsappLogo  size={32}/>
                            Contato via WhatsApp
                        </a>
                        <p className='px-6 pt-6 pb-6 xs:text-xl md:text-1xl lg:text-2xl font-semibold '>
                            <b className='bg-black rounded-2xl text-white  p-2 text-center h-12 w-12 mr-2'>5%</b> 
                             De desconto na primeira compra
                        </p> 
                         {/* FOTO DO GATO  */}
                        <div className='absolute max-w-72 max-h-56  hidden bottom-0 right-0 lg:block'>
                            <Image src={catImg} alt="Foto do gato" quality={100} className='object-cover w-full h-full'/>
                        </div>
                    </div>
                    {/* FOTO DO CACHORRO  */}
                    <div className='relative top-0 left-0 hidden lg:block md:w-auto md:h-auto md:basis-2/3 md:flex-grow '>
                        <Image src={DogPng} alt="Foto do cachorro"  quality={100} className='object-cover w-full h-full' priority/>
                    </div>
                </article>
            </div>
        </section>
    );
}
