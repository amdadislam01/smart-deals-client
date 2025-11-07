import React, { useState, useContext } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaUserPlus,
  FaImage,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const SignUp = () => {
  const {
    createUser,
    signInWithGoogle,
    emailInput,
    setEmailInput,
    setLoading,
  } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, and a number (min 6 characters)"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName,
          photoURL,
        })
          .then(() => {
            toast.success("Sign Up successful!");
            e.target.reset();
            setLoading(true);
            navigate("/");
          })
          .catch((err) => console.log("Profile update failed:", err));
      })
      .catch((error) => {
        console.log("SignUp error:", error.message);
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
            'content-type': 'application/json',
          },
          body: JSON.stringify(newUsers),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after users side", data);
            toast.success("Login successful!");
            navigate("/");
          })
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
          Sign Up Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Full Name
            </label>
            <div className="flex items-center border rounded-lg p-3">
              <FaUser className="text-[#58A0C8] mr-3" />
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full outline-none"
              />
            </div>
          </div>
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
              Profile Image URL
            </label>
            <div className="flex items-center border rounded-lg p-3">
              <FaImage className="text-[#58A0C8] mr-3" />
              <input
                type="url"
                name="photo"
                required
                placeholder="Paste your image URL"
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
                placeholder="Create a password"
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
            <p className="text-xs text-gray-500 mt-1">
              Must include uppercase, lowercase, and a number (min 6 characters)
            </p>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#34699A] to-[#58A0C8] text-white py-2.5 rounded-lg font-medium hover:opacity-95 hover:shadow-md transition-all cursor-pointer"
          >
            <FaUserPlus /> SignUp
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
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#34699A] font-semibold hover:underline"
            >
              Login Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
