import HeroContent from "./components/HeroContent";
import HeroScene from "./components/HeroScene";

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#060816]">

            <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">

                <HeroContent />

                <HeroScene />

            </div>

        </section>
    );
};

export default Hero;