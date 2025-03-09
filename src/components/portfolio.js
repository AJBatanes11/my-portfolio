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
import HillsideGarden from '../assets/HillsideGarden.jpg';
import ChakoLab from '../assets/ChakoLab.png';
import { Grid, Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/grid";

const Portfolio = ({ hoverStatusPortfolio }) => {

    const handleHoverStatus = (data) => {
        hoverStatusPortfolio(data);
    }

    return (
        <>
            <div className="max-w-screen-xl mx-auto w-full">
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
                </div>
                <Spacer size="2.5rem" />
                <h2 className="text-5xl xl:text-7xl font-normal text-black dark:text-white mx-auto text-center">More Work</h2>
                <Spacer size="2.5rem" />
                <Swiper
                    modules={[Grid, Navigation, Pagination, Autoplay, A11y]}
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                            grid: { rows: 1 }
                        },
                        768: {
                            slidesPerView: 2.2, // 2 columns
                            grid: { rows: 2, fill: "row" }
                        },
                        1024: {
                            slidesPerView: 3.2, // 2 columns
                            grid: { rows: 2, fill: "row" }
                        }
                    }}
                >
                    <SwiperSlide>
                        <ImageHighlight
                            hoverstatus={handleHoverStatus}
                            image={ChakoLab}
                            link="https://chakolabph.com/"
                            heading="Chako Lab"
                            text="Design, Website Revamp, Website Development, Custom Sections"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageHighlight
                            hoverstatus={handleHoverStatus}
                            image={TheCutBuddy}
                            link="https://thecutbuddy.com/"
                            heading="The Cut Buddy"
                            text="Design, Website Revamp, Website Development, Custom Sections"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageHighlight
                            hoverstatus={handleHoverStatus}
                            image={TheHoopGang}
                            link="https://thehoopgang.com/"
                            heading="The Hoop Gang"
                            text="Design, Website Revamp, Website Development, Custom Sections"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageHighlight
                            hoverstatus={handleHoverStatus}
                            image={HillsideGarden}
                            link="https://hillsidegarden.com.ph/"
                            heading="Hillside Garden"
                            text="Design, Website Revamp, Website Development, Custom Sections"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageHighlight
                            hoverstatus={handleHoverStatus}
                            image={HenkanCollagen}
                            link="https://henkancollagen.myshopify.com/"
                            heading="Henkan Collagen"
                            text="Design, Website Revamp, Website Development, Custom Sections"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageHighlight
                            hoverstatus={handleHoverStatus}
                            image={SoulAesthethix}
                            link="https://soulaesthetix.com.au/"
                            heading="Soul Aesthetix"
                            text="Design, Website Revamp, Website Development, Custom Sections"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageHighlight
                            hoverstatus={handleHoverStatus}
                            image={ArianaSpices}
                            link="https://arianaspices.com/"
                            heading="Ariana Spices"
                            text="Design, Website Revamp, Website Development, Custom Sections"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageHighlight
                            hoverstatus={handleHoverStatus}
                            image={LaunchtoProfitMedia}
                            link="https://www.launchtoprofitmedia.com/"
                            heading="Launch to Profit Media"
                            text="Design, Website Revamp, Website Development, Custom Sections"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageHighlight
                            hoverstatus={handleHoverStatus}
                            image={ModandNoble}
                            link="https://www.modandnoble.com/"
                            heading="Mod & Noble"
                            text="Design, End-to-end website creation, Website Development, Process Improvement & Consulting Services"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageHighlight
                            hoverstatus={handleHoverStatus}
                            image={Tiwflix}
                            link="https://ajbatanes11.github.io/tiwflix/"
                            heading="Tiwflix"
                            text="Personal Website, Design, End-to-end Development, API Integration"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Portfolio
