import { Avatar } from '@material-ui/core';
import React from 'react';
import './Comment.css';
import TimeAgo from 'react-timeago';



function Comment({ name, photoUrl, text, timestamp}) {
  

    
    return (
        <div className="comment">
            <div>
                <Avatar className="comment__icon" src={photoUrl} />
                <div className="comment__text">
                <h2>{name}</h2>
                <p>{text}</p>
                </div>
            </div>
            {timestamp > 0 &&
            
            <p><TimeAgo date={String(timestamp.toDate())} style={{fontSize: '10px', color: 'gray', marginLeft: '50px'}}  /></p>
            
            }
            
        </div>
    )
}

export default Comment
