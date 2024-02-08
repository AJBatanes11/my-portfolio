import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
                    document.querySelector('.submit-form-button').value = "Please wait...";
                    document.querySelector('.contact-form-container').classList.add('animate-pulse');
                    setTimeout(() => {
                        document.querySelector('.contact-form-container').classList.add('hidden');
                        document.querySelector('.success-message').style.display = 'block';
                        form.current.reset();
                    }, 1500);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div className="contact-form-container">
                <p className="text-black dark:text-white text-left my-5 font-semibold">
                    Drop me a line, and I'll be in touch as soon as possible.
                </p>
                <form ref={form} onSubmit={sendEmail}
                    className="flex flex-col gap-5">
                    <label className="text-black dark:text-white text-left font-semibold">Full Name</label>
                    <input
                        type="text" name="user_name" placeholder="Full Name" required
                        className="h-12 min-h-12 bg-transparent text-black dark:text-white border-[1px] border-solid border-zinc-500 rounded-sm py-2 px-4"
                    />
                    <label className="text-black dark:text-white text-left font-semibold">Contact Number</label>
                    <input
                        type="tel" name="user_number" placeholder="Contact Number" required
                        className="h-12 min-h-12 bg-transparent text-black dark:text-white border-[1px] border-solid border-zinc-500 rounded-sm py-2 px-4"
                    />
                    <label className="text-black dark:text-white text-left font-semibold">Email</label>
                    <input type="email" name="user_email" placeholder="Email" required
                        className="h-12 min-h-12 bg-transparent text-black dark:text-white border-[1px] border-solid border-zinc-500 rounded-sm py-2 px-4"
                    />
                    <label className="text-black dark:text-white text-left font-semibold">Message</label>
                    <textarea name="message" placeholder="How may I help you?" required
                        className="h-12 min-h-48 bg-transparent text-black dark:text-white border-[1px] border-solid border-zinc-500 rounded-sm py-2 px-4"
                    />
                    <input type="submit" value="Send Enquiry"
                        className="submit-form-button w-3/5 md:w-2/5 py-3 px-5 ml-auto bg-blue-900 border-2 border-blue-900 font-semibold text-white rounded hover:bg-black hover:border-black dark:hover:bg-white dark:hover:border-white dark:hover:text-black"
                    />
                </form>
            </div>
            <div className="success-message hidden p-10 h-full bg-transparent border-[1px] border-white text-center">
                <div className="text-black dark:text-white gap-5 flex-col flex h-full justify-center align-middle items-center">
                    <div className="text-4xl md:text-5xl font-semibold">
                        Thank you!
                    </div>
                    <div className="">
                        I've received your message. I will contact you soon.
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactEmailForm;