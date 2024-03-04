import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <div className='w-60 md:w-96 h-full flex-shrink-0 cursor-pointer border rounded-md border-zinc-700 overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-slate-800' style={{ backgroundImage: `url(${movie.cover})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>

            <div className='w-full h-full flex items-end justify-between md:gap-10 pl-4 pr-4 pb-4 text-white'
                style={{
                    background: 'linear-gradient(to bottom right, rgba(0,0,0,10) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,10) 100%)',
                }}>


                <div className='w-44'>
                    <div className='text-lg font-bold text-white'>{movie.name}</div>
                    <div className='text-md font-medium text-white'>{movie.time}</div>
                </div>
                <button className='w-24 h-8 text-lg rounded-md outline-none bg-red-700'>Play</button>
            </div>
        </div>
    )
}

export default MovieCard
