import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

const SandMail = () => {
    window.open('mailto:abcdef@gmail.com')
}

const ContectUs = () => {
    return (
        <section className='section-contect border-top'>
            <div className="container">
                <div className="row">
                    <div className="single_content_box">
                        <div className="i_con">
                            <i className="fas fa-mobile"></i>
                        </div>
                        <div className="title">
                            <span className='_sp_small_'>
                                +345353543
                            </span>
                        </div>
                    </div>
                    <div className="single_content_box">
                        <div className="i_con">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="title">
                            <span className='_sp_small_'>
                                washington, dc
                            </span>
                        </div>
                    </div>
                    <Tooltip title="Click to send mail" enterDelay={0} arrow>
                        <div className="single_content_box" onClick={SandMail}>
                            <div className="i_con">
                                <i className="far fa-envelope-open"></i>
                            </div>
                            <div className="title" >
                                <span className='_sp_small_'>
                                    abcdef@gmail.com
                                </span>
                            </div>
                        </div>
                    </Tooltip>

                </div>
            </div>
        </section>
    )
}

export default ContectUs
