import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiClockCountdown } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { HiMenuAlt1 } from "react-icons/hi";

import { GoPlus } from "react-icons/go";
import "./Slidebar.css";

const Slidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="slidebar">
      {/* Top start Here */}
      <div className="top">
        <HiMenuAlt1 onClick={handleOpen} className="menu" />
        <div className="new-chat">
          <GoPlus className="PlusIcon" />
          {open ? <p className="newChatText">New Chat</p> : null}
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <FaRegMessage className="MessageIcon" />
            {open ? <p>What is React...</p> : null}
          </div>
        </div>
      </div>

      {/* Bottom start Here */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <IoIosHelpCircleOutline className="MessageIcon" />
          {open ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <PiClockCountdown className="MessageIcon" />

          {open ? <p>Activity </p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <CiSettings className="MessageIcon" />
          {open ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
