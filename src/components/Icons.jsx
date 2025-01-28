/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Icons = ({ imgSrc, altText,title, children, className, linkTo, onClick }) => {
  return (
    <div className="linkWrapper" >
        <Link to={linkTo} className="item">
          <img
            src={imgSrc}
            alt={altText}
            className={className}
            title={title}
            onClick={onClick}
          />
          {children}
        </Link>
    </div>
  );
};

export default Icons;
