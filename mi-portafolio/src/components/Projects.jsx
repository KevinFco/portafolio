import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../assets/animations/Rscroll";

export default function Projects(){

    const projects = [
        {
          num: "01",
          title: "Ciclo Hidalgo",
          desc: "Responsive website built for the educational cycle Ciclo Hidalgo, improving accessibility and user experience for students and staff. I led the full development end-to-end.",
          tags: ["React.js", "Tailwind CSS", "PHP", "REST API", "MySQL"],
        },
        {
          num: "02",
          title: "Grove",
          desc: "Collaborative team project — a web platform for organizing and managing upcoming events, with calendar views, scheduling, and event details. I worked primarily on the backend and API.",
          tags: ["Laravel", "PHP", "REST API", "Tailwind CSS"],
        },
        {
          num: "03",
          title: "This Portfolio",
          desc: "This site — designed and built from scratch as a personal portfolio, with a custom architecture-inspired UI and smooth scroll interactions.",
          tags: ["React", "Tailwind CSS", "Vite"],
        },
      ];

    return(
        <section id="proyectos" className="border-t border-stone-200 px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold">Projects</h2>
            <span className="font-mono-custom text-sm text-stone-500">02</span>
          </div>

          <div className="flex flex-col">
            {projects.map((p) => (
              <Reveal key={p.num}>
                <div className="group grid grid-cols-1 gap-3 border-b border-stone-200 py-8 transition-all duration-200 last:border-none hover:pl-3 sm:grid-cols-[auto_1fr_auto] sm:gap-8">
                  <span className="font-mono-custom pt-1 text-sm text-stone-500">
                    {p.num}
                  </span>
                  <div>
                    <div className="font-display mb-2 text-xl font-semibold">
                      {p.title}
                    </div>
                    <p className="mb-3 max-w-xl text-stone-500">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono-custom rounded-full border border-emerald-700 px-3 py-0.5 text-xs text-emerald-700"
                        >
                          [{t}]
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="[link]"
                    className="font-mono-custom flex items-center gap-1 whitespace-nowrap border-b border-stone-900 pt-1 text-sm"
                  >
                    See <ArrowUpRight size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
};