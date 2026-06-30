import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export const World = () => {
    const cubeRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (!cubeRef.current) return;

        cubeRef.current.rotation.y += delta * 0.5;
        cubeRef.current.rotation.x += delta * 0.2;

        cubeRef.current.position.y =
            Math.sin(state.clock.elapsedTime) * 0.25;
    });

    return (
        <>
            <ambientLight intensity={0.8} />

            <directionalLight
                position={[5, 5, 5]}
                intensity={3}
            />

            <pointLight
                position={[-5, 2, 5]}
                intensity={30}
                color="#00F5FF"
            />

            <mesh ref={cubeRef}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial
                    color="#00F5FF"
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>
        </>
    );
};