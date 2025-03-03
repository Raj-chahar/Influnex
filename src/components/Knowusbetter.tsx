"use client"
import Link from 'next/link';
import React from 'react';
import { TextHoverEffect } from './ui/text-hover-effect';
import { StickyScroller } from './StickyScroller';

export default function Knowusbetter(){
    return (
        <div className='bg-[#0c0e15] w-full h-full'>
            <div className=" w-full h-full flex px-20 py-20">
            <div className=" w-[50%] ">
                <div className='flex items-center gap-2'>
                <div className="flex flex-col gap-1">
                    {/* ROW 1 */}
                    <div className='flex flex-row gap-1'>
                        <div className=' h-1 w-1'></div>
                        <div className=' h-1 w-1 border border-[#8ED7B7] rounded-full bg-[#8ED7B7]'></div>
                    </div>
                    {/* ROW 2 */}
                    <div className=' flex flex-row gap-1'>
                        <div className=' h-1 w-1 border border-[#8ED7B7] rounded-full bg-[#8ED7B7]'></div>
                        <div className=' h-1 w-1 border border-[#8ED7B7] rounded-full bg-[#8ED7B7]'></div>
                    </div>
                </div>
                <h6 className='font-mono'>KNOW US BETTER</h6>
                </div>
                <h1 className='font-mono text-white text-3xl font-bold'>
                Striving towards making India,
                A leader in Gaming and Esports. 
                </h1>
            </div>
            <div className="w-[50%] px-20">
                <p className='font-serif'>
                Trinity Gaming India is a leading gaming content & marketing company. The main objective of Trinity Gaming is to assist aspiring gaming content creators in monetizing their content through mentorship and brand integrations, while it caters to platforms and publishers by providing them with the right means to reach and retain their target audience.
                </p>
                        <Link href='/about' className=' pt-2 font-mono flex gap-2'><div className=' pl-2 bg-neutral-800'>Know</div> More</Link>
                </div>

            </div>
            <div className="px-10 lg:px-32 pt-20 grid grid-flow-col md:grid-cols-2 lg:grid-cols-4 items-center justify-evenly gap-8">
                <div className=" border-neutral-700 border-r-2 border-opacity-40 flex flex-col gap-4 text-center">
                    <h1 className="font-mono font-medium text-4xl">700+</h1>
                    <p className="font-sans font-medium text-xl">Creators</p>
                </div>
                <div className=" border-neutral-700 border-r-2 border-opacity-40 flex flex-col gap-4 text-center">
                    <h1 className="font-mono font-medium text-4xl">50+</h1>
                    <p className="font-sans font-medium text-xl">Brands</p>
                </div>
                <div className=" border-neutral-700 border-r-2 border-opacity-40 flex flex-col gap-4 text-center">
                    <h1 className="font-mono font-medium text-4xl">250+</h1>
                    <p className="font-sans font-medium text-xl">Events</p>
                </div>
                <div className=" flex flex-col gap-4 text-center">
                    <h1 className="font-mono font-medium text-4xl">100M+</h1>
                    <p className="font-sans font-medium text-xl">Monthly Views</p>
                </div>
            </div>
            {/* TEXT HOVER COMPONENT */}
            <TextHoverEffect text='Influnex' />
            <div className=' mt-[-100px] pb-28 flex justify-center'>
                <StickyScroller/>
            </div>
        </div>
    );
}