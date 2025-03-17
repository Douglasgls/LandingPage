import Image from 'next/image';
import Royal from '../../../public/royal.png'
import Golden from '../../../public/golden.png'
import Primier from '../../../public/primier.png'
import Natural from '../../../public/natural.png'
import Whiskas from '../../../public/whiskas.png'
import { WhatsappLogo,InstagramLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react/dist/ssr';




export default function Footer() {
    return (
        <section className='bg-[#E84C3D] overflow-hidden'>
            <div className=' flex items-center justify-center flex-col overflow-hidden'>
                <div className='xs:p-2 sm:p-4 xs:py-6'>
                    <h1 className='font-bold text-white xs:text-3xl md:text-4xl lg:text-5xl'>
                        Marcas Que Trabalhamos
                    </h1>
                </div>
                <div className='flex xs:grid xs:grid-cols-2 xs:gap-3 xs:p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:p-4 md:grid md:grid-cols-3 md:gap-4 md:p-4  lg:grid-cols-6 lg:w-screen lg:gap-4 lg:p-14 items-center justify-center '>
                    <Image src={Royal} alt="Foto do cachorro" className='object-cover w-full h-full rounded-2xl'/>
                    <Image src={Golden} alt="Foto do cachorro" className='object-cover w-full h-full  rounded-2xl'/>
                    <Image src={Primier} alt="Foto do cachorro" className='object-cover w-full h-full  rounded-2xl'/>
                    <Image src={Natural} alt="Foto do cachorro" className='object-cover w-full h-full  rounded-2xl'/>
                    <Image src={Whiskas} alt="Foto do cachorro" className='object-cover w-full h-full  rounded-2xl'/>
                    <Image src={Golden} alt="Foto do cachorro" className='object-cover w-full h-full  rounded-2xl'/>
                </div>
            </div>

            {/* --------------------------------------------------------- */}
            

            <div className='px-6 mx-auto py-6'>
                <div className='border-t-2 border-gray-200'></div>
            </div>


            <div className='xs:flex xs:flex-col xs:items-center lg:flex lg:flex-row lg:justify-around overflow-hidden'>
                <div className='flex flex-col items-center justify-center xs:p-10 xs:items-center text-white'>
                    <h1 className='font-bold xs:text-2xl md:text-5xl lg:text-3xl xs:pb-4'>Pet Shop</h1>
                    <div className='flex items-center justify-center w-96 pl-14'>
                        <p className='xs:text-1xl md:text-2xl lg:text-1xl xs:pb-4 w-full'>Cuidamos do seu melhor amigo com amor e dedicação</p>
                    </div>
                    <a href="" className="flex items-center w-64 p-2 bg-green-500 rounded-2xl border-2 border-gray-200 font-semibold gap-4  lg:text-1/2">
                        <WhatsappLogo  size={32}/>
                        Contato via WhatsApp
                    </a>
                </div>

                <div className='flex  flex-col xs:p-10 xs:items-center text-white '>
                    <h1 className='font-bold xs:text-2xl md:text-5xl lg:text-3xl xs:pb-4'>Contatos</h1>
                    <span className='xs:text-1xl md:text-3xl lg:text-lg xs:pb-1'>Rua dos Pets 123</span>
                    <span className='xs:text-1xl md:text-3xl lg:text-lg xs:pb-1'>Cidade, Estado - CEP 12345</span>
                    <span className='xs:text-1xl md:text-3xl lg:text-lg xs:pb-1'>Telefone: (00) 0000-0000</span>
                    <span className='xs:text-1xl md:text-3xl lg:text-lg xs:pb-1'>Email: 1Kk1w@example.com</span>
                </div>

                <div className='flex flex-col xs:p-10 xs:items-center text-white'>
                    <h1 className='font-bold xs:text-2xl md:text-5xl lg:text-3xl xs:pb-4 lg:pb-12'>Redes Sociais</h1>
                    <div className='flex gap-6 min-sm:w-3xs xs:items-center xs:justify-center'>
                        <span><InstagramLogo className='xs:w-12 xs:h-12' /></span>
                        <span><FacebookLogo className='xs:w-12 xs:h-12' /></span>
                        <span><TwitterLogo  className='xs:w-12 xs:h-12'/></span>
                    </div>
                </div>
            </div>
        </section>
    )
}