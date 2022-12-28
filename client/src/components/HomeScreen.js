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
    import { useState, useNavigate, useEffect } from 'react'
    import { useSelector} from 'react-redux'
    import axios from 'axios'
    const HomeScreen = () => {
      const user = useSelector((state) => state.user);
      const { picture } = user || {};

      const [post, setPost] = useState({
        title: "",
        description: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      };

        useEffect(() => {
          console.log(post)
        }, [post])

  const createPost = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/posts/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  };


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
                    <h3 className='PostTitle'>News Feed</h3>
              <div className='PostWrapper'>
                  <div className='picContainer'>
                    <img className='profile' src={picture || Profile}/>
                  </div>
                  <div className='textWrap'>

                  <textarea onChange={handleChange} value={post.description} placeholder="What's new?"/>
                  <div className='buttonsWrap'>
                    <div></div>
                    <div onClick={createPost} className='PostButton'>Post</div>
                  </div>
                  </div>
                </div>
                </div>
                <div className='posts'>

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
