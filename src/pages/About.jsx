import React from 'react'
import { FaGithub, FaSearch, FaUsers, FaCode } from 'react-icons/fa'

function About() {
    return (
        <div className='container mx-auto px-4 py-8'>
            {/* Hero Section */}
            <div className='hero bg-base-200 rounded-lg mb-8'>
                <div className='hero-content text-center'>
                    <div className='max-w-md'>
                        <FaGithub className='text-6xl text-primary mx-auto mb-4' />
                        <h1 className='text-5xl font-bold text-primary'>GitHub Finder</h1>
                        <p className='py-6 text-lg'>
                            Discover and explore GitHub users and repositories with ease
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8'>
                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body text-center'>
                        <FaSearch className='text-4xl text-primary mx-auto mb-4' />
                        <h2 className='card-title justify-center'>Search Users</h2>
                        <p>Find GitHub users by username and explore their profiles</p>
                    </div>
                </div>

                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body text-center'>
                        <FaUsers className='text-4xl text-secondary mx-auto mb-4' />
                        <h2 className='card-title justify-center'>User Profiles</h2>
                        <p>View detailed user information, followers, and following</p>
                    </div>
                </div>

                <div className='card bg-base-100 shadow-xl'>
                    <div className='card-body text-center'>
                        <FaCode className='text-4xl text-accent mx-auto mb-4' />
                        <h2 className='card-title justify-center'>Repositories</h2>
                        <p>Explore user repositories with languages and stats</p>
                    </div>
                </div>
            </div>

            {/* Technology Stack */}
            <div className='card bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <h2 className='card-title text-2xl mb-4'>Built With</h2>
                    <div className='flex flex-wrap gap-3'>
                        <div className='badge badge-primary badge-lg'>React</div>
                        <div className='badge badge-secondary badge-lg'>React Router</div>
                        <div className='badge badge-accent badge-lg'>Tailwind CSS</div>
                        <div className='badge badge-info badge-lg'>DaisyUI</div>
                        <div className='badge badge-success badge-lg'>GitHub API</div>
                        <div className='badge badge-warning badge-lg'>Vite</div>
                    </div>

                    <div className='mt-6'>
                        <h3 className='text-xl font-semibold mb-2'>Features:</h3>
                        <ul className='list-disc list-inside space-y-1 text-base-content'>
                            <li>Modern React application with hooks</li>
                            <li>Responsive design with Tailwind CSS</li>
                            <li>Beautiful UI components with DaisyUI</li>
                            <li>Real-time GitHub API integration</li>
                            <li>Client-side routing with React Router</li>
                            <li>Fast development with Vite</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
