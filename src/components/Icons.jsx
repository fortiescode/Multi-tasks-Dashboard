/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Icons = ({ imgSrc, altText, children, className, linkTo, onClick }) => {
  return (
    <div className="linkWrapper">
      <NavLink to={linkTo} className="item">
        <img
          src={imgSrc}
          alt={altText}
          className={className}
          onClick={onClick}
        />
        {children}
      </NavLink>
    </div>
  );
};

export default Icons;
