import type { ButtonProps } from "./Button.types";

const baseStyles =
    "rounded-xl px-8 py-4 font-semibold transition-all duration-300";

const variants = {
    primary:
        "bg-cyan-400 text-black hover:bg-cyan-300",

    secondary:
        "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
};

const Button = ({
    variant = "primary",
    className = "",
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;