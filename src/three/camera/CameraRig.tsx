import { Float, OrbitControls } from "@react-three/drei";

interface CameraRigProps {
    children: React.ReactNode;
}

export const CameraRig = ({ children }: CameraRigProps) => {
    return (
        <>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
                autoRotate
                autoRotateSpeed={0.4}
            />

            <Float
                speed={2}
                rotationIntensity={0.2}
                floatIntensity={0.5}
            >
                {children}
            </Float>
        </>
    );
};