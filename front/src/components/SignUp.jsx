import React from "react";

export const SignUp = () => {
  return (
    <div className=" w-full h-full py-5 flex flex-col justify-center items-start gap-8">
      <div className="flex justify-start items-center gap-1 ">
        {/* <img src=""/> */}
        <p className="text-[#fff] font-sans text-[22px]">
          Already have an account?{" "}
          <span className="text-[#fffffc] font-sans underline">Log in</span>
        </p>
      </div>

      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex flex-col gap-1 items-start">
          <label className="text-[#fff]">Username</label>
          <input
            type="text"
            className="w-[60%] py-1 px-4 rounded-md bg-white "
            placeholder="Enter your username"
          />
        </div>

        <div className="w-full flex flex-col gap-1 items-start">
          <label className="text-[#fff]">Phone number</label>
          <input
            type="tel"
            className="w-[60%] py-1 px-4 rounded-md bg-white "
            placeholder="Enter your phone number"
          />
        </div>
        <div className="w-full flex flex-col gap-1 items-start">
          <label className="text-[#fff]">Email</label>
          <input
            type="email"
            className="w-[60%] py-1 px-4 rounded-md bg-white "
            placeholder="Enter your email"
          />
        </div>

        <div className="w-full flex flex-col gap-1 items-start">
          <label className="text-[#fff]">Password</label>
          <input
            type="password"
            className="w-[60%] py-1 px-4 rounded-md bg-white "
            placeholder="Create a password"
          />
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <p>Show password</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-1 items-start">
          <label className="text-[#fff]">Confirm Password</label>
          <input
            type="password"
            className="w-[60%] py-1 px-4 rounded-md bg-white "
            placeholder="Enter your password"
          />
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <p>Show password</p>
          </div>
        </div>
      </div>

      <button className="w-fit bg-white rounded-md px-3 py-2">
        Create an account
      </button>
    </div>
  );
};
