/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Links = ({ text, path }) => {
  return (
    <NavLink
      to={path}
      className="transition duration-300 ease-in-out text-[#757575] hover:text-[#3a3a3a]"
    >
      {text}
    </NavLink>
  );
};

export default Links;
