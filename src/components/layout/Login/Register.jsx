import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGooglePlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";

const Register = () => {
    const { googleLogin, signUp } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/' 
  const handleLogin = (event) => {
    setError("")
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const url = form.url.value;
    const password = form.password.value;
    console.log(email, password);
    
    signUp(email, password)
      .then((res) => {
        console.log(res.user);
        res.user.displayName = name;
        res.user.photoURL = url;
        navigate(from,  {  replace : true })
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleGoogleSignIn = () => {
    setError("")
    googleLogin()
      .then((res) => {
        console.log(res.user);
        navigate(from,  {  replace : true })
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div className="flex items-center h-screen bg-gradient-to-r from-amber-500 via-green-100 to-red-300">
      <div className="w-1/2 mx-auto rounded-md bg-zinc-100  p-5 ">
        <form onSubmit={handleLogin} className="">
          <div className="form-control   ">
            <h2 className="text-4xl font-bold text-center">Sign Up Here</h2>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control   ">
            
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="url"
              className="input input-bordered"
            />
            <p className="text-end my-2">
              already have an account?{" "}
              <Link to="/login" className="underline text-orange-600 ">
                Log In{" "}
              </Link>
            </p>
            <p className="text-center text-red-600 font-bold">
              {error.message}
            </p>
          </div>
          <div className="form-control ">
            <input type="submit" className="btn btn-info" value="Sign Up" />
          </div>
          <div className="grid grid-cols-12 items-center px-20 ">
            <div className="border-t-2 col-span-5  border-indigo-500" />
            <p className="col-span-2 text-center font-bold ">OR</p>
            <div className="border-t-2 col-span-5 border-indigo-500" />
          </div>
        </form>
        <div className="form-control ">
          <button
            onClick={() => handleGoogleSignIn()}
            className="btn btn-accent"
          >
            <FaGooglePlus className="text-4xl mr-2 text-white"></FaGooglePlus>
            SignUp With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
