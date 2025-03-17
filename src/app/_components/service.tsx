import { Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Card } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const services = [
    {
      id:1,
      title: "Banho & Tosa",
      description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
      duration: "1h",
      price: "$50",
      icon: <Scissors />,
      linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },
    {
        id:2,
      title: "Consulta Veterinária",
      description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
      duration: "1h",
      price: "$45",
      icon: <Syringe />,
      linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
    },
    {
        id:3,
      title: "Táxi Pet",
      description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
      duration: "2h",
      price: "$80",
      icon: <CarTaxiFront />,
      linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
    },
    {
        id:4,
      title: "Hotel para pets",
      description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
      duration: "1h",
      price: "$60",
      icon: <Hotel />,
      linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
    },
  ]
  
export default function service() {
    return (
        <section className="relative overflow-hidden">
            <div className='lg:flex items-center justify-center flex-col bg-yellow-100'>
                <div>
                    <h2 className=" text-4xl p-6 xs:text-4xl md:text-5xl lg:text-5xl text-blue-950 font-bold text-center">Nossos Serviços</h2>
                </div>

                <div className='overflow-hidden md:w-2/2 md:px-32  lg:w-screen lg:p-12'>
                    <Carousel className="w-full p-3 lg:hidden"  >
                        <CarouselContent>
                            {services.map((service) => (
                                <CarouselItem key={service.id}>
                                    <div className="w-full rounded-2xl ">
                                        <Card className='bg-[#1e293b] text-white'>
                                            <h2 className='text-xl flex items-center lg:text-center gap-2 p-3 pb-1 font-bold'>
                                                <span>{service.icon}</span>
                                                {service.title}
                                            </h2>

                                            <p className='p-3 '>
                                                {service.description}
                                            </p>

                                            <span className="border-t border-gray-300 px-4 "></span>

                                            <div className='flex justify-around gap-52 xs:gap-2'>
                                                <span className='p-3 flex gap-3'>
                                                    <Clock/>
                                                    {service.duration}
                                                </span>

                                                <span className='flex gap-3 p-3 pl-20'>
                                                    <WhatsappLogo className='w-5 h-5' />
                                                    <b>Entrar em contato</b>
                                                </span>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                                </CarouselContent>
                            <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    <div className='hidden lg:grid grid-cols-4 gap-4 w-full'>
                        {services.map((service) => (
                            <Card key={service.id} className='bg-[#1e293b] text-white w-2/2'>
                                <h2 className='text-xl flex items-center lg:text-center gap-2 p-3 pb-1 font-bold'>
                                    <span>{service.icon}</span>
                                    {service.title}
                                </h2>

                                <p className='p-3 lg:h-28 overflow-hidden'>
                                    {service.description}
                                </p>

                                <span className="border-t border-gray-300 px-4 "></span>

                                <div className='flex justify-around gap-52 xs:gap-2'>
                                    <span className='p-3 flex gap-3'>
                                        <Clock/>
                                        {service.duration}
                                    </span>

                                    <span className='flex gap-3 p-3 pl-20'>
                                        <WhatsappLogo className='w-5 h-5' />
                                        <b>Entrar em contato</b>
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}