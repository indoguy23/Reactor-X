import { Button } from "../../shared/components/ui/Button";
import { Container } from "../../shared/components/ui/Container";
import { Heading } from "../../shared/components/ui/Heading";


const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center">
            <Container>
                <div className="max-w-3xl">
                    <Heading
                        title="Aryan Dewangan"
                        subtitle="Backend Developer • React • TypeScript • Django • Three.js"
                    />

                    <p className="mt-8 text-lg leading-8 text-slate-300">
                        I build modern web applications and immersive digital experiences
                        with React, TypeScript, Django, PostgreSQL and Three.js.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button>
                            Explore Projects
                        </Button>

                        <Button variant="secondary">
                            Download Resume
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;