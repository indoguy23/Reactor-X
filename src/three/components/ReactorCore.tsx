import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

const ReactorCore = () => {
    const groupRef = useRef<Group>(null);
    const ringRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (!groupRef.current || !ringRef.current) return;

        // Floating motion
        groupRef.current.position.y =
            Math.sin(state.clock.elapsedTime) * 0.25;

        // Slow rotation
        groupRef.current.rotation.y += delta * 0.2;

        // Faster energy ring
        ringRef.current.rotation.x += delta;
        ringRef.current.rotation.z += delta * 0.5;
    });

    return (
        <group ref={groupRef}>
            {/* Core */}
            <mesh>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="#00F5FF"
                    emissive="#00F5FF"
                    emissiveIntensity={2}
                    metalness={1}
                    roughness={0.15}
                />
            </mesh>

            {/* Energy Ring */}
            <mesh ref={ringRef}>
                <torusGeometry args={[1.6, 0.05, 32, 128]} />
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#00F5FF"
                    emissiveIntensity={3}
                />
            </mesh>

            {/* Light */}
            <pointLight
                intensity={40}
                color="#00F5FF"
                distance={12}
            />
        </group>
    );
};

export default ReactorCore;