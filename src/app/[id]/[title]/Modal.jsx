'use client'

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Modal = ({user,pet}) => {
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [requested,setRequested] = useState(false);
  const router = useRouter();


  
    
  
    const handleAdopt =async () => {
     
      try {
      const res = await fetch("http://assignment-9-backend-k687.vercel.app/pet/req", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pet,
          user,
          pickupDate,
          message,
        }),
      });
  
       const msg = await res.json();
       if(msg.requested){
         toast.info(msg.requested);
       }else{
        toast.success('Request Accepted')
        router.push('/')

       }
    } catch (err) {
      toast.error("Something went wrong");
    }
    };
    useEffect(() =>{
      const checkRequested = async() => {
        const res = await fetch('http://assignment-9-backend-k687.vercel.app/pet/req');
        const data = await res.json();
        console.log(data)
        data.forEach((p) => {
          if(p.pet._id === pet._id && user.email === p.user.email){
            setRequested(true);
            
          }

        })
        console.log(requested)

      }

      checkRequested();

    },[handleAdopt])
  return (
    <Dialog>
            <DialogTrigger className="rounded-sm bg-[#1a1410] px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:-translate-y-1 hover:bg-[#2d2520]">
              Adopt {pet.petName}
            </DialogTrigger>

            {user? pet.ownerEmail != user.email  ? !requested ?  <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden gap-0">
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
            </DialogContent>:<DialogContent>
    <DialogHeader>
      <DialogTitle>This pet Already requested for Adoption</DialogTitle>
     
    </DialogHeader>
  </DialogContent> : <DialogContent>
    <DialogHeader>
      <DialogTitle>This is Your Listed Pet.You cannot Adopt This pet</DialogTitle>
     
    </DialogHeader>
  </DialogContent>: <DialogContent>
    <DialogHeader>
      <DialogTitle>Login or Sign up First To Adopt this Pet</DialogTitle>
     
    </DialogHeader>
  </DialogContent>}</Dialog>
  )
}

export default Modal