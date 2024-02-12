import React from "react";
import { RichText, ImageHighlight, Spacer } from './sections/custom-snippets'
import Penshoppe from '../assets/Penshoppe.jpg'
import OXGN from '../assets/OXGN.jpg';
import Regatta from '../assets/Regatta.jpg';
import ForMe from '../assets/ForMe.jpg';
import Memo from '../assets/Memo.jpg';
import Bocu from '../assets/Bocu.jpg';

const Portfolio = ({ hoverStatusPortfolio }) => {

    const handleHoverStatus = (data) => {
        hoverStatusPortfolio(data);
    }

    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <RichText
                    heading="Recent Work"
                    subheading=""
                />
                <Spacer size="2.5rem" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 m-auto">
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={Penshoppe}
                        link="https://www.penshoppe.com/"
                        heading="Penshoppe"
                        text="Design, Website Development, Custom Software Integrations"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={OXGN}
                        link="https://www.oxgnfashion.com/"
                        heading="OXGN"
                        text="Full Website Revamp, Design, Website Development, Custom Software Integrations"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={Regatta}
                        link="http://regattalifestyle.com/"
                        heading="Regatta"
                        text="Design, Website Development, Custom Software Integrations"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={ForMe}
                        link="https://www.formeclothing.com/"
                        heading="ForMe"
                        text="Full Website Revamp, Design, Website Development, Custom Software Integrations"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={Memo}
                        link="https://memofashion.com/"
                        heading="Memo"
                        text="Shop By Collection Revamp, Design, Website Development, Custom Software Integrations"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={Bocu}
                        link="https://boculifestyle.com/"
                        heading="Bocu"
                        text="Design, Website Development, Custom Software Integrations"
                    />
                </div>
            </div>
        </>
    );
}

export default Portfolio
