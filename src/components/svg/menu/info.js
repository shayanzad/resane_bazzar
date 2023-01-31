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
      d="M15 7.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0ZM7 5V3.99h1V5H7Zm1 2v3h1v1H6v-1h1V8H6V7h2Z"
      fill="#D2D1D4"
    />
  </svg>
)

export default SvgComponent
