import { Float } from "@react-three/drei";

import ReactorCore from "./ReactorCore";
import ReactorRing from "./ReactorRing";

const Reactor = () => {
    return (
        <Float
            speed={2}
            rotationIntensity={0.35}
            floatIntensity={0.8}
        >
            <group>

                <ReactorCore />

                <ReactorRing />

                <ReactorRing
                    rotation={[Math.PI / 2, 0, 0]}
                    speed={-0.7}
                />

                <ReactorRing
                    rotation={[0, Math.PI / 2, Math.PI / 4]}
                    speed={0.4}
                />

            </group>
        </Float>
    );
};

export default Reactor;