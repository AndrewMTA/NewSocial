import React, { useContext, useEffect, useRef, useState } from "react";
import "./styles/Post.css";
import Like from './assets/like.png';
import Comment from './assets/Comment.png';
import Share from './assets/Share.png';
import Repost from './assets/repost.png';
import ProfilePic from './assets/Default.png';
import timeAgo from './timeAgo';

const Post = ({ post }) => {
 return (
       <>
       <div className="Post">
        <div className="Post-Picture">
          <img src={post?.user?.picture || ProfilePic} />
        </div>
        <div className="Post-Content">
          <div className="Post-Header">
            <span className="Post-Name">
              {post?.user?.firstName || post?.user?.lastName ? `${post?.user?.firstName} ${post?.user?.lastName}` : 'New User'}
            </span>
            <span className="Post-Position">
              {post?.user?.position || 'Position'}
            </span>
            &nbsp;
            <span className="Post-Company">
              {post?.user?.work || 'Company'}
            </span>
            <span className="Post-Time">
              { timeAgo(post.createdAt) }
            </span>
          </div>
          <div className="Post-Description">
            { post?.description }
          </div>
          <div className="Post-Footer">
            <div onClick={()=> { }}><img src={Like}/></div>
            <div onClick={()=> { }}><img src={Comment}/></div>
            <div onClick={()=> { }}><img src={Share}/></div>
            <div onClick={()=> { }}><img src={Repost}/></div>
          </div>
        </div>
       </div>
   </>
 )
}

export default Post;
