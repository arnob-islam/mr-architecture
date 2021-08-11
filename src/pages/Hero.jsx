import React from 'react'
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Hero = () => {
    return (
        <section className='Hero_sector'>

            <OwlCarousel className='owl-theme _owl_wrapper' items={1} margin={0}>

                <div className='item item_image' style={{ background: `linear-gradient(#00000059, #00000059) , url(image/architec1.jpg)` }}>
                    <Container maxWidth="xl">
                        <div className="hero_title_body">
                            <span className='_sp_small_'>
                                Tristique sollicitudin nibh sit amet commodo nulla
                            </span>
                            <div className="big_title">
                                <h2>Sit amet porttitor eget dolor morbi non arcu risus quis.</h2>
                            </div>
                            <div className="button_container">
                                <Tooltip title="Learn More" enterDelay={0} arrow>
                                    <Button variant="outlined" href='https://preview-shop.netlify.app/'>About us</Button>
                                </Tooltip>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='item item_image' style={{ background: `linear-gradient(#00000059, #00000059) , url(image/architec2.jpg)` }}>
                    <Container maxWidth="xl">
                        <div className="hero_title_body">
                            <span className='_sp_small_'>
                                Tristique sollicitudin nibh sit amet commodo nulla
                            </span>
                            <div className="big_title">
                                <h2>Sit amet porttitor eget dolor morbi non arcu risus quis.</h2>
                            </div>
                            <div className="button_container">
                                <Tooltip title="Learn More" enterDelay={0} arrow>
                                    <Button variant="outlined" href='https://preview-shop.netlify.app/'>About us</Button>
                                </Tooltip>

                            </div>
                        </div>
                    </Container>

                </div>
                <div className='item item_image' style={{ background: `linear-gradient(#00000059, #00000059) , url(image/architec3.jpg)` }}>
                    <Container maxWidth="xl">
                        <div className="hero_title_body">
                            <span className='_sp_small_'>
                                Tristique sollicitudin nibh sit amet commodo nulla
                            </span>
                            <div className="big_title">
                                <h2>Sit amet porttitor eget dolor morbi non arcu risus quis.</h2>
                            </div>
                            <div className="button_container">
                                <Tooltip title="Learn More" enterDelay={0} arrow>
                                    <Button variant="outlined" href='https://preview-shop.netlify.app/'>About us</Button>
                                </Tooltip>
                            </div>
                        </div>
                    </Container>
                </div>
            </OwlCarousel>
        </section>
    )
}

export default Hero
