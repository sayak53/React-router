import { useLoaderData, useNavigate } from "react-router-dom";

const Postdetails = () => {
  const postdetails = useLoaderData();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const { body, id, title } = postdetails;
  return (
    <div className="post-section">
      <h2>Information of Post :{id}</h2>
      <h2>Title: {title}</h2>
      <h2>Body: {body}</h2>
      <div className="Outlet">
        <button onClick={handleGoBack} className="btn">Go back to Posts Section</button>
      </div>
    </div>
  );
};

export default Postdetails;
