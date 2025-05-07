"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    // Handle saving profile changes here
    console.log("Profile updated:", { name, email });
  };

  return (
    <div className="w-full ml-10 flex flex-col gap-4 bg-[#d3d3d3] py-2 px-4 rounded-md">
      <div>
        <Label htmlFor="name" className="text-[#2a2c41] text-[12px]">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 p-2 border rounded-md"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-[#2a2c41] text-[12px]">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 p-2 border rounded-md"
        />
      </div>
      <button
        onClick={handleSave}
        className="mt-4 py-2 px-4 bg-[#2a2c41] text-[#f4f4f8] text-[12px] rounded-md"
      >
        Save Changes
      </button>
    </div>
  );
}
