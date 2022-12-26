import React from 'react'
import { Link } from 'react-router-dom';
import ServiceComparisonTable from '../../components/service-comparison-table';
import './style.scss';

export default function PaidPlanPage(){
    return (
        <div className="vdr-paid-plan">
            <div className="vdr-paid-plan__hero container">
                <div className="vdr-paid-plan__hero--left">
                    <p className="title">UPGRADE</p>
                    <p className="title">PLAN</p>
                    <span>Quick and Easy Insurance</span>
                    <span>Consultation Monitoring Plan</span>
                    <p className="offer">We offer a service plan to 
                    help anyone who is considering purchasing an insurance contract to take action</p>
                    <span>Upgrade and perform diagnostics</span>
                    <div className='upgrade'>
                    <Link to='/upgrade' className='up-grade-link'>Upgrade Form</Link>
                    </div>
                </div>
                <div className="vdr-paid-plan__hero--right"></div>
            </div>
            <div className="vdr-paid-plan__service-table container">
                <ServiceComparisonTable />
            </div>
            <div className="vdr-paid-plan__upgrade-section container">
                <p className="vdr-paid-plan__upgrade-section--title">
                    Upgrade
                </p>
                <div className="vdr-paid-plan__upgrade-section--separator"></div>
                <div className="vdr-paid-plan__upgrade-section--link-wrapper text-center">
                    <Link to='/upgrade' className="the-link text-center">
                        Upgrade Form
                    </Link>
                </div>
                
            </div>
            <div className="vdr-paid-plan__contact-section container">
                <p className="vdr-paid-plan__contact-section--title">Contact Us</p>
                <div className="vdr-paid-plan__separator"></div>
                <div className="vdr-paid-plan__contact-section--form-links">
                    <div className="form-link">
                        <p className="form-link__link-desc">Questions and concerns</p>
                        <Link to='/contact' className='form-link__link'>Contact form</Link>
                    </div>
                    <div className="form-link">
                        <p className="form-link__link-desc">Consultation with your account manager</p>
                        <Link to='/consultation' className='form-link__link'>Online consultation reservation</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}