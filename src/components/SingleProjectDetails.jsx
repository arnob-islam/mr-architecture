import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../pages/_Project/Data';


const SingleProjectDetails = () => {
    const { id } = useParams()

    const SpacificItem = Data.filter(e => e.id === id)

    console.log(SpacificItem)

    const [readMore, setreadMore] = React.useState(false)
    return (
        <section>
            <div className="container">
                {SpacificItem.map(e => {
                    return (
                        <div className="row justify-content-center gap-4 " key={e.id}>
                            <div className="img_container col-lg-5 col-md-8 col-sm-9 col-11">
                                <img src={e.img} alt="" />
                            </div>
                            <div className="details_container  col-lg-5 col-md-8 col-sm-9 col-11">
                                <div className="name hawladar">
                                    <div className="font__i">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-card-heading"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M14.5 3a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h13zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"></path>
                                            <path d="M3 8.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0-5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1z"></path>
                                        </svg>
                                    </div>
                                    <div className="awef">
                                        <span className='awef_name'>{e.achitechture_name} </span>
                                    </div>
                                </div>
                                <div className="hawladar">
                                    <div className="font__i">
                                        <i className="fas fa-hospital-user"></i>
                                    </div>
                                    <div className="awef">
                                        <span className='_sp_small_'>{e.owner}</span>
                                    </div>
                                </div>
                                <div className="location hawladar">
                                    <div className="font__i">
                                        <i className="fas fa-map-signs"></i>
                                    </div>
                                    <div className="awef">
                                        {e.location}
                                    </div>
                                </div>
                                <div className="description hawladar">
                                    <div className="font__i">
                                        <i className="far fa-sticky-note"></i>
                                    </div>
                                    <div className="awef">
                                        <p>
                                            {readMore ? e.description : `${e.description.substring(0, 180)}`}
                                            <button className='redmove_btn' onClick={() => setreadMore(!readMore)}>
                                                {readMore ? '... show less' : '  read more ...'}
                                            </button>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default SingleProjectDetails
