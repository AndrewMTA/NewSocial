 import React, { useEffect } from "react";
 import Profile from './assets/user.png'
 import Messages from './assets/Messages.png'
 import Home from './assets/home.png'
 import Logout from './assets/logout.png'
 import { useLogoutUserMutation } from "../services/appApi"
 import { useSelector } from "react-redux";
 import {Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function onLogout(e) {
    if (user) {
      e.preventDefault();
      await logoutUser(user);
      // redirect to home page

    }
    
    window.location.replace("/login");
  }

  return (
    <>
      <div className='SideNav'>
    <div className='Options'>

    <div onClick={()=> { navigate('/') }} className='navOption'><img className='icon2' src={Home}/><span className="route">Home</span></div>
    <div onClick={()=> { navigate('/user') }} className='navOption'><img  className='icon2' src={Profile}/><span className="route">Profile</span></div>
    <div onClick={()=> { navigate('/user') }} className='navOption'><img  className='icon2' src={Profile}/><span className="route">Groups</span></div>
    <div onClick={onLogout} className='navOption'><img  className='icon2' src={Logout}/><span className="route">Logout</span></div>
    </div>

  </div>



    </>
  );
}
