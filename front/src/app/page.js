import { SignUp } from "@/components/SignUp";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#2a2c41]">
      <div className="w-[90%] h-[90%] flex justify-center items-center rounded-xl ">
        <div className="w-1/2 h-full bg-[#f4f3f8] rounded-l-xl flex flex-col justify-center items-center py-20 gap-6">
          <p className="text-[#2a2c41] montserrat text-[52px] font-[500] ">
            Welcome Back
          </p>
          <p className="text-[#fcc050] montserrat text-[92px] font-[600] text-shadow-lg/30 ">
            EatWell+
          </p>
        </div>
        <div className="w-1/2 h-full py-8 px-6 bg-[#f4f3f8] rounded-r-xl">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
