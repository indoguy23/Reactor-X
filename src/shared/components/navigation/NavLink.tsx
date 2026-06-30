import type { NavLink as NavLinkType } from "./navigation.types";

interface Props {
    link: NavLinkType;
}

const NavLink = ({ link }: Props) => {
    return (
        <a
            href={link.href}
            className="
        relative
        text-sm
        font-medium
        text-slate-300
        transition-colors
        duration-300
        hover:text-cyan-300

        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-0
        after:bg-cyan-300
        after:transition-all
        after:duration-300

        hover:after:w-full
      "
        >
            {link.label}
        </a>
    );
};

export default NavLink;