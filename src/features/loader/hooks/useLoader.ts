import { useEffect, useState } from "react";
import { LOADER_MESSAGES } from "../constants/messages";

export const useLoader = () => {
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prev) => {
                if (prev >= LOADER_MESSAGES.length - 1) {
                    clearInterval(interval);
                    return prev;
                }

                return prev + 1;
            });
        }, 900);

        return () => clearInterval(interval);
    }, []);

    return {
        message: LOADER_MESSAGES[currentMessage],
        progress:
            ((currentMessage + 1) / LOADER_MESSAGES.length) * 100,
        completed: currentMessage === LOADER_MESSAGES.length - 1,
    };
};