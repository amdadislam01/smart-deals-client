import React, { useContext, useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaSignInAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { loginUser, signInWithGoogle, emailInput, setEmailInput } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid email or password!");
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const newUsers = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        fetch("https://smart-deals-server-five.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUsers),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after users side", data);
            toast.success("Login successful!");
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Google login failed!");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-sky-100 via-white to-[#E0F8F5]">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-[#58A0C8]">
        <h2 className="text-3xl font-bold text-center text-[#34699A] mb-6">
          Login Now
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Email
            </label>
            <div className="flex items-center border rounded-lg p-3">
              <FaEnvelope className="text-[#58A0C8] mr-3" />
              <input
                type="email"
                name="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Password
            </label>
            <div className="flex items-center border rounded-lg p-3">
              <FaLock className="text-[#58A0C8] mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Enter your password"
                className="w-full outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <p
              onClick={() =>
                navigate("/forget-password", { state: { email: emailInput } })
              }
              className="text-center text-[#34699A] font-medium text-sm cursor-pointer hover:underline mt-3"
            >
              Forgot Password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#34699A] to-[#58A0C8] text-white py-2.5 rounded-lg font-medium hover:opacity-95 hover:shadow-md transition-all cursor-pointer"
          >
            <FaSignInAlt /> Login
          </button>

          <div className="w-full flex items-center justify-center mt-4">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition cursor-pointer"
            >
              <FaGoogle /> Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-[#34699A] font-semibold hover:underline"
            >
              SignUp Now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
