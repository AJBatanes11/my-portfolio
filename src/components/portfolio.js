import React from "react";
import { RichText, ImageHighlight, Spacer } from './sections/custom-snippets'
import Penshoppe from '../assets/Penshoppe.jpg'
import OXGN from '../assets/OXGN.jpg';
import Regatta from '../assets/Regatta.jpg';
import ForMe from '../assets/ForMe.jpg';
import Memo from '../assets/Memo.jpg';
import Bocu from '../assets/Bocu.jpg';
import ModandNoble from '../assets/ModandNoble.jpg';
import Tiwflix from '../assets/Tiwflix.png';
import SoulAesthethix from '../assets/SoulAesthetix.png';
import LaunchtoProfitMedia from '../assets/LaunchtoProfitMedia.jpg';
import ArianaSpices from '../assets/ArianaSpices.jpg';
import TheCutBuddy from '../assets/TheCutBuddy.jpg';
import TheHoopGang from '../assets/TheHoopGang.jpg';
import HenkanCollagen from '../assets/HenkanCollagen.jpg';

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
                        image={ForMe}
                        link="https://www.formeclothing.com/"
                        heading="ForMe"
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
                        text="Full Website Revamp, Design, Website Development, Custom Software Integrations"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={SoulAesthethix}
                        link="https://soulaesthetix.com.au/"
                        heading="SoulAesthetix"
                        text="Design, Website Revamp, Website Development, Custom Sections"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={TheHoopGang}
                        link="https://thehoopgang.com/"
                        heading="The Hoop Gang"
                        text="Design, Website Revamp, Website Development, Custom Sections"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={TheCutBuddy}
                        link="https://thecutbuddy.com/"
                        heading="The Cut Buddy"
                        text="Design, Website Revamp, Website Development, Custom Sections"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={ArianaSpices}
                        link="https://arianaspices.com/"
                        heading="Ariana Spices"
                        text="Design, Website Revamp, Website Development, Custom Sections"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={HenkanCollagen}
                        link="https://henkancollagen.myshopify.com/"
                        heading="Henkan Collagen"
                        text="Design, Website Revamp, Website Development, Custom Sections"
                    />
                    {/* <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={ModandNoble}
                        link="https://www.modandnoble.com/"
                        heading="Mod & Noble"
                        text="Design, End-to-end website creation, Website Development, Process Improvement & Consulting Services"
                    /> */}
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={LaunchtoProfitMedia}
                        link="https://www.launchtoprofitmedia.com/"
                        heading="Launch to Profit Media"
                        text="Design, Website Revamp, Website Development, Custom Sections"
                    />
                    <ImageHighlight
                        hoverstatus={handleHoverStatus}
                        image={Tiwflix}
                        link="https://ajbatanes11.github.io/tiwflix/"
                        heading="Tiwflix"
                        text="Personal Website, Design, End-to-end Development, API Integration"
                    />
                </div>
            </div>
        </>
    );
}

export default Portfolio
