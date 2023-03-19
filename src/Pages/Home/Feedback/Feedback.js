import React, { useEffect } from 'react';
import './Feedback.css';
import img from '../../../assets/Review_Slider_Img/1.jpg';
import img1 from '../../../assets/Review_Slider_Img/2.jpg';
import img2 from '../../../assets/Review_Slider_Img/3.jpg';
import img3 from '../../../assets/Review_Slider_Img/pic4.jpg';
import img4 from '../../../assets/Review_Slider_Img/up-arrow.png';
import img5 from '../../../assets/Review_Slider_Img/down-arrow.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Feedback = () => {
    useEffect(() => {
        function slide() {
            const slidee = document.getElementById('slide');
            const upArrowe = document.getElementById('upArrow');
            const downArrowe = document.getElementById('downArrow');
            let x = 0;

            upArrowe.onclick = function () {
                if (x > -900) {
                    x -= 300;
                    slidee.style.top = x + "px";
                }
            }
            downArrowe.onclick = function () {
                if (x < 0) {
                    x += 300;
                    slidee.style.top = x + "px";
                }
            }
        }

        slide();
    }, []);
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="flip-right" className='client-hero mt-[15px]'>
            <div className="testimonial-heading">
                <h1 className="heading text-[#fec4dd] text-3xl text-center font-bold uppercase mt-8 animate-bounce">What our <span className='text-[#141774]'>Competitor say</span></h1>
            </div>
            <div className="review-box mt-16">
                <div id="slide">
                    <div className="review-card">
                        <div className="profile">
                            <img src={img} alt="" />
                            <div>
                                <h3>Masud Khan</h3>
                            </div>
                        </div>
                        <p>Its really a nice platform for practicing typing and also increase typing speed. Everyone can join here to grow your skill</p>
                    </div>
                    <div className="review-card">
                        <div className="profile">
                            <img src={img1} alt="" />
                            <div>
                                <h3>Jhonson</h3>
                            </div>
                        </div>
                        <p>I really their appreciate good works. I am a regular competitor in their site. Now i am confidance with my typing.</p>
                    </div>
                    <div className="review-card">
                        <div className="profile">
                            <img src={img2} alt="" />
                            <div>
                                <h3>Nuri Khanom</h3>
                            </div>
                        </div>
                        <p>Everyday I come here and started my practice. In 7 days i improve my typing skill. Thank ypu Typing Master</p>
                    </div>
                    <div className="review-card">
                        <div className="profile">
                            <img src={img3} alt="" />
                            <div>
                                <h3>Fernandez</h3>
                            </div>
                        </div>
                        <p>Nothing to say just awesome application for grow your typing spedd. Keep it up Typing Master.</p>
                    </div>
                </div>
                <div className='sidebar'>
                    <img src={img4} alt="" id="upArrow" />
                    <img src={img5} alt="" id="downArrow" />
                </div>
            </div>
        </div>
    );
};

export default Feedback;