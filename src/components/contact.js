import React from 'react';
import { RichText } from './sections/custom-snippets';
import ContactEmailForm from './sections/contact-email-form';
import Socials from './sections/Socials';

const Contact = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 m-full">
                <div className="max-w-screen-2xl mx-5 md:mx-20">
                    <RichText heading="Get in Touch" />
                    <Socials />
                </div>
                <div className="max-w-screen-2xl mx-5 md:mx-20">
                    <ContactEmailForm />
                </div>
            </div>
        </>
    );
}

export default Contact