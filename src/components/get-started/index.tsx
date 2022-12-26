import React from 'react';
import VdrButton from '../button';
import './style.scss';

export default function GetStarted(){
    return(
        <div className="vdr-getstarted">
            <p className="heading">
                <span>
                    PLAN
                </span>
                Assessment <br/>
                & Monitoring
            </p>
            <div className="vdr-intro">
                Do you know your company s Info
            </div>
            <div className="vdr-intro">
                The first service will be provided free
            </div>

            <div className="start-form">
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="Your email address" />
                    </div>
                        <div className="col-sm-2 btn-wrapper ">
                            <VdrButton label="Start" btype="green-fore"/>
                        </div>
                    </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="agreement" name='agreement' />
                            <label className="form-check-label" htmlFor="label">I agree to the <span>Terms </span>of Use and <span>Privacy Policy</span></label>
                        </div>
                        <p className="login-link">
                            If you already have an account, <span>Log in</span>
                        </p>
                </div>
        </div>
    )
}