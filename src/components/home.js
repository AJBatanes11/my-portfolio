import React, { useState, useEffect } from 'react';
import portrait from '../assets/portrait.jpg';
import Section from './sections/section';
import { TextImage, MouseCursor, RichText } from './sections/custom-snippets'
import Portfolio from './portfolio';
import About from './about';
import Contact from './contact';

function Home() {
    const [theme, setTheme] = useState("dark");
    const [hoverStatusHome, setHoverStatusHome] = useState('');

    const handleHoverStatus = (data) => {
        setHoverStatusHome(data);
    }

    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <>
            <MouseCursor hoverstatus={hoverStatusHome} />
            <div className='relative mb-52 md:mb-32 pt-10 md:py-0'>
                <Section id="intro" theme="light" setTheme={setTheme}>
                    <TextImage header="Hi, I am AJ Batanes!"
                        subheader="with a strong retail background, delivering high-quality digital solutions that drive brand success. Skilled in creating scalable, user-centric web experiences and optimizing workflows for sustained growth."
                        highlight="Web developer"
                        portrait={portrait}
                    />
                </Section>
                <Section id="intro" theme="dark" setTheme={setTheme}>
                    <RichText
                        heading="Stay tuned!"
                        subheading="I'm currently working on my new website. Exciting updates are coming soon."
                    />
                </Section>
                {/* <Section id="portfolio" theme="dark"  setTheme={setTheme}>
                    <Portfolio hoverStatusPortfolio={handleHoverStatus} />
                </Section>
                <Section id="about" theme="light" setTheme={setTheme}>
                    <About />
                </Section>
                <Section id="contact" theme="dark" setTheme={setTheme}>
                    <Contact />
                </Section> */}
            </div>
        </>
    );
}

export default Home;