import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { IoMdMic } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { IoMdSend } from "react-icons/io";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="mainContainer">
        <div className="greet">
          <p>
            <span>Hello,Tanay</span>
          </p>
          <p>How can i help you today?</p>
        </div>

        {/* Input */}
        <div className="mainBottom">
          <div className="serachBox">
            <input type="text" placeholder="Enter a prompt here.." />
            <div>
              <LuImagePlus className="icons" />
              <IoMdMic className="icons" />
              <IoMdSend className="icons" />
            </div>
          </div>
          <p className="info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
