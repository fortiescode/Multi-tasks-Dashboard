import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/sidebar.css";
import arrowRight from "../assets/icons/lucide--arrow-right-from-line.svg";
import arrowLeft from "../assets/icons/lucide--arrow-left-to-line.svg";
import atom from "../assets/icons/lucide--atom.svg";
import home from "../assets/icons/home.svg";
import baggage from "../assets/icons/lucide--baggage-claim.svg";
import bell from "../assets/icons/lucide--bell.svg";
import bike from "../assets/icons/lucide--bike.svg";
import briefcase from "../assets/icons/lucide--briefcase-business.svg";
import camera from "../assets/icons/lucide--camera.svg";
import coffee from "../assets/icons/lucide--coffee.svg";
import Icons from "./Icons";
import Links from "./Links";
import setting from "../assets/icons/setting.svg";

const Sidebar = () => {
  // State to track whether the links should be shown or hidden
  const [showLinks, setShowLinks] = useState(true);
  const [right, setRight] = useState(arrowRight);
  // Function to toggle the visibility of links
  const toggleLinks = () => {
    setShowLinks((prevShowLinks) => {
      // Toggle between the right and left arrows based on the new value of showLinks
      const newShowLinks = !prevShowLinks;
      setRight(newShowLinks ? arrowRight : arrowLeft);
      return newShowLinks;
    });
  };

  return (
    <div className="sidebar">
      <div className="sideBarList border border-slate-400/30 ">
        {/* Clicking this icon will toggle the visibility of the links */}
        <img
          src={right}
          className={`${showLinks ? "right" : "left"}`}
          alt="Menu"
          onClick={toggleLinks}
        />
        <hr />

        <div className="wrapper h-[80vh]">
          <Link to="/home">
            <Icons imgSrc={home} alt="Home" linkTo="/">
              {!showLinks ? <Links text="Home" path="/" /> : ""}
            </Icons>
          </Link>
          <Link to="/habites">
            <Icons imgSrc={atom} alt="Habites" linkTo="/habites">
              {!showLinks ? <Links text="Habites" path="/habites" /> : ""}
            </Icons>
          </Link>

          <Link to="/travelling">
            <Icons imgSrc={baggage} alt="travelling" linkTo="/travelling">
              {!showLinks ? <Links text="Travelling" path="/travelling" /> : ""}
            </Icons>
          </Link>
          <Link to="/notification">
            <Icons imgSrc={bell} alt="bell" linkTo="/notification">
              {!showLinks ? (
                <Links text="Notification" path="/notification" />
              ) : (
                ""
              )}
            </Icons>
          </Link>
          <Link to="/exercise">
            <Icons imgSrc={bike} alt="bike" linkTo="/exercise">
              {!showLinks ? <Links text="Exercise" path="/exercise" /> : ""}
            </Icons>
          </Link>
          <Link to="/work">
            <Icons imgSrc={briefcase} alt="briefcase" linkTo="/work">
              {!showLinks ? <Links text="Work" path="/work" /> : ""}
            </Icons>
          </Link>
          <Link to="/hobbies">
            <Icons imgSrc={camera} alt="camera" linkTo="/hobbies">
              {!showLinks ? <Links text="Hobbies" path="/hobbies" /> : ""}
            </Icons>
          </Link>
          <Link to="/morning">
            <Icons imgSrc={coffee} alt="coffee" linkTo="/morning">
              {!showLinks ? <Links text="Morning" path="/morning" /> : ""}
            </Icons>
          </Link>
          <Link to="/setting" className="mt-auto mb-2">
            <Icons imgSrc={setting} alt="setting" linkTo="/setting">
              {!showLinks ? <Links text="Setting" path="/setting" /> : ""}
            </Icons>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
