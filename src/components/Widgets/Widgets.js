import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>

    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Nathan is King", "Top News - 10,000 readers")}
            {newsArticle("Are aliens real?", "NASA - 2,000 readers")}
            {newsArticle("IS Redux too good:", "Code - 500 readers")}
            {newsArticle("Bitcoin for the win", "Crypto - 3534 readers")}
        </div>
    )
}

export default Widgets
