import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={8}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m1 1 3 3 3-3" stroke="#1D1929" strokeLinecap="square" />
  </svg>
)

export default SvgComponent
