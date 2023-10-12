import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import img from "./assets/avatar.png";
import manImg from "./assets/man.png"
import location from "./src/components/svg/location.svg";
import SvgComponent from "./src/components/svg/location";
import Notifaction from "./src/components/svg/Notifaction";
import SearchBar from "./src/components/SearchBar";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import Search from "./src/components/svg/Search";
import Like from "./src/components/svg/like";
import Magnifier from "./assets/Magnifier";
import Calendar from "./assets/Calendar";
import Note from "./assets/Note";
import Profile from "./assets/Profile";
// import Like from "./src/components/svg/like"

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
  const psychologistData = [
    {
      image: {manImg},
      name: 'Dr. Prakash Das',
      title: 'Sr. Psychologist',
      availability: 'Available today',
      bio: 'As Psychologist Dr. Das practices about 7+ years...',
      time: '09:30 AM - 07:00 PM',
      like: <Like/>,
    },
    {
      image: {manImg},
      name: 'Dr. Prakash Das',
      title: 'Sr. Psychologist',
      availability: 'Available today',
      bio: 'As Psychologist Dr. Das practices about 7+ years...',
      time: '09:30 AM - 07:00 PM',
      like: <Like/>,
    },
    {
      image: {manImg},
      name: 'Dr. Prakash Das',
      title: 'Sr. Psychologist',
      availability: 'Available today',
      bio: 'As Psychologist Dr. Das practices about 7+ years...',
      time: '09:30 AM - 07:00 PM',
      like: <Like/>,
    },
    {
      image: {manImg},
      name: 'Dr. Prakash Das',
      title: 'Sr. Psychologist',
      availability: 'Available today',
      bio: 'As Psychologist Dr. Das practices about 7+ years...',
      time: '09:30 AM - 07:00 PM',
      like: <Like/>,
    },
  ];
  return (
    <View className="relative flex-1 items-start justify-start bg-white mt-20 mx-5  ">
      <View className="px-5">
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
      </View>
      <StatusBar style="auto" />
        <View className="w-full p-2 bg-[#F7F7F7]   rounded-[12px] flex flex-row items-center space-x-2 mt-[24px] pl-[34px] py-[16px]">
          <Search />
          <TextInput style="flex-1" placeholder="Search Doctors" />
        </View>
        <ScrollView>
        {psychologistData?.map((item, idx)=>(
          <TouchableOpacity>
          <View key={idx} className="w-full bg-white rounded-[20px] mt-[24px] shadow-lg flex flex-row border border-[#D5D8DE] py-[10px] px-[10px] ">
          <View className="">
          <Image source={manImg} contentFit="cover"  />
          </View>
          <View className="flex flex-row ml-[8px] justify-between ">
          <View className="">
            <Text className="text-xl font-semibold text-[20px]">{item?.name}</Text>
            
            <Text className="text-[#29C1C3] text-[12px] font-medium mt-[10px]">{item.title}</Text>
            <Text className=" text-[#18AB00] font-medium mt-[8px] bg-[#F7F7F7] max-w-[120px] text-center rounded-lg py-[4px]">{item.availability}</Text>
            <Text className="text-[#80899A] font-medium text-[10px] max-w-[140px] mt-[10px]">{item.bio}</Text>
            <Text className="text-[#000000] text-[10px] text-center bg-[#F7F7F7] rounded-[12px] max-w-[130px] px-[8px] py-[8px] font-bold mt-[10px]"> {item.time}</Text>
          </View>
          <TouchableOpacity>
          <View className='ml-10'>
          {item.like}
          </View>
          </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
        ))}
        </ScrollView>
        <View className="w-full py-[12px] px-2 flex flex-row justify-between items-center  ">
          <View className="flex flex-col items-center">
            <Magnifier/>
            <Text className="text-[#46C2DE] text-[12px] font-medium">Find a Doctor</Text>
          </View>
          <View className="flex flex-col items-center">
           <Calendar/>
            <Text className="text-[#000000] text-[12px] font-medium">Appoint..</Text>
          </View>
          <View className="flex flex-col items-center">
            <Note/>
            <Text className="text-[#000000] text-[12px] font-medium">Records</Text>
          </View>
          <View className="flex flex-col items-center">
            <Profile/>
            <Text className="text-[#000000] text-[12px] font-medium">Profile</Text>
          </View>
        </View>
    </View>
  );
}
