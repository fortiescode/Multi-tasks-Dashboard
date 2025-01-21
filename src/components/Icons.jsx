import PropTypes from "prop-types";
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

Icons.propTypes = {
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
  className: PropTypes.string,
  linkTo: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Icons;
