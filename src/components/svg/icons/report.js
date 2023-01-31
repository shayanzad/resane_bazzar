import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1v13.333A1.666 1.666 0 0 0 2.667 16H16"
      stroke="#D2D1D4"
      strokeWidth={1.25}
      strokeMiterlimit={5.759}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m4.333 10.168 3.334-3.333L11 10.168l5-5"
      stroke="#D2D1D4"
      strokeWidth={1.25}
      strokeMiterlimit={5.759}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 5.168H16v2.5"
      stroke="#D2D1D4"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
