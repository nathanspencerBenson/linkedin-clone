import React, { forwardRef, useState, useEffect } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbsUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import CreateIcon from '@material-ui/icons/Create'

import InputOption from '../InputOption/InputOption';
import { db } from '../../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import Comment from './Comment/Comment';
import TimeAgo from 'react-timeago';

const Post = forwardRef(({ id, name, description, message, photoUrl, likes, timestamp }, ref) => {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [comments, setComments] = useState([]);
    const [displayComments, setDisplayComments] = useState(false)

   
    const addLike = () => {
         db.collection("posts").doc(id).update({
            "likes": (likes + 1)
       })
    }
       
    useEffect(() => {
        db.collection("posts").doc(id).collection("comments").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setComments(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
                )))
                ));
                
        
    }, []);



    //    useEffect(() => {
    //     // za komentiranje na slika
    //     if (postId) {
    //       db.collection("posts")
    //         .doc(postId)
    //         .collection("comments")
    //         .orderBy("timestamp", "desc")
    //         .onSnapshot((snapshot) => {
    //           setComments(snapshot.docs.map((doc) => doc.data()));
    //         });
    //     }
    //   }, [postId]);
    
      const postComment = (e) => {
        e.preventDefault();
        db.collection("posts").doc(id).collection("comments").add({
          text: input,
          name: user.displayName,
          photoUrl: user.photoUrl || name[0],
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('')
      };

      
       
      
    
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar  src={photoUrl}></Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <p className="timestamp"><TimeAgo date={String(timestamp.toDate())} style={{fontSize: '10px', color: 'gray', marginLeft: '50px'}}  /></p>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>
            <p className="posts__likes__comments"><span><ThumbUpAltIcon className="posts__likes__icon"/>{likes}</span><span className="posts__comments__span" onClick={() =>  setDisplayComments(!displayComments)}> {comments.length} Comments</span></p>
            <div className="post__buttons">
                <div className="like__button__wrapper" onChange={addLike} onClick={addLike}><InputOption Icon={ThumbsUpAltOutlinedIcon} title="Like" color="gray"  /></div>
                <div onClick={() =>  setDisplayComments(!displayComments)}><InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" /></div>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
                { displayComments ? (
                    <div className={"comment__container"} >
                    <div className="feed__input" style={{backgroundColor: '#E4E6EA'}}>
                            <CreateIcon />
                            <form onSubmit={postComment} >
                                <input type="text" value={input} onChange={(e) =>setInput(e.target.value) } style={{backgroundColor: '#E4E6EA'}}/>
                                <button type="submit">Send</button>
                        </form>
                    </div>
                    {comments.map(({ id, data: { name, text, photoUrl, timestamp }}) => {
                 return <Comment key={id} name={name} photoUrl={photoUrl} text={text} timestamp={timestamp} />
                })}
                </div>
                ) : (
                    null
                )}
            
        </div>
    );
})

export default Post
