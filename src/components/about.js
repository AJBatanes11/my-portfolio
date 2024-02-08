import React from "react";
import { RichText, Spacer, LabeledIcon, DownloadButton } from './sections/custom-snippets';
import CV_AnthonyJamesBatanes from '../assets/CV_AnthonyJamesBatanes.pdf'

const About = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto my-20">
            <RichText heading="About" subheading="In 2022, my journey into the realm of computer programming began when I made the pivotal decision to transition to a Systems Development team. Fast-forward to the present day, and I have successfully evolved into a Web Developer, accumulating one year of valuable work experience in the dynamic and ever-evolving field." />
            <DownloadButton file={CV_AnthonyJamesBatanes} downloadname="CV_AnthonyJamesBatanes" btnlabel="Download CV" />
            <Spacer size="2rem" />
            <div className="grid grid-cols-3 md:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-20">
                <LabeledIcon
                    imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png"
                    alt="HTML5" label="HTML5"
                />
                <LabeledIcon
                    imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png"
                    alt="CSS" label="CSS"
                />
                <LabeledIcon
                    imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
                    alt="JavaScript" label="JavaScript"
                />
                <LabeledIcon
                    imgsrc="https://seeklogo.com/images/S/shopify-logo-1C711BCDE4-seeklogo.com.png"
                    alt="Shopify" label="Shopify"
                />
                <LabeledIcon
                    imgsrc="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"
                    alt="React JS" label="React JS"
                />
                <LabeledIcon
                    imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
                    alt="Tailwind" label="Tailwind"
                />
                <LabeledIcon
                    imgsrc="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
                    alt="Bootstrap" label="Bootstrap"
                />
                <LabeledIcon
                    imgsrc="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
                    alt="Git" label="Git"
                />
                <LabeledIcon
                    imgsrc="https://thumbs.dreamstime.com/b/seo-logo-magnifying-glass-search-engine-optimization-blue-yellow-red-green-color-98240334.jpg"
                    alt="SEO" label="SEO"
                />
            </div>
        </div>
    );
}

export default About