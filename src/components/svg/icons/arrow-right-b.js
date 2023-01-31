import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={14}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.854.146 13.207 4.5 8.854 8.854l-.708-.708L11.293 5H0V4h11.293L8.146.854l.708-.708Z"
      fill="#1D1929"
    />
  </svg>
)

export default SvgComponent
