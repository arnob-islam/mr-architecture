import React from 'react'
import SectionTitle from '../SectionTitle';
import Data from './Team.data';
import Tooltip from '@material-ui/core/Tooltip';

const Index = () => {
    return (
        <section className='sector_team border-top'>
            <SectionTitle title='team' />
            <div className="container">
                <div className="row">
                    {Data.map(e => {
                        const { id, name, description, img, facebook, twitter, lindkin } = e
                        return (<div className="team_single_body" key={id}>
                            <div className="img_container">
                                <img src={img} alt="" />
                            </div>
                            <div className="name">
                                <span className='_sp_small'>
                                    {`@ ${name}`}
                                </span>
                            </div>
                            <div className="description">
                                <p>
                                    {description}
                                </p>
                            </div>
                            <div className="links">
                                <div className="d-flex gap-3">
                                    <Tooltip title="Facebook" enterDelay={0} arrow>
                                        <a href={facebook}>
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </Tooltip>
                                    <Tooltip title="Twitter" enterDelay={0} arrow>
                                        <a href={twitter}>
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </Tooltip>
                                    <Tooltip title="Linkedin" enterDelay={0} arrow>
                                        <a href={lindkin}>
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </Tooltip>


                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </section>
    )
}

export default Index
