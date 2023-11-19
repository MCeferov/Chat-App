// Components
import Sidebar from "../Components/Sidebar/Sidebar";
import Main from "../Components/Main/Main";

// Router
import { useNavigate } from "react-router";

// Hooks
import { useEffect } from "react";

// Redux
import { useSelector } from "react-redux";

const Home = () => {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/sign-up");
    }
  }, []);

  return (
    <div className="h-[600px] w-full flex gap-2">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
