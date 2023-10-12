import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={10}
    fill="none"
    {...props}
  >
    <G stroke="#80899A" clipPath="url(#a)">
      <Path d="M5.051 5.596a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z" />
      <Path d="M1.56 3.537c.82-3.608 6.166-3.604 6.983.004.48 2.117-.838 3.909-1.992 5.017a2.164 2.164 0 0 1-3.004 0C2.397 7.45 1.08 5.654 1.56 3.538Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.051 0h10v10h-10z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
