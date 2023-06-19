import { Author, Post } from "./ListPageExamples/types/listItemTypes";
import { useEffect, useState } from "react";
import { APIModule } from "./httpClient";
import {data} from './sampleResponse'

const redditBasePostURL = "http://api.reddit.com/r/pics/";
getData = async ()=>(
  new Promise((res,rej)=>{
   return res(data)
  }) 
)

export const useRedditPostData = (
  initialValue: Post[],
  defaultFilter: "TOP" | "HOT"
) => {
  const [posts, setPosts] = useState(initialValue);
  const [filter, setFilter] = useState(defaultFilter);
  const [error, setError] = useState(false);


  const updatePost = (newPosts: Post[]) => {
    setPosts((oldPosts) => [...oldPosts, newPosts]);
  };

  const filterPosts = (filter: "TOP" | "HOT") => {};

  useEffect(() => {
    async function fetchData() {
        try {
          const apiResponse = await getData()
            // const apiResponse = await APIModule.get<any>(redditBasePostURL  + "hot.json");
            const {data:{children=[]}} = apiResponse

            const data = filterDataFromAPI(children)
            setPosts(data);
          } catch (e) {
            console.log(e)
            if (e) {
              setError(true);
            }
          }
      }
      fetchData()
  }, []);
  return [posts, filter, setFilter, updatePost, filterPosts];
};
function filterDataFromAPI(children: any) {
  if (!children) return null
  return children.map((p)=>{
    const {data:_post} = p
    const author: Author={
      name: _post.author
    }
    const post: Post={
      thumbnail:_post.thumbnail,
      id:_post.id,
      title: _post.title,
      scores: _post.score,
      commentsCount: _post.num_comments|0,
      creationDate:_post.edited,
      author:author

    }
    return post
  })
}

