import { useLoader } from "../hooks/useLoader";

const Loader = () => {
    const { message, progress } = useLoader();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-cyan-400">
            <h1 className="mb-8 text-5xl font-bold tracking-widest">
                REACTOR-X
            </h1>

            <p className="mb-8 text-lg">{message}</p>

            <div className="h-2 w-80 overflow-hidden rounded-full bg-zinc-800">
                <div
                    className="h-full bg-cyan-400 transition-all duration-700"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <p className="mt-4 text-sm">{Math.round(progress)}%</p>
        </div>
    );
};

export default Loader;