import React, { useState } from 'react'
import { IoIosStarOutline, IoIosStar, IoIosStarHalf, IoIosArrowDown } from "react-icons/io";

const StarReviews = ({ stars, reviews }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let value = index + 0.5  //starts from, 0+0.5, 0.5+0.5, 1+0.5, ... , used for halfStars
        // debugger;
        return (
            <span key={index}>
                {
                    stars >= index + 1 ? (
                        <IoIosStar className='text-xl text-red-600' />
                    ) :
                        stars >= value ? (
                            <IoIosStarHalf className='text-xl text-red-600' />
                        ) :
                            (
                                <IoIosStarOutline className='text-xl text-red-600' />
                            )
                }
            </span>
        )
    })

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        <div>
            <div className='flex items-center w-max'>
                {ratingStar}
                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='relative'>
                    {
                        isHovering && (
                            <div className='absolute w-max p-2 border border-gray-300 flex mt-5 rounded-md bg-white z-50'>
                                {ratingStar}
                                <p className='ml-2 text-black text-[15px] font-semibold z-50'>{stars} out of 5</p>
                            </div>
                        )
                    }
                    <IoIosArrowDown className={`ml-1 cursor-pointer text-gray-400 ${isHovering && 'text-gray-950'}`} />
                </div>
                <p className='m-0 ml-3 text-[#007185] text-sm'>{reviews} ratings</p>
            </div>
        </div>
    )
}

export default StarReviews
