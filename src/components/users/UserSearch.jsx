import React, { useContext } from 'react'
import { useState } from 'react';
import GithubContext from '../../context/github/GithubContext';


function UserSearch() {

    const [text, setText] = useState('');

    const { users, searchUsers, clearUsers } = useContext(GithubContext);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alert('Please enter something');
        } else {
            // Search functionality goes here
            searchUsers(text);
            setText('');
        }
    }





    return (
        <div className='max-w-6xl mx-auto px-6 mb-12'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 items-end'>
                <div className='lg:col-span-3'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-lg font-semibold text-amber-300'>Search GitHub Users</span>
                            </label>
                            <div className='relative flex'>
                                <input
                                    type="text"
                                    placeholder="Enter username or keyword..."
                                    className='input input-bordered input-lg flex-1 text-gray-500 bg-white border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 shadow-sm rounded-r-none'
                                    value={text}
                                    onChange={handleChange}
                                />
                                <button
                                    type='submit'
                                    className='btn btn-primary btn-lg rounded-l-none border-l-0 hover:bg-blue-600 transition-colors duration-300 whitespace-nowrap'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {users.length > 0 && (
                    <div className='lg:col-span-1'>
                        <button
                            type='button'
                            className='btn btn-outline btn-lg w-full border-2 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-300'
                            onClick={clearUsers}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Clear
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default UserSearch
