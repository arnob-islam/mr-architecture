import React from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import SectionTitle from './SectionTitle';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    justifyContentCenter: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
        margin: '0',
    },
    root: {
        flexGrow: 1,
        marginTop: '3rem'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const WhatWeDo = () => {

    const classes = useStyles();
    return (
        <section className='what_we_do'>
            <SectionTitle title='what we do' />
            <Container maxWidth="xl">
                <div className="wrapper">
                    <div className="card_body">
                        <div className="img_container">
                            <img src="https://photo-cdn2.icons8.com/7F06M1JtX3il7ZhGBmJG0X9-X5OUm6dk2DYuHIiaaJU/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMjY4Lzg5YmMx/NGFkLWFlOTItNDRl/Zi04NmFhLWQ4NzYx/OTdhZmFkZC5qcGc.jpg" alt="" />
                        </div>
                        <div className="card_information">
                            <span className='_sp_small_'>
                                industrial premises
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, deserunt repellat fugiat similique facere illo.
                            </p>
                        </div>
                    </div>
                    <div className="card_body">
                        <div className="img_container">
                            <img src="https://photo-cdn2.icons8.com/7-Pt1UYTQlgYXkmOO2XGfRHmfsy0he494137BfLWkKQ/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMjA2LzU1NjIx/NDIwLTcyMTMtNDE1/OS1iZTRiLTQ3N2I2/MjcyYWY2OC5qcGc.jpg" alt="" />
                        </div>
                        <div className="card_information">
                            <span className='_sp_small_'>
                                industrial premises
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, deserunt repellat fugiat similique facere illo.
                            </p>
                        </div>
                    </div>
                    <div className="card_body">
                        <div className="img_container">
                            <img src="https://photo-cdn2.icons8.com/OsG9I_awGO6UBjUCbdNC65wBXI4kpiAVGrsEzsVLrlQ/rs:fit:576:384/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODQ0L2UwZTI3/ZDIyLTIzNDUtNDk4/ZC04MDIzLWI0ZGRj/M2RkNDRiZi5qcGc.jpg" alt="" />
                        </div>
                        <div className="card_information">
                            <span className='_sp_small_'>
                                industrial premises
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, deserunt repellat fugiat similique facere illo.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="slweavert" >
                    <div className={classes.root}>

                        <Grid container item xs={12} spacing={3} className={classes.justifyContentCenter}>
                            <div className="counter_body">
                                <div className="number">

                                    <h1>
                                        <CountUp start={234} end={288} duration={3} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                </div>
                                <div className="project_done">
                                    <span className='_sp_small_'>
                                        Project Done
                                    </span>
                                </div>
                            </div>

                            <div className="counter_body">
                                <div className="number">

                                    <h1>
                                        <CountUp start={505} end={534} duration={3} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                </div>
                                <div className="project_done">
                                    <span className='_sp_small_'>
                                        happy costomer
                                    </span>
                                </div>
                            </div>

                            <div className="counter_body">
                                <div className="number">
                                    <h1>
                                        <CountUp start={833} end={921} duration={3} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                </div>
                                <div className="project_done">
                                    <span className='_sp_small_'>
                                        working hour
                                    </span>
                                </div>
                            </div>



                            <div className="counter_body">
                                <div className="number">
                                    <h1>
                                        <CountUp start={1094} end={1129} duration={3} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                </div>
                                <div className="project_done">
                                    <span className='_sp_small_'>
                                        code
                                    </span>
                                </div>
                            </div>

                        </Grid>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WhatWeDo
