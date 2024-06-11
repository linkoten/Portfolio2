import Link from 'next/link';
import React from 'react';

const Experience = () => {
    return (
        <section
            id='experience'
            className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
            aria-label='Work experience'
        >
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                    Experience
                </h2>
            </div>
            <div>
                <ol className='group/list'>
                    <li className='mb-12'>
                        <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                            <header
                                className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                                aria-label='January 2023 to May 2023'
                            >
                                2024
                            </header>
                            <div className='z-10 sm:col-span-6'>
                                <h3 className='font-medium leading-snug text-slate-200'>
                                    <div>
                                        
                                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                            <span>
                                                Réalisation de sites
                                                web professionnels
                                                
                                            </span>
                                    </div>
                                </h3>
                                <p className='mt-2 text-sm leading-normal'>
                                En 2024, j&apos;ai mis en pratique mes compétences en créant deux sites web professionnels pour des clients : 
                                </p>
                                <p className='text-sm leading-normal pt-1'>
                                    1. Paleolitho (e-commerce et blog)
                                    Site e-commerce dynamique pour la
                                    vente de fossiles et la
                                    publication d&apos;articles de blog.
                                    Technologies : React, Next.js,
                                    Swell CMS, Tailwind CSS.
                                </p>
                                <p className='text-sm leading-normal pt-1'>
                                    2. Maison Kerogan (site vitrine)
                                    Site vitrine élégant pour un
                                    nouveau restaurant. Technologies :
                                    React, Next.js, Hygraph CMS,
                                    Tailwind CSS.
                                </p>
                                <ul
                                    className='mt-2 flex flex-wrap'
                                    aria-label='Technologies used'
                                >
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            React
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Next JS
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Tailwind CSS
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Swell
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Hygraph
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='mb-12'>
                        <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                            <header
                                className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                                aria-label='January 2023 to May 2023'
                            >
                                Janvier 2023 - Mai 2023
                            </header>
                            <div className='z-10 sm:col-span-6'>
                                <h3 className='font-medium leading-snug text-slate-200'>
                                    <div>
                                       
                                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                            <span>
                                                Débutant autodidacte
                                                
                                            </span>
                                    </div>
                                </h3>
                                <p className='mt-2 text-sm leading-normal'>
                                    Mon aventure dans le monde du
                                    développement web a débuté par un
                                    apprentissage en autodidacte des
                                    bases de la programmation et du
                                    langage Javascript. J&apos;ai choisi la
                                    plateforme OpenClassrooms comme
                                    guide pour me familiariser avec
                                    les concepts fondamentaux de la
                                    programmation, posant ainsi les
                                    jalons de mon parcours.{' '}
                                </p>
                                <ul
                                    className='mt-2 flex flex-wrap'
                                    aria-label='Technologies used'
                                >
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            HTML &amp; CSS
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            JavaScript
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='mb-12'>
                        <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                            <header
                                className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                                aria-label='May 2023 to December 2023'
                            >
                                Mai 2023 - Décembre 2023
                            </header>
                            <div className='z-10 sm:col-span-6'>
                                <h3 className='font-medium leading-snug text-slate-200'>
                                    <div>
                                       
                                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                            <span>
                                                Exploration de React
                                                et Next.js{' '}
                                                
                                            </span>
                                    </div>
                                </h3>
                                <p className='mt-2 text-sm leading-normal'>
                                    Muni des bases solides acquises en
                                    programmation, j&apos;ai ensuite plongé
                                    dans l&apos;univers de React et
                                    Next.js. Cette étape m&apos;a permis de
                                    découvrir les rouages du
                                    développement d&apos;interfaces
                                    utilisateur dynamiques et
                                    performantes, en m&apos;appuyant sur
                                    une multitude de ressources
                                    disponibles en ligne, notamment
                                    des tutoriels Youtube, des guides
                                    détaillés et des forums de
                                    développeurs comme StackOverflow.
                                </p>
                                <ul
                                    className='mt-2 flex flex-wrap'
                                    aria-label='Technologies used'
                                >
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            TypeScript
                                        </div>
                                    </li>

                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            React
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Next.js
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='mb-12'>
                        <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                            <header
                                className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                                aria-label='2023 to Present'
                            >
                                2023 — Present
                            </header>
                            <div className='z-10 sm:col-span-6'>
                                <h3 className='font-medium leading-snug text-slate-200'>
                                    <div>
                                        
                                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                            <span>
                                                Maîtrise du design web
                                                
                                            </span>
                                    </div>
                                </h3>
                                <p className='mt-2 text-sm leading-normal'>
                                    Soucieux de créer des interfaces à
                                    la fois fonctionnelles et
                                    esthétiques, j&apos;ai approfondi mes
                                    connaissances en design web. J&apos;ai
                                    exploré divers frameworks CSS tels
                                    que Tailwind CSS et Framer Motion,
                                    me permettant de concevoir des
                                    animations fluides et des mises en
                                    page responsives. Pour parfaire
                                    mes compétences, j&apos;ai également
                                    étudié des frameworks CSS plus
                                    complets comme Shadcn UI,
                                    Aeternity UI et Magic UI,
                                    élargissant ainsi ma palette
                                    d&apos;outils de design.{' '}
                                </p>
                                <ul
                                    className='mt-2 flex flex-wrap'
                                    aria-label='Technologies used'
                                >
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Tailwind CSS
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Shadcn UI
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            FramerMotion
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Aceternity UI
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Magic UI
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='mb-12'>
                        <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                            <header
                                className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                                aria-label='2023 to Present'
                            >
                                2023 — Present
                            </header>
                            <div className='z-10 sm:col-span-6'>
                                <h3 className='font-medium leading-snug text-slate-200'>
                                    <div>
                                        
                                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                            <span>
                                                Acquisition de
                                                compétences
                                                transverses 
                                                
                                            </span>
                                    </div>
                                </h3>
                                <p className='mt-2 text-sm leading-normal'>
                                    En complément de mes compétences
                                    techniques, j&apos;ai également pris
                                    soin d&apos;acquérir des compétences
                                    transverses essentielles dans le
                                    domaine du développement web. J&apos;ai
                                    notamment maîtrisé les bases de
                                    Github, un outil incontournable
                                    pour la gestion de version et la
                                    collaboration entre développeurs.
                                    De plus, j&apos;ai exploré l&apos;univers de
                                    l&apos;hébergement web en m&apos;initiant à
                                    des plateformes comme Vercel, me
                                    permettant de déployer et de
                                    partager mes applications web en
                                    toute simplicité.
                                </p>
                                <ul
                                    className='mt-2 flex flex-wrap'
                                    aria-label='Technologies used'
                                >
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            GitHub
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Vercel
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Swell
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                                            Hygraph
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ol>
                
            </div>
        </section>
    );
};

export default Experience;
