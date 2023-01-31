import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0ZM7 11V8H4V7h3V4h1v3h3v1H8v3H7Z"
      fill="#D2D1D4"
    />
  </svg>
)

export default SvgComponent
