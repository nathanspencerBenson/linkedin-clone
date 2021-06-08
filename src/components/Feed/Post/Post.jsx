import React, { forwardRef } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbsUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import InputOption from '../InputOption/InputOption';
import { db } from '../../../firebase';

const Post = forwardRef(({ id, name, description, message, photoUrl, likes }, ref) => {

    const addLike = () => {
         db.collection("posts").doc(id).update({
            "likes": (likes + 1)
       })
       
       
        // setNumberOfLikes(prev => prev + 1)
        // db.collection("posts").doc(id).update({
        //     "likes": (numberOfLikes),
        //     })
        //     console.log(numberOfLikes)
    }
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar  src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>
            <p className="posts__likes"> <ThumbUpAltIcon className="posts__likes__icon"/>{likes}</p>
            <div className="post__buttons">
                <div className="like__button_wrapper" onChange={addLike} onClick={addLike}><InputOption Icon={ThumbsUpAltOutlinedIcon} title="Like" color="gray" /></div>
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    );
})

export default Post
