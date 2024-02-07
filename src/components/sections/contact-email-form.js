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
                    console.log('SUCCESS!');
                    form.current.reset();

                    document.getElementById('emailFormNotification').style.color = 'green';
                    document.getElementById('emailFormNotification').innerText = 'Email sent successfully!';

                    setTimeout(() => {
                        document.getElementById('emailFormNotification').innerText = '';
                        document.getElementById('emailFormNotification').style.color = '';
                    }, 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);

                    document.getElementById('emailFormNotification').style.color = 'red';
                    document.getElementById('emailFormNotification').innerText = 'Error sending email. Please try again later.';

                    setTimeout(() => {
                        document.getElementById('emailFormNotification').innerText = '';
                        document.getElementById('emailFormNotification').style.color = '';
                    }, 3000);
                },
            );
    };

    return (
        <>
            <p className="text-black dark:text-white text-left my-5 font-semibold">
                Drop me a line, and I'll be in touch as soon as possible.
            </p>
            <form ref={form} onSubmit={sendEmail}
                className="flex flex-col gap-6">
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
                <div className="flex">
                    <p id="emailFormNotification" className='m-auto font-semibold animate-pulse'></p>
                    <input type="submit" value="Send Enquiry"
                        className="w-2/5 py-3 px-5 ml-auto bg-blue-900 border-2 border-blue-900 font-semibold text-white rounded hover:bg-black hover:border-black dark:hover:bg-white dark:hover:border-white dark:hover:text-black"
                    />
                </div>
            </form>
        </>
    );
};

export default ContactEmailForm;