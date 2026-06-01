'use client'

import { authClient, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import PetRequestCard from "./petcard"
import { Spinner } from "@/components/ui/spinner"


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

      const res = await fetch('https://ass9-backend-zeta.vercel.app/pet/req',{
        headers:{
          Authorization : `Beaare ${token}`
        }
      })
      const data = await res.json()
      const x = data.filter(p => p.user.id === user.id)
      if(x.length != 0){
        setRequestData(x)
      }else{
        setRequestData([
          {
            msg:0
          }
        ])
      }
    }
    getData()
  }, [data])

  return (
    <div className='container-div mt-20 md:mt-40'>
      <h1 className='section-heading'>My Requests</h1>

      <div className="">
         {
  requestData.length === 0 ? (
    <div className="flex min-h-screen font-bold text-xl text-center justify-center items-center">
      <Spinner />
    </div>
  ) : requestData[0]?.msg === 0 ? (
    <div className="flex min-h-screen font-bold text-xl text-center justify-center items-center">
      No Request Here
    </div>
  ) : (
    requestData.map((x) => (
      <PetRequestCard
        key={x._id}
        request={x}
        status={x.status}
        onView={(id) => router.push(`/pets/${id}`)}
        onCancel={async (id) => {
          await fetch(
            `https://ass9-backend-zeta.vercel.app/pet/req/${id}`,
            { method: "DELETE" }
          );

          setRequestData((prev) => prev.filter((r) => r._id !== id));
        }}
      />
    ))
  )
}
      </div>
    </div>
  )
}

export default MyRequest