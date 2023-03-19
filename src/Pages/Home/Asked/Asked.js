import React from 'react';
import { FcPlus } from 'react-icons/fc';

const Asked = () => {
    return (
        <div className='w-[50%] mx-auto'>
            <div>
                <h1 className='text-[#fec4dd] text-3xl font-bold text-center my-8 mt-16 mb-12 uppercase animate-bounce'>Asked <span className='text-[#141774]'>Question</span></h1>
            </div>
            <div tabIndex={0} className="mb-4 collapse border border-base-300 bg-base-100 rounded-tl-[40px] rounded-br-[40px]">
                <div className="collapse-title text-[#141774] text-xl text-left font-medium flex items-center">
                    <FcPlus className='mr-4' />What is the secret of fast typing?
                </div>
                <div className="collapse-content bg-[#FEC4DD]">
                    <p className='text-white text-[17px] text-justify'>Limit your hand and finger movement only to what is necessary to press a specific key. Keep your hands and fingers close to the base position. This improves typing speed and reduces stress on the hands. Pay attention to ring fingers and little fingers, since they are considerably underdeveloped.</p>
                </div>
            </div>
            <div tabIndex={1} className="mb-4 collapse border border-base-300 bg-base-100 rounded-tl-[40px] rounded-br-[40px]">
                <div className="collapse-title text-[#141774] text-xl text-left font-medium flex items-center">
                    <FcPlus className='mr-4' />How to get to 100 wpm?
                </div>
                <div className="collapse-content bg-[#FEC4DD]">
                    <h2 className='text-2xl text-white text-center'>7 tips for improving your typing speed</h2><br />
                    <div className='text-center text-white'><p>1. Test Your Current Typing Speed</p>
                        <p>2. Make your Goal Progress, not Perfection</p>
                        <p>3. Learn to Touch Type</p>
                        <p>4. Learn the Proper Typing Home Row Position</p>
                        <p>5. Practice Proper Posture</p>
                        <p>6. Don't Look at Your Keyboard</p>
                        <p>7. Practice Typing Regularly</p></div>
                </div>
            </div>
            <div tabIndex={2} className="mb-4 collapse border border-base-300 bg-base-100 rounded-tl-[40px] rounded-br-[40px]">
                <div className="collapse-title text-[#141774] text-xl text-left font-medium flex items-center">
                    <FcPlus className='mr-4' />Which is best typing technique?
                </div>
                <div className="collapse-content bg-[#FEC4DD]">
                    <p className='text-white text-[17px] text-justify'>Touch typing is undeniably the most effective typing technique. It is the professional method taught in schools, ideally starting from a young age. Once this method is mastered, the gaze is fixed on the screen, never on the keys. Instead, it relies on muscle memory to help your fingers “remember” the key positions.</p>
                </div>
            </div>
            <div tabIndex={3} className="mb-4 collapse border border-base-300 bg-base-100 rounded-tl-[40px] rounded-br-[40px]">
                <div className="collapse-title text-[#141774] text-xl text-left font-medium flex items-center">
                    <FcPlus className='mr-4' /> Who is the world's fastest typist?

                </div>
                <div className="collapse-content bg-[#FEC4DD]">
                    <p className='text-white text-[17px] text-justify'>is an Indian typist and writer, best known for achieving the Guinness World Record for the world's fastest typist. Her peak speed was 212 WPM (this record has been beaten on multiple occasions with the Qwerty layout) on a Dvorak keyboard.</p>
                </div>
            </div>
            <div tabIndex={4} className="mb-4 collapse border border-base-300 bg-base-100 rounded-tl-[40px] rounded-br-[40px]">
                <div className="collapse-title text-[#141774] text-xl text-left font-medium flex items-center">
                    <FcPlus className='mr-4' /> What is a good typing speed?

                </div>
                <div className="collapse-content bg-[#FEC4DD]">
                    <p className='text-white text-[17px] text-justify'>Thus, you should aim for a typing speed of at least 40 WPM to keep up a standard level of efficiency at work. For some professions, the standards are higher. To land a job as a personal or executive assistant, you might be required to type at least 60 words per minute.</p>
                </div>
            </div>
        </div >
    );
};

export default Asked;