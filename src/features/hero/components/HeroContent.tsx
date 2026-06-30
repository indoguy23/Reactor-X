import HeroButtons from "./HeroButtons";

const HeroContent = () => {
    return (
        <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">
                    Available for Opportunities
                </span>
            </div>

            {/* Greeting */}
            <p className="mt-8 text-lg text-cyan-300">
                Hello, I'm
            </p>

            {/* Name */}
            <h1 className="mt-2 text-6xl font-black leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
                Aryan
                <br />
                Dewangan
            </h1>

            {/* Role */}
            <h2 className="mt-6 text-2xl font-semibold text-slate-300">
                Full Stack Developer
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                I build scalable backend systems and beautiful interactive
                web experiences using React, TypeScript, Django,
                PostgreSQL and Three.js.
            </p>

            {/* Buttons */}
            <HeroButtons />

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-6">
                <a
                    href="https://github.com/indoguy23"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 transition hover:text-cyan-300"
                >
                    GitHub
                </a>

                <a
                    href="#"
                    className="text-slate-400 transition hover:text-cyan-300"
                >
                    LinkedIn
                </a>

                <a
                    href="mailto:your@email.com"
                    className="text-slate-400 transition hover:text-cyan-300"
                >
                    Email
                </a>
            </div>
        </div>
    );
};

export default HeroContent;