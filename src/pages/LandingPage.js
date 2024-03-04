import React, { useState } from 'react'
import Features from '../components/landingPage/Features';
import Welcome from "../components/landingPage/Welcome"
import Partition from "../components/landingPage/Partition";
import LandingPageDownloadBg from "../images/LandingPageDownloadBg.jpeg"
import LandingPageKidsProfile from "../images/LandingPageKidsProfile.png"
import one from "../images/one.png"
const LandingPage = () => {

    return (
        <div>
            <Welcome />
            <Partition />

            <Features reverse={true} heading="Download your shows to watch offline" description="Save your favourites easily and always have something to watch." image={LandingPageDownloadBg} />
            <Partition />

            <Features reverse={false} heading="Enjoy on your TV" description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." image={one} />
            <Partition />

            <Features reverse={true} heading="Create profiles for kids" description="Send children on adventures with their favourite characters in a space made just for them—free with your membership." image={LandingPageKidsProfile} />
            <Partition />

        </div>
    )
}

export default LandingPage



/*
1.  It seems like you're passing the reverse prop as a string ("true" and "false") instead of a 
    boolean value (true and false). In JavaScript, non-empty strings evaluate to true in boolean 
    contexts, so both "true" and "false" will be treated as true.
*/