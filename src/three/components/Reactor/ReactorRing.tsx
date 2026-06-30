import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

interface ReactorRingProps {
    rotation?: [number, number, number];
    speed?: number;
}

const ReactorRing = ({
    rotation = [0, 0, 0],
    speed = 1,
}: ReactorRingProps) => {
    const meshRef = useRef<Mesh>(null);

    useFrame((_, delta) => {
        if (!meshRef.current) return;

        meshRef.current.rotation.z += delta * speed;
    });

    return (
        <mesh
            ref={meshRef}
            rotation={rotation}
        >
            <torusGeometry args={[1.4, 0.03, 32, 128]} />

            <meshStandardMaterial
                color="#ffffff"
                emissive="#00F5FF"
                emissiveIntensity={4}
            />
        </mesh>
    );
};

export default ReactorRing;