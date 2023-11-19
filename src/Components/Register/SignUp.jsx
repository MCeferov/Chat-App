// Icons
import Envelope from "../../Icons/Envelope";
import Eye from "../../Icons/Eye";
import Profile from "../../Icons/Profile";

// React Rounter
import { Link, useNavigate, useParams } from "react-router-dom";

// Hooks
import { useRef, useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../store/slices/userSlice";

// Supabase
import supabase from "../../supabase";

const SignUp = () => {
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const uploadImage = (e) => {
    setImage(e.target.files[0]);
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    if (
      !emailRef.current.value ||
      !usernameRef.current.value ||
      !passwordRef.current.value ||
      !confirmRef.current.value
    ) {
      return;
    }

    if (passwordRef.current.value !== confirmRef.current.value) return;

    // Register
    const { data, error } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      options: {
        data: {
          username: usernameRef.current.value,
        },
      },
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
    }

    // Adding user
    const { userData, userError } = await supabase.from("users").insert({
      username: data.user.user_metadata.username,
      userId: data.user.id,
    });

    if (userError) {
      console.log(userError);
    }

    if (userData) {
      console.log(userData);
    }

    // Upload Image
    const { imageData, imageError } = await supabase.storage
      .from("images")
      .upload(`public/${data.user.user_metadata.username}`, image);

    navigate("/");
  };

  return (
    <div className="h-[600px]  mx-auto w-1/4 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-bold">Welcome</h1>
        <h5 className="text-xs text-neutral-500 ">Create your account</h5>
      </div>
      <form onSubmit={signupHandler} className="w-full space-y-5">
        {/* Email */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="email">
            Email
          </label>
          <div className="relative h-10">
            <input
              ref={emailRef}
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
        {/* Username */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="username">
            Username
          </label>
          <div className="relative h-10">
            <input
              ref={usernameRef}
              type="text"
              id="username"
              placeholder="hsynmrzyv"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange "
            />
            <Profile
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
              ref={passwordRef}
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

        {/* Confirm Password */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="confirmassowrd">
            Confirm Password
          </label>
          <div className="relative h-10">
            <input
              ref={confirmRef}
              type="text"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <Eye
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <label className="text-gray-500 text-sm " htmlFor="image">
            Upload Image
          </label>
          <div className="relative h-10 mt-2">
            <input
              onChange={uploadImage}
              accept="image/jpeg, image/jpg, image/png"
              type="file"
              id="image"
              placeholder="material@kit.com"
              className="text-sm  text-gray-500"
            />
          </div>
        </div>
        <button className="w-full bg-lightOrange text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
          Sign Up
        </button>
        <p className="text-center text-xs">
          Do you have an account?{" "}
          <Link className="text-lightOrange" to="/sign-in">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
