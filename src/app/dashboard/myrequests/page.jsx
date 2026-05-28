'use client'

import { authClient, useSession } from "@/lib/auth-client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"  
import PetRequestCard from "./petcard"


const MyRequest = () => {
  const { data } = useSession()
  

  const [requestData, setRequestData] = useState([])
  const router = useRouter()                   
  const user = data?.user

  useEffect(() => {
    if (!user?.id) return                      

    const getData = async () => {
      const {data:tokenData}=await authClient.token();
      const token = tokenData?.token;

      const res = await fetch('http://localhost:5000/pet/req',{
        headers:{
          Authorization : `Beaare ${token}`
        }
      })
      const data = await res.json()
      const x = data.filter(p => p.user.id === user.id)
      setRequestData(x)
    }
    getData()
  }, [data])

  return (
    <div className='container-div mt-20 md:mt-40'>
      <h1 className='section-heading'>My Requests</h1>

      <div className="">
        {requestData.map(x => (   
          <PetRequestCard
            key={x._id}
            request={x}          
            onView={(id) => router.push(`/pets/${id}`)}
            onCancel={async (id) => {
              await fetch(`http://localhost:5000/pet/req/${id}`, { method: "DELETE" })
              setRequestData(x => x.filter(r => r._id !== id))  
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default MyRequest