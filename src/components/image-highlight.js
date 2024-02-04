import React from "react";

const ImageHighlight = ({ image, heading, text }) => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="relative overflow-hidden w-full h-auto cursor-pointer ">
                    <img src={image} alt={heading} className="w-full h-auto object-cover brightness-75 grayscale-[25%] hover:grayscale-0 hover:brightness-100 hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="flex flex-col text-left md:text-justify md:flex-row md:items-center justify-between w-full my-5">
                    <h4 className="text-4xl font-semibold text-black dark:text-white my-2">{ heading }</h4>
                    <p className="text-base text-zinc-500 my-2 md:text-right md:pl-16">{ text }</p>
                </div>
            </div>
        </div>
    );
}

export default ImageHighlight