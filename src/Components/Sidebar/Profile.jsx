// Icons
import ProfileIcon from "../../Icons/Profile";

// Router
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../store/slices/userSlice";

const Profile = () => {
  const dispatch = useDispatch();

  const resetUser = () => {
    dispatch(userSliceActions.setUser({ id: null, username: null }));
  };

  return (
    <Link to="/sign-up">
      <button
        onClick={resetUser}
        className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center"
      >
        <ProfileIcon className="h-5 w-5" color="white" />
      </button>
    </Link>
  );
};

export default Profile;
