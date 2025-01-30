/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Links = ({ text, path }) => {
  return <NavLink to={path}>{text}</NavLink>;
};

export default Links;
