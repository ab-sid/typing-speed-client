import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/typer.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <nav className="main-nav">
                <div className="navbar-logo">
                    <h1 className='text-white font-bold'>Typing Master</h1>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="avater">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#23259f] rounded-box w-52">
                            <li><a className="justify-between">Leader Board</a></li>
                            <Link to='/skill'><li><a>Skill Test</a></li></Link>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="hero-content flex flex-col text-white">
                <h1 className='text-5xl font-bold'>Practice Makes a man Perfect</h1>
                {/* <p>Here is some content about my website</p> */}
                {/* <img className='w-1/2' src={img} alt="" /> */}
                <p className='w-[39%] text-justify my-9'>You Can Learn to Type Very Quickly and Easily Here. Exercises with letters, numbers, punctuation marks and sample texts. Courses: Typing with characters, Typing with sample text, Typing with own text.</p>
                <a href="#" className="btn animate-bounce">Learn More</a>
            </div>
        </section>
    );
};

export default Hero;