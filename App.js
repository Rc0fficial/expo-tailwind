import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import img from "./assets/avatar.png";
import location from "./src/components/svg/location.svg";
import SvgComponent from "./src/components/svg/location";
import Notifaction from "./src/components/svg/Notifaction";
import SearchBar from "./src/components/SearchBar";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import Search from "./src/components/svg/Search";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
  return (
    <View className="flex-1 items-start justify-start bg-white mt-20 mx-5 max-w-50">
      <View className="flex flex-row  justify-between w-full">
        <View className="flex flex-row gap-[7px] items-center ">
          <TouchableOpacity>
            <Image source={img} contentFit="cover" />
          </TouchableOpacity>
          <View>
            <View>
              <Text className="font-bold text-[16px]">Hello, Priya</Text>
              <View className="flex flex-row items-center justify-center gap-[4px]">
                <SvgComponent />
                <Text className="text-[#80899A]">Dombivali ,Mumbai</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex flex-row items-center ">
          <TouchableOpacity>
            <Notifaction />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
        <View className="w-full p-2 bg-[#F7F7F7]   rounded-[12px] flex flex-row items-center space-x-2 mt-[24px] pl-[34px] py-[16px]">
          <Search />
          <TextInput style="flex-1" placeholder="Search Doctors" />
        </View>
    </View>
  );
}
