import type { ContainerProps } from "./Container.types";

const Container = ({
    children,
    className = "",
    ...props
}: ContainerProps) => {
    return (
        <div
            className={`mx-auto w-full max-w-7xl px-6 lg:px-12 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;