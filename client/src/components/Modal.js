import React, { useEffect } from "react";
import "./styles/Modal.css";
import ProfilePic from "./assets/Default.png";
import { useState } from "react";
import { useUpdateUserMutation } from "../services/appApi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Modal = ({ open, onClose }) => {
  const user = useSelector(state => state.user);
  const { _id } = user;

  const [bio, setIsBio] = useState("");
  const [position, setIsPosition] = useState("");
  const [work, setIsWork] = useState("");
  const [updateUser] = useUpdateUserMutation();

  useEffect(()=> {
    axios.get('/user/' + _id)
    .then(({data}) => {
      const user = data.user;
      setIsBio(user.bio);
      setIsPosition(user.position);
      setIsWork(user.work)
    })
    .catch((e) => console.log(e))
  }, [_id])

  function handleSubmit(e) {
    e.preventDefault();
    // update logic
    updateUser({_id, bio, position, work}).then(({ data }) => {
      if (data) {
        alert("profile updated")
      }
    });
  }

  if (!open) return null;

  return (
    <div className="OverLay">
      <form onSubmit={handleSubmit} className="Modal">
        <button type="closer" onClick={onClose} className="Close">
          x
        </button>
        <img className="modalPic" src={ProfilePic} />
        <div className="inputWrap">
          <input
            onChange={(e) => setIsWork(e.target.value)}
            value={work}
            className="modalInput"
            placeholder="Company"
          />
          <input
            onChange={(e) => setIsPosition(e.target.value)}
            value={position}
            className="modalInput"
            placeholder="Position"
          />
          <input
            value={bio}
            onChange={(e) => setIsBio(e.target.value)}
            className="modalInput"
            placeholder="Bio"
          />

        </div>
        <button type="submit">
            Save
          </button>
      </form>
    </div>
  );
};

export default Modal;
