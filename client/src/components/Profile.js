    import React from 'react'
    import Navbar from "./Navbar";
    import "./styles/Profile.css"
    import ProfilePic from './assets/Default.png'
    import Modal from './Modal';
    import { useState, useEffect, useRef} from 'react';
    import {  useSelector } from "react-redux";
    import Post from './Post';
    import axios from 'axios';
    import { useCreatePostMutation, useGetPostsMutation } from "../services/appApi";
    import {useParams} from 'react-router-dom';
    import VideoPlayer from 'react-video-js-player'
    const Profile = () => {
      const user = useSelector((state) => state.user);
      const [isOpen, setIsOpen] = useState(false)
      const [getPosts] = useGetPostsMutation();
      const [createPost] = useCreatePostMutation();
     
    
      const posts = useSelector((state) => state.posts || []);
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
              <div>Profile</div>
              <input className='Search' placeholder='Search'/>
            </div>
            <div className='innerColumns'>
              <div className='profileColumn'>
                <div className='postBox'>
                  <div className='profileContainer'>
                    <img className='profilePic' src={picture || ProfilePic}/>
                  </div>
                  <div className='textWrap'>

                  <div className='buttonsWrap'>
                    <div></div>

                  </div>
                  </div>
                </div>
                <div >
                  <div className='bg'>
                  <div className='picContainer'>

                  </div>
                  <div className='textWraped'>
                 <div className='NameBox'><b>{user?.firstName || user?.lastName ? `${user?.firstName} ${user?.lastName}` : 'New User'}</b><i className='position'> {user?.position || ''}<span className='ProfilePosition'>{user?.work || ''}</span></i><div onClick={() => setIsOpen(true)} className='Edit'>Edit Profile</div></div>
               {user?.bio || ''}
                  {
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
                  }
                  <div className='buttonsWraper'>
                    <span className='selectors'><b>Recent Posts</b></span>
                    <span className='selectors'><b>Tags</b></span>
                    <span className='selectors'><b>Data</b></span>
                   
                    </div>
                      </div>
                      </div>
                      <div className='flexWrap'>
                    <div className='profilePosts'>

                    <div className="postBox">
              <div className="PostWrapper">
                <div className="picContainer">
                  <img className="profile" src={picture || Profile} />
                </div>
                <div className="textWrap">
                  <textarea ref={textAreaEl} placeholder="What's new?" />
                  <div className="buttonsWrap">
                    <div></div>
                    <div onClick={onPost} className="PostButton">
                      Post
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="posts">
              {posts.map(function (post, i) {
                return <Post post={post} key={post?._id || i} />;
              })}
            </div>
          
                  </div>
                  <div className='intro'>Intoductions
                  
                  
                  
                  </div>
                 
                  </div>

                  </div>
                </div>

              </div>


            </div>

          </div>






      )
    }

    export default Profile
