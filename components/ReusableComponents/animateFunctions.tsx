'use client'

import { useState } from "react";
import { useSpring } from "react-spring";

const BtnTap = () => {
    const [isTapped, setIsTapped] = useState(false);

    const props = useSpring({
        transform: isTapped ? 'scale(0.7)' : 'scale(1)',
        config: { tension: 300, friction: 10 },
    });

    const handleTap = () => {
        setIsTapped(true);
        setTimeout(() => setIsTapped(false), 200); // Adjust duration as needed
    };

    return {
        handleTap,
        props
    }
};

export {BtnTap}
