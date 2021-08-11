import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import ClientData from './Client.data';
import Tooltip from '@material-ui/core/Tooltip';
import SectionTitle from '../../pages/SectionTitle';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



function SwipeableTextMobileStepper() {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = ClientData.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <section className='section_client_'>
            <SectionTitle title='happy clients' />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-11 text-center">
                        <div className={'_wrapper_body'}>
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {ClientData.map((item, index) => {
                                    return (
                                        <div className="body" key={index}>
                                            <div className="img_container">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="description">
                                                <p>
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="name_star">
                                                <Tooltip title={`${item.star} star`} enterDelay={0} arrow>
                                                    <div className="star_wrapper">
                                                        {[1, 2, 3, 4, 5].map((e, index) => {
                                                            return (
                                                                <i key={index} className={item.star + 1 === e + 0.5 ? `fas fa-star-half-alt` : item.star >= e ? `fas fa-star` : `far fa-star`}></i>
                                                            )

                                                        })}
                                                    </div>
                                                </Tooltip>

                                                <span className='_sp_small_'>
                                                    {item.name}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                // variant="text"
                                variant="progress"
                                activeStep={activeStep}
                                nextButton={
                                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>

                                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}

                                    </Button>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SwipeableTextMobileStepper;
