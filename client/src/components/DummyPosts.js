

import React from 'react'
import Logo1 from "./assets/Leaf.jpg";
import Like from "./assets/like.png";
import Comment from "./assets/Comment.png";
import Share from "./assets/Share.png";
import Team from "./assets/Team.png"
import Checkout from "./Checkout";
import Post from "./assets/post.png"

const dummyPosts = () => {
  return (
    <div className="profilePosts">
<div className="postBox">
  <div className="PostWrapper">

    <div className="textWrap"></div>
  </div>
</div>
<div className="posts">
  <div className="Post">
    <div className="Post-Picture">
      <img src={Logo1} />
    </div>
    <div className="Post-Content">
      <div className="Post-Header">
        <span className="Post-Name">Lotus</span>
        &nbsp;
     
        <span className="Post-Time"></span>
        2hr ago
      </div>

      <div className="Post-Description">
        Starting off 2023 on the right foot!
        <img className="Post-Pic" src={Team} />
      </div>

      <div className="Post-Footer">
        <div onClick={() => {}}>
          <img src={Like} />
        </div>

        <div onClick={() => {}}>
          <img src={Share} />
        </div>
      </div>
      
    </div>
    
  </div>
  <div className="Post">
    <div className="Post-Picture">
      <img src={Logo1} />
    </div>
    <div className="Post-Content">
      <div className="Post-Header">
        <span className="Post-Name">Lotus</span>
        &nbsp;
     
        <span className="Post-Time"></span>
        2hr ago
      </div>

      <div className="Post-Description">
    Happy new year!
      </div>

      <div className="Post-Footer">
        <div onClick={() => {}}>
          <img src={Like} />
        </div>

        <div onClick={() => {}}>
          <img src={Share} />
        </div>
      </div>
      
    </div>
    
  </div>
  <div className="Post">
    <div className="Post-Picture">
      <img src={Logo1} />
    </div>
    <div className="Post-Content">
      <div className="Post-Header">
        <span className="Post-Name">Lotus</span>
        &nbsp;
     
        <span className="Post-Time"></span>
        2hr ago
      </div>

      <div className="Post-Description">
    This quarter we've gained some traction! Check out these promising stats
        <img className="Post-Pic" src={Post} />
      </div>

      <div className="Post-Footer">
        <div onClick={() => {}}>
          <img src={Like} />
        </div>

        <div onClick={() => {}}>
          <img src={Share} />
        </div>
      </div>
      
    </div>
    
  </div>
</div>
</div>
  )
}

export default dummyPosts




