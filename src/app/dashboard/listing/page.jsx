"use client";

import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { CakeIcon, MapPin } from "lucide-react";
import Link from "next/link";
import { Button, Modal, Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import PetCard from "./petc";


const DashBoardListing = () => {
  const { data } = useSession();

  const user = data?.user;

  const [listing, setListing] = useState([]);
  const [ex, setEx] = useState("");

  // modal state
  const [open, setOpen] = useState(false);
const router = useRouter()
  useEffect(() => {
    const getData = async () => {
      if (user) {
        const res = await fetch(
          `http://localhost:5000/user/${user.email}`
        );

        const resData = await res.json();

        if (resData.length === 0) {
          setEx("No Listing Here");
        } else {
          setListing(resData);
        }
      }
    };

    getData();
  }, [user?.email]);

  // DELETE FUNCTION
  const handleDelete = async (id) => {
  
     const result =  await fetch(`http://localhost:5000/pet/${id}`, {
        method: "DELETE",
      });
    const res = await result.json();
    setOpen(false)
    console.log(res)

      
      
  }

  return (
    <div className="container-div mt-20 md:mt-40">
      <h1 className="section-heading text-center mb-10">
        My Listing
      </h1>

      {listing.length === 0 ? (
        <div className="h-screen text-2xl flex justify-center items-center container-div">
          {ex === "" ? <Spinner /> : <h1>{ex}</h1>}
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2">
          {listing.map((pet) => {
            return (
             <PetCard key={pet.id} pet ={pet} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DashBoardListing;