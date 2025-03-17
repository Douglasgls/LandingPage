"use client";
import tutor1 from '../../../public/tutor1.png'
import tutor2 from '../../../public/tutor2.png'
import { Card } from "@/components/ui/card"
import Image from 'next/image';

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


const feedbacks = [
    {
      content:
        "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
      author: "Mariana Souza",
      role: "Tutora da Luna (Golden Retriever)",
      image: tutor2,
    },
    {
      content:
        "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
      author: "Rafael",
      role: "Tutor do Thor (Bulldog Francês)",
      image: tutor1,
    },
    {
      content: "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
      author: "Camila fernandes",
      role: "Tutora da Mel e do Max",
      image: tutor2,
    },
  ]

  export default function Feedback() {
    return (
      <section className='overflow-hidden'>
        <div className='bg-yellow-100 w-screen'>
          <div className='flex flex-col text-center items-center justify-center md:p-14 xs:p-2'>
            <h1 className=" text-blue-950 text-4xl p-6 xs:text-4xl md:text-5xl lg:text-5xl font-bold">
                Depoimento Dos Nossos Clientes
            </h1>
            <Carousel 
              className="w-full p-24 xs:p-2"
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: true,
                }),
              ]}
            >
            <CarouselContent >
                {feedbacks.map((feedback) => (
                    <CarouselItem key={feedback.author}>
                        <div className="w-full rounded-2xl">
                            <Card className='bg-[#1e293b] text-white flex items-center justify-center flex-col xs:border-2'>
                              <div>
                                <Image src={feedback.image} alt="Foto do tutor" className='object-cover w-28 h-28 rounded-full'/>
                              </div>
                              <p className='xs:p-2 text-center text-sm xs:text-lg md:text-xl lg:text-2xl '>
                                {feedback.content}
                              </p>
                              <div className='flex flex-col text-center justify-center'>
                                <span className='font-bold'>{feedback.author}</span>
                                {feedback.role}
                              </div>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
                  </CarouselContent>
                <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    )
  }
        
  