import React from 'react';
import { RichText, ContactEmailForm } from './custom-snippets';
import { Socials } from './custom-snippets';

const Contact = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] md gap-8">
                <div>
                    <RichText heading="Get in Touch" />
                    <Socials />
                </div>
                <div className="px-20">
                    <ContactEmailForm />
                </div>
            </div>
        </>
    );
}

export default Contact