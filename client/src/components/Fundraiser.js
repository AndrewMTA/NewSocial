import React from 'react'
import {  useSelector } from "react-redux";

const Fundraiser = () => {
    
    const user = useSelector((state) => state.user);
    const { _id, picture } = user || {};

  return (
    <div className='Box'>

         <img className="profile" src={picture} />
         <div className='NameBox'><b>{user?.firstName || user?.lastName ? `${user?.firstName} ${user?.lastName}` : 'New User'}</b><i className='position'> {user?.position || ''}<span className='ProfilePosition'>{user?.work || ''}</span></i></div>
               {user?.bio || ''}
        Fundraiser</div>
  )
}

export default Fundraiser