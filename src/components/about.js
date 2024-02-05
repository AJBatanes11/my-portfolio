import React from "react";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { RichText ,Spacer } from './custom-snippets'

const About = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-20">
            <RichText heading="About" subheading="In 2022, my journey into the realm of computer programming began when I made the pivotal decision to transition to a Systems Development team. Fast-forward to the present day, and I have successfully evolved into a Web Developer, accumulating one year of valuable work experience in the dynamic and ever-evolving field." />
            <button className="bg-blue-900 border-2 border-blue-900 text-white py-3 px-5 rounded hover:bg-black hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white">
                Download CV <FileDownloadIcon />
            </button>
            <Spacer size="2rem"/>
            {/* <div className="justify-center text-center align-middle">
                <h4 className="text-2xl xl:text-3xl font-bold text-black dark:text-white my-10 mx-auto">Skills</h4>
            </div> */}
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-screen-lg mx-auto my-20">
            <div className="flex flex-col text-center items-center justify-center align-middle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" 
                alt="HTML5" 
                className="w-auto h-20"/>
                    <span class="text-zinc-500 dark:text-white">HTML5</span>
                </div>
                <div className="flex flex-col text-center items-center justify-center align-middle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" className="w-auto h-20"/>
                    <span class="text-zinc-500 dark:text-white">HTML5</span>
                </div>
                <div className="flex flex-col text-center items-center justify-center align-middle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" className="w-auto h-20"/>
                    <span class="text-zinc-500 dark:text-white">HTML5</span>
                </div>
                <div className="flex flex-col text-center items-center justify-center align-middle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" className="w-auto h-20"/>
                    <span class="text-zinc-500 dark:text-white">HTML5</span>
                </div>
                <div className="flex flex-col text-center items-center justify-center align-middle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" className="w-auto h-20"/>
                    <span class="text-zinc-500 dark:text-white">HTML5</span>
                </div>
                <div className="flex flex-col text-center items-center justify-center align-middle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" className="w-auto h-20"/>
                    <span class="text-zinc-500 dark:text-white">HTML5</span>
                </div>
                <div className="flex flex-col text-center items-center justify-center align-middle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" className="w-auto h-20"/>
                    <span class="text-zinc-500 dark:text-white">HTML5</span>
                </div>
                <div className="flex flex-col text-center items-center justify-center align-middle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" className="w-auto h-20"/>
                    <span class="text-zinc-500 dark:text-white">HTML5</span>
                </div>
                <div className="flex flex-col text-center items-center justify-center align-middle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" className="w-auto h-20"/>
                    <span class="text-zinc-500 dark:text-white">HTML5</span>
                </div>
            </div>
        </div>
    );
}

export default About