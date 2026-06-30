import ReactorCore from "../components/ReactorCore";

export const World = () => {
    return (
        <>
            <ambientLight intensity={0.5} />

            <directionalLight
                position={[5, 5, 5]}
                intensity={2}
            />

            <ReactorCore />
        </>
    );
};