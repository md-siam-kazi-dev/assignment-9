"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { toast } from "sonner";

const Badge = ({ children, color }) => {
  const colors = {
    green: { bg: "#EAF3DE", text: "#3B6D11" },
    pink: { bg: "#FBEAF0", text: "#993556" },
    blue: { bg: "#E6F1FB", text: "#185FA5" },
    teal: { bg: "#E1F5EE", text: "#0F6E56" },
    amber: { bg: "#FAEEDA", text: "#854F0B" },
  };
  const c = colors[color] || colors.blue;
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        fontSize: 12,
        fontWeight: 500,
        padding: "3px 10px",
        borderRadius: 999,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
};

const HeartIcon = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "#D4537E" : "none"}
    stroke={filled ? "#D4537E" : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const MapPin = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CakeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2 1 2 1" />
    <path d="M2 21h20" />
    <path d="M7 8v2" />
    <path d="M12 8v2" />
    <path d="M17 8v2" />
    <path d="M7 4h.01" />
    <path d="M12 4h.01" />
    <path d="M17 4h.01" />
  </svg>
);

export default function PetCard({ pet }) {
  const { data } = useSession();
  
  

  const user = data?.user
  
 
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  

  const handleAdopt =async () => {
   
    try {
    const res = await fetch("http://localhost:5000/pet/req", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pet,
        user,
        pickupDate,
        message,
      }),
    });

    if (!res.ok) throw new Error("Request failed");

    toast.success("Adoption request sent");
  } catch (err) {
    toast.error("Something went wrong");
  }
  };
  return (
    <div className="mx-auto w-[350px] flex justify-between flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={pet.imageUrl}
          alt={pet.petName}
          className="block h-full w-full object-cover"
          onError={(e) => {
            
            e.target.src  = 'https://plus.unsplash.com/premium_vector-1711987763353-9beb6f5d3907?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }}
         />

        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <Badge color={pet.isAdopted ? "amber" : "green"}>
            {pet.isAdopted ? "Adopted" : "Available"}
          </Badge>
        </div>

        <div className="absolute bottom-4 right-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-[#185FA5]">
            ${pet.adoptionFee}
          </span>
        </div>
      </div>

      <div className="px-[1.4rem] pb-6 pt-5">
        <div className="mb-[10px] flex items-start justify-between">
          <div>
            <h2 className="m-0 text-[26px] font-bold tracking-[-0.5px] text-[#1a1a1a]">
              {pet.petName}
            </h2>

            <p className="mt-[2px] text-[13px] text-[#888]">
              {pet.breed} · {pet.species}
            </p>
          </div>

          <div className="flex flex-col items-end gap-[5px]">
            <Badge color="pink">{pet.gender}</Badge>
            <Badge color="teal">{pet.healthStatus}</Badge>

            {pet.vaccinationStatus?.isVaccinated && (
              <Badge color="blue">Vaccinated</Badge>
            )}
          </div>
        </div>

        <div className="mb-[14px] flex gap-[14px] text-[13px] text-[#666]">
          <span className="flex items-center gap-[5px]">
            <CakeIcon />
            {`${pet.age.value} ${pet.age.unit}`}
          </span>

          <span className="flex items-center gap-[5px]">
            <MapPin />
            {pet.location?.city}, {pet.location?.state}
          </span>
        </div>

        <div className="mb-[14px] rounded-[10px] bg-[#f4f9ff] px-[14px] py-[10px] text-[13px]">
          <p className="m-0 text-[12px] text-[#888]">Listed by</p>

          <Link
            href={`mailto:${pet.ownerEmail}`}
            className="font-medium text-[#185FA5] no-underline"
          >
            {pet.ownerEmail}
          </Link>
        </div>

        <div className="flex gap-[10px]">
           <Dialog>
            <DialogTrigger className="flex p-3 w-full justify-center rounded-xl bg-[#1D9E75] text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90">
              Adopt {pet.petName}
            </DialogTrigger>

            {user? pet.ownerEmail != user.email ? <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden gap-0">
              <DialogHeader className="px-6 pt-6 pb-4 bg-[#F0FBF7] border-b border-[#1D9E75]/20">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-full bg-[#1D9E75]/15 flex items-center justify-center">
                    <img
                      src={pet.imageUrl}
                      className="w-8 h-8 rounded-full"
                    ></img>
                  </div>
                  <DialogTitle className="text-lg font-bold text-gray-800">
                    Adopt {pet.petName}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-sm text-gray-500 pl-12">
                  Fill in the details below to start the adoption process.
                </DialogDescription>
              </DialogHeader>

              <div className="px-6 py-5 space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Pet Name
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="text-sm text-gray-500">{pet.petName}</span>
                    <span className="ml-auto text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                      Read only
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Your Name
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="text-sm text-gray-500">{user.name}</span>
                    <span className="ml-auto text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                      Read only
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Email
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="text-sm text-gray-500">{user.email}</span>
                    <span className="ml-auto text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                      Read only
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Pickup Date <span className="text-[#1D9E75]">*</span>
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1D9E75]/40 focus:border-[#1D9E75] transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Tell us a little about yourself and why you'd like to adopt..."
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D9E75]/40 focus:border-[#1D9E75] transition resize-none"
                  />
                </div>
              </div>

              <div className="px-6 pb-6 flex gap-3">
                <DialogClose className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
                  Cancel
                </DialogClose>
                <DialogClose className="flex-1 py-2.5 rounded-xl bg-[#1D9E75] text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed" onClick={handleAdopt}
                  disabled={!pickupDate}>
                
                  Confirm Adoption
               </DialogClose>
              </div>
            </DialogContent> : <DialogContent>
    <DialogHeader>
      <DialogTitle>This is Your Listed Pet.You cannot Adopt This pet</DialogTitle>
     
    </DialogHeader>
  </DialogContent>: <DialogContent>
    <DialogHeader>
      <DialogTitle>Login or Sign up First To Adopt this Pet</DialogTitle>
     
    </DialogHeader>
  </DialogContent>}</Dialog>
          
          <Link
            href={`${pet._id}/${pet.petName}`}
            className="flex p-3 w-full justify-center rounded-xl bg-[#1D9E75]  text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
