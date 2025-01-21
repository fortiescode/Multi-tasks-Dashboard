import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/sidebar.css";
import arrowRight from "../assets/icons/lucide--arrow-right-from-line.svg";
import arrowLeft from "../assets/icons/lucide--arrow-left-to-line.svg";
import atom from "../assets/icons/lucide--atom.svg";
import baggage from "../assets/icons/lucide--baggage-claim.svg";
import bell from "../assets/icons/lucide--bell.svg";
import bike from "../assets/icons/lucide--bike.svg";
import briefcase from "../assets/icons/lucide--briefcase-business.svg";
import camera from "../assets/icons/lucide--camera.svg";
import coffee from "../assets/icons/lucide--coffee.svg";
import Icons from "./Icons";
import Links from "./Links";
import home from "../assets/icons/home.svg";
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
      <div className="sideBarList">
        {/* Clicking this icon will toggle the visibility of the links */}
        <Icons
          imgSrc={right}
          className={`right`}
          alt="arrowRight"
          onClick={toggleLinks}
        />
        <hr />

        <div className="wrapper">
          <Link to="/home">
            <Icons imgSrc={home} alt="Home" linkTo="/home" title="home">
              {!showLinks && <Links text="Habites" />}
            </Icons>
          </Link>
          <Link to="/habites">
            <Icons
              imgSrc={atom}
              alt="Habites"
              linkTo="/habites"
              title="Habites"
            >
              {!showLinks && <Links text="Habites" />}
            </Icons>
          </Link>

          <Link to="/baggae">
            <Icons
              imgSrc={baggage}
              alt="baggage"
              linkTo="/baggage"
              title="Travelling"
            >
              {!showLinks && <Links text="Travelling" />}
            </Icons>
          </Link>
          <Link to="/notification">
            <Icons imgSrc={bell} alt="bell" linkTo="/notification" title="Notification">
              {!showLinks && <Links text="Notification" />}
            </Icons>
          </Link>
          <Link to="/exercise">
            <Icons imgSrc={bike} alt="bike" linkTo="/exercise" title="Exercise">
              {!showLinks && <Links text="Exercise" />}
            </Icons>
          </Link>
          <Link to="/work">
            <Icons imgSrc={briefcase} alt="briefcase" linkTo="/work" title="Work">
              {!showLinks && <Links text="Work" />}
            </Icons>
          </Link>
          <Link to="/hobbies">
            <Icons imgSrc={camera} alt="camera" linkTo="/hobbies" title="Hobbies">
              {!showLinks && <Links text="Hobbies" />}
            </Icons>
          </Link>
          <Link to="/morning">
            <Icons imgSrc={coffee} alt="coffee" linkTo="/morning" title="Morning">
              {!showLinks && <Links text="Morning" />}
            </Icons>
          </Link>
        </div>
        <div className="setting">
          <Link to="/setting">
            <Icons imgSrc={setting} alt="setting" linkTo="/setting" title="setting">
              {!showLinks && <Links text="Setting" />}
            </Icons>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
