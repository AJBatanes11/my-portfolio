import React from "react";
import AJLogo from '../assets/AJLogo.svg'

const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full h-32 bg-black dark:bg-white -z-10">
            <div class="max-w-full h-full flex align-middle flex-wrap items-center justify-center mx-auto px-20 p-4">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-base font-semibold whitespace-nowrap text-white dark:text-black">Designed and Built by AJ Batanes</span>
                    <div className="w-12 h-auto m-2">
                        <img src={AJLogo} alt={AJLogo}/>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Footer;