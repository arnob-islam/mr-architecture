import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'



const WhyUs = () => {

    return (
        <section className='sector_whyus' style={{ background: `linear-gradient(#ffffffad, #ffffff8c), url(image/whyuswe.jpg)` }}>
            <Container>
                <div className="dfger">
                    <div className='row'>

                        <div className="branding__ col-lg-5 col-md-5 col-sm-10 col-11" >
                            <div className="brand_head">
                                <h1>why chose we</h1>
                            </div>
                            <div className="paragraph">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt veniam porro nihil, nam sequi harum tempore. Modi dolores ab autem, quo nostrum voluptatum id magnam.
                                </p>
                            </div>
                            <div className="button_container">
                                <Link to='/'>
                                    <Button variant="outlined">Read more</Button>
                                </Link>
                            </div>
                        </div>




                        <div className="branding_secound col-lg-5 col-md-5 col-sm-10 col-11" >
                            <div className="single_show">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-person"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                </svg>
                                <span className='._sp_small_'>
                                    250+
                                </span>
                                <h1> Team  </h1>

                            </div>
                            <div className="single_show">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-house"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z"
                                    ></path>
                                </svg>
                                <span className='._sp_small_'>
                                    203+
                                </span>
                                <h1>House  </h1>

                            </div>
                            <div className="single_show">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-receipt-cutoff"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3 4.5a.5.5 0 01.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zM11.5 4a.5.5 0 000 1h1a.5.5 0 000-1h-1zm0 2a.5.5 0 000 1h1a.5.5 0 000-1h-1zm0 2a.5.5 0 000 1h1a.5.5 0 000-1h-1zm0 2a.5.5 0 000 1h1a.5.5 0 000-1h-1zm0 2a.5.5 0 000 1h1a.5.5 0 000-1h-1z"></path>
                                    <path d="M2.354.646a.5.5 0 00-.801.13l-.5 1A.5.5 0 001 2v13H.5a.5.5 0 000 1h15a.5.5 0 000-1H15V2a.5.5 0 00-.053-.224l-.5-1a.5.5 0 00-.8-.13L13 1.293l-.646-.647a.5.5 0 00-.708 0L11 1.293l-.646-.647a.5.5 0 00-.708 0L9 1.293 8.354.646a.5.5 0 00-.708 0L7 1.293 6.354.646a.5.5 0 00-.708 0L5 1.293 4.354.646a.5.5 0 00-.708 0L3 1.293 2.354.646zm-.217 1.198l.51.51a.5.5 0 00.707 0L4 1.707l.646.647a.5.5 0 00.708 0L6 1.707l.646.647a.5.5 0 00.708 0L8 1.707l.646.647a.5.5 0 00.708 0L10 1.707l.646.647a.5.5 0 00.708 0L12 1.707l.646.647a.5.5 0 00.708 0l.509-.51.137.274V15H2V2.118l.137-.274z"></path>
                                </svg>
                                <span className='._sp_small_'>
                                    176+
                                </span>
                                <h1> Office </h1>

                            </div>
                        </div>

                    </div>


                </div>
            </Container>
        </section>
    )
}

export default WhyUs
