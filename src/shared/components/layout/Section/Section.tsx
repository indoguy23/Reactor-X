import type { SectionProps } from "./Section.types";

const Section = ({
    children,
    className = "",
    ...props
}: SectionProps) => {
    return (
        <section
            className={`relative min-h-screen ${className}`}
            {...props}
        >
            {children}
        </section>
    );
};

export default Section;