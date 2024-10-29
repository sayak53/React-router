import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2 className="Outlet">Our Users:{users.length}</h2>
            <div className="users-section">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;