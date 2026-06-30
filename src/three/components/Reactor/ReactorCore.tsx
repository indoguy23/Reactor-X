const ReactorCore = () => {
    return (
        <mesh>
            <sphereGeometry args={[0.7, 64, 64]} />

            <meshStandardMaterial
                color="#00F5FF"
                emissive="#00F5FF"
                emissiveIntensity={3}
                metalness={0.8}
                roughness={0.15}
            />
        </mesh>
    );
};

export default ReactorCore;