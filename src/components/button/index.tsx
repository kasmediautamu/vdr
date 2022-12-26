import React from 'react';
import './style.scss';
type IButtonType = string
interface IVDRButton {
    label:string,
    btype: IButtonType
}
export default function VdrButton(props:IVDRButton){
    const {label,btype} = props
    return (
        <>
        {
            btype ==='green-fore' && <div className="btn btn-primary vdr-btn-grn">
            {label}</div>
        }
        {
            btype ==='dark-fore' && <div className="btn vdr-btn-dk">
            {label}</div>
        }
        </>
        
    )
}