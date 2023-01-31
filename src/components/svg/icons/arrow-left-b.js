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
      d="m2.914 8 3.147 3.146-.707.708L1 7.5l4.354-4.354.707.708L2.914 7h11.293v1H2.914Z"
      fill="#1D1929"
    />
  </svg>
)

export default SvgComponent
