import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={15}
    height={15}
    fill="none"
    style={{cursor:'pointer'}}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>مشاهده</title>
    <path
      d="M13.5 1.5H8m5.5 0V7m0-5.5-9 9m7-2.5v5.5h-10v-10H8"
      stroke="#A5A3A9"
    />
  </svg>
)

export default SvgComponent
