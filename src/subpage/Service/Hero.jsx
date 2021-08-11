import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        backgroundImage: 'linear-gradient(#0b0b0b9e, #0000008c),url(/image/blog1.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat ',
    },
    rowset: {
        justifyContent: 'center',
        display: 'grid',
        placeItems: 'center',
        textTransform: 'uppercase',
        height: '50vh'

    }
}))

const Hero = () => {
    const classes = useStyles();

    return (
        <section className={`${classes.root} setion-service-hero`}>
            <div className="container">
                <div className={`${classes.rowset}`}>
                    <div className="carryer col-md-6 col-sm-11 center-col text-center">
                        <h3>
                            Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam.
                            adipisicing elit.
                        </h3>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
