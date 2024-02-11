import React, { useState, useEffect } from 'react';
import portrait from '../assets/portrait.jpg';

import Section from './sections/section';
import Portfolio from './portfolio';
import About from './about';
import Contact from './contact';
import { TextImage } from './sections/custom-snippets'
import { MouseCursor } from './sections/custom-snippets';

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
            <MouseCursor isHovered={hoverStatusHome} />
            <div className='relative mb-52 md:mb-32'>
                <Section id="intro" theme="light" setTheme={setTheme}>
                    <TextImage header="Hi, I am AJ Batanes!"
                        subheader="with extensive experience in the retail industry, demonstrating expertise in utilizing Shopify Liquid to create customized and impactful e-commerce solutions."
                        highlight="Skilled web developer"
                        portrait={portrait}
                    />
                </Section>
                <Section id="portfolio" theme="dark"  setTheme={setTheme}>
                    <Portfolio hoverStatusPortfolio={handleHoverStatus} />
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