import { useFrame, useThree } from "@react-three/fiber";
import { Reactor } from "../components/Reactor";

const CameraRig = () => {
    const { camera } = useThree();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();

        camera.position.x = Math.sin(t * 0.2) * 0.3;
        camera.position.y = Math.cos(t * 0.15) * 0.2;

        camera.lookAt(0, 0, 0);
    });

    return null;
};

const World = () => {
    return (
        <>
            <CameraRig />

            {/* Ambient */}
            <ambientLight intensity={0.35} />

            {/* Main Light */}
            <directionalLight
                position={[5, 5, 5]}
                intensity={2}
                color="#ffffff"
            />

            {/* Cyan Glow */}
            <pointLight
                position={[0, 0, 0]}
                intensity={20}
                color="#00F5FF"
            />

            {/* Purple Rim Light */}
            <pointLight
                position={[-3, 2, -3]}
                intensity={8}
                color="#8B5CF6"
            />

            {/* Blue Fill Light */}
            <pointLight
                position={[3, -2, 2]}
                intensity={5}
                color="#38BDF8"
            />

            <Reactor />
        </>
    );
};

export default World;