// Icons
import Envelope from "../../Icons/Envelope";
import Eye from "../../Icons/Eye";

// React Rounter
import { Link, useNavigate } from "react-router-dom";

// Hooks
import { useRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../store/slices/userSlice";

// Supabase
import supabase from "../../supabase";

const SignUp = () => {
  const emalRef = useRef();
  const passportRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInHandler = async (e) => {
    e.preventDefault();

    if (!emalRef.current.value || !passportRef.current.value) return;

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emalRef.current.value,
      password: passportRef.current.value,
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      dispatch(
        userSliceActions.setUser({
          id: data.user.id,
          username: data.user.user_metadata.username,
        })
      );
      navigate("/");
    }
  };

  return (
    <div className="h-[600px]  mx-auto w-1/4 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-bold">Welcome Back</h1>
        <h5 className="text-xs text-neutral-500 ">Login in to your account</h5>
      </div>
      <form onSubmit={signInHandler} className="w-full space-y-5">
        {/* Email */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="email">
            Email
          </label>
          <div className="relative h-10">
            <input
              ref={emalRef}
              type="email"
              id="email"
              placeholder="material@kit.com"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange "
            />
            <Envelope
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="password">
            Passowrd
          </label>
          <div className="relative h-10">
            <input
              ref={passportRef}
              type="text"
              id="passowrd"
              placeholder="6+ strong character"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <Eye
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        <button className="w-full bg-lightOrange text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
          Sign In
        </button>
        <p className="text-center text-xs">
          Don't you have an account?{" "}
          <Link className="text-lightOrange" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
