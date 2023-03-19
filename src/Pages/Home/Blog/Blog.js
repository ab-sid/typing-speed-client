import React from 'react';
import { BsArrowRight } from "react-icons/bs";


const Blog = () => {
    return (
        <section className='mt-16'>
            <div className="blog-heading mb-16">
                <h1 className='text-[#141774] text-3xl text-center font-bold uppercase animate-bounce'>Bl<span className='text-[#FEC4DD]'>og</span></h1>
            </div>
            <div className="blog-content grid gap-6 grid-cols-3 w-[80%] mx-auto">
                <div className="card card-compact bg-base-100 border rounded">
                    <figure><img className='h-[230px]' src="https://media.istockphoto.com/id/1254993875/photo/cropped-image-of-business-woman-hand-working-laptop-computer-in-home-office.jpg?s=612x612&w=0&k=20&c=ggCyr3ORRwbNffyFmtrk86emXKJGqkKxJzsRlR_wVC0=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Saves You Time</h2>
                        <p>The most obvious reason to increase your typing speed is to save time. Let’s say you can type 25 WPM and you need to type 10 emails a day for work. This could take you around 80 minutes per day...</p>
                        <div className="card-actions flex items-center justify-end">
                            <a className='text-xl text-success border rounded-[50%] p-2 hover:bg-success hover:text-white' href="#"><BsArrowRight /></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 border rounded">
                    <figure><img className='h-[230px]' src="https://media.istockphoto.com/id/534314416/photo/woman-hand-with-computer-mouse.jpg?b=1&s=170667a&w=0&k=20&c=fIARXGLKqhHGf1lvbJXwFgEPZ16hlsZqv2jzowTvxJU=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Focus on Your Ideas</h2>
                        <p>Hunt and peck typing takes a lot more thought and attention than touch typing.In fact, touch typists don’t even need to think about where the keys are for a second. The muscle memory in their fingers helps them type with ease...</p>
                        <div className="card-actions flex items-center justify-end">
                            <a className='text-xl text-success border rounded-[50%] p-2 hover:bg-success hover:text-white' href="#"><BsArrowRight /></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 border rounded">
                    <figure><img className='h-[230px]' src="https://t4.ftcdn.net/jpg/03/64/90/91/360_F_364909172_kHwOVw3qQYJx0IuP07l4BeaWIEbFJLju.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Makes it Easier to Take Notes</h2>
                        <p>It’s becoming more and more common for students to take notes on computers in college and even high school. And it makes sense. A proficient typist can record down ideas much faster than she can write by hand...</p>
                        <div className="card-actions flex items-center justify-end">
                            <a className='text-xl text-success border rounded-[50%] p-2 hover:bg-success hover:text-white' href="#"><BsArrowRight /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;