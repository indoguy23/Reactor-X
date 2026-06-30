const ReactorCore = () => {
    return (
        <mesh>
            <sphereGeometry args={[0.8, 64, 64]} />

            <meshStandardMaterial
                color="#00F5FF"
                emissive="#00F5FF"
                emissiveIntensity={2}
                metalness={1}
                roughness={0.15}
            />
        </mesh>
    );
};

export default ReactorCore;