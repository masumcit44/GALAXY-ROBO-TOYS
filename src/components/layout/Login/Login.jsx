import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGooglePlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { googleLogin, signIn } = useContext(AuthContext);
  const [error,setError] = useState('')

  const location = useLocation()
    const navigate = useNavigate()
    const from = location.state.from.pathname || '/' 
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(from,  {  replace : true })
      })
      .catch((error) => {
         setError(error)
      });
  };
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        navigate(from,  {  replace : true })
      })
      .catch((error) => {
        setError(error)
     });
  };
  return (
    <div className="flex items-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="w-1/2 mx-auto bg-zinc-100  p-5 ">
        <form
          onSubmit={handleLogin}
          className=''
        >
          <div className="form-control   ">
            <h2 className="text-4xl font-bold text-center">Login Here</h2>
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
              type="text"
              placeholder="password"
              name="password"
              className="input input-bordered"
            />
            <p className="text-end mt-2">
              new here?{" "}
              <Link to="/register" className="text-orange-600 ">
                Sign up{" "}
              </Link>
            </p>
            <p className="text-center text-red-600 font-bold">
                {error.message}
            </p>
          </div>
          <div className="form-control my-4">
            <input type="submit" className="btn btn-info" value="Login" />
          </div>
          <div className="grid grid-cols-12 items-center px-20 ">
            <div className="border-t-2 col-span-5  border-indigo-500" />
            <p className="col-span-2 text-center font-bold ">OR</p>
            <div className="border-t-2 col-span-5 border-indigo-500" />
          </div>
        </form>
        <div className="form-control my-4">
          <button
            onClick={() => handleGoogleSignIn()}
            className="btn btn-accent"
          >
            <FaGooglePlus className="text-4xl mr-2 text-white"></FaGooglePlus>
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
