import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";
import React from "react";

const DashBoard = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
 

  const getData = async () => {
    if (user) {
      const res = await fetch(`http://localhost:5000/user/${user.email}`);
      const resData = await res.json();
      return resData;
    }
  };

  const data = await getData();
  const listing = data.length;


  return (
    <div className="min-h-screen mt-20 md:mt-40 section-heading">
      <h1 className="section-heading mb-10">DashBoard</h1>
      <div className="w-fit mx-auto">
        <div className="w-50 h-50  flex-col gap-4 shadow border rounded-2xl flex justify-center items-center "><p className="font-bold text-2xl">Total Listing</p><p className="text-xl font-semibold text-red-500">{listing}</p></div>
      </div>
    </div>
  );
};

export default DashBoard;
