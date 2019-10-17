import React from "react";

const Spinner = props => {
  const { type } = props;
  let spinner = (
    <span class={`spinner-border text-${type}`} role="status">
      <span class="sr-only">Loading...</span>
    </span>
  );
  if (type === "small")
    spinner = (
      <div class="spinner-border spinner-border-sm" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  return spinner;
};

Spinner.defaultProps = {
  type: "dark",
  small: false
};

export default Spinner;
