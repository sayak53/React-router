import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
        <div>
            <h2 className="Outlet">All the Posts:{posts.length}</h2>
        </div>
        <div className="users-section">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
        </div>
    );
};

export default Posts;