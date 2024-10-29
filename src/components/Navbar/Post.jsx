import { Link } from "react-router-dom";

const Post = ({post}) => {
    const{title,id} = post
    return (
        <div className="user-section">
            <h2>Post ID: {id}</h2>
            <h2>Title: {title}</h2>
            <Link to={`/Posts/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;