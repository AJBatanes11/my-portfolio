import React from "react";
import { RichText } from './custom-snippets'

const Contact = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
                <div>
                    <RichText heading="Get in Touch" />
                </div>
                <div>
                    <p className="text-black dark:text-white">
                        Drop us a line, and we'll be in touch as soon as possible.
                    </p>
                    <form className="flex flex-col gap-6">
                        <label className="text-black dark:text-white text-left ">Full Name</label>
                        <input 
                        type="text" name="user_name" placeholder="Full Name" className="h-12 min-h-12 text-black dark:text-white border-1 border-white dark:border-yellow-500 rounded-sm py-2 px-4" />
                        <label className="text-black dark:text-white text-left ">Email</label>
                        <input type="email" name="user_email" placeholder="Email" />
                        <label className="text-black dark:text-white text-left ">Message</label>
                        <textarea name="message" placeholder="Message"/>
                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact