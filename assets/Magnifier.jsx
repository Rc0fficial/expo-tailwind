import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Magnifier = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#46C2DE"
      d="m22.25 20.69-5.664-5.665a8.264 8.264 0 1 0-1.06 1.061l5.663 5.664 1.061-1.06ZM3.5 9.75a6.75 6.75 0 1 1 6.75 6.75A6.757 6.757 0 0 1 3.5 9.75Z"
    />
  </Svg>
)
export default Magnifier
