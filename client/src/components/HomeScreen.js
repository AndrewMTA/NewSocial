import React from 'react'
import "./styles/Home.css"
import Profile from './assets/Default.png'
import Like from './assets/like.png'
import Smile from './assets/smile.png'
import Celebrate from './assets/confetti.png'
import Koi from './assets/Floor.png'
import Tech from './assets/Leaf.jpg'
import Leaf from './assets/Koi.png'
import Bond from './assets/bond.png'
import Share from './assets/Share.png'
import Comment from './assets/Comment.png'
import Navbar from "./Navbar";
import Post from "./Post";
import { useState, useNavigate, useEffect, useRef } from 'react'
import { useSelector} from 'react-redux'
import { useCreatePostMutation, useGetPostsMutation } from "../services/appApi";

const HomeScreen = () => {
  const [createPost] = useCreatePostMutation();
  const [getPosts] = useGetPostsMutation();

  const posts = useSelector((state) => state.posts || []);
  const user = useSelector((state) => state.user);
  const { _id, picture } = user || {};
  const textAreaEl = useRef(null);

  const onPost = (e) => {
    e.preventDefault();

    createPost({ user: _id, description: textAreaEl.current.value })
      .then((res) => { console.log(res); })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className='Container'>
      <Navbar/>

      <div className='MainContent'>
        <div className='Header'>
          <div>home</div>
          <input className='Search' placeholder='Search'/>
        </div>
        <div className='innerColumns'>
          <div className='postsColumn'>

            <div className='postBox'>
          <div className='PostWrapper'>
              <div className='picContainer'>
                <img className='profile' src={picture || Profile}/>
              </div>
              <div className='textWrap'>

              <textarea ref={textAreaEl} placeholder="What's new?"/>
              <div className='buttonsWrap'>
                <div></div>
                <div onClick={onPost} className='PostButton'>Post</div>
              </div>
              </div>
            </div>
            </div>
            <div className='posts'>
              {posts.map(function(post, i){
                  return <Post post={post} key={post?._id || i} />;
              })}
            </div>
        

          </div>
          <div className='recomentaionsColumn'>
                <h3>Tasks</h3>
                 <div className='Recomended'><img className="brandLogo" src={Koi}/><div className='info'><span className='title'>The Floor</span> <span><i>AI that specalizes in robot suhshi delivery</i></span></div></div>
                 <div className='Recomended'><img className="brandLogo" src={Leaf}/><div className='info'><span className='title'>KoiFish.AI</span> <span><i>AI that specalizes in robot suhshi delivery</i></span></div></div>
                 <div className='Recomended'><img className="brandLogo" src={Tech}/><div className='info'><span className='title'>Elements</span> <span><i>AI that specalizes in robot suhshi delivery</i></span></div></div>
                 <div className='Recomended'><img className="brandLogo" src={Bond}/><div className='info'><span className='title'>BondLink</span> <span><i>AI that specalizes in robot suhshi delivery</i></span></div></div>
              </div>
          
        </div>
      </div>

     </div>
  )
}

export default HomeScreen
