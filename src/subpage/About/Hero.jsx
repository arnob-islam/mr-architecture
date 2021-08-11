import React from 'react'
// import BreadCumbs from '../components/BreadCumbs';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    main_title_wrapper: {
        // marginTop: '2rem',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
    },
    sector_style: {
        backgroundImage: `linear-gradient(#272727ed, #040404d9) ,url(/image/aboutbackground.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '0 !important'


    }

}));

const About = () => {

    const classes = useStyles();

    return (
        <section className={`section__about ${classes.sector_style}`} >
            <div className="container">
                <div className={`row ${classes.main_title_wrapper}`}>
                    <div className="__wrapper">
                        <div className="box_title">
                            <div className="box-body">
                                <h1>18</h1>
                                <span className='_sp_small_'>
                                    years
                                </span>
                            </div>
                        </div>
                        <div className="title">
                            <h3>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, est.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
