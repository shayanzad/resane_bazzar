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
      d="M9.854.146a.5.5 0 0 0-.708 0L6.5 2.793 12.207 8.5l2.647-2.646a.5.5 0 0 0 0-.708l-5-5ZM0 9.293 5.793 3.5 11.5 9.207 5.707 15H.5a.5.5 0 0 1-.5-.5V9.293ZM8 15h7v-1H8v1Z"
      fill="#D2D1D4"
    />
  </svg>
)

export default SvgComponent
