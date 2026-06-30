import type { HeadingProps } from "./Heading.types";

const Heading = ({
    title,
    subtitle,
    className = "",
    ...props
}: HeadingProps) => {
    return (
        <div className={className} {...props}>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                {title}
            </h1>

            {subtitle && (
                <p className="mt-4 max-w-2xl text-lg text-slate-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default Heading;