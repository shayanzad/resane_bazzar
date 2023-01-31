import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.5.5H7m5.5 0V6m0-5.5-9 9m7-2.5v5.5H.5v-10H7" stroke="#7E5EED" />
  </svg>
)

export default SvgComponent
