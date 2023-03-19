import React, { useEffect, useRef, useState } from 'react';
import randomWords from 'random-words';
import { Link } from 'react-router-dom';

const TypingTest = () => {
    const numOfWords = 200;
    const seconds = 60;
    const [words, setWords] = useState([]);
    const [countDown, setCountDown] = useState(seconds);
    const [currInput, setCurrInput] = useState("");
    const [currWordIndex, setCurrWordIndex] = useState(0);
    const [currCharIndex, setCurrCharIndex] = useState(-1);
    const [currChar, setCurrChar] = useState("");
    const [correctWords, setCorrectWords] = useState(0)
    const [inCorrectWords, setInCorrectWords] = useState(0)
    const [status, setStatus] = useState('waiting')
    const textInput = useRef(null)
    useEffect(() => {
        setWords(wordsGenerate());
    }, [])
    useEffect(() => {
        if (status === 'started') {
            textInput.current.focus()
        }
    }, [status])

    const wordsGenerate = () => {
        return new Array(numOfWords).fill(null).map(() => randomWords())
    }
    const start = () => {
        if (status !== 'finished') {
            setWords(wordsGenerate())
            setCurrWordIndex(0)
            setCorrectWords(0)
            setInCorrectWords(0)
            setCurrCharIndex(-1)
            setCurrChar("")
        }
        if (status !== 'started') {
            setStatus('started')
            let interval = setInterval(() => {
                setCountDown((prevCountDown) => {
                    if (prevCountDown === 0) {
                        clearInterval(interval);
                        setStatus('finished')
                        setCurrInput("")
                        return seconds;
                    }
                    else {
                        return prevCountDown - 1
                    }

                })
            }, 1000)
        }
    }
    const handleInput = ({ keyCode, key }) => {
        if (keyCode === 32) {
            checkMatch()
            setCurrInput("")
            setCurrWordIndex(currWordIndex + 1)
            setCurrCharIndex(-1)
        }
        else if (keyCode === 8) {
            setCurrCharIndex(currCharIndex - 1)
            setCurrChar("")
        }
        else {
            setCurrCharIndex(currCharIndex + 1)
            setCurrChar(key)
        }
    }
    const checkMatch = () => {
        const wordToCompare = words[currWordIndex];
        const doesItMatch = wordToCompare === currInput.trim();
        if (doesItMatch) {
            setCorrectWords(correctWords + 1)
        }
        else {
            setInCorrectWords(inCorrectWords + 1)
        }
    }
    const getCharClass = (wordIdx, charIdx, char) => {
        if (wordIdx === currWordIndex && charIdx === currCharIndex && currChar && status !== 'finished') {
            if (char === currChar) {
                return 'bg-success';
            }
            else {
                return 'bg-warning';
            }
        }
        else if (wordIdx === currWordIndex && currCharIndex >= words[currWordIndex].length) {
            return 'bg-warning'
        }
        else {
            return "";
        }
    }
    return (

        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Typing Master</a>
                    </div>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">

                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to='/'><li>
                                    <a className="justify-between">
                                        Home
                                    </a>
                                </li></Link>
                                <li><a>Leader Board</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-4xl text-center font-bold mt-16 mb-8 text-success animate-bounce'>{countDown}</div>
            <div className="section w-2/3 mx-auto my-3">
                <div className='text-center'>
                    <input ref={textInput} disabled={status !== 'started'} onKeyDown={handleInput} value={currInput} onChange={(e) => setCurrInput(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full mb-2" />
                    <br />
                    <button onClick={start} className='btn btn-outline btn-success my-5 mb-[55px]'>Start</button>
                </div>
            </div>
            {
                status === 'started' && (
                    <div className="section w-2/3 bg-black text-white mx-auto border rounded-[10px] p-8 mb-4">
                        <div className="cardd">
                            <div className="card-content">
                                <div className="content text-[17px] text-justify">
                                    {
                                        words.map((word, i) => (
                                            <span key={i}>
                                                <span>
                                                    {
                                                        word.split("").map((char, idx) => (
                                                            <span className={getCharClass(i, idx, char)} key={idx}>{char}</span>
                                                        ))
                                                    }
                                                </span>
                                                <span> </span>
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                status === 'finished' && (
                    <section className='flex gap-8 justify-center my-8'>
                        <div>
                            <p className='text-2xl font-bold'>Words Per Minute: {correctWords}</p>
                        </div>
                        <div>
                            <p className='text-2xl font-bold'>Accuracy: {Math.round((correctWords / (correctWords + inCorrectWords)) * 100)} %</p>
                        </div>
                        <div>
                            <p className='text-2xl font-bold'>Wrong: {inCorrectWords}</p>
                        </div>
                    </section>
                )
            }
        </div>
    );
};

export default TypingTest;