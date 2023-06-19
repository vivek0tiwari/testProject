
import { FlatList, SafeAreaView } from 'react-native'
import { ListItem } from './ListPageExamples/ListItem'
import { Post } from './ListPageExamples/types/listItemTypes'
import { useRedditPostData } from './useRedditPageState'

type RedditPageContainerState = {
    data: Post[]
    currentFilter : 'TOP'|'HOT'
}
type RedditPageContainerProps = {
    title: string
}
export const RedditPageContainer = (props: RedditPageContainerProps)=>{
    const [posts, filter, setFilter, updatePost, filterPosts] =  useRedditPostData([],'HOT')
    const renderItem = ({item, index})=>{
        console.log(item)
        return <ListItem data={item} />
    }
    return <SafeAreaView style={{flex:1}}>
        <FlatList 
        data={posts}
        renderItem={renderItem}
    />
        </SafeAreaView>
}   