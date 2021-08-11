import React from 'react'
import SectionTitle from '../../pages/SectionTitle';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import BallotOutlinedIcon from '@material-ui/icons/BallotOutlined';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';

const WhyUs = () => {
    return (
        <section className='why-us-about alwlslwtw'>
            <SectionTitle title='WHY CHOOSE US' />
            <div className="container">
                <div className="row">
                    <div className="body">
                        <div className="heading">
                            <AccountBalanceOutlinedIcon />
                        </div>
                        <div className="title">
                            <span className='_sp_small_'>
                                low cast
                            </span>

                        </div>
                        <div className="description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere veritatis adipisci.
                            </p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="heading">
                            <AccountTreeOutlinedIcon />
                        </div>
                        <div className="title">
                            <span className='_sp_small_'>
                                we are creatiive
                            </span>

                        </div>
                        <div className="description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere veritatis adipisci.
                            </p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="heading">
                            <BallotOutlinedIcon />
                        </div>
                        <div className="title">
                            <span className='_sp_small_'>
                                Life time gurranty
                            </span>

                        </div>
                        <div className="description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere veritatis adipisci.
                            </p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="heading">
                            <BubbleChartOutlinedIcon />
                        </div>
                        <div className="title">
                            <span className='_sp_small_'>
                                Honesty
                            </span>

                        </div>
                        <div className="description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere veritatis adipisci.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyUs
