import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 4 6 7l3 3" stroke="#7E5EED" strokeLinecap="square" />
  </svg>
)

export default SvgComponent
