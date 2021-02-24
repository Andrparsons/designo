import * as React from "react";

function SvgIconHamburger(props) {
  return (
    <svg width={24} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 0h24v4H0zm0 8h24v4H0zm0 8h24v4H0z"
        fill="#1D1C1E"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgIconHamburger;
