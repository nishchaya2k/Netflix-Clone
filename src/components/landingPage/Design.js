import React from 'react'

const Design = ({ image }) => {
    return (
        <div className='w-full sm:w-[45%] f-96 sm:h-[500px] border-white'>
            <div className='w-full h-full '>
                <img className='w-full h-full bg-transparent' src={image} />
            </div>
        </div>
    )
}

export default Design
