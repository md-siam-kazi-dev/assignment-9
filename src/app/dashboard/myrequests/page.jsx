'use client'

import { useSession } from "@/lib/auth-client"
import { useEffect, useState } from "react"

const MyRequest = () => {
   const {data} = useSession();
   const [requestData,setRequestData]= useState([])
   const user = data?.user
   console.log(user)
   useEffect(() => {
      const getData = async() => {
         const res = await fetch('http://localhost:5000/pet/req');
         const data = await res.json();
         console.log(data)

         const x = data.filter(p => p.user.id === user?.id);
         console.log(x)
         setRequestData(x);
         
      }
     getData();
      console.log(requestData)
   },[data])
  
   
  return (
     <div className='container-div mt-20 md:mt-40'>
        <h1 className='section-heading'> My Requests</h1>
        
     </div>
  )
}

export default MyRequest