import * as React from "react";

function SvgIconError(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={10} cy={10} r={10} fill="#FFF" />
        <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
      </g>
    </svg>
  );
}

export default SvgIconError;
