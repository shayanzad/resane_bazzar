import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 .066v13.867M.067 7h13.866" stroke="#4A4754" strokeWidth={1.2} />
  </svg>
)

export default SvgComponent