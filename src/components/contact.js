import React from 'react';
import { RichText } from './sections/custom-snippets';
import ContactEmailForm from './sections/contact-email-form';
import Socials from './sections/Socials';

const Contact = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 m-full max-w-screen-xl mx-auto">
                <div className="mx-5 md:mx-10">
                    <RichText heading="Get in Touch" />
                    <Socials />
                </div>
                <div className="mx-5 md:mx-10">
                    <ContactEmailForm />
                </div>
            </div>
        </>
    );
}

export default Contact