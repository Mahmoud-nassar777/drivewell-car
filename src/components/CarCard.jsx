import React from 'react'
import BookNowButton from './BookNowButton'

const CarCard = ({image, name}) => {
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            className='h-[480px] lg:h-[380px] rounded cursor-pointer flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 ease-in-out '
        >

            {/* TEXT */}
            <div className=" bg-gradient-to-b w-full from-zinc-950 to-transparent p-7 ">
                <h2 className="text-3xl clash-display">
                    {name}
                </h2>
            </div>

            {/* BTNS */}
            <div className="bottom-0 bg-gradient-to-t w-full from-zinc-950 to-transparent centered-eow justify-between p-7">
                {/* Price Per Day */}
                <p className='text-lg clash-display' >
                    $ 150/day
                </p>

                {/* Book Button */}
                <BookNowButton />
            </div>

        </div>
    )
}

export default CarCard