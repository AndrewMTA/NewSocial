import React from "react";
import { useSelector } from "react-redux";
import Progress from "./Progress";
import "./styles/Fundraise.css";
import Logo1 from "./assets/Leaf.jpg"
import Logo2 from "./assets/Floor.png"
import Logo3 from "./assets/Mint.png"
import Logo4 from "./assets/A.png"
import Logo5 from "./assets/Go.png"
import Logo6 from "./assets/Floor.png"
import BG from "./assets/Back.png"
import BG2 from "./assets/Back2.png"
import BG3 from "./assets/Back3.png"
import BG4 from "./assets/Back4.png"
import BG5 from "./assets/Back5.png"
import BG1 from "./assets/Back1.png"
const Fundraiser = (props) => {
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  console.log("users", users);
  const posts = props.Posts;
  const { _id, picture } = user || {};

  return (
    <>
    
   
    {users?.map((data, index) => {
          return (
          <> 
             <div className="Box">
              <img className="Banner" src={BG} />
              <img className="profileP" src={data.picture} />
              <div className="contentWrap">
              <div className="NameBox">
                <b>
                  {data?.firstName || data?.lastName
                    ? `${data?.firstName} ${data?.lastName}`
                    : "New User"}
                </b>
                <i className="button">
                <a href="/user/:id">See more </a>   
                </i>
              </div>
              <div>
                <Progress done="54" />
                $423,452.03 raised
              </div>

              {data?.bio || ""}
              </div>
            </div>
          </>);
        })
    }
    </>
  );
};

export default Fundraiser;
