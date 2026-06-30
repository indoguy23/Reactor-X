import HeroButtons from "./HeroButtons";

const HeroContent = () => {
    return (
        <div className="max-w-2xl">

            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                👋 Available for Opportunities
            </div>

            <p className="mt-8 text-lg text-cyan-300">
                Hello, I'm
            </p>

            <h1 className="mt-2 text-6xl font-black leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
                Aryan
                <br />
                Dewangan
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-slate-300">
                Full Stack Developer
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                I build scalable backend systems and modern web applications
                with React, TypeScript, Django, PostgreSQL and Three.js.
            </p>

            <HeroButtons />

        </div>
    );
};

export default HeroContent;