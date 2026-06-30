import { Reactor } from "../components/Reactor";

export const World = () => {
    return (
        <>
            <ambientLight intensity={0.6} />

            <directionalLight
                intensity={2}
                position={[5, 5, 5]}
            />

            <pointLight
                intensity={30}
                color="#00F5FF"
            />

            <Reactor />
        </>
    );
};