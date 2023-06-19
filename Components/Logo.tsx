import { Image } from 'expo-image';
import { StyleProp, View, Text} from 'react-native'
interface LogoProps  {
    url:string
    width?:number
    height?:number
    style:StyleProp<Image>
}
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Logo = (props: LogoProps)=>{
    const {url, style, width, height}= props
    return <View>
      <Text>{url}</Text>
      <Image source={url} placeholder={blurhash} style={style}/>
    </View>
}