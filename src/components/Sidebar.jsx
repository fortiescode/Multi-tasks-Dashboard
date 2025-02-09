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
import user from "../assets/icons/user.svg";
import logout from "../assets/icons/logout.svg";
// import User from "../routers/User";

const Sidebar = () => {
  // State to track whether the links should be shown or hidden
  const [showLinks, setShowLinks] = useState(true);
  const [right, setRight] = useState(arrowRight);
  // Function to toggle the visibility of links in the side bar
  const toggleLinks = () => {
    setShowLinks((prevShowLinks) => {
      const newShowLinks = !prevShowLinks;
      setRight(newShowLinks ? arrowRight : arrowLeft);
      return newShowLinks;
    });
  };
  const [userIcon, setUserIcon] = useState(`${user}`);
  const [logedIn, setLogedIn] = useState(false);
  // Toggle the user profile icon / logout icon
  const toggleLoging = () => {
    setLogedIn((prevLoging) => {
      const newLogingStatus = !prevLoging;
      setUserIcon(logedIn ? `${user}` : `${logout}`);
      return newLogingStatus;
    });
  };

  return (
    <div className="sidebar flex min-h-[90vh] items-center max-w-fit">
      <div className="sideBarList  min-h-[80vh] flex flex-col items-end gap-4 drop-shadow-[2px_2px_2px_#80808036] rounded-md text-gray2 max-w-[10em] py-[0.5rem] px-[0.2rem] border border-slate-400/30 bg-gradient-to-bl from-gray-200 to-gray-300 ">
        {/* Clicking this icon will toggle the visibility of the links */}
        <img
          src={right}
          className={`${
            showLinks
              ? "mx-auto my-0 min-w-8 h-auto"
              : "ml-auto opacity-70 min-w-8"
          }`}
          alt="Menu"
          onClick={toggleLinks}
        />
        <hr className="w-8 min-w-[100%] border-[1px] border-gray-400/60" />

        <div className="wrapper flex flex-col justify-between items-start gap-[0.4rem] h-[80vh] ">
          <Link to="/" className="min-w-[100%]">
            <Icons imgSrc={home} alt="Home" linkTo="/">
              {!showLinks ? <Links text="Home" path="/" /> : ""}
            </Icons>
          </Link>
          <Link to="/habites" className="min-w-[100%]">
            <Icons imgSrc={atom} alt="Habites" linkTo="/habites">
              {!showLinks ? <Links text="Habites" path="/habites" /> : ""}
            </Icons>
          </Link>

          <Link to="/travelling" className="min-w-[100%]">
            <Icons imgSrc={baggage} alt="travelling" linkTo="/travelling">
              {!showLinks ? <Links text="Travelling" path="/travelling" /> : ""}
            </Icons>
          </Link>
          <Link to="/notification" className="min-w-[100%]">
            <Icons imgSrc={bell} alt="bell" linkTo="/notification">
              {!showLinks ? (
                <Links text="Notification" path="/notification" />
              ) : (
                ""
              )}
            </Icons>
          </Link>
          <Link to="/exercise" className="min-w-[100%]">
            <Icons imgSrc={bike} alt="bike" linkTo="/exercise">
              {!showLinks ? <Links text="Exercise" path="/exercise" /> : ""}
            </Icons>
          </Link>
          <Link to="/work" className="min-w-[100%]">
            <Icons imgSrc={briefcase} alt="briefcase" linkTo="/work">
              {!showLinks ? <Links text="Work" path="/work" /> : ""}
            </Icons>
          </Link>
          <Link to="/hobbies" className="min-w-[100%]">
            <Icons imgSrc={camera} alt="camera" linkTo="/hobbies">
              {!showLinks ? <Links text="Hobbies" path="/hobbies" /> : ""}
            </Icons>
          </Link>
          <Link to="/morning" className="min-w-[100%]">
            <Icons imgSrc={coffee} alt="coffee" linkTo="/morning">
              {!showLinks ? <Links text="Morning" path="/morning" /> : ""}
            </Icons>
          </Link>
          <div className="mt-auto mb-2 min-w-[100%]">
            <Link to={logedIn ? "/logout" : "/user"} onClick={toggleLoging}>
              <Icons
                imgSrc={userIcon}
                alt={userIcon}
                linkTo={logedIn ? "/logout" : "/user"}
              >
                {!showLinks ? (
                  <Links
                    text={logedIn ? "Logout" : "User"}
                    path={logedIn ? "/user" : "/logout"}
                  />
                ) : (
                  ""
                )}
              </Icons>
            </Link>
          </div>
          <Link to="/setting" className="mb-2 min-w-[100%]">
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