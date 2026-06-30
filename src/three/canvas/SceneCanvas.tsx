import { Canvas } from "@react-three/fiber";
import { World } from "../world/World";

const SceneCanvas = () => {
    return (
        <Canvas
            shadows
            camera={{
                position: [0, 0, 8],
                fov: 45,
            }}
        >
            <color attach="background" args={["#060816"]} />

            <World />
        </Canvas>
    );
};

export default SceneCanvas;