import React, { useState } from "react"
import NavBar from "../components/NavBar"
import Watch from "../components/homePage/Watch"
import movies from "../data"
import Categories from "../components/homePage/Categories"



const HomePage = () => {
    // const [items, setItems] = useState(upcome)
    // const [item, setItem] = useState(latest)
    // const [rec, setRec] = useState(recommended)
    const { watch, upcoming, latest, trending, recommended } = movies;

    return (
        <div className="w-screen">
            {/* <NavBar/> */}
            <Watch watch={watch} />
            <Categories movies={upcoming} Heading="Upcoming Movies" />
            <Categories movies={latest} Heading="Latest Movies" />
            <Categories movies={trending} Heading="Trending Movies" />
            <Categories movies={recommended} Heading="Recommended" />


        </div>
    )
}

export default HomePage
