import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export function TextImage({ header, subheader, highlight, portrait }) {
    return (
        <div className="flex-1  flex flex-col justify-center lg:max-w-6xl lg:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
                <div className="flex flex-col gap-8 justify-center">
                    <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                        {header}
                    </h1>
                    <p className="text-lg font-normal">
                        <span className="font-semibold">
                            {highlight}
                        </span> {subheader}
                    </p>
                </div>
                <div className="justify-center">
                    <div className="relative w-full h-[40rem]">
                        <img
                            src={portrait}
                            className="object-contain rounded-full"
                            alt={portrait}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Spacer = ({ size }) => {
    const spacingStyle = {
        paddingTop: size,
    };

    return <div className="bg-white dark:bg-black" style={spacingStyle}></div>;
};

export const RichText = ({ heading, subheading }) => {
    return (
        <div className="richtext">
            <div className="justify-center text-center items-center align-middle">
                <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white my-10 mx-auto">
                    {heading}
                </h1>
                <p className="text-lg font-normal text-black dark:white my-10 mx-auto">
                    {subheading}
                </p>
            </div>
        </div>
    )
};

export const MouseCursor = ({ isHovered }) => {

    const [mousePosition, setMousePosition] = useState({
        x: null,
        y: null
    });
    const [cursorVariant, setCursorVariant] = useState("default");

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
    }, []);

    useEffect(() => {
        if (isHovered) {
            setCursorVariant("text");
            document.querySelector(".cursor-text").style.color = "black";
            document.querySelector(".cursor-text").style.display = "flex";

        } else {
            setCursorVariant("default");
            document.querySelector(".cursor-text").style.display = "none";
        }
    }, [isHovered]);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 100,
            width: 100,
            x: mousePosition.x - 80,
            y: mousePosition.y - 80,
            backgroundColor: "white",
        }
    }

    return (
        <div className="mouse-cursor">
            <motion.div
                className="cursor pointer-events-none hidden overflow-hidden text-wrap text-center sm:block z-40 rounded-full w-2 h-2 bg-black dark:bg-white text-white dark:text-black fixed transition-none duration-0 animate-none"
                variants={variants}
                animate={cursorVariant}>
                <p className="cursor-text m-auto p-5 text-xs font-semibold flex justify-center items-center flex-wrap h-full">
                    VIEW WEBSITE
                </p>
            </motion.div>
        </div>
    );
};

export const ImageHighlight = ({ image, link, heading, text, hoverstatus }) => {

    const handleMouseEnter = () => {
        hoverstatus(true);
    };

    const handleMouseLeave = () => {
        hoverstatus(false);
    };

    return (
        <div className="image-highlight">
            <div className="flex flex-col">
                <a
                    href={link}
                    alt={heading}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div
                        className="relative overflow-hidden w-full h-auto cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={image}
                            alt={heading}
                            className="w-full h-auto object-cover brightness-75 grayscale-[25%] hover:grayscale-0 hover:brightness-100 hover:scale-105 transition-all duration-500"
                        />
                    </div>
                </a>
                <div className="flex flex-col text-left md:text-justify md:flex-row md:items-center justify-between w-full my-5">
                    <h4 className="text-4xl font-semibold text-black dark:text-white my-2">
                        {heading}
                    </h4>
                    <p className="text-base text-zinc-500 my-2 md:text-right md:pl-16">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const LabeledIcon = ({ imgsrc, label }) => {
    return (
        <div className="flex flex-col text-center items-center justify-center align-middle">
            <img
                src={imgsrc}
                alt={label}
                className="w-auto h-12 md:h-16"
            />
            <span className="text-zinc-500 dark:text-white">
                {label}
            </span>
        </div>
    );
};

export const DownloadButton = ({ file, downloadname, btnlabel }) => {
    return (
        <a
            href={file}
            download={downloadname}
            alt={btnlabel}
            target="_blank"
            rel="noopener noreferrer"
        >
            <button
                className="m-auto font-semibold bg-blue-500 border-2 border-blue-500 text-white py-3 px-5 rounded-full hover:bg-black hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white">
                {btnlabel} <FileDownloadIcon />
            </button>
        </a>
    );
};