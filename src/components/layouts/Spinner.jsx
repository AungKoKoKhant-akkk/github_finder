import React from 'react'
import spinnerGif from '../../assets/91.gif'

function Spinner() {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='text-center'>
                <img
                    src={spinnerGif}
                    alt="Loading..."
                    className='w-16 h-16 mx-auto mb-4'
                />
                <p className='text-lg text-base-content'>Loading...</p>
            </div>
        </div>
    )
}

export default Spinner
