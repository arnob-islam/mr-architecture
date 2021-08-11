import React from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const NumberShowCase = () => {
    return (
        <section className='number-showcase border-top'>
            <div className="container">
                <div className="row">
                    <div className="body">
                        <CountUp start={1000} end={1102} duration={3}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h6>
                            Client
                        </h6>
                    </div>
                    <div className="body">
                        <CountUp start={1553} end={1646} duration={3}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h6>
                            project
                        </h6>
                    </div>
                    <div className="body">
                        <CountUp start={1178} end={1270} duration={3}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h6>
                            coffe
                        </h6>
                    </div>
                    <div className="body">
                        <CountUp start={743} end={901} duration={3}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <h6>
                            comments
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NumberShowCase
