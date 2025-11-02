import React from 'react'
import RepoItem from './RepoItem'

function RepoList({ repos }) {
    return (
        <div className='rounded-lg shadow-md bg-base-100 p-6'>
            <h2 className='text-2xl font-bold mb-4 text-primary'>
                Latest Repositories
            </h2>
            <div className='space-y-3'>
                {repos.map((repo) => (
                    <RepoItem key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    )
}

export default RepoList