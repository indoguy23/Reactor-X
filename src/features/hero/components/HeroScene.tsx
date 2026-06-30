const HeroScene = () => {
    return (
        <div className="flex h-[550px] items-center justify-center">
            <div className="relative flex h-96 w-96 items-center justify-center">
                {/* Outer Ring */}
                <div className="absolute h-80 w-80 rounded-full border border-cyan-400/20" />

                {/* Glow */}
                <div className="absolute h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

                {/* Core */}
                <div className="h-28 w-28 rounded-full bg-cyan-400 shadow-[0_0_80px_rgba(34,211,238,0.8)]" />

                <p className="absolute -bottom-10 text-sm tracking-widest text-cyan-300">
                    REACTOR INITIALIZING
                </p>
            </div>
        </div>
    );
};

export default HeroScene;