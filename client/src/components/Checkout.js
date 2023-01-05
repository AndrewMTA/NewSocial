import React, { useEffect } from "react";
import "./styles/Checkout.css";
import ProfilePic from "./assets/Default.png";
import PlusIcon from './assets/plus.png'
import { useState, useCallback } from "react";
import { useUpdateUserMutation, useUploadUserPictureMutation } from "../services/appApi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CropModal from './CropModal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {BsCurrencyDollar, BsCreditCard2Front} from 'react-icons/bs';
import CreditCardInput from 'react-credit-card-input';


const Checkout = ({ open, onClose }) => {
  const user = useSelector(state => state.user);
  const { _id, picture } = user || {};

  const [cropImage, setCropImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setIsBio] = useState("");
  const [position, setIsPosition] = useState("");
  const [work, setIsWork] = useState("");
  const [updateUser] = useUpdateUserMutation();
  const [uploadUserPicture] = useUploadUserPictureMutation();

  useEffect(()=> {
    // axios.get('/user/' + _id)
    // .then(({data}) => {
    //   const user = data.user;
    //
    // })
    // .catch((e) => console.log(e))
    setFirstName(user.firstName);
    setIsBio(user.bio);
    setIsPosition(user.position);
    setIsWork(user.work)
  }, [_id])

  function handleSubmit(e) {
    e.preventDefault();
    // update logic
    updateUser({_id, firstName, lastName, bio, position, work}).then(({ data }) => {
      if (data) {
        console.log("profile updated");
        onClose();
      }
    });
  }

  function onCropModalClose(picture) {
    if (!(picture && picture.length)) {
      setIsOpen(false);
      setCropImage("");
      return;
    }

    updateUser({_id, picture}).then(({ data }) => {
      setIsOpen(false);
      setCropImage("");
    });
  };

  function onEditPic(e) {
    e.preventDefault();
    const input = document.createElement('input');
    input.type = 'file';
    input.accept= "image/*";
    input.onchange = function () {
      if (input.files.length === 0) return;
      const picture = input.files[0];
      console.log('picture', picture);
      const filereader = new FileReader();
      filereader.readAsDataURL(picture);
      filereader.onload = function (e) {
         const base64 = e.target.result;
         //console.log('base64', base64);
         setCropImage(base64);
         setIsOpen(true);
      }

      // uploadUserPicture({ _id, picture }).then(({data}) => {
      //   console.log("picture updated");
      // });
    }
    input.click();
  }

  if (!open) return null;

  return (
    <div className="OverLay">
      <form onSubmit={handleSubmit} className="Modal">
        <p className="header-text">
          Investment Amount
        </p>

  
        <div className="inputWrap">
        <p>Amount</p>
          <div className="Userinput">
            <BsCurrencyDollar color = "#a4a4a4" size = {19}/>
            <nobr/>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="modalInput"
              placeholder="Name"
            />
          </div>
          <input
            onChange={(e) => setIsWork(e.target.value)}
            value={work}
            className="modalInput"
            placeholder="Company"
          />
          <Tabs className = "card-tabs">
            <TabList padding = "0px" margin = "0px">
              <Tab><BsCreditCard2Front/> Card</Tab>
              <Tab>ACH</Tab>
              <Tab>Wire</Tab>
            </TabList>

            <TabPanel className = "TabPanel">
              <p>Name on Card</p>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="NameOnCard"
                  placeholder="Name on Card"
                />
              <br />
              <div className="Userinput">
                <BsCreditCard2Front color = "#a4a4a4" size = {19}/>
                <nobr/>
                <input
                  onChange={(e) => setIsWork(e.target.value)}
                  value={work}
                  className="CardNumber"
                  placeholder="Card number"
                />
              </div>
              
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
          
          <p className = "terms-title">Terms</p>
          <div className = "terms">
            <h3 className = "terms-header">Terms of service agreement</h3>
            <p className = "terms-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className = "agreement">
            <input type = "checkbox" id = "agree" name = "agree"/>
            <label for="agree"> I agree to the Terms</label>
          </div>
        </div>

        <button type="submit">
            Continue
          </button>
      </form>

      <CropModal image={cropImage} open={isOpen} onClose={onCropModalClose}/>
    </div>
  );
};

export default Checkout;
