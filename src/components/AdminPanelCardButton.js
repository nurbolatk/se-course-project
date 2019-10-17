import React from "react";
import { Link } from "react-router-dom";
const AdminPanelCardButton = props => {
  const { color, children, url, text } = props;
  return (
    <Link to={url} class="" className={`card-button ${color && "primary"}`}>
      {children}
      <div>{text}</div>
    </Link>
  );
};

export default AdminPanelCardButton;
