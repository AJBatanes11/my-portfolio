import React, { useState, useEffect } from 'react';
import portrait from '../assets/portrait.jpg';

import Section from './sections/section';
import Portfolio from './portfolio';
import About from './about';
import Contact from './contact';
import { TextImage, Spacer } from './sections/custom-snippets'

function Home() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <>
            <div className='relative mb-52 md:mb-32'>
                <Section id="intro" theme="light" setTheme={setTheme}>
                    <TextImage header="Hi, I am AJ Batanes!"
                        subheader="with a robust background in the retail sector, showcasing proficiency in leveraging Shopify Liquid for crafting tailored and effective e-commerce solutions."
                        highlight="Experienced Web Developer"
                        portrait={portrait}
                    />
                </Section>
                <Spacer size="5rem" />
                <Section id="portfolio" theme="dark" setTheme={setTheme}>
                    <Portfolio />
                </Section>
                <Section id="about" theme="light" setTheme={setTheme}>
                    <About />
                </Section>
                <Section id="contact" theme="dark" setTheme={setTheme}>
                    <Contact />
                </Section>
            </div>
        </>
    );
}

export default Home;