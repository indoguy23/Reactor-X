import { Reactor } from "../components/Reactor";

const World = () => {
    return (
        <>
            <ambientLight intensity={0.6} />

            <directionalLight
                position={[5, 5, 5]}
                intensity={2}
            />

            <pointLight
                position={[0, 0, 0]}
                intensity={25}
                color="#00F5FF"
            />

            <Reactor />
        </>
    );
};

export default World;