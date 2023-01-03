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
const Fundraiser = () => {
  const user = useSelector((state) => state.user);
  const { _id, picture } = user || {};

  return (
    <>
    <div className="Box">
        <img className="Banner" src={BG} />
      <img className="profileP" src={picture} />
      <div className="contentWrap">
      <div className="NameBox">
        <b>
          {user?.firstName || user?.lastName
            ? `${user?.firstName} ${user?.lastName}`
            : "New User"}
        </b>
        <i className="button">
          See more {user?.position || ""}
        
        </i>
      </div>
      <div>
        <Progress done="54" />
        $423,452.03 raised
      </div>

      {user?.bio || ""}
      </div>
    </div>
    <div className="Box">
    <img className="Banner" src={BG1} />
      <img className="profileP" src={Logo1} />
      <div className="contentWrap">
      <div className="NameBox">
        <b>
        Lotus
        </b>
        <i className="button">
          See more {user?.position || ""}
        
        </i>
      </div>
      <div>
        <Progress done="25" />
        $13,452.02 raised
      </div>

      Garden Ecommerxe
      </div>
    </div>
    <div className="Box">
    <img className="Banner" src={BG2} />
      <img className="profileP" src={Logo2} />
      <div className="contentWrap">
      <div className="NameBox">
        <b>
        The Floor
        </b>
        <i className="button">
          See more {user?.position || ""}
        
        </i>
      </div>
      <div>
        <Progress done="82" />
        $131,152.53 raised
      </div>

     Interior Design Platform
     </div>
    </div>
    <div className="Box">
    <img className="Banner" src={BG3} />
      <img className="profileP" src={Logo3} />
      <div className="contentWrap">
      <div className="NameBox">
        <b>
        Mint
        </b>
        <i className="button">
          See more {user?.position || ""}
        
        </i>
      </div>
      <div>
        <Progress done="14" />
        $13,452.02 raised
      </div>

        Mobile Banking
        </div>
    </div>
    <div className="Box">
    <img className="Banner" src={BG4} />
      <img className="profileP" src={Logo4} />
      <div className="contentWrap">
      <div className="NameBox">
        <b>
        Swipe.ai
        </b>
        <i className="button">
          See more {user?.position || ""}
        
        </i>
      </div>
      <div>
        <Progress done="74" />
        $1,213,452.21 raised
      </div>

     Artificial Intelligience 
     </div>
    </div>
    <div className="Box">
    <img className="Banner" src={BG5} />
      <img className="profileP" src={Logo5} />
      <div className="contentWrap">
      <div className="NameBox">
        <b>
        GoFleet
        </b>
        <i className="button">
          See more {user?.position || ""}
        
        </i>
      </div>
      <div>
        <Progress done="36" />
        $9,452.38 raised
      </div>

      Self Driving Car Data
    </div>
    </div>
   

    </>
  );
};

export default Fundraiser;
