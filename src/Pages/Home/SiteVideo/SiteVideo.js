import React, { useEffect } from 'react';
import './SiteVideo.css';
import { AiFillPlayCircle } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SiteVideo = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section data-aos="flip-right" className='bg-img mt-2 flex items-center justify-center'>
            <div className='hidden md:block first-part w-[60%] py-24'>
                <h3 className='text-[#ca020b] mb-4 tracking-widest font-semibold text-[24px]'>Demo</h3>
                <h2 className='text-white mb-4 text-[40px] font-bold'>Watch & Practice</h2>
                <p className='w-[68%] text-[17px] mb-8 text-white'>This practice lesson consists of short paragraphs about interesting subjects. Find fun keyboard typing practice—and learn something new! Our paragraph practice is great typing practice for writing essays, reports, emails, and more for school and work.</p>
                <a className='btn btn-primary rounded-none border-none bg-[#ca020b] w-[120px]' href="/">GEAR UP</a>
            </div>
            <div className='second-part w-[40%] flex items-center'>
                <h3 className='text-[#fff] text-[17px] font-bold'>Play Video</h3>
                <a href="https://www.youtube.com/watch?v=f1R8ZrQWezo" target='_blank'><p className='text-6xl -ml-2 text-[#fff] animate-ping'><AiFillPlayCircle></AiFillPlayCircle></p></a>
            </div>
        </section>
    );
};

export default SiteVideo;