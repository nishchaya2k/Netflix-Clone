import React from 'react'
import netflix from "../images/netflix.png"

const NavBar = () => {
    return (

        <div className="w-screen flex flex-row justify-between pt-8 px-4" >
            <div className='h-20 w-40'>
                <img src={netflix} />
            </div>

            <div className='flex gap-4'>
                <div className={`w-28 h-10 flex items-center justify-center cursor-pointer border border-zinc-500 text-white text-md font-semibold max-sm:hidden `}>English</div>
                <div className='w-24 h-10 flex items-center justify-center cursor-pointer text-white text-md font-semibold rounded-md bg-red-600'>Sign Out</div>
            </div>

        </div>
    )
}

export default NavBar
