    import React from 'react'
    import Navbar from "./Navbar";
    import "./styles/Profile.css"
    import ProfilePic from './assets/Default.png'
    import Modal from './Modal';
    import { useState } from 'react';
    import {  useSelector } from "react-redux";

    const Profile = () => {
      const user = useSelector((state) => state.user);
      const { picture } = user || {};
      const [isOpen, setIsOpen] = useState(false)
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
                <div className='posts'>
                  <div className='dummyPost'>
                  <div className='picContainer'>

                  </div>
                  <div className='textWraped'>
                 <div className='NameBox'><b>{user?.firstName || user?.lastName ? `${user?.firstName} ${user?.lastName}` : 'New User'}</b><i className='position'> {user?.position || ''}{user?.work || ''}</i><div onClick={() => setIsOpen(true)} className='Edit'>Edit Profile</div></div>
               {user?.bio || ''}
                  {
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
                  }
                  <div className='buttonsWraper'>
                    <span><b>Recent Posts</b></span>
                    </div>
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
