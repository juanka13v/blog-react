import React from 'react'
import './post.css'
import postImg from '../images/post-img.jpg' 

const Post = () => {
    return (
        <div className='post'>
            <img src={postImg} alt="" className='postImg'/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet.
                </span>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi libero laudantium fuga sint voluptas unde impedit ea harum vero numquam hic aliquam reprehenderit animi ipsum, corporis quidem optio aspernatur!
            </p>
        </div>
    )
}

export default Post
