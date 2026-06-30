const Navbar = () => {
    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">

                <h2 className="text-xl font-bold tracking-widest text-white">
                    ARYAN.DEV
                </h2>

                <nav className="hidden items-center gap-8 text-slate-300 md:flex">
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Skills</a>
                    <a href="#">Contact</a>
                </nav>

            </div>
        </header>
    );
};

export default Navbar;