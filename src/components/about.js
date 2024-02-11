import React from "react";
import { RichText, LabeledIcon, DownloadButton, Spacer } from './sections/custom-snippets';
import CV_AnthonyJamesBatanes from '../assets/CV_AnthonyJamesBatanes.pdf'

const About = () => {

    return (
        <div className="w-full max-w-screen-xl mx-auto my-20 justify-center text-center">
            <RichText
                heading="About Me"
                subheading="With 2 years of experience, I specialize in creating visually appealing and user-friendly websites. From responsive designs to optimized performance, I strive for excellence in every project. Let's collaborate and build something awesome together!With 2 years of experience, I specialize in creating visually appealing and user-friendly websites. From responsive designs to optimized performance, I strive for excellence in every project."
            />
            <Spacer size="2px" />
            <RichText
                heading=""
                subheading="Proficiency in:"
            />
            <div className="grid grid-cols-3 md:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-20">
                <LabeledIcon
                    imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png"
                    label="HTML5"
                />
                <LabeledIcon
                    imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png"
                    label="CSS"
                />
                <LabeledIcon
                    imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
                    label="JavaScript"
                />
                <LabeledIcon
                    imgsrc="https://seeklogo.com/images/S/shopify-logo-1C711BCDE4-seeklogo.com.png"
                    label="Shopify"
                />
                <LabeledIcon
                    imgsrc="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"
                    label="React JS"
                />
                <LabeledIcon
                    imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
                    label="Tailwind"
                />
                <LabeledIcon
                    imgsrc="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
                    label="Bootstrap"
                />
                <LabeledIcon
                    imgsrc="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
                    label="Git"
                />
                <LabeledIcon
                    imgsrc="https://thumbs.dreamstime.com/b/seo-logo-magnifying-glass-search-engine-optimization-blue-yellow-red-green-color-98240334.jpg"
                    label="SEO"
                />
            </div>
            <Spacer size="2px" />
            <DownloadButton file={CV_AnthonyJamesBatanes}
                downloadname="CV_AnthonyJamesBatanes"
                btnlabel="Download CV"
            />
        </div>
    );
}

export default About