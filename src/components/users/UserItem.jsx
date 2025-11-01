import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaUser } from 'react-icons/fa'

function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className='card shadow-xl hover:shadow-2xl transition-all duration-300 bg-base-100 border border-base-300 hover:border-primary'>
            <div className='card-body p-6'>
                {/* Avatar and Username Section */}
                <div className='flex flex-col items-center text-center'>
                    <div className="avatar mb-4">
                        <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img
                                src={avatar_url}
                                alt={`${login}'s avatar`}
                                className="rounded-full object-cover"
                            />
                        </div>
                    </div>

                    <div className='flex items-center gap-2 mb-4'>
                        <FaUser className='text-primary text-sm' />
                        <h2 className='card-title text-xl font-bold text-base-content truncate max-w-[150px]'>
                            {login}
                        </h2>
                    </div>
                </div>

                {/* Action Button */}
                <div className='card-actions justify-center'>
                    <Link
                        to={`/user/${login}`}
                        className='btn btn-primary btn-sm gap-2 hover:btn-secondary transition-colors duration-200'
                    >
                        <FaEye className='text-sm' />
                        View Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserItem
