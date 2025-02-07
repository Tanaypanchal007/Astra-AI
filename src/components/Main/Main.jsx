import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { IoMdMic } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { IoMdSend } from "react-icons/io";
import { Context } from "../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="mainContainer">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,Tanay</span>
              </p>
              <p>How can i help you today?</p>
            </div>
          </>
        ) : (
          <div className="result">
            {/* Title now shows as soon as showResult is true */}
            <div className="resultTitle">
              <img src={assets.user_icon} alt="" />
              <p>{input || recentPrompt}</p>
            </div>
            {/* Separate container for loading/response */}
            <div className="resultData">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="mainBottom">
          <div className="serachBox">
            <input
              type="text"
              placeholder="Enter a prompt here.."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <LuImagePlus className="icons" />
              <IoMdMic className="icons" />
              <IoMdSend className="icons" onClick={() => onSent()} />
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
