import RadialGradient from '@/components/magicui/radial-gradient';
import { Spotlight } from '@/components/ui/Spotlight';
import Image from 'next/image';
import React, { forwardRef, useRef } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';

export default function Home() {
    return (
        <>
            <Spotlight
                className='-top-40 left-0 md:left-60 md:-top-20'
                fill='white'
            />
            <div className='bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'>
                <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 '>
                    <div className='lg:flex lg:justify-between lg:gap-4 '>
                        <Header />
                        <main
                            id='content'
                            className='pt-24 lg:w-1/2 lg:py-24'
                        >
                                                        <Technologies />

                            <Projects />
                            <Experience />
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
