import React from "react";

const RichText = ({ heading, subheading}) => {
    return (
        <div className="justify-center text-center align-middle">
            <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white my-10 mx-auto">{heading}</h1>
            <p className="text-lg font-semibold text-black dark:text-white my-10 mx-auto">{subheading}</p>
        </div>
    )
}

export default RichText;