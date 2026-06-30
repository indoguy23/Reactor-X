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
    const ringRef = useRef<Mesh>(null);

    useFrame((_, delta) => {
        if (!ringRef.current) return;

        ringRef.current.rotation.z += delta * speed;
    });

    return (
        <mesh
            ref={ringRef}
            rotation={rotation}
        >
            <torusGeometry args={[1.5, 0.03, 32, 128]} />

            <meshStandardMaterial
                color="white"
                emissive="#00F5FF"
                emissiveIntensity={3}
            />
        </mesh>
    );
};

export default ReactorRing;