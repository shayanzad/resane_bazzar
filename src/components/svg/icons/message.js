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
      d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.993c0 .83-.671 1.5-1.5 1.5H7.667L3.8 14.89a.5.5 0 0 1-.8-.4v-2.498H1.5c-.829 0-1.5-.67-1.5-1.5V1.5Zm4 2.497h7v1H4v-1Zm0 2.998h5v1H4v-1Z"
      fill="#D2D1D4"
    />
  </svg>
)

export default SvgComponent
