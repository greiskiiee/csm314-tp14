import { SignUp } from "@/components/SignUp";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[90%] h-[90%] flex justify-center items-center rounded-xl bg-[#ffdcdc]">
        <div className="w-1/2 h-full bg-[url('https://i.pinimg.com/736x/f5/fc/5e/f5fc5e2cfb73b98794e34f24dd599370.jpg')] bg-cover border-amber-600 rounded-l-xl"></div>
        <div className="w-1/2 h-full py-8 px-6">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
