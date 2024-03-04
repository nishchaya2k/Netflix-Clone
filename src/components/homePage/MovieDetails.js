import React from 'react'
import LandingPageBg from '../../images/LandingPageBg.jpeg'
import NavBar from '../NavBar'
import texure from "../../images/texure.jpg"
import StarReviews from './StarReviews'
import playbutton from '../../images/playButton.png'

const MovieDetails = ({ movie, ranking }) => {
    return (
        <div className='w-full h-screen  flex-shrink-0' style={{ backgroundImage: `url(${movie.cover})`, backgroundSize: 'cover', backgroundPosition: 'center', touchAction: 'none' }}>

            <div className='w-full h-full flex max-md:flex-col items-center justify-around' style={{
                background: 'linear-gradient(to bottom right, rgba(0,0,0,10) 0%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,10) 100%)',
            }}>



                <div className='w-full md:w-[50%] flex flex-col gap-3 md:gap-8 mt-20 md:mt-32 max-md:px-10'>

                    <div className='text-sm md:text-lg md:-mb-9 ml-2 max-md:mt-20 text-transparent bg-clip-text font-bold antialiased' style={{ backgroundImage: `url(${texure})` }}>#{ranking} in India</div>

                    <div className='text-2xl md:text-7xl text-transparent bg-clip-text font-bold antialiased	' style={{ backgroundImage: `url(${texure})` }}>{movie.name}</div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <StarReviews stars={movie.rating} reviews={movie.count} />
                        <div className='text-white'><span className='text-lg font-bold text-red-600'>Duration: </span>{movie.time}</div>
                    </div>

                    <div className='text-white'>{movie.desc}</div>

                    <div className='text-white font-medium'><span className='text-lg font-bold text-red-600'>Staring:</span> {movie.starring}</div>

                    <div className='text-white font-medium'><span className='text-lg font-medium text-red-600'>Genres:</span> {movie.genres}</div>

                    <div className='text-white font-medium'><span className='text-lg font-medium text-red-600'>Tags:</span> {movie.tags}</div>

                    <button className='w-44 h-10 rounded-md bg-red-700 text-white'>Play Now</button>

                </div>

                <div className='w-80 h-28 flex justify-center max-sm:hidden'>
                    <button className='w-full h-28 flex justify-start md:justify-center items-center gap-10'>
                        <img className='w-12 md:w-28' src={playbutton} />
                        <div className='text-lg md:text-2xl text-white font-thin tracking-wider	'>
                            Watch Trailor
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MovieDetails
