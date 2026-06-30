const ReactorCore = () => {
    return (
        <>
            {/* Outer Glow */}
            <mesh>
                <sphereGeometry args={[0.72, 64, 64]} />
                <meshBasicMaterial
                    color="#00F5FF"
                    transparent
                    opacity={0.08}
                />
            </mesh>

            {/* Main Core */}
            <mesh>
                <sphereGeometry args={[0.55, 64, 64]} />
                <meshStandardMaterial
                    color="#E6FDFF"
                    emissive="#00F5FF"
                    emissiveIntensity={3}
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>

            {/* Inner Core */}
            <mesh>
                <sphereGeometry args={[0.22, 64, 64]} />
                <meshStandardMaterial
                    color="#FFFFFF"
                    emissive="#FFFFFF"
                    emissiveIntensity={8}
                />
            </mesh>
        </>
    );
};

export default ReactorCore;