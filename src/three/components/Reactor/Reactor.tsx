import { Float } from "@react-three/drei";

import ReactorCore from "./ReactorCore";
import ReactorRing from "./ReactorRing";

const Reactor = () => {
    return (
        <Float
            speed={2}
            rotationIntensity={0.3}
            floatIntensity={0.7}
        >
            <group>
                <ReactorCore />

                <ReactorRing />

                <ReactorRing
                    rotation={[Math.PI / 2, 0, 0]}
                    speed={-1}
                />
            </group>
        </Float>
    );
};

export default Reactor;