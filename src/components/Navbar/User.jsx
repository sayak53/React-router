
const User = ({user}) => {
    const{id,name,email,phone} = user
    return (
        <div className="user-section">
            <h2>User ID: {id}</h2>
            <h2>{name}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
        </div>
    );
};

export default User;