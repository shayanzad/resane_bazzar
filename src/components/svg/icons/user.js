import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={16}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M12 4.664a3.998 3.998 0 0 1-4 3.998A3.998 3.998 0 1 1 8 .667c2.21 0 4 1.79 4 3.997ZM14.667 19.322H1.333v-2.663a4 4 0 0 1 4-4h5.334a4 4 0 0 1 4 4v2.663Z"
      stroke="#4A4754"
      strokeLinecap="square"
    />
  </svg>
)

export default SvgComponent
