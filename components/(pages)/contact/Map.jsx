import React from 'react'

const Map = () => {
    return (
        <div className="mt-10 mb-4 px-8">
            <iframe
                className="w-full rounded-2xl lg:h-[600px] h-[300px] md:h-[400px]"
                aria-hidden="false"
                tabIndex="-1"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1s51.503325,-0.119545!5e0!6i12"
            ></iframe>{" "}
        </div>
    )
}

export default Map