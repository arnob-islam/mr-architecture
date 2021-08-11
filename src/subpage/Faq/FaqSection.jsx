import React from 'react';
import FeqOne from './FaqOne';
import FaqTwo from './FaqTwo';
import FaqThree from './FaqThree';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ReceiptIcon from '@material-ui/icons/Receipt';
export default function ControlledAccordions() {

    return (
        <section className='faq_quistion_sector'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-11 center-col font_branding">
                        <div className="branding__">
                            <div className="_title">
                                <AnnouncementOutlinedIcon /> <h6>Common quiestion</h6>
                            </div>
                            <div className="faq_sector">
                                <FeqOne />
                            </div>
                        </div>
                        <div className="branding__">
                            <div className="_title">
                                <ReceiptIcon /> <h6> frequiently asked </h6>
                            </div>
                            <div className="faq_sector">
                                <FaqThree />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-11 center-col second_branding">
                        <div className="branding__">
                            <div className="_title">
                                <ChatOutlinedIcon /> <h6>major quistion </h6>
                            </div>
                            <div className="faq_sector">
                                <FaqTwo />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
