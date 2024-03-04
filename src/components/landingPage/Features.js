import React, { useEffect, useState } from 'react'
import Description from './Description'
import Design from './Design'

const Features = ({ reverse, heading, description, image }) => {

    const [widthCount, setWidthCount] = useState(window.screen.width);
    const [enableReverse, setEnableReverse] = useState(false)


    const actualWidth = () => {
        setWidthCount(() => window.innerWidth);
        setEnableReverse(() => widthCount <= 640)
    }

    useEffect(() => {
        window.addEventListener("resize", actualWidth);

        return () => {
            window.removeEventListener("resize", actualWidth)           //cleanUp function
        }
    })

    return (
        <div className='flex flex-col sm:flex-row justify-center bg-black'>


            {
                !enableReverse ?
                    (
                        reverse ? (
                            <>
                                <Description heading={heading} description={description} />
                                <Design image={image} />
                            </>
                        ) : (
                            <>
                                <Design image={image} />
                                <Description heading={heading} description={description} />
                            </>

                        )
                    )
                    :
                    (
                        <>
                            <Description heading={heading} description={description} />
                            <Design image={image} />
                        </>
                    )
            }


        </div>
    )
}

export default Features
