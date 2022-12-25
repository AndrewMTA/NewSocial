 import React, { useEffect } from "react";
 import Profile from './assets/user.png'
 import Messages from './assets/Messages.png'
 import Home from './assets/home.png'
 import { useLogoutUserMutation } from "../services/appApi"
 import { useSelector } from "react-redux";
 import {Link} from "react-router-dom"

export default function Navbar() {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e) {
      e.preventDefault();
      await logoutUser(user);
      // redirect to home page
      window.location.replace("/login");
  }
  
  return (
    <>
      <div className='SideNav'>
    <div className='Options'>
  
    <div className='navOption'><img className='icon2' src={Home}/> <a className="route" href='/'>Home</a></div>
    <div className='navOption'><img  className='icon2' src={Profile}/><a className="route" href={`/user/`}>Profile</a></div>
    <div className='navOption'><img  className='icon2' src={Messages}/><a className="route"  href='/messages'>Messages</a></div>
    <div  onClick={handleLogout} className='navOption'><img  className='icon2' src={Messages}/><a className="route"  href='/messages'>Logout</a></div>
    </div>

  </div>

   
      
    </>
  );
}
 
  
