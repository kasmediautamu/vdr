import React from 'react';
import Footer from '../../components/footer';
import GetStarted from '../../components/get-started';
import Header from '../../components/header';
import './style.scss';

export default function LandingPage(){
    return(
        <div className="vdr-landing">
            <Header/>
            <div className="vdr-landing__hero">
                <div className="vdr-landing__hero--img d-flex w-100"></div>
            </div>
            <div className="vdr-landing__get-started">
            <GetStarted />
            </div>
            <div className="vdr-landing__txt-sections container">
                <div className="vdr-landing__txt-sections--img"></div>
                <div className="vdr-landing__txt-sections--desc">
                    <div className="title">ABOUT</div>
                    <p>Do you know about your risks?</p>
                    <p>Would you like to diagnose your<br/> insurance contract for the right plan?</p>
                </div>
            </div>
            <div className="vdr-landing__txt-sections container">
                <div className="vdr-landing__txt-sections--desc">
                <div className="title">PLAN<br/>ASSESSMENT</div>
                <span>Anyway, it is easy.</span>
                <p>Simply enter your email address and <br/>we will diagnose your insurance
                <br/> contract in bulk</p>
                <div className="more"> <span>more</span> <div className='more-icon'></div></div>
                </div>

                <div className="vdr-landing__about--img plan-asst"></div>
            </div>
            <div className="vdr-landing__txt-sections container">
                <div className="vdr-landing__about--img plan-mtr"></div>
                    <div className="vdr-landing__txt-sections--desc">
                    <div className="title">PLAN<br/>MONITORING</div>
                    <span>Notify you immediately</span>
                    <p>We constantly analyze your insurance<br/> coverage and email it.
                    <br/> contract in bulk</p>
                    <div className="more"> <span>more</span> <div className='more-icon'></div></div>
              
                    </div>                
                </div>
                <div className="vdr-landing__txt-sections container">
                <div className="vdr-landing__txt-sections--desc">
                <div className="title">PLAN<br/>SUPPORT</div>
                <span>Insurance Contact</span>
                <p>Feel free to consult with us online</p>
                <div className="more"> <span>more</span> <div className='more-icon'></div></div>
              
                </div>
                <div className="vdr-landing__about--img plan-spt"></div>
            </div>
            <div className="vdr-landing__sub ">
                <div className="container">
                    
                    <div className="vdr-landing__sub--wrapper">
                    <div className="vdr-landing__sub--title">
                        PLAN <span>Overview</span>
                    </div>
                    <div className="subscriptions">
                            <div className="subscription-card">
                                <div className="subscription-card__header">
                                    <p className="title">Free</p>
                                    <p className="sub-title">Check your insurance</p>
                                    <div className="charges">
                                        <p className='service'>Service Charges</p>
                                        <span className='fee'>Free</span>
                                    </div>
                                </div>
                                <div className="subscription-card__separator">

                                </div>
                                <div className="subscription-card__body">
                                    <div className="text-right body-title">Free Report</div>
                                    <ul className="features">
                                        <li className="feature-item">
                                            <div className="feature-icon"></div>
                                            <div className="feature-text">
                                                Generate your life report
                                            </div>
                                        </li>
                                        <li className="feature-item">
                                            <div className="feature-icon"></div>
                                            <div className="feature-text">
                                                Free Consultation*
                                            </div>
                                        </li>
                                        
                                    </ul>
                                    <div className="note">
                                        *only available for the first time
                                    </div>
                                </div>
                                <div className="subscription-card__footer text-center">
                                    <button type='button' className='btn btn-primary'>Start Now</button>
                                </div>
                                
                            </div>
                            <div className="subscription-card subscription-card-grey">
                    <div className="subscription-card__header">
                            <div className="title title-btn"><p>Monitoring</p> <span>Upgrade</span></div>
                            <p className="sub-title">Always check your insurance and support</p>
                            <div className="charges">
                            <p className='service'>Service Charges</p>
                                <div className="left"> 
                                    <span className='fee'>200,000yen/Year</span>
                                    <span className='small-text'>35,000 yen/Month</span>
                                </div>
                            </div>
                        </div>
                        <div className="subscription-card__separator">

                        </div>
                        <div className="subscription-card__body">
                            <div className="text-right body-title">Insurance Consulting Solutions</div>
                            <ul className="features">
                                <li className="feature-item">
                                    <div className="feature-icon"></div>
                                    <div className="feature-text">
                                        Check all insurance plans
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="feature-icon"></div>
                                    <div className="feature-text">
                                        Send report
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="feature-icon"></div>
                                    <div className="feature-text">
                                        Available for consultation
                                    </div>
                                </li>
                                
                            </ul>
                            <div className="text-right body-title">Contact Management Solutions</div>
                            <ul className="features">
                                <li className="feature-item">
                                    <div className="feature-icon"></div>
                                    <div className="feature-text">
                                    Alert mail
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="feature-icon"></div>
                                    <div className="feature-text">
                                       Notification of incident Occurrence
                                    </div>
                                </li>
                                
                            </ul>
                            
                        </div>
                        <div className="subscription-card__footer text-center">
                            <button type='button' className='btn btn-primary'>Start Free Plan</button>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
                
                

            </div>
            <Footer/>
        </div>
    )
}