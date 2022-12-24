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
import { useSelector } from 'react-redux'
    
    const HomeScreen = () => {
      const user = useSelector((state) => state.user);
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
                  <div className='picContainer'>
                    <img className='profile' src={Profile}/>
                  </div>
                  <div className='textWrap'>
                  <textarea placeholder="What's new?"/>
                  <div className='buttonsWrap'>
                    <div></div>
                    <div className='PostButton'>Post</div>
                  </div>
                  </div>
                </div>
                <div className='posts'>
                  <div className='dummyPost'>
                  <div className='picContainer'>
                    <img className='profile' src={Profile}/>
                  </div>
                  <div className='textWrap'>
                 <div className='Name'><b>New User</b><i>{user.work}{user.position}</i></div>
                 <div className='content'> Hello World! <img className='emoji' src={Celebrate}/><br/>
                 
                 </div>
                  <div className='buttonsWrap'>
                 
                    <div className='Button'><img className='icon' src={Like}/></div>
                    <div className='Button'><img className='icon' src={Share}/></div>
                    <div className='Button'><img className='icon' src={Comment}/></div>
                  </div>
                  </div>
            

                  </div>
                </div>

              </div>
              <div className='recomentaionsColumn'>
                <h3>Recomended for you</h3>
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