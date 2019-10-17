import React from "react";

const Alert = props => {
  const { type, msg, additional, close } = props;
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show ${additional}`}
      role="alert"
    >
      {msg}
      <button type="button" className="close" onClick={close}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
