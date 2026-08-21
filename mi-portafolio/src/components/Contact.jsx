import { Mail, User } from "lucide-react";
import { Reveal } from "../assets/animations/Rscroll";

export default function Contact(){

    return(
        <section id="contacto" className="border-t border-stone-200 px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold">Contact</h2>
            <span className="font-mono-custom text-sm text-stone-500">03</span>
          </div>

          <Reveal>
            <h3 className="font-display mb-8 max-w-md text-4xl font-semibold sm:text-5xl">
              ¿Need Help whit a project? Let´s Talk.
            </h3>
            <div className="font-mono-custom flex flex-wrap gap-7 text-sm">
              <a
                href="mailto:kevinmorera66@gmail.com"
                className="flex items-center gap-2 border-b border-stone-200 pb-1 transition-colors hover:border-emerald-700 hover:text-emerald-700"
              >
                <Mail size={14} /> kevinmorera66@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-morera-92389b409/"
                className="flex items-center gap-2 border-b border-stone-200 pb-1 transition-colors hover:border-emerald-700 hover:text-emerald-700"
              >
                <User size={14} /> LinkedIn
              </a>
              <a
                href="https://github.com/KevinFco"
                className="flex items-center gap-2 border-b border-stone-200 pb-1 transition-colors hover:border-emerald-700 hover:text-emerald-700"
              >
                <User size={14} /> GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    );
};