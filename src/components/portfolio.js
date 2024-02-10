import React, { useState } from "react";
import { RichText, ImageHighlight } from './sections/custom-snippets'
import Penshoppe from '../assets/Penshoppe.jpg'
import OXGN from '../assets/OXGN.jpg';
import Regatta from '../assets/Regatta.jpg';
import ForMe from '../assets/ForMe.jpg';
import Memo from '../assets/Memo.jpg';
import Bocu from '../assets/Bocu.jpg';

const Portfolio = ({hoverStatusPortfolio}) => {

    const handleHoverStatus = (data) => {
        hoverStatusPortfolio(data);
    }

    return (
        <>
            <RichText heading="Portfolio" subheading="Notable Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-screen-xl mx-auto my-20">
                <ImageHighlight hoverstatus={handleHoverStatus} image={Penshoppe} heading="Penshoppe" text="Design, Website Development, Custom Software Integrations" />
                <ImageHighlight hoverstatus={handleHoverStatus} image={OXGN} heading="OXGN" text="Full Website Revamp, Design, Website Development, Custom Software Integrations" />
                <ImageHighlight hoverstatus={handleHoverStatus} image={Regatta} heading="Regatta" text="Design, Website Development, Custom Software Integrations" />
                <ImageHighlight hoverstatus={handleHoverStatus} image={ForMe} heading="ForMe" text="Full Website Revamp, Design, Website Development, Custom Software Integrations" />
                <ImageHighlight hoverstatus={handleHoverStatus} image={Memo} heading="Memo" text="Shop By Collection Revamp, Design, Website Development, Custom Software Integrations" />
                <ImageHighlight hoverstatus={handleHoverStatus} image={Bocu} heading="Bocu" text="Design, Website Development, Custom Software Integrations" />
            </div>
        </>
    );
}

export default Portfolio
