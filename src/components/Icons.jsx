/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Icons = ({ imgSrc, altText, children, linkTo, onClick }) => {
  return (
    <div className="linkWrapper cursor-pointer py-[0.2rem] px-[0.4rem] transition  ease-in-out border-[1px] border-transparent">
      <NavLink
        to={linkTo}
        className="item font-normal w-[100%] flex flex-row items-center gap-4"
      >
        <img
          src={imgSrc}
          alt={altText}
          className="min-w-8 transition duration-500 ease-in-out hover:rounded-md hover:opacity-80 hover:scale-125 hover:rotate-2"
          onClick={onClick}
        />
        {children}
      </NavLink>
    </div>
  );
};

export default Icons;
