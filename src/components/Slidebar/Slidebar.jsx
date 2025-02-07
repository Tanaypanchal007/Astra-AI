import React, { useContext, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiClockCountdown } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { HiMenuAlt1 } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import "./Slidebar.css";
import { Context } from "../context/Context";

const Slidebar = () => {
  const [open, setOpen] = useState(false);
  const { onSent, previousPrompts, setRecentPrompt, setInput, newChat } =
    useContext(Context);

  const loadPrompt = (prompt) => {
    if (!prompt) return;
    setInput(prompt);
    setRecentPrompt(prompt);
    onSent(prompt);
  };

  return (
    <div className="slidebar">
      <div className="top">
        <HiMenuAlt1 onClick={() => setOpen(!open)} className="menu" />
        <div className="new-chat" onClick={() => newChat()}>
          <GoPlus className="PlusIcon" />
          {open && <p className="newChatText">New Chat</p>}
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>
          {previousPrompts && previousPrompts.length > 0 ? (
            previousPrompts.map((prompt, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(prompt)}
                className="recent-entry"
              >
                <FaRegMessage className="MessageIcon" />
                <p>
                  {open
                    ? prompt.length > 18
                      ? `${prompt.slice(0, 18)}...`
                      : prompt
                    : ""}
                </p>
              </div>
            ))
          ) : (
            <div className="recent-entry">
              <p>{open ? "No recent prompts" : ""}</p>
            </div>
          )}
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <IoIosHelpCircleOutline className="MessageIcon" />
          {open && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <PiClockCountdown className="MessageIcon" />
          {open && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <CiSettings className="MessageIcon" />
          {open && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
