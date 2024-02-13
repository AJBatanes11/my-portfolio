import React, { useState } from 'react';
import AJLogo from '../assets/AJLogo.svg'
import { ReactSVG } from 'react-svg';

function Navigation() {

    const [hamburgerOpen, setHamburgerOpen] = useState(true);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
        
        if (hamburgerOpen) {
            document.querySelector('.nav-drawer').style.height = '100%';
        } else {
            document.querySelector('.nav-drawer').style.height = '0';
        }
    };

    return (
        <>
            <nav className="bg-white dark:bg-black fixed w-full z-30 top-0 start-0 shadow shadow-zinc-100 dark:shadow-zinc-800">
                <div className="max-w-full flex flex-wrap items-center justify-between mx-auto px-5 lg:px-20 p-4">
                    <a
                        href="#intro"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <div className="w-8 h-auto">
                            <ReactSVG src={AJLogo} alt="AJLogo" evalScripts="never" className="transition-colors duration-0 text-black dark:text-white" />
                        </div>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AJ Batanes</span>
                    </a>
                    <button onClick={toggleHamburger} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden focus:outline-none dark:text-white" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="#intro" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="md:hidden nav-drawer fixed overflow-hidden top-0 right-0 h-0 w-full z-20 pt-16">
                <div className="w-full bg-white dark:bg-black h-full">
                    <ul className="font-medium flex flex-col p-4">
                        <li className="">
                            <a href="#intro" onClick={toggleHamburger}
                                className="block m-auto py-2 px-3 font-semibold text-2xl text-black dark:text-white hover:text-zinc-500 dark:hover:text-zinc-500">
                                Home
                            </a>
                        </li>
                        <li className="">
                            <a href="#portfolio" onClick={toggleHamburger}
                                className="block m-auto py-2 px-3 font-semibold text-2xl text-black dark:text-white hover:text-zinc-500 dark:hover:text-zinc-500">
                                Portfolio
                            </a>
                        </li>
                        <li className="">
                            <a href="#about" onClick={toggleHamburger}
                                className="block m-auto py-2 px-3 font-semibold text-2xl text-black dark:text-white hover:text-zinc-500 dark:hover:text-zinc-500">
                                About
                            </a>
                        </li>
                        <li className="">
                            <a href="#contact" onClick={toggleHamburger}
                                className="block m-auto py-2 px-3 font-semibold text-2xl text-black dark:text-white hover:text-zinc-500 dark:hover:text-zinc-500">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
}

export default Navigation 