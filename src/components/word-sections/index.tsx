import React from 'react'
import './style.scss';
interface IWordSection {
    section: number
    title: string
    description: string
    hasLink?:string
}
export default function WordSections(props:IWordSection){
    const {section,title,description,hasLink} = props
    return (
        <>
        { section ===1 && <div className="vdr-word-sections">
            <div className="vdr-word-sections__left">
            </div>
            <div className="vdr-word-sections__right">
                <div className="title">{title}</div>
                <div className="desc">{description}</div>
            </div>
        </div>
        }
        {
            section ===2 && <div className="vdr-word-sections">
            <div className="vdr-word-sections__right">
                <div className="title">{title}</div>
                <div className="desc">{description}</div>
            </div>
            <div className="vdr-word-sections__left">
            </div>
            
        </div>
        }
        </>
    )
}