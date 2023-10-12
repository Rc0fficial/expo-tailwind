import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import img from "./assets/avatar.png";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
  return (
    <View className="flex-1 items-start justify-start bg-white mt-20 mx-5">
     <View className="flex flex-row gap-[7px] items-center">
      <Image source={img} contentFit="cover" />
      <View>
        <View>
        <Text className="font-bold text-[16px]">
        Hello, Priya
        </Text>
        <Text className="text-[#80899A]">
        Dombivali ,Mumbai
        </Text>
        </View>
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
