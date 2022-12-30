
    import Navbar from "./Navbar";
    import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import MessageForm from "./MessageForm";
import "./styles/MessageForm.css";
    const Messages = () => {


      return (
            <>
            <div className="Container">
            <Navbar/>
            <div className="MainContent">
            <MessageForm/>
            </div>
            </div>
        </>



      )
    }

    export default Messages
