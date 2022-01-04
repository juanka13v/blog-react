import Post from "./Post"
import "./posts.css"

const Posts = ({posts}) => {
    return (
        <div className="posts">
            {posts.map((postData, index) => {
               return <Post post={postData} key={index}/>
            })}
        </div>
    )
}

export default Posts
