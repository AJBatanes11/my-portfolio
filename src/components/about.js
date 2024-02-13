import React from "react";
import { RichText, LabeledIcon, DownloadButton, Spacer } from './sections/custom-snippets';
import CV_AnthonyJamesBatanes from '../assets/CV_AnthonyJamesBatanes.pdf'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import JavaScript from '../assets/JavaScript.png'
import Shopify from '../assets/Shopify.png'
import ReactJS from '../assets/React.png'
import Tailwind from '../assets/Tailwind.png'
import BootStrap from '../assets/BootStrap.png'
import Github from '../assets/GitHub.png'
import SEO from '../assets/SEO.png'

const About = () => {

    return (
        <div className="w-full max-w-screen-xl mx-auto justify-center text-center">
            <RichText
                heading="About Me"
                subheading="I specialize in crafting visually appealing and user-friendly websites. From designing responsive layouts to optimizing performance, I am dedicated to achieving excellence in every project."
            />
            <RichText
                heading=""
                subheading="Proficient in:"
            />
            <div className="grid grid-cols-3 md:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-10">
                <LabeledIcon
                    imgsrc={HTML}
                    label="HTML5"
                />
                <LabeledIcon
                    imgsrc={CSS}
                    label="CSS"
                />
                <LabeledIcon
                    imgsrc={JavaScript}
                    label="JavaScript"
                />
                <LabeledIcon
                    imgsrc={Shopify}
                    label="Shopify"
                />
                <LabeledIcon
                    imgsrc={ReactJS}
                    label="React JS"
                />
                <LabeledIcon
                    imgsrc={Github}
                    label="Git"
                />
                <LabeledIcon
                    imgsrc={BootStrap}
                    label="Bootstrap"
                />
                <LabeledIcon
                    imgsrc={Tailwind}
                    label="Tailwind"
                />
                <LabeledIcon
                    imgsrc={SEO}
                    label="SEO"
                />
            </div>
            <Spacer size="2.5rem" />
            <DownloadButton file={CV_AnthonyJamesBatanes}
                downloadname="CV_AnthonyJamesBatanes"
                btnlabel="Download CV"
            />
        </div>
    );
}

export default About