import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { logOut, user } = useContext(AuthContext);
  return (
    <div className="flex h-screen flex-col gap-6">
      <div>
        <h3>{user.email}</h3>
        <Link to="/login" className="btn btn-ghost" onClick={logOut}>
          SignOut
        </Link>
      </div>
    </div>
  );
};

export default Profile;
