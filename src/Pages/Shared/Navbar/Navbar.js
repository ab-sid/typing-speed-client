import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 p-0">
            <div className="flex-1">
                <Link to='/'><a className="btn btn-ghost normal-case text-xl p-0">Rocket Type</a></Link>
            </div>
            <div className="flex-none gap-2">
                {/* <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div> */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="data:image/png;base64,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" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <Link to='/'>
                            <li>
                                <a className="justify-between">
                                    Home
                                </a>
                            </li>
                        </Link>
                        <Link to='/skill'><li><a>Typing Test</a></li></Link>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;