import { CameraRig } from "../camera/CameraRig";
import ReactorCore from "../components/ReactorCore";
import { SceneEnvironment } from "../environment/SceneEnvironment";

export const World = () => {
    return (
        <>
            <ambientLight intensity={0.5} />

            <directionalLight
                position={[5, 5, 5]}
                intensity={2}
            />

            <SceneEnvironment />

            <CameraRig>
                <ReactorCore />
            </CameraRig>
        </>
    );
};