import React from 'react'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
        language
    } = repo

    return (
        <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-700 transition-colors duration-200'>
            <div className='card-body p-4'>
                <div className='flex justify-between items-start'>
                    <div className='flex-1'>
                        <h3 className='mb-2 text-xl font-semibold'>
                            <a
                                href={html_url}
                                target='_blank'
                                rel='noreferrer'
                                className='hover:text-primary transition-colors duration-200'
                            >
                                <FaLink className='inline mr-1' /> {name}
                            </a>
                        </h3>
                        <p className='mb-3 text-gray-300'>{description}</p>
                    </div>
                </div>

                <div className='flex flex-wrap gap-2 justify-between items-center'>
                    <div className='flex flex-wrap gap-4 text-sm'>
                        <div className='badge badge-info badge-sm'>
                            <FaEye className='mr-1' />
                            {watchers_count}
                        </div>
                        <div className='badge badge-success badge-sm'>
                            <FaStar className='mr-1' />
                            {stargazers_count}
                        </div>
                        <div className='badge badge-error badge-sm'>
                            <FaInfo className='mr-1' />
                            {open_issues}
                        </div>
                        <div className='badge badge-warning badge-sm'>
                            <FaUtensils className='mr-1' />
                            {forks}
                        </div>
                    </div>

                    {language && (
                        <div className='badge badge-primary badge-sm'>
                            {language}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RepoItem