import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../Styles/Style";

const Signup = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState(""); // email or phone
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const userIdentifierFromLocalstorage = JSON.parse(localStorage.getItem("email"));

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const pkPhoneRegex = /^(?:\+92|0)?3[0-9]{9}$/;

    // Normalize identifier
    let normalizedIdentifier = identifier.trim();
    if (normalizedIdentifier.startsWith("+92")) {
      normalizedIdentifier = normalizedIdentifier.replace("+92", "0");
    }

    // Validate input
    if (!gmailRegex.test(normalizedIdentifier) && !pkPhoneRegex.test(normalizedIdentifier)) {
      toast.error(
        "Only @gmail.com emails or Pakistani phone numbers (03XXXXXXXXX or +92XXXXXXXXXX) with 11 digits are allowed."
      );
      return;
    }

    // Check if already registered
    if (normalizedIdentifier === userIdentifierFromLocalstorage) {
      toast.error(`The identifier "${identifier}" is already registered.`);
      return;
    }

    const verificationToken = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

    // Save data
    localStorage.setItem("email", JSON.stringify(normalizedIdentifier));
    localStorage.setItem("password", JSON.stringify(password));
    localStorage.setItem("userName", JSON.stringify(name));
    localStorage.setItem("PhotoUrl", JSON.stringify(avatar ? URL.createObjectURL(avatar) : ""));
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
    localStorage.setItem("isVerified", JSON.stringify(false));
    localStorage.setItem("verificationToken", JSON.stringify(verificationToken));

    toast.success("Account created! Please verify your account.", {
      onClick: () => navigate(`/verify-email/${verificationToken}`),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Already registered?{" "}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Email or Phone */}
            <div>
              <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                Email or Phone Number
              </label>
              <input
                type="text"
                name="identifier"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="example@gmail.com or 03XXXXXXXXX"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                    size={22}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                    size={22}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            {/* Avatar Upload */}
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border">
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <RxAvatar className="text-gray-400 text-2xl" />
                )}
              </div>

              <label
                htmlFor="avatar-upload"
                className="cursor-pointer px-4 py-2 bg-blue-50 border border-blue-300 text-sm rounded-md text-blue-700 hover:bg-blue-100"
              >
                Upload Photo
                <input
                  type="file"
                  id="avatar-upload"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileInputChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default Signup;