import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function TextImage({ header, subheader, highlight, portrait }) {
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
};

export const Spacer = ({ size }) => {
    const spacingStyle = {
        paddingTop: size,
    };

    return <div className="bg-white dark:bg-black" style={spacingStyle}>
    </div>;
};

export const RichText = ({ heading, subheading }) => {
    return (
        <div className="justify-center text-center items-center align-middle">
            <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white my-10 mx-auto">{heading}</h1>
            <p className="text-lg font-semibold text-zinc-500 my-10 mx-auto">
                {subheading}
            </p>
        </div>
    )
};

export const ImageHighlight = ({ image, heading, text }) => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="relative overflow-hidden w-full h-auto cursor-pointer ">
                    <img src={image} alt={heading} className="w-full h-auto object-cover brightness-75 grayscale-[25%] hover:grayscale-0 hover:brightness-100 hover:scale-105 transition-all duration-500" />
                </div>
                <div className="flex flex-col text-left md:text-justify md:flex-row md:items-center justify-between w-full my-5">
                    <h4 className="text-4xl font-semibold text-black dark:text-white my-2">{heading}</h4>
                    <p className="text-base text-zinc-500 my-2 md:text-right md:pl-16">{text}</p>
                </div>
            </div>
        </div>
    );
};

export const LabeledIcon = ({ imgsrc, alt, label }) => {
    return (
        <div className="flex flex-col text-center items-center justify-center align-middle grayscale-[90%] hover:grayscale-0 transition-all duration-500">
            <img src={imgsrc}
                alt={alt}
                className="w-auto h-12 md:h-16" />
            <span className="text-zinc-500 dark:text-white">{label}</span>
        </div>
    );
};

export const DownloadButton = ({ file, downloadname, btnlabel }) => {
    return (
        <a href={file} download={downloadname} target="_blank" rel="noreferrer">
            <button
                className="font-semibold bg-blue-900 border-2 border-blue-900 text-white py-3 px-5 rounded hover:bg-black hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white">
                {btnlabel} <FileDownloadIcon />
            </button>
        </a>
    );
}

export const ContactEmailForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('my-portfolio', 'my-portfolio_template', form.current, {
                publicKey: 'IurLjq1akN5-v_yIt',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <p className="text-black dark:text-white text-left my-10 font-semibold">
                Drop me a line, and I'll be in touch as soon as possible.
            </p>
            <form ref={form} onSubmit={sendEmail}
                className="flex flex-col gap-6">
                <label className="text-black dark:text-white text-left font-semibold">Full Name</label>
                <input
                    type="text" name="user_name" placeholder="Full Name"
                    className="h-12 min-h-12 bg-transparent text-black dark:text-white border-[1px] border-solid border-zinc-500 rounded-sm py-2 px-4"
                />
                <label className="text-black dark:text-white text-left font-semibold">Contact Number</label>
                <input
                    type="tel" name="user_number" placeholder="Contact Number"
                    className="h-12 min-h-12 bg-transparent text-black dark:text-white border-[1px] border-solid border-zinc-500 rounded-sm py-2 px-4"
                />
                <label className="text-black dark:text-white text-left font-semibold">Email</label>
                <input type="email" name="user_email" placeholder="Email"
                    className="h-12 min-h-12 bg-transparent text-black dark:text-white border-[1px] border-solid border-zinc-500 rounded-sm py-2 px-4"
                />
                <label className="text-black dark:text-white text-left font-semibold">Message</label>
                <textarea name="message" placeholder="How may I help you?"
                    className="h-12 min-h-48 bg-transparent text-black dark:text-white border-[1px] border-solid border-zinc-500 rounded-sm py-2 px-4"
                />
                <input type="submit" value="Send Enquiry"
                    className="w-2/5 p-2 ml-auto bg-blue-900 border-2 border-blue-900 font-semibold text-white py-3 px-5 rounded hover:bg-black hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
                />
            </form>
        </>
    );
}

export const Socials = () => {
    return (
        <>
            <div className='text-zinc-500 flex flex-col justify-around px-10 py-5'>
                <a href="/">
                    <p className="text-lg"><FontAwesomeIcon icon={faEnvelope} size="2x" className="hover:text-white" /> anthonybatanes@gmail.com</p>
                </a>
                <a href="/" className="hover:text-white">
                    <p className="text-lg hover:text-white"><FontAwesomeIcon icon={faPhone} size="2x" className='hover:text-white' /> (+63)977 278 5442</p>
                </a>
            </div>
            <div className='text-zinc-500 flex justify-around px-20 py-5'>
                <a href="/">
                    <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-blue-500" />
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-orange-500" />
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-blue-500" />
                </a>
            </div>
        </>
    );
}