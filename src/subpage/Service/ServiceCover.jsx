import React from 'react'
import { Parallax } from 'react-parallax';


const ServiceCover = () => {


    return (

        <Parallax
            blur={{ min: 1, max: 1 }} bgImage="/image/blog2.jpg" bgImageAlt="..."
            bgImageSize='cover' >
            <div className='service_cover'>
                <div className="container">
                    <div className={`justify-content-center row`}>
                        <div className="col-md-6 col-sm-11 center-col text-center">
                            <h3>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid cumque soluta officiis autem et?
                            </h3>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>



    )
}

export default ServiceCover
