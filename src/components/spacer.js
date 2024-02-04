import React from "react";

const Spacer = ({ size }) => {
    const spacingStyle = {
        paddingTop: size,
    };

    return <div className="bg-white dark:bg-black" style={spacingStyle}>
    </div>;
};

export default Spacer;
