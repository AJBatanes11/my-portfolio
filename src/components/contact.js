import React from "react";
import { RichText } from './custom-snippets'

const Contact = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
                <div>
                    <RichText heading="Get in Touch" />
                </div>
                <div className="px-20">
                    <p className="text-black dark:text-white text-left my-10 font-semibold">
                        Drop me a line, and I'll be in touch as soon as possible.
                    </p>
                    <form className="flex flex-col gap-6">
                        <label className="text-black dark:text-white text-left font-semibold">Full Name</label>
                        <input
                            type="text" name="user_name" placeholder="Full Name"
                            className="h-12 min-h-12 bg-transparent text-black dark:text-white border-[1px] border-solid border-black dark:border-white rounded-sm py-2 px-4"
                        />
                        <label className="text-black dark:text-white text-left font-semibold">Email</label>
                        <input type="email" name="user_email" placeholder="Email"
                            className="h-12 min-h-12 bg-transparent text-black dark:text-white border-[1px] border-solid border-black dark:border-white rounded-sm py-2 px-4"
                        />
                        <label className="text-black dark:text-white text-left font-semibold">Message</label>
                        <textarea name="message" placeholder="How may I help you?"
                            className="h-12 min-h-48 bg-transparent text-black dark:text-white border-[1px] border-solid border-black dark:border-white rounded-sm py-2 px-4"
                        />
                        <input type="submit" value="Send Enquiry"
                            className="w-2/5 p-2 ml-auto bg-blue-900 border-2 border-blue-900 font-semibold text-white py-3 px-5 rounded hover:bg-black hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact