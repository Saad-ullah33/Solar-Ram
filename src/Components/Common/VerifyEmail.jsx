import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("verificationToken"));
    if (token === storedToken) {
      localStorage.setItem("isVerified", JSON.stringify(true));
      localStorage.removeItem("verificationToken");
      toast.success("Email verified successfully! You can now log in.");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      toast.error("Invalid or expired verification token.");
      setTimeout(() => navigate("/sign-up"), 2000);
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Verifying Your Email
        </h2>
        <p className="text-slate-600">Please wait while we verify your email...</p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default VerifyEmail;