import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import ClientRivewer from './Client.data';

const Index = () => {


    return (
        <section className='testimonial border-top'>
            <div className="container">
                <div className="row justify-content-center gap-4">
                    {ClientRivewer.map((item, index) => {
                        return <div className="body" key={index}>
                            <div className="img_container">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="description">
                                <p>
                                    {item.description}
                                </p>
                            </div>
                            <div className="name_star">
                                <Tooltip title={`${item.star} star`} enterDelay={0} arrow>
                                    <div className="star_wrapper">
                                        {[1, 2, 3, 4, 5].map((e, index) => {
                                            return (
                                                <i key={index} className={item.star + 1 === e + 0.5 ? `fas fa-star-half-alt` : item.star >= e ? `fas fa-star` : `far fa-star`}></i>
                                            )

                                        })}
                                    </div>
                                </Tooltip>

                                <span className='_sp_small_'>
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </section>
    )
}

export default Index
