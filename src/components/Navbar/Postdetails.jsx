import { useLoaderData } from "react-router-dom";

const Postdetails = () => {
    const postdetails = useLoaderData();
    const{body,id,title} = postdetails
    return (
        <div className="post-section">
            <h2>Information of Post :{id}</h2>
            <h2>Title: {title}</h2>
            <h2>Body: {body}</h2>
        </div>
    );
};

export default Postdetails;