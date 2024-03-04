import React, { useEffect, useRef, useState } from 'react'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import MovieDetails from './MovieDetails'
import NavBar from '../NavBar';



const Watch = ({ watch }) => {

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
      container.scrollLeft - container.clientWidth :
      container.scrollLeft + container.clientWidth;
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
  return (


    <div className='relative'>
      <div className='absolute z-10'>
        <NavBar />
      </div>
      <div className='h-full w-full relative overflow-hidden '>
        <>
          <BsFillArrowLeftCircleFill
            className="text-white text-3xl absolute z-20 left-1 top-[45%] cursor-pointer hover:text-stone-500"
            onClick={() => navigation("left")}
          />
          <BsFillArrowRightCircleFill
            className="text-white text-3xl absolute z-10 right-1 top-[45%] cursor-pointer hover:text-stone-500"
            onClick={() => navigation("right")}
          />
        </>
        <div className='flex overflow-y-hidden' ref={carouselContainer}>
          {watch.map((movie, id) => (
            <MovieDetails key={movie.id} movie={movie} rankings={movie.id} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Watch
