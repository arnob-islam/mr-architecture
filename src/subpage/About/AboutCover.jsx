import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        backgroundImage: 'linear-gradient(#272727c9, #04040496) ,url(/image/about2.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
    },
    rowset: {
        justifyContent: 'center',
        display: 'grid',
        placeItems: 'center',
        textTransform: 'uppercase'
    }
}));

const AboutCover = () => {
    const classes = useStyles();

    return (
        <section className={`${classes.root} sector_cover_about`}>
            <div className="container">
                <div className={`${classes.rowset} row `}>
                    <div className="carryer col-md-6 col-sm-11 center-col text-center">
                        <h3>
                            Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam
                        </h3>
                        <span>
                            Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCover
