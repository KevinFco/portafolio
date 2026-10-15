import { Reveal } from "../assets/animations/Rscroll";

export default function About(){

    const skills = [
    { label: "Lenguages", value: "[JavaScript, PHP, Python, JAVA]" },
    { label: "Frontend", value: "[React, SASS, CSS3, Tailwind-CSS, HTML5]" },
    { label: "Backend", value: "[Laravel]" },
    { label: "Data Base", value: "[PostgreSQL, MySql, SQL Server]" },
    { label: "Tools", value: "[Docker, Git, NPM, JSON, Figma]" },
  ];

    return(
         <section className="border-t border-stone-200 px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold">About Me</h2>
            <span className="font-mono-custom text-sm text-stone-500">01</span>
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <Reveal className="space-y-4 text-stone-500">
              <p>
                 I'm a web developer based in Costa Rica with a degree in Informatica y Tecnología
                 Multimedia from{" "}
                <strong className="font-semibold text-stone-900">
                  Universidad de Costa Rica
                </strong>{" "}
                . I enjoy working across the full stack — building interfaces
                that feel intuitive and backends that hold up under real use.
              </p>
              <p>
                I led the end-to-end development of{" "}
                <strong className="font-semibold text-stone-900">
                  Ciclo Hidalgo
                </strong>
                , a responsive site built with React and Tailwind on the front end,
                PHP and REST APIs on the back end, and MySQL for data handling. I've
                also worked as a design & graphics developer for Wild Life Tours
                Costa Rica, which shaped how I think about visual identity and user
                experience in the products I build.
              </p>
            </Reveal>

            <Reveal className="flex flex-col">
              {skills.map((s) => (
                <div
                  key={s.label}
                  className="font-mono-custom flex justify-between border-b border-stone-200 py-3 text-sm"
                >
                  <span className="text-stone-500">{s.label}</span>
                  <span>{s.value}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    );
};