import { Post } from "./types/listItemTypes";
import { StyleSheet, View, Image, Text } from "react-native";
interface ListItemProps {
    data: Post,
    onItemClick?: (data:Post)=>void
}
const STYLES = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        padding:4,
    },
    thumbnail:{
        height:68,
        width:58
    },
    title:{
        paddingHorizontal:2,
        flexShrink:2,
        fontSize:18,
        fontWeight:"bold"
    }
})
export const ListItem = (props: ListItemProps)=>{
    const {thumbnail, title} = props.data
    if(!thumbnail || !title) return null
    return <View style={STYLES.container}>
        <Image source={{uri:"http://a.thumbs.redditmedia.com/yuo9WzcwuF8kxobMqGRzAEtyY7Ate3wsN42iivqXCf4.jpg"}} src={"https://a.thumbs.redditmedia.com/yuo9WzcwuF8kxobMqGRzAEtyY7Ate3wsN42iivqXCf4.jpg"} style={STYLES.thumbnail}></Image>
        <Text style={STYLES.title}>{title}</Text>
    </View>
}