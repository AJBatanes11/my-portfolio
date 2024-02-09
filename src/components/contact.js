import React from 'react';
import { RichText } from './sections/custom-snippets';
import ContactEmailForm from './sections/contact-email-form';
import Socials from './sections/socials';

const Contact = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 m-full max-w-screen-xl mx-auto w-full">
                <div className="">
                    <RichText heading="Get in Touch" />
                    <Socials />
                </div>
                <div className="">
                    <ContactEmailForm />
                </div>
            </div>
        </>
    );
}

export default Contact