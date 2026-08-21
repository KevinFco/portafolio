
export default function Header(){

    return(
        <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-4xl items-center justify-between px-8 py-5">
            <div className="font-mono-custom text-sm">
                [Kevin Morera]<span className="text-emerald-700">.</span>dev
            </div>
            <div className="font-mono-custom hidden gap-8 text-xs text-stone-500 sm:flex">
                <a href="#stack" className="transition-colors hover:text-stone-900">
                stack
                </a>
                <a href="#proyectos" className="transition-colors hover:text-stone-900">
                projects
                </a>
                <a href="#contacto" className="transition-colors hover:text-stone-900">
                contact
                </a>
            </div>
            </nav>
        </header>

    );
}