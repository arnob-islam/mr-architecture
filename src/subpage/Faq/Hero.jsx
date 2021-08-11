import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        backgroundImage: 'linear-gradient(#0b0b0b9e, #0000008c),url(/image/faq1.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat ',
    },
    rowset: {
        justifyContent: 'center',
        display: 'flex',
        placeItems: 'center',
        textTransform: 'uppercase',
        height: '40vh'

    }
}))

const Hero = () => {
    const classes = useStyles();

    return (
        <section className={`${classes.root} setion-faq-hero`}>
            <div className="container">
                <div className={`${classes.rowset}`}>
                    <div className="carryer col-md-6 col-sm-11 center-col text-center">
                        <h3>
                            <span>
                                Confuce? </span> Need more help?
                        </h3>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
