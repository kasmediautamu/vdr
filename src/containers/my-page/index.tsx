import React from 'react'
import { Link } from 'react-router-dom';
import SIcon from '../../assets/s.svg'

import './style.scss';

export default function MyPage(){
    return (
        <div className="vdr-mypage">
            <div className="vdr-mypage__website container">
                <img src={SIcon} alt="web site icon" className="vdr-mypage__website--web-icon" />
                <div className="vdr-mypage__website--link">
                    <div className="title">SATO Kogyo Inc</div>
                    <span className="actual-link">URL: {'http://satokogyo.co.jp'}</span>
                </div>
            </div>
            <div className="vdr-mypage__report container">
                <div className="vdr-mypage__report--header">
                    <div className="left">Report</div>
                    <div className="right">
                        <p className="date">Last updated : {'2023-10-25'}</p>
                        <p className="time">{'04:42:02'}</p>
                    </div>
                                      
                </div>
                <div className="vdr-mypage__report--separator"></div>
                    <div className="vdr-mypage__report--sum ">
                        <div className="report-card">
                            <div className="left">
                                <p className="title">
                                    REPORT
                                </p>
                                <ul className="attributes">
                                    <li className="attribute">
                                        <div className="icon"></div>
                                        <p className="text">Score your grades</p>
                                    </li>
                                    <li className="attribute">
                                        <div className="icon"></div>
                                        <p className="text">Advice based on grades</p>
                                    </li>
                                    <li className="attribute">
                                        <div className="icon"></div>
                                        <p className="text">Exam Preparation Information</p>
                                    </li>
                                </ul>
                                </div>  
                            <div className="right">
                                
                        </div>  
                        
                        </div>
                    </div>  
                    <div className="download-btn text-center">
                            <button className="btn btn-primary">Download <div className='icon'></div></button>
                    </div>
            </div>
            <div className="vdr-mypage__plan container">
                <div className="vdr-mypage__plan--header">
                    <p className="title">Paid Plan</p>
                    <Link to='/upgrade' className='linkto'>Upgrade</Link>
                </div>
                <div className="vdr-mypage__plan--separator"></div>
                <p className="vdr-mypage__plan--desc">The best partner for your lifetime with the worlds best know-how.</p>
                <div className="vdr-mypage__plan--services">
                    <div className="service">
                        <p className="num">01</p>
                        <div className="icon-name">
                        <div className="service-icon-01"></div>
                        <p className="service-name">Total Solution</p>
                        </div>
                        
                        <ul className="features">
                            <li className="feat">
                                <div className="feat-icon"></div>
                                <p className="feat-name">Check all insurance plans</p>
                            </li>
                            <li className="feat">
                                <div className="feat-icon"></div>
                                <p className="feat-name">Send report</p>
                            </li>
                            <li className="feat">
                                <div className="feat-icon"></div>
                                <p className="feat-name">Always available for consultation</p>
                            </li>
                        </ul>
                    </div>
                    <div className="service">
                        <p className="num">02</p>
                        <div className="icon-name">
                            <div className="service-icon-02" ></div>
                            <p className="service-name">Monitoring Solution</p>
                        </div>
                        <ul className="features">
                            <li className="feat">
                                <div className="feat-icon"></div>
                                <p className="feat-name">Sending alert mails</p>
                            </li>
                            <li className="feat">
                                <div className="feat-icon"></div>
                                <p className="feat-name">Predictions and recommend</p>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="service">
                        <p className="num">03</p>
                        <div className="icon-name">
                        <div className="service-icon-03"></div>
                        <p className="service-name">Online Consultation Service</p>
                        </div>
                        
                        <ul className="features">
                            <li className="feat">
                                <div className="feat-icon"></div>
                                <p className="feat-name">Expert consultation online</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="vdr-mypage__plan--btns text-center">
                    <Link to='/details' className="btn btn-secondary">Details</Link>
                    <Link to='/upgrade' className="btn btn-primary">Upgrade</Link>
                </div>
            </div>
            <div className="vdr-mypage__forms container">
                <div className="vdr-mypage__forms--contact">
                    <div className="title">Contact</div>
                    <div className="separator"></div>
                    <div className="text-center">
                    <Link to="/contact" className='linkto'>Contact Form</Link>
                    </div>
                </div>
                <div className="vdr-mypage__forms--consultation">
                    <div className="header">
                        <div className="title">Request for Consultation</div>
                        <Link to='/first-time' className='linkto'>First time free</Link>
                    </div>
                    <div className="separator"></div>
                    <div className="form-links">
                        <div className="left"></div>
                        <div className="right">
                            <p className="desc">You can consult with an insurance specialist online at any time</p>
                            <span>Our specialists are available to discuss your insurance contract with you.</span>
                        </div>
                    </div>
                    <div className="vdr-mypage__forms--btns text-center">
                       <Link to="/details" className='linkto'>Details</Link>
                       <Link to="/reservation" className='linkto'>Reservation Form</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}