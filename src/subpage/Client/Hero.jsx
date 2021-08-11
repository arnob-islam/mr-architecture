import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';


const useStyles = makeStyles((theme) => ({

    root_: {
        backgroundImage: 'linear-gradient(#000000bd, #000000b8)',
    },
    rowset: {
        justifyContent: 'center',
        display: 'grid',
        placeItems: 'center',
        textTransform: 'uppercase',
        height: '40vh'

    }
}))

const Hero = () => {
    const classes = useStyles();

    return (
        <Parallax
            bgImage="/image/collage.jpg" bgImageAlt="..."
            bgImageSize='cover' >
            <section className={`${classes.root_} setion-client`}>
                <div className="container">
                    <div className={`${classes.rowset} row`}>
                        <div className="carryer col-md-6 col-sm-11 center-col text-center">
                            <div className="main_header">
                                <h3>
                                    we have more then 1900+ world wide client
                                </h3>
                            </div>
                            <div className="branding">
                                Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Parallax>

    )
}

export default Hero
