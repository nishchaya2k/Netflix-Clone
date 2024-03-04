import React from 'react'

const Description = ({ heading, description }) => {
    return (
        <div className='w-full sm:w-[45%] h-full sm:h-[500px] flex flex-col justify-center items-center sm:items-start gap-6 bg-black px-4 pt-4'>
            <div className='text-center mx-auto text-white text-2xl md:text-5xl font-bold'>{heading}</div>
            <div className='text-center text-white text-lg md:text-2xl font-medium'>{description}</div>
        </div>
    )
}

export default Description
