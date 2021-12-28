import Sidebar from "../components/Sidebar"
import SinglePost from "../components/SinglePost"
import "./single.css"

export const Single = () => {
    return (
        <div className="single">
            <SinglePost />           
            <Sidebar />
        </div>
    )
}
