import React, { useContext, useEffect, useState } from "react";
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

  const [name, setName] = useState("");

  useEffect(() => {
    // Check if name exists in localStorage
    const storedName = localStorage.getItem("userName");

    if (storedName) {
      setName(storedName); // If exists, set it in state
    } else {
      // Ask for name if not found
      const userName = prompt("Hello! What's your name?");
      if (userName) {
        setName(userName);
        localStorage.setItem("userName", userName); // Store name in localStorage
      } else {
        setName("Guest"); // Fallback if user cancels
      }
    }
  }, []);

  return (
    <div className="main">
      <div className="nav">
        <p>Astra AI</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>

      <div className="mainContainer">
        {!showResult ? (
          <div className="greet">
            <p>
              <span>Helloo,{name}</span>
            </p>
            <p>How can I help you today?</p>
          </div>
        ) : (
          <div className="result">
            <div className="resultTitle">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="resultData">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
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
              placeholder="Enter a prompt here..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <LuImagePlus className="icons" />
              <IoMdMic className="icons" />
              {input.length > 0 ? (
                <IoMdSend className="icons" onClick={() => onSent()} />
              ) : (
                ""
              )}
            </div>
          </div>
          <p className="info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
