import React, { useEffect, useRef, useState } from 'react'
import MovieCard from '../MovieCard'
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Categories = ({ movies, Heading }) => {
    const carouselContainer = useRef();
    const [showNavigation, setShowNavigation] = useState(false);

    useEffect(() => {
        const container = carouselContainer.current;
        const scrollWidth = container.scrollWidth;
        const containerWidth = container.offsetWidth;


        if (scrollWidth > containerWidth) {
            // Show navigation arrows
            setShowNavigation(true);
        } else {
            // Hide navigation arrows
            setShowNavigation(false);
        }
    })

    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount = dir === "left" ?
            container.scrollLeft - (container.offsetWidth + 500) :
            container.scrollLeft + (container.offsetWidth + 500)
        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }
    return (
        <div>
            <section className='w-full h-[450px] pb-14  p-8  bg-black'>

                <div className='mb-2 text-2xl font-semibold text-white'>{Heading}</div>


                <div className='h-full w-full relative overflow-hidden'>
                    {showNavigation && (
                        <>
                            <BsFillArrowLeftCircleFill
                                className="text-white text-3xl absolute z-10 left-1 top-[45%] cursor-pointer hover:text-stone-500"
                                onClick={() => navigation("left")}
                            />
                            <BsFillArrowRightCircleFill
                                className="text-white text-3xl absolute z-10 right-1 top-[45%] cursor-pointer hover:text-stone-500"
                                onClick={() => navigation("right")}
                            />
                        </>)}

                    <div className='h-full w-full overflow-y-hidden md:overflow-hidden
                   flex gap-4 transition-all duration-500' ref={carouselContainer}>
                        {movies.map((movie, index) => (
                            <MovieCard key={index} movie={movie} />
                        ))}
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Categories
