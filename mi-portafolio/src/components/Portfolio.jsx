import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, User} from "lucide-react";
import {Reveal} from "../assets/animations/Rscroll";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";



// ---------- Diagrama de capas (elemento firma) ----------
function StackDiagram() {
  const layers = [
    { label: "Cliente", tech: "[React · JavaSript · Tailwind]", shift: "-translate-x-3" },
    { label: "Servidor / API", tech: "[Node.js · PHP · Laravel · REST · JAVA · Springboot]", shift: "translate-x-3" },
    { label: "Datos", tech: "[PostgreSQL · MySql]", shift: "-translate-x-3" },
  ];

  return (
    <div className="mt-20 flex max-w-2xl flex-col gap-[2px]">
      {layers.map((layer) => (
        <div
          key={layer.label}
          className={`flex items-center justify-between border border-stone-200 bg-stone-100 px-6 py-5 transition-all duration-300 ease-out hover:border-emerald-700 hover:bg-emerald-50 hover:${layer.shift}`}
        >
          <span className="font-mono-custom text-xs uppercase tracking-wider text-stone-500">
            {layer.label}
          </span>
          <span className="font-mono-custom text-sm text-stone-900">{layer.tech}</span>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {

  return (
    <div className="font-body min-h-screen bg-stone-50 text-stone-900">
      
      <Header/>

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-8 pb-24 pt-28">
        <div className="font-mono-custom mb-5 flex items-center gap-2 text-sm text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-700" />
         Available for new projects
        </div>

        <h1 className="font-display max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          [Kevin Morera], <br/> Jr.Web Developer.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-stone-500">
          I design and build web applications from front to back
           — clean interfaces on one end, solid APIs 
           and databases on the other.
        </p>

        <div className="mt-9 flex gap-4">
          <a
            href="#proyectos"
            className="font-mono-custom flex items-center gap-2 rounded-sm bg-stone-900 px-6 py-3 text-sm text-stone-50 transition-colors hover:bg-emerald-700"
          >
            Projects <ArrowRight size={14} />
          </a>
          <a
            href="../../public/Resume_Kevin_Morera_2026.pdf"
            className="font-mono-custom rounded-sm border border-stone-900 px-6 py-3 text-sm transition-colors hover:bg-stone-900 hover:text-stone-50"
          >
            Download CV
          </a>
        </div>

        <div id="stack">
          <StackDiagram />
        </div>
      </section>

      {/* SOBRE MI */}
       <About/>

      {/* PROYECTOS */}
       <Projects/>

      {/* CONTACTO */}
       <Contact/>

      <Footer/>
    </div>
  );
}
