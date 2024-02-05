import React from "react";

function TextImage ({ header, subheader, highlight, portrait }) {
    return (
        <div className="flex-1  flex flex-col justify-center lg:max-w-6xl lg:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
                <div className="flex flex-col gap-8 justify-center">
                    <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                        {header}
                    </h1>
                    <p className="text-lg font-semibold text-zinc-400">
                    <span className="text-black dark:text-white">{highlight} </span>{subheader}
                    </p>
                </div>
                <div className="justify-center">
                    <div className="relative w-full h-[40rem]">
                        <img src={portrait} className="object-contain rounded-full" alt={portrait} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextImage