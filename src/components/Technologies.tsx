'use client';

import { AnimatedBeam } from '@/components/magicui/animated-beam';
import { IconProps } from '@radix-ui/react-icons/dist/types';
import React, { forwardRef, useRef } from 'react';
import { cn } from '@/lib/utils';
import { backInOut, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                ' flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] cursor-help',
                className
            )}
        >
            {children}
        </div>
    );
});
Circle.displayName = 'Circle';


const Technologies = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    const Icons = {
        gitHub: (props: IconProps) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <svg viewBox='0 0 438.549 438.549' {...props}>
                        <path
                            fill='currentColor'
                            d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'
                        ></path>
                    </svg>
                </HoverCardTrigger>
                <HoverCardContent className=' w-80'>
                    <div className='  flex justify-between space-x-4'>
                        <Avatar>
                            <AvatarImage src='https://github.com/vercel.png' />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className='space-y-1'>
                            <h4 className='text-sm font-semibold'>
                            GitHub
                            </h4>
                            <p className='text-sm'>
                            Une plateforme d&apos;hébergement de code versionné et de collaboration pour les développeurs de logiciels.
                            </p>
                            <div className='flex items-center pt-2'>
                                <Link
                                    href='https://github.com/'
                                    className='text-xs text-muted-foreground'
                                >
                                https://github.com/
                                </Link>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        ),
        react: (props: IconProps) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <svg
                        width='64px'
                        height='64px'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        {...props}
                    >
                        <path
                            fillRule='nonzero'
                            clipRule='nonzero'
                            d='M4.84989 2.37195C4.59895 2.51683 4.33488 2.91636 4.30424 3.78785C4.28968 4.20181 3.9423 4.52559 3.52835 4.51103C3.11439 4.49647 2.79061 4.1491 2.80516 3.73514C2.84273 2.66673 3.1806 1.60366 4.09989 1.07291C5.02179 0.540653 6.11484 0.782356 7.06128 1.28727C7.42674 1.48224 7.56495 1.93656 7.36998 2.30201C7.17501 2.66747 6.72069 2.80568 6.35524 2.61072C5.5818 2.1981 5.10158 2.22663 4.84989 2.37195ZM8.87139 3.67284C9.19036 3.40858 9.66315 3.45293 9.92741 3.7719C10.4818 4.44103 11.0136 5.20405 11.4963 6.04018C12.5366 7.84191 13.178 9.68785 13.3509 11.2362C13.4372 12.0091 13.4108 12.7446 13.2303 13.3754C13.0484 14.011 12.6941 14.5863 12.0999 14.9293C11.381 15.3444 10.5509 15.2855 9.79114 15.0089C9.02868 14.7313 8.24395 14.2056 7.49586 13.5228C7.18993 13.2435 7.16831 12.7691 7.44756 12.4632C7.72681 12.1573 8.20119 12.1356 8.50712 12.4149C9.16624 13.0165 9.78567 13.4105 10.3043 13.5994C10.8257 13.7892 11.1537 13.7436 11.3499 13.6303C11.5143 13.5354 11.6797 13.342 11.7882 12.9627C11.8981 12.5787 11.9328 12.0529 11.8602 11.4026C11.7152 10.1045 11.1591 8.45607 10.1973 6.79018C9.75492 6.02396 9.27081 5.33055 8.77232 4.72886C8.50807 4.40989 8.55242 3.93709 8.87139 3.67284Z'
                            fill='#000000'
                        />
                        <path
                            fillRule='nonzero'
                            clipRule='nonzero'
                            d='M14.5 8.20557C14.5 7.91581 14.286 7.48735 13.5466 7.02507C13.1954 6.80549 13.0887 6.34276 13.3083 5.99154C13.5279 5.64032 13.9906 5.53361 14.3418 5.75319C15.2483 6.31993 16 7.14407 16 8.20557C16 9.27009 15.2442 10.0958 14.3337 10.663C13.9821 10.882 13.5195 10.7746 13.3005 10.423C13.0815 10.0714 13.189 9.60887 13.5405 9.38985C14.2846 8.92635 14.5 8.4962 14.5 8.20557ZM11.3626 11.0378C11.432 11.4462 11.1572 11.8335 10.7488 11.9029C9.89219 12.0484 8.96547 12.1274 8 12.1274C5.91954 12.1274 4.00018 11.76 2.57286 11.1355C1.86032 10.8238 1.23659 10.4332 0.780529 9.9615C0.320977 9.48616 0 8.89166 0 8.20557C0 7.37549 0.466082 6.68599 1.08548 6.16636C1.70712 5.64485 2.55471 5.22808 3.52013 4.92164C3.91494 4.79633 4.33657 5.01479 4.46189 5.40959C4.5872 5.80439 4.36874 6.22603 3.97394 6.35135C3.12334 6.62134 2.4724 6.96078 2.04954 7.31553C1.62442 7.67217 1.5 7.97899 1.5 8.20557C1.5 8.39536 1.58476 8.6353 1.85895 8.91891C2.13663 9.20613 2.57464 9.49905 3.17409 9.76131C4.37076 10.2848 6.07639 10.6274 8 10.6274C8.88475 10.6274 9.72732 10.5549 10.4976 10.424C10.906 10.3547 11.2933 10.6295 11.3626 11.0378Z'
                            fill='#000000'
                        />
                        <path
                            fillRule='nonzero'
                            clipRule='nonzero'
                            d='M4.87192 13.6303C5.12286 13.7752 5.6009 13.8041 6.37095 13.3949C6.73673 13.2005 7.19082 13.3395 7.38519 13.7052C7.57957 14.071 7.44062 14.5251 7.07484 14.7195C6.13079 15.2211 5.04121 15.4601 4.12192 14.9293C3.20003 14.3971 2.86282 13.3296 2.82687 12.2575C2.81299 11.8435 3.13733 11.4967 3.55131 11.4828C3.96529 11.4689 4.31215 11.7932 4.32603 12.2072C4.35541 13.0834 4.62023 13.485 4.87192 13.6303ZM3.98778 9.49712C3.59944 9.35301 3.40145 8.92138 3.54556 8.53304C3.84786 7.71839 4.24274 6.8763 4.72548 6.04018C5.76571 4.23845 7.04361 2.75996 8.29806 1.83609C8.92431 1.37487 9.57441 1.02999 10.211 0.870901C10.8524 0.71059 11.5278 0.729863 12.1219 1.07291C12.8408 1.48795 13.2049 2.23634 13.3452 3.03257C13.486 3.83168 13.4232 4.77409 13.2058 5.7634C13.1169 6.16796 12.7169 6.42388 12.3124 6.33501C11.9078 6.24613 11.6519 5.84612 11.7408 5.44155C11.9322 4.56992 11.9637 3.83647 11.868 3.29288C11.7717 2.7464 11.5681 2.48524 11.3719 2.37195C11.2076 2.27705 10.9574 2.23049 10.5747 2.32614C10.1871 2.42301 9.71442 2.65588 9.18757 3.04388C8.13584 3.81846 6.98632 5.12428 6.02452 6.79018C5.58214 7.55639 5.22369 8.32235 4.95185 9.0549C4.80774 9.44323 4.37611 9.64122 3.98778 9.49712Z'
                            fill='#000000'
                        />
                        <path
                            d='M9.45925 8.06618C9.45925 8.81694 8.85063 9.42556 8.09987 9.42556C7.34911 9.42556 6.7405 8.81694 6.7405 8.06618C6.7405 7.31542 7.34911 6.70681 8.09987 6.70681C8.85063 6.70681 9.45925 7.31542 9.45925 8.06618Z'
                            fill='#000000'
                        />
                    </svg>
                </HoverCardTrigger>
                <HoverCardContent className=' w-80'>
                    <div className='  flex justify-between space-x-4'>
                        <Avatar>
                            <AvatarImage src="data:image/png;base64,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" />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className='space-y-1'>
                            <h4 className='text-sm font-semibold'>
                                React
                            </h4>
                            <p className='text-sm'>
                            Bibliothèque JavaScript pour la création d&apos;interfaces utilisateur modulaires et dynamiques.
                            </p>
                            <div className='flex items-center pt-2'>
                                <Link
                                    href='https://reactjs.org/'
                                    className='text-xs text-muted-foreground'
                                >
                                https://reactjs.org/
                                </Link>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        ),
        vercel: (props: IconProps) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 283 64'
                    >
                        <path
                            fill='black'
                            d='M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z'
                        />
                    </svg>
                </HoverCardTrigger>
                <HoverCardContent className=' w-80'>
                    <div className='  flex justify-between space-x-4'>
                        <Avatar>
                            <AvatarImage src='https://github.com/vercel.png' />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className='space-y-1'>
                            <h4 className='text-sm font-semibold'>
                                Vercel
                            </h4>
                            <p className='text-sm'>
                                Une plateforme de déploiement et
                                d&apos;hébergement cloud pour les
                                applications web et front-end.
                            </p>
                            <div className='flex items-center pt-2'>
                                <Link
                                    href='https://vercel.com/'
                                    className='text-xs text-muted-foreground'
                                >
                                    https://vercel.com/
                                </Link>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        ),
        nextJS: (props: IconProps) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <svg
                        fill='#000000'
                        width='64px'
                        height='64px'
                        viewBox='0 0 32 32'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <title>NextJS</title>

                        <path d='M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z' />
                    </svg>
                </HoverCardTrigger>
                <HoverCardContent className=' w-80'>
                    <div className='  flex justify-between space-x-4'>
                        <Avatar>
                            <AvatarImage src="data:image/png;base64,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" />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className='space-y-1'>
                            <h4 className='text-sm font-semibold'>
                                Next JS
                            </h4>
                            <p className='text-sm'>
                            Un framework React pour le rendu côté serveur et le pré-rendu statique, simplifiant le développement d&apos;applications web performantes et SEO-friendly.
                            </p>
                            <div className='flex items-center pt-2'>
                                <Link
                                    href='https://nextjs.org/'
                                    className='text-xs text-muted-foreground'
                                >
                                https://nextjs.org/
                                </Link>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        ),
        postgreSQL: (props: IconProps) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <svg
                        fill='#000000'
                        width='64px'
                        height='64px'
                        viewBox='0 0 32 32'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M24.295 9.929c-0.010 0.155-0.082 0.292-0.191 0.387l-0.001 0.001c-0.131 0.143-0.306 0.243-0.504 0.278l-0.005 0.001c-0.028 0.004-0.061 0.007-0.094 0.007h-0c-0.001 0-0.003 0-0.004 0-0.312 0-0.58-0.189-0.694-0.46l-0.002-0.005c-0.030-0.221 0.33-0.388 0.701-0.44s0.764 0.011 0.794 0.231zM14.385 10.443c-0.121 0.311-0.418 0.528-0.766 0.528-0.004 0-0.007-0-0.011-0h0.001c-0 0-0 0-0 0-0.036 0-0.070-0.003-0.105-0.007l0.004 0c-0.261-0.047-0.483-0.191-0.63-0.392l-0.002-0.003c-0.082-0.094-0.132-0.219-0.132-0.354 0-0 0-0.001 0-0.001v0c0.012-0.077 0.055-0.143 0.115-0.185l0.001-0.001c0.152-0.084 0.334-0.133 0.528-0.133 0.083 0 0.164 0.009 0.242 0.026l-0.007-0.001c0.395 0.055 0.803 0.242 0.764 0.523zM25.403 18.086l-0.107-0.134-0.044-0.055c0.457-0.846 0.725-1.853 0.725-2.921 0-0.488-0.056-0.962-0.162-1.418l0.008 0.042c-0.070-0.453-0.111-0.976-0.111-1.508 0-0.007 0-0.014 0-0.021v0.001c0.023-0.501 0.076-0.97 0.158-1.429l-0.010 0.066c0.089-0.464 0.14-0.998 0.14-1.544 0-0.051-0-0.101-0.001-0.151l0 0.008c0.012-0.049 0.019-0.104 0.019-0.162 0-0.027-0.002-0.053-0.004-0.079l0 0.003c-0.4-1.58-1.151-2.949-2.168-4.073l0.007 0.008c-0.911-1.068-2.031-1.929-3.3-2.523l-0.060-0.025c0.696-0.149 1.496-0.234 2.316-0.234 0.075 0 0.15 0.001 0.225 0.002l-0.011-0c0.045-0.001 0.097-0.002 0.15-0.002 2.378 0 4.496 1.109 5.866 2.838l0.012 0.016c0.028 0.036 0.056 0.077 0.080 0.12l0.003 0.005c0.904 1.694-0.345 7.842-3.732 13.172zM25.117 9.322c-0.016 0.455-0.064 0.886-0.14 1.307l0.008-0.055c-0.078 0.425-0.134 0.931-0.157 1.445l-0.001 0.025c-0 0.017-0 0.036-0 0.056 0 0.567 0.042 1.124 0.124 1.668l-0.008-0.061c0.085 0.377 0.134 0.809 0.134 1.254 0 0.763-0.144 1.493-0.407 2.162l0.014-0.040c-0.076-0.131-0.155-0.289-0.224-0.453l-0.011-0.029c-0.066-0.159-0.209-0.416-0.406-0.77-0.769-1.38-2.571-4.611-1.649-5.929 0.474-0.678 1.676-0.707 2.722-0.579zM24.406 20.907c-0.051-1.039 0.336-1.148 0.746-1.263q0.085-0.023 0.169-0.051c0.050 0.044 0.105 0.087 0.162 0.125l0.005 0.003c0.62 0.273 1.342 0.431 2.102 0.431 0.592 0 1.161-0.096 1.693-0.274l-0.038 0.011c-0.344 0.293-0.736 0.544-1.16 0.738l-0.031 0.013c-0.644 0.264-1.391 0.429-2.173 0.454l-0.010 0c-0.119 0.018-0.256 0.029-0.395 0.029-0.386 0-0.754-0.080-1.087-0.224l0.018 0.007zM23.293 22.933c-0.021 0.221-0.045 0.47-0.077 0.745l-0.182 0.548c-0.014 0.040-0.022 0.086-0.023 0.134v0c0.001 0.027 0.001 0.058 0.001 0.089 0 0.355-0.053 0.699-0.151 1.022l0.006-0.025c-0.116 0.389-0.196 0.84-0.223 1.305l-0.001 0.016c-0.052 1.684-1.355 3.047-3.008 3.194l-0.013 0.001c-1.894 0.406-2.23-0.621-2.526-1.527q-0.045-0.142-0.096-0.283c-0.16-0.652-0.252-1.401-0.252-2.171 0-0.36 0.020-0.715 0.059-1.065l-0.004 0.043c0.006-0.128 0.009-0.279 0.009-0.43 0-1.026-0.154-2.016-0.441-2.948l0.019 0.071q0.008-0.55 0.024-1.114c0-0.003 0-0.008 0-0.012 0-0.046-0.007-0.090-0.020-0.132l0.001 0.003c-0.014-0.1-0.033-0.188-0.058-0.273l0.003 0.013c-0.141-0.521-0.496-0.941-0.964-1.164l-0.011-0.005c-0.176-0.088-0.384-0.14-0.605-0.14-0.104 0-0.205 0.011-0.302 0.033l0.009-0.002c0.128-0.47 0.26-0.854 0.412-1.228l-0.026 0.073 0.066-0.177c0.074-0.2 0.167-0.407 0.266-0.626 0.546-1.124 0.865-2.445 0.865-3.841 0-0.938-0.144-1.842-0.411-2.692l0.017 0.063c-0.183-1.108-1.135-1.943-2.281-1.943-0.18 0-0.356 0.021-0.524 0.060l0.016-0.003c-0.796 0.104-1.516 0.338-2.171 0.682l0.035-0.017q-0.124 0.063-0.245 0.13c0.091-2.147 0.896-4.090 2.181-5.615l-0.012 0.014c0.118-0.119 0.242-0.232 0.37-0.338l0.009-0.007c0.069-0.014 0.13-0.042 0.182-0.081l-0.001 0.001c0.893-0.654 2.014-1.047 3.227-1.047 0.097 0 0.193 0.002 0.288 0.007l-0.013-0.001c0.526 0.008 1.034 0.044 1.534 0.108l-0.067-0.007c2.043 0.393 3.787 1.463 5.032 2.963l0.011 0.014c0.748 0.869 1.354 1.887 1.766 2.998l0.022 0.069c-0.257-0.069-0.552-0.109-0.856-0.109-0.983 0-1.868 0.416-2.49 1.081l-0.002 0.002c-1.24 1.773 0.679 5.215 1.601 6.869 0.169 0.303 0.315 0.565 0.361 0.676 0.26 0.601 0.587 1.118 0.98 1.577l-0.007-0.008c0.087 0.109 0.171 0.214 0.236 0.306-0.501 0.144-1.401 0.478-1.319 2.146-0.015 0.195-0.053 0.558-0.104 1.018-0.054 0.269-0.098 0.597-0.123 0.93l-0.002 0.028zM14.091 17.219l-0.066 0.176c-0.137 0.328-0.279 0.745-0.397 1.172l-0.019 0.081c-0.893-0.013-1.695-0.395-2.261-1.001l-0.002-0.002c-0.632-0.667-1.020-1.57-1.020-2.564 0-0.198 0.015-0.392 0.045-0.582l-0.003 0.021c0.097-0.72 0.153-1.551 0.153-2.396 0-0.502-0.020-0.999-0.058-1.491l0.004 0.065c-0.006-0.107-0.012-0.201-0.015-0.275 0.805-0.611 1.824-0.98 2.929-0.98 0.132 0 0.262 0.005 0.391 0.015l-0.017-0.001c0.554 0.129 0.971 0.588 1.037 1.153l0.001 0.006c0.238 0.728 0.375 1.566 0.375 2.435 0 1.266-0.291 2.464-0.809 3.532l0.021-0.048c-0.105 0.233-0.204 0.453-0.289 0.682zM11.474 22.203c-0.205-0.052-0.385-0.128-0.549-0.227l0.009 0.005c0.172-0.073 0.375-0.134 0.585-0.173l0.019-0.003c1.604-0.33 1.851-0.563 2.392-1.25 0.124-0.157 0.264-0.336 0.459-0.553 0.040-0.045 0.072-0.099 0.091-0.159l0.001-0.003c0.213-0.189 0.34-0.137 0.546-0.052 0.227 0.125 0.395 0.336 0.46 0.587l0.001 0.007c0.023 0.065 0.037 0.139 0.037 0.217 0 0.125-0.035 0.242-0.095 0.341l0.002-0.003c-0.645 0.882-1.676 1.449-2.839 1.449-0.4 0-0.785-0.067-1.144-0.191l0.025 0.007zM3.967 15.846c-0.651-1.985-1.181-4.34-1.494-6.764l-0.021-0.199c-0.061-0.322-0.095-0.693-0.095-1.071 0-1.806 0.789-3.427 2.041-4.537l0.006-0.005c2.295-1.623 6.048-0.676 7.633-0.163l-0.012 0.012c-1.535 1.872-2.466 4.292-2.466 6.928 0 0.090 0.001 0.18 0.003 0.27l-0-0.013c-0 0.103 0.008 0.249 0.020 0.449 0.033 0.41 0.052 0.888 0.052 1.371 0 0.802-0.052 1.592-0.154 2.367l0.010-0.091c-0.033 0.206-0.051 0.444-0.051 0.686 0 1.231 0.482 2.35 1.269 3.177l-0.002-0.002q0.151 0.158 0.315 0.297c-0.433 0.464-1.375 1.49-2.377 2.696-0.709 0.853-1.199 0.689-1.36 0.636-0.685-0.368-1.222-0.939-1.538-1.631l-0.009-0.022c-0.684-1.252-1.286-2.708-1.73-4.232l-0.039-0.157zM30.445 19.403c-0.019-0.057-0.043-0.106-0.072-0.151l0.002 0.003c-0.174-0.329-0.596-0.427-1.259-0.29-2.066 0.426-2.866 0.164-3.156-0.024 1.617-2.452 2.918-5.292 3.751-8.326l0.049-0.209c0.339-1.313 0.997-4.403 0.153-5.913-0.059-0.112-0.122-0.208-0.192-0.298l0.003 0.004c-1.563-1.955-3.948-3.196-6.623-3.196-0.076 0-0.152 0.001-0.227 0.003l0.011-0c-0.042-0.001-0.091-0.001-0.141-0.001-1.342 0-2.633 0.22-3.838 0.625l0.085-0.025q-0.321-0.060-0.645-0.102c-0.488-0.093-1.053-0.151-1.631-0.16l-0.008-0c-0.083-0.004-0.18-0.006-0.278-0.006-1.315 0-2.538 0.394-3.557 1.071l0.024-0.015c-1.071-0.401-5.984-2.056-9.025 0.098-1.489 1.27-2.426 3.147-2.426 5.244 0 0.405 0.035 0.802 0.102 1.188l-0.006-0.041c0.335 2.698 0.879 5.126 1.632 7.461l-0.079-0.284c0.493 1.716 1.103 3.201 1.852 4.6l-0.061-0.124c0.433 0.984 1.182 1.764 2.116 2.225l0.026 0.012c0.168 0.049 0.361 0.078 0.561 0.078 0.742 0 1.392-0.391 1.756-0.979l0.005-0.009c1.001-1.204 1.987-2.282 2.43-2.758 0.502 0.279 1.097 0.451 1.731 0.471l0.006 0 0.001 0.005q-0.158 0.188-0.309 0.382c-0.424 0.538-0.512 0.649-1.875 0.93-0.388 0.080-1.418 0.292-1.433 1.014-0 0.004-0 0.008-0 0.013 0 0.147 0.043 0.284 0.117 0.399l-0.002-0.003c0.312 0.395 0.751 0.678 1.254 0.788l0.015 0.003c0.399 0.13 0.859 0.205 1.335 0.205 1.1 0 2.106-0.398 2.884-1.058l-0.006 0.005c-0.024 0.418-0.037 0.908-0.037 1.401 0 1.753 0.171 3.467 0.496 5.125l-0.027-0.167c0.382 1.373 1.616 2.367 3.084 2.38h0.002c0.369-0.003 0.726-0.046 1.070-0.124l-0.033 0.006c1.919-0.171 3.431-1.705 3.567-3.619l0.001-0.012c0.188-1.088 0.502-3.593 0.673-5.125 0.008-0.065 0.034-0.123 0.072-0.171l-0.001 0.001c0.001-0.001 0.087-0.059 0.534 0.038l0.055 0.009 0.317 0.028 0.019 0.001c0.095 0.004 0.207 0.007 0.319 0.007 1.024 0 2.002-0.2 2.895-0.564l-0.051 0.018c0.805-0.373 2.256-1.29 1.993-2.087z'></path>
                    </svg>
                </HoverCardTrigger>
                <HoverCardContent className=' w-80'>
                    <div className='  flex justify-between space-x-4'>
                        <Avatar>
                            <AvatarImage src="data:image/png;base64,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" />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className='space-y-1'>
                            <h4 className='text-sm font-semibold'>
                                PostgreSQL
                            </h4>
                            <p className='text-sm'>
                            Un système de gestion de base de données relationnelle (SGBD) open-source populaire pour stocker et gérer des données structurées.
                            </p>
                            <div className='flex items-center pt-2'>
                                <Link
                                    href="https://www.postgresql.org/"
                                    className='text-xs text-muted-foreground'
                                >
                                https://www.postgresql.org/
                                </Link>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        ),
        ShadcnUI: (props: IconProps) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 256 256'
                        className='h-6 w-6'
                    >
                        <rect
                            width='256'
                            height='256'
                            fill='none'
                        ></rect>
                        <line
                            x1='208'
                            y1='128'
                            x2='128'
                            y2='208'
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='16'
                        ></line>
                        <line
                            x1='192'
                            y1='40'
                            x2='40'
                            y2='192'
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='16'
                        ></line>
                        <title>Shadcn</title>
                    </svg>
                </HoverCardTrigger>
                <HoverCardContent className=' w-80'>
                    <div className='  flex justify-between space-x-4'>
                        <Avatar>
                            <AvatarImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUAAAD///+jo6PR0dF1dXWgoKBzc3NDQ0N7e3umpqZ4eHilpaU/Pz/Ozs5xcXHU1NRHR0c6Ojq5ubnZ2dkRERGXl5exsbEkJCTt7e3g4OBVVVX19fVOTk5jY2MICAiGhoYyMjIcHBzExMRnZ2eOjo43FkKVAAADI0lEQVR4nO2d6XraMBBFJQgtZCmNgYSELG3a93/GQMhqzw9DZjSj63seQN/c78gar3JKhBBCCCGEEEIIIYQQQggh5ABW4/VNc+tdhR3TvGfsXYgVs/zGZuldiwkfAXOeexdjweeAOd95l6PP14B55l2POq2A+cK7IG3aAfPCuyJlOgFz412SLmedgPnEuyZVugbz2rsmVQSDGerETTCYp95FaTJCDyhNUQasiQl6QOkYPPUuShMarB14g1JAeIPwAaEuJwZpED4gp2hNSI2eBmtCulyCNwgVUDoGf3gXpckgFxmogNJtQ/gpChVQMvjLuyhNaLB2aLB24APCn2xLBuEvl6ACDtIg1K37QRqEDwjVJuADwt+yGKRBLjI1QYO1Q4O1Ax+Qjb52uMjUDg3WDvxbFvBtAj4g/DN6+MdnNFg7NFg7NPgNltPR6l5prKMxbPQPzX64R53hjsRwiv7cvA34pDPgURhO0d+fhrzSGfIILA1+GfRaZ9CDKWRwy0hn1EMxNNgK6LTpkBRQyeB5e1yXLRaKHYM7PLYcMjR42R35TGfkQyhq0GMtNQwoGHTYUslwikoGy6+kJVfR7LGhkhRQ6YVYyWD5dbTwFI0RUMmgNEVjBKTBfkhtIsYiwzbRD8kg1BSVFhkaVEe6oqfBfsQIKD2jN2wTNKiO4TEYd5GBNwjVJgw/kKTBIhgajNEmChssHxDeIPyZjKHBP8LQMRYZqEZv+AVo3DZh+PCl/M8QDA3GmKKGX2HDG4wR0NCgNEWhAsY1aPiEl4uMOoYB4xqEavSGfwxhoy+CocG4AeEbPQ32Q2oTMQLCG1QKGNcg20Q/Yqyij+gGk53BIAFX6AbT2Mpg+7sJr4BpbWQwxtXEjhtwgyk1JgHjGEzpHtzgloV+wBjvi76z3GgHjGVwy3K+L2Kj9JvacAF3Nc3Gi0ZrH/Eojd4MyaDjMahPjM8KDPmLbjA9gRuUFGIZTFNwg8KbcGAGu5fTcAHTP/SArZs+aMfgC//RA6Z0AT1FX7h6Dei3r4w515P5ej7x2lWGEEIIIYQQQgghhBBCCCGEEEIIic4zYfQjXQ4vLvwAAAAASUVORK5CYII=" />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className='space-y-1'>
                            <h4 className='text-sm font-semibold'>
                                Shadcn UI
                            </h4>
                            <p className='text-sm'>
                            Un framework CSS utility-first inspiré de Tailwind CSS, conçu pour créer des interfaces utilisateur modernes et réactives.
                            </p>
                            <div className='flex items-center pt-2'>
                                <Link
                                    href='https://ui.shadcn.com/docs/installation'
                                    className='text-xs text-muted-foreground'
                                >
                                https://ui.shadcn.com/docs/installation
                                </Link>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        ),
        mongoDB: (props: IconProps) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <svg
                        fill='#000000'
                        width='64px'
                        height='64px'
                        viewBox='0 0 32 32'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <title>mongodb</title>
                        <path d='M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z'></path>
                    </svg>
                </HoverCardTrigger>
                <HoverCardContent className=' w-80'>
                    <div className='  flex justify-between space-x-4'>
                        <Avatar>
                            <AvatarImage src="data:image/png;base64,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" />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className='space-y-1'>
                            <h4 className='text-sm font-semibold'>
                                MongoDB
                            </h4>
                            <p className='text-sm'>
                            Un système de gestion de base de données NoSQL open-source flexible et évolutif pour stocker des données non structurées ou semi-structurées.
                            </p>
                            <div className='flex items-center pt-2'>
                                <Link
                                    href='https://www.mongodb.com/'
                                    className='text-xs text-muted-foreground'
                                >
                                https://www.mongodb.com/
                                </Link>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        ),
        tailwind: (props: IconProps) => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <svg
                        width='64px'
                        height='64px'
                        viewBox='0 0 32 32'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <title>file_type_tailwind</title>
                        <path d='M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z' />
                    </svg>
                </HoverCardTrigger>
                <HoverCardContent className=' w-80'>
                    <div className='  flex justify-between space-x-4'>
                        <Avatar>
                            <AvatarImage src="data:image/jpeg;base64,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" />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className='space-y-1'>
                            <h4 className='text-sm font-semibold'>
                            Tailwind CSS
                            </h4>
                            <p className='text-sm'>
                            Un framework CSS utility-first qui offre un ensemble de classes CSS pré-construites et personnalisables pour styliser rapidement et facilement des interfaces web.
                            </p>
                            <div className='flex items-center pt-2'>
                                <Link
                                    href='https://tailwindcss.com/'
                                    className='text-xs text-muted-foreground'
                                >
                                https://tailwindcss.com/
                                </Link>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        ),
    };

    const items: any[] = [
        {
            images: {
                src1: 'data:image/png;base64,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',
                src2: 'data:image/png;base64,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',
                src3: 'data:image/png;base64,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', // Path to the first image (e.g., '../../../public/next-js-svgrepo-com.svg')
            },
            title: 'Dévelopemment Front-End',
            paragraph:
                "Familiarité avec les principes de base de React pour la mise en œuvre de sites e-commerce fonctionnels, en tirant parti de useState, useEffect, useRef, useContext et props.",
        },
        {
            images: {
                src1: 'data:image/jpeg;base64,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',
                src2: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUAAAD///+jo6PR0dF1dXWgoKBzc3NDQ0N7e3umpqZ4eHilpaU/Pz/Ozs5xcXHU1NRHR0c6Ojq5ubnZ2dkRERGXl5exsbEkJCTt7e3g4OBVVVX19fVOTk5jY2MICAiGhoYyMjIcHBzExMRnZ2eOjo43FkKVAAADI0lEQVR4nO2d6XraMBBFJQgtZCmNgYSELG3a93/GQMhqzw9DZjSj63seQN/c78gar3JKhBBCCCGEEEIIIYQQQggh5ABW4/VNc+tdhR3TvGfsXYgVs/zGZuldiwkfAXOeexdjweeAOd95l6PP14B55l2POq2A+cK7IG3aAfPCuyJlOgFz412SLmedgPnEuyZVugbz2rsmVQSDGerETTCYp95FaTJCDyhNUQasiQl6QOkYPPUuShMarB14g1JAeIPwAaEuJwZpED4gp2hNSI2eBmtCulyCNwgVUDoGf3gXpckgFxmogNJtQ/gpChVQMvjLuyhNaLB2aLB24APCn2xLBuEvl6ACDtIg1K37QRqEDwjVJuADwt+yGKRBLjI1QYO1Q4O1Ax+Qjb52uMjUDg3WDvxbFvBtAj4g/DN6+MdnNFg7NFg7NPgNltPR6l5prKMxbPQPzX64R53hjsRwiv7cvA34pDPgURhO0d+fhrzSGfIILA1+GfRaZ9CDKWRwy0hn1EMxNNgK6LTpkBRQyeB5e1yXLRaKHYM7PLYcMjR42R35TGfkQyhq0GMtNQwoGHTYUslwikoGy6+kJVfR7LGhkhRQ6YVYyWD5dbTwFI0RUMmgNEVjBKTBfkhtIsYiwzbRD8kg1BSVFhkaVEe6oqfBfsQIKD2jN2wTNKiO4TEYd5GBNwjVJgw/kKTBIhgajNEmChssHxDeIPyZjKHBP8LQMRYZqEZv+AVo3DZh+PCl/M8QDA3GmKKGX2HDG4wR0NCgNEWhAsY1aPiEl4uMOoYB4xqEavSGfwxhoy+CocG4AeEbPQ32Q2oTMQLCG1QKGNcg20Q/Yqyij+gGk53BIAFX6AbT2Mpg+7sJr4BpbWQwxtXEjhtwgyk1JgHjGEzpHtzgloV+wBjvi76z3GgHjGVwy3K+L2Kj9JvacAF3Nc3Gi0ZrH/Eojd4MyaDjMahPjM8KDPmLbjA9gRuUFGIZTFNwg8KbcGAGu5fTcAHTP/SArZs+aMfgC//RA6Z0AT1FX7h6Dei3r4w515P5ej7x2lWGEEIIIYQQQgghhBBCCCGEEEIIic4zYfQjXQ4vLvwAAAAASUVORK5CYII=',
                src3: 'data:image/png;base64,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',
            },
            title: 'Design',
            paragraph:
                'Capacité à créer des designs web modernes et attrayants en utilisant les frameworks CSS Tailwind, ShadcnUI et FramerMotion.',
        },
        {
            images: {
                src1: 'data:image/png;base64,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', // Path to the first image (e.g., '../../../public/next-js-svgrepo-com.svg')
                src2: 'data:image/png;base64,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',
                src3: 'data:image/png;base64,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', // Path to the second image (e.g., '../../../public/react-svgrepo.svg')
            },
            title: 'Dévelopmment Back-End',
            paragraph:
                "Utilisation de Next JS 13 avec son systeme de server components permettant au site d'être plus performant en terme de vitesse, de sécuriter et de référencement notemment en  exploitant les Server Actions de Next.js pour optimiser les requêtes côté serveur et offrir une expérience utilisateur fluide.",
        },

        {
            images: {
                src1: 'data:image/png;base64,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', // Path to the first image (e.g., '../../../public/next-js-svgrepo-com.svg')
                src2: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAgVBMVEX////u6/XDt9ukk8iVgr7p5PL9/P6sm8xmSKNXNJtNJZZ+YrSIbrleOKFTLZljRKGaiMHx7vf49vyAZ7RJHpR4Xa9PKJdKIJXNxd/l4e9TLpllQ6VVMZrX0OWzptBzV6zg2uy8r9d3YKxyVKx+abBFFJPEutuOebrNwuGXgcGMdbp4svysAAAA00lEQVR4Ac1QVaLDIBCMw+Y1WJxu3HP/+z23Uv7bwVmdcZ4YrucHge+FFlNEKMQvl4RxIU2bSjOWh+9nUMSJGUxKYNXHpc51cTGMV4Sk+UzfMqYNY4HA2ujjFoqOGEaOgJR8FnN7dV8TEPJgqC1MVFcioNbAR89iJfTdiIg6m9x7s/TETBEBitywRDL6CK/8TgMsoSFesH71uFKEcr0x9ktMqy/5NwbZfmMMF2BC/hoNosei4dO/ubKldQy0FMrT844CptXCZBDzOM7CU44dUeQ8Gm8eIg3f9t1rXwAAAABJRU5ErkJggg==',
            },
            title: 'Headless CMS',
            paragraph:
                "Utilisation de Headless CMS tel que Swell pour la partie e-commerce permettant aux clients de possèder un store de produits et un dashboard administrateur complet, intuitif et simple d'utilisation.",
        },
    ];
    return (
        <section
            id='technologies'
            className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
        >
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                    Technologies
                </h2>
            </div>
            <ul className='group/list'>
                <li className='mb-12'>
                    <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                        <div className='z-10 sm:order-2 sm:col-span-8'>
                            <div
                                className='relative flex w-full  items-center justify-center overflow-hidden rounded-lg border bg-slate-800 p-10 md:shadow-xl'
                                ref={containerRef}
                            >
                                <div className='flex h-full w-full flex-col items-stretch justify-between gap-10'>
                                    <div className='flex flex-row items-center justify-between'>
                                        <Circle ref={div1Ref}>
                                            <Icons.nextJS className='h-6 w-6' />
                                        </Circle>
                                        <Circle ref={div5Ref}>
                                            <Icons.ShadcnUI className='h-6 w-6' />
                                        </Circle>
                                    </div>
                                    <div className='flex flex-row items-center justify-between'>
                                        <Circle ref={div2Ref}>
                                            <Icons.react className='h-6 w-6' />
                                        </Circle>
                                        <Circle
                                            ref={div4Ref}
                                            className='h-16 w-16 z-10'
                                        >
                                            <Icons.vercel className='h-6 w-6' />
                                        </Circle>
                                        <Circle ref={div6Ref}>
                                            <Icons.mongoDB className='h-6 w-6' />
                                        </Circle>
                                    </div>
                                    <div className='flex flex-row items-center justify-between'>
                                        <Circle ref={div3Ref}>
                                            <Icons.postgreSQL className='h-6 w-6' />
                                        </Circle>
                                        <Circle ref={div7Ref}>
                                            <Icons.tailwind className='h-6 w-6' />
                                        </Circle>
                                    </div>
                                </div>

                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div1Ref}
                                    toRef={div4Ref}
                                    curvature={-75}
                                    endYOffset={-10}
                                />
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div2Ref}
                                    toRef={div4Ref}
                                />
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div3Ref}
                                    toRef={div4Ref}
                                    curvature={75}
                                    endYOffset={10}
                                />
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div5Ref}
                                    toRef={div4Ref}
                                    curvature={-75}
                                    reverse
                                    endYOffset={-10}
                                />
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div6Ref}
                                    toRef={div4Ref}
                                    reverse
                                />
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={div7Ref}
                                    toRef={div4Ref}
                                    curvature={75}
                                    reverse
                                    endYOffset={10}
                                />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className='grid gap-8 grid-cols-1  '>
                {items.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0, y: 200 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                        viewport={{ once: true }}
                        key={index}
                        className='mx-8 md:mx-0 about-box dark:bg-transparent border rounded-xl p-4 bg-slate-700 hover:brightness-125 hover:ring-blue-700 hover:ring-2 shadow-lg shadow-slate-700 mb-4'
                    >
                        <div className='flex justify-around py-4'>
                            {/* Render images using map */}
                            {Object.keys(item.images).map(
                                (key, imageIndex) => (
                                    <Button
                                        key={key}
                                        className=' group bg-slate-700  hover:bg-slate-700'
                                    >
                                        <Image
                                            key={`${imageIndex}`} // Add a unique key for each image
                                            src={item.images[key]} // Access image using the key
                                            alt={`Image ${
                                                imageIndex + 1
                                            }`}
                                            width='40'
                                            height='40'
                                            className='w-10 h-10 object-contain block ' // Add margin for spacing
                                        />
                                    </Button>
                                )
                            )}
                        </div>
                        <div className='space-y-2 break-all'>
                            <h3 className='text-white text-xl font-semibold'>
                                {item.title}
                            </h3>
                            <p className=' leading-8 text-gray-lite text-xs '>
                                {item.paragraph}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;
