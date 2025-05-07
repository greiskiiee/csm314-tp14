"use client";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(null);

  const [userData, setUser] = useState({
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
  });
  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const phoneNumberRef = useRef("");

  const [passError, setPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  const [userAdded, setMessage] = useState(false);

  const router = useRouter();

  const handlePass = () => {
    if (passwordRef.current.value.length < 8) {
      setPassError("Password must be at least 8 characters");
    } else {
      setPassError("");
    }
  };

  const handleConfirmPass = () => {
    if (confirmPasswordRef.current.value === passwordRef.current.value) {
      setConfirmPassError("");
    } else {
      setConfirmPassError("Password does not match");
    }
  };

  const handleSubmit = async (req, res) => {
    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };
    try {
      const user = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/user`,
        data
      );
      setMessage("success");

      setTimeout(() => router.push("/login"), 1500);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.messsage === "email already taken"
      ) {
        setMessage("email_taken");
      } else {
        setMessage("error");
      }
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full py-5 flex flex-col justify-center items-start gap-8">
      <div className="flex justify-start items-center gap-1">
        <p className="text-[#2a2c41] montserrat text-[22px]">
          Already have an account?{" "}
          <span
            className="text-[#fcc050] montserrat underline"
            onClick={() => router.push("/login")}
          >
            Log in
          </span>
        </p>
      </div>

      <div className="w-full flex flex-col gap-3">
        {/* Username */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-[#2a2c41]">Username</Label>
          <Input
            type="text"
            className="w-[60%] py-1 px-4 rounded-md bg-white"
            placeholder="Enter your username"
            ref={usernameRef}
          />
        </div>

        {/* Phone Number */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-[#2a2c41]">Phone number</Label>
          <Input
            type="tel"
            className="w-[60%] py-1 px-4 rounded-md bg-white"
            placeholder="Enter your phone number"
            ref={phoneNumberRef}
          />
        </div>

        {/* Email */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-[#2a2c41]">Email</Label>
          <Input
            type="email"
            className="w-[60%] py-1 px-4 rounded-md bg-white"
            placeholder="Enter your email"
            ref={emailRef}
          />
        </div>

        {/* Password */}
        <div className="grid w-full max-w-sm items-center gap-1.5 relative">
          <Label className="text-[#2a2c41]">Password</Label>
          <div className="relative w-[60%]">
            <Input
              type={showPassword ? "text" : "password"}
              className="w-full py-1 px-4 pr-10 rounded-md bg-white"
              placeholder="Create a password"
              ref={passwordRef}
              onChange={handlePass}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="montserrat text-[12px] text-[#f00]">{passError}</p>
        </div>

        {/* Confirm Password */}
        <div className="grid w-full max-w-sm items-center gap-1.5 relative">
          <Label className="text-[#2a2c41]">Confirm Password</Label>
          <div className="relative w-[60%]">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full py-1 px-4 pr-10 rounded-md bg-white"
              placeholder="Enter your password"
              ref={confirmPasswordRef}
              onChange={handleConfirmPass}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="montserrat text-[12px] text-[#f00]">
            {confirmPassError}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2 ">
        <button
          className="w-fit rounded-md px-3 box-border text-[#f4f4f8] montserrat font-[500] bg-[#fc8d6f] border border-transparent py-2 hover:opacity-80  hover:border-gray-300"
          onClick={handleSubmit}
        >
          Create an account
        </button>

        {userAdded && (
          <p className="montserrat text-[12px] font-[500] text-[#f00]">
            {userAdded === "success"
              ? "Account created successfully!"
              : userAdded === "email_taken"
              ? "Email already taken. Please try another one."
              : "Please fill all fields"}
          </p>
        )}
      </div>
    </div>
  );
};
