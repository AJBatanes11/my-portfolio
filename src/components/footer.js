import React from "react";
import AJLogo from '../assets/AJLogo.svg'

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full h-52 md:h-32 bg-black dark:bg-white -z-10">
            <div className="max-w-full h-full flex align-middle flex-wrap items-center justify-center mx-auto px-20 p-4">
                <a href="#intro" className="flex flex-col md:flex-row justify-center items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-12 h-auto m-2">
                        <img src={AJLogo} alt={AJLogo} />
                    </div>
                    <span className="self-center text-base font-semibold whitespace-nowrap text-white dark:text-black">
                        Designed and Built by AJ Batanes ©{new Date().getFullYear()}
                    </span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;