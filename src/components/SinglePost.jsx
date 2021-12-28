import "./singlepost.css"
import imgwraper from "../images/main-foto.jpg"

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={imgwraper} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>jUNAKA</b>
                    </span>
                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem perspiciatis impedit? Aliquam repudiandae quod iure rerum, quidem quo ad consectetur sint laudantium sequi inventore deserunt laboriosam, dolores nam iste.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem perspiciatis impedit? Aliquam repudiandae quod iure rerum, quidem quo ad consectetur sint laudantium sequi inventore deserunt laboriosam, dolores nam iste.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem perspiciatis impedit? Aliquam repudiandae quod iure rerum, quidem quo ad consectetur sint laudantium sequi inventore deserunt laboriosam, dolores nam iste.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem perspiciatis impedit? Aliquam repudiandae quod iure rerum, quidem quo ad consectetur sint laudantium sequi inventore deserunt laboriosam, dolores nam iste.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
