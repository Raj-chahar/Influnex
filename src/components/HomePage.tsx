"use client"
import React from 'react';
import ParticlesComponent from "@/components/ParticlesComponent";
import Image from 'next/image';
import WobbleText from './ui/WobbleText';

function HomePage() {
  return (
    // <div className='h-full w-full'>
    //     <ParticlesComponent id='tsparticles'/>
    //     <h1 style={{ color: "white", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
    //     Welcome to My Next.js App
    //   </h1>
    // </div>
    <div className="relative w-full min-h-screen h-full flex items-center justify-center">
      {/* Background Particle Effect */}
      <div className="absolute inset-0">
        <ParticlesComponent id="tsparticles" />
      </div>

      {/* Foreground Content */}
        {/* <Image src='/Influnex white.png' alt='' width={250} height={250}/> */}
        <WobbleText/>
    </div>
  )
}

export default HomePage