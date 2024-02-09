import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MouseCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    });

    const variants = {
        default: {
            x: mousePosition.x - 15,
            y: mousePosition.y + 5
        }
    };

    return (
        <motion.div className="cursor z-40 rounded-full w-2 h-2 bg-black dark:bg-white fixed top-0 left-0 tran transition-none duration-0 animate-none" variants={variants} animate="default" />
    );
};

export default MouseCursor;