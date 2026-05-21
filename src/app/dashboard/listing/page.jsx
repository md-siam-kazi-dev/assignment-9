'use client'

import { useSession } from "@/lib/auth-client"
import { useEffect } from "react";

const DashBoardListing = () => {
    const {data,isPending} = useSession();
    const user = data?.user;
    const [listing,setListing]
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`http://localhost:3000/email/${user.email}`);
            const data = await res.json();
            return data;
        }
    })
  return (
    <div className='container-div mt-10 border md:mt-40'>
        <h1 className='section-heading text-center'>My Listing</h1>
    </div>
  )
}

export default DashBoardListing