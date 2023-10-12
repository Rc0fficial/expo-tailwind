import React from "react";
import { View, TextInput, Text } from "react-native";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SearchBar = () => {
  return (
    <View style="w-full bg-red-600">
        <View className="flex flex-row gap-6">
            <View>
      <Svg
        width={20}
        height={20}
        fill="none"
        style="w-6 h-6 mr-2"
      >
        <G clipPath="url(#a)">
          <Path
            stroke="#80899A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m18.333 18.334-1.666-1.667m-7.084.833a7.916 7.916 0 1 0 0-15.832 7.916 7.916 0 0 0 0 15.832Z"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h20v20H0z" />
          </ClipPath>
        </Defs>
      </Svg>
      </View>
      <View>
      <TextInput
        style="flex-1"
        placeholder="Search Doctors"
        className="text-red-700"
      />
      </View>
      </View>
    </View>
  );
};

export default SearchBar;
