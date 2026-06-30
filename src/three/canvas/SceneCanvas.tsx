import { Canvas } from "@react-three/fiber";
import World from "../world/World";

const SceneCanvas = () => {
    return (
        <Canvas
            camera={{
                position: [0, 0, 5],
                fov: 45,
            }}
            dpr={[1, 2]}
        >
            <color attach="background" args={["#060816"]} />

            <World />
        </Canvas>
    );
};

export default SceneCanvas;