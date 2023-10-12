import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"
const Notifaction = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.949 7.865v3.33m.02-7.77c-3.68 0-6.66 2.98-6.66 6.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.34 23.34 0 0 0 14.73 0 2.22 2.22 0 0 0 1.2-3.25l-1.27-2.12c-.35-.58-.63-1.61-.63-2.28v-2.1c-.01-3.66-3.01-6.66-6.67-6.66Z"
    />
    <Path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.279 20.245c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35"
    />
    <Circle cx={14.949} cy={6.425} r={6} fill="#FF445E" />
    <Path
      fill="#fff"
      d="M12.849 3.115h4.4v1h-3.35v1.99c.27-.36.86-.66 1.51-.66 1.79 0 2.34 1.33 2.34 2.43 0 1.45-.83 2.55-2.52 2.55-1.5 0-2.37-.83-2.54-1.97h1.11c.15.62.67 1.02 1.44 1.02.98 0 1.42-.67 1.42-1.57 0-.95-.47-1.49-1.42-1.49-.67 0-1.12.37-1.31.91h-1.08v-4.21Z"
    />
  </Svg>
)
export default Notifaction;
