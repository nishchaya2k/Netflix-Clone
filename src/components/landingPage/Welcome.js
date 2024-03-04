import React from 'react'
import LandingPageBg from "../../images/LandingPageBg.jpeg"
import { useNavigate } from "react-router-dom";
import NavBar from '../NavBar';

const Welcome = () => {

    const navigate = useNavigate();
    return (
        <div className='h-[90vh] w-full ' style={{ backgroundImage: `url(${LandingPageBg})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
            <div className='h-[90vh] w-full ' style={{
                background: 'linear-gradient(to bottom right, rgba(0,0,0,10) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,10) 100%)',
            }}>


                {/* Navbar */}

                <NavBar />

                {/* Welcome Banner */}

                <div className='flex flex-col items-center justify-center gap-4 mt-40 mx-2' >
                    <div className='text-white text-xl font-medium text-center'>Welcome back!</div>

                    <div className='text-white text-2xl sm:text-4xl font-extrabold text-center'>Unlimited movies, TV shows and more</div>

                    <div className='text-white text-lg sm:text-2xl font-medium text-center'>Watch anywhere. Cancel anytime. </div>

                    <div className='w-40 h-12 sm:w-60 sm:h-16 flex items-center justify-center cursor-pointer text-white text-lg sm:text-2xl font-semibold rounded-md bg-red-600 text-center transition-all duration-150 hover:bg-red-800' onClick={() => navigate("/HomePage")}>Explore Shows</div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
