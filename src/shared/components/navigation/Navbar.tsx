import { NAV_LINKS } from "./navigation.constants";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">

            <div
                className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-slate-900/55
          px-8
          py-4
          backdrop-blur-xl
        "
            >
                <h1 className="text-lg font-bold tracking-wide text-white">
                    Aryan Dewangan
                </h1>

                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.label}
                            link={link}
                        />
                    ))}
                </nav>

            </div>

        </header>
    );
};

export default Navbar;