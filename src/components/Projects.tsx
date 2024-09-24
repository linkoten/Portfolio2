import React from "react";
import Logo from "../../public/LogoVert.jpg";
import studioGhibliLogo from "../../public/studio-ghibli.png";
import Paleolitho from "../../public/Paleolitho.png";
import FullStack from "../../public/fullStackJuillet2024.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <ul className="group/list">
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <Link
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href="https://Paleolitho.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Build a Spotify Connected App (opens in a new tab)"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    Paleolitho{" "}
                    <span className="inline-block">
                      App
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                J&apos;ai créé Paleolitho en utilisant un stack technologique
                solide : React, Next.js, Prisma, Tailwind CSS et Shadcn UI. Ce
                projet m&apos;a permis de concevoir une expérience utilisateur
                fluide et intuitive, en combinant les performances de Next.js,
                la flexibilité de Prisma pour la gestion des données, et
                l&apos;esthétique soignée de Tailwind CSS et Shadcn UI.
                L&apos;intégration de Stripe a permis de sécuriser les
                paiements.
              </p>
            </div>
            <Image
              alt="Build a Spotify Connected App Newline course marketing card"
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              src={Paleolitho}
            />
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <Link
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href="https://maison-kerogan.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Build a Spotify Connected App (opens in a new tab)"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    Maison-Kerogan{" "}
                    <span className="inline-block">
                      App
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Maison Kerogan est une vitrine en ligne pour un restaurant à
                Quimper, développée avec React, Next.js, Tailwind CSS, Framer
                Motion et Hygraph. Ce projet met en valeur l&apos;identité
                visuelle du restaurant.{" "}
              </p>
            </div>
            <Image
              alt="Build a Spotify Connected App Newline course marketing card"
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              src={Logo}
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
