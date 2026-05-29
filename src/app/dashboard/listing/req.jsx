'use client'

import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const Req = ({id}) => {

    

    const [data,setData] = useState([]);
    useEffect(() => {
        const getData = async () => {

        const {data:tokenData} = await authClient.token();
        const token = tokenData?.token;

        const res = await fetch('http://assignment-9-backend-steel.vercel.app/pet/req',{
            headers:{
                Authorization :`b ${token}`
            }
        });
        const xrt = await res.json();
        console.log(id)
        console.log(xrt)

        const filteredData =  xrt.filter(x => x.pet._id === id);
        console.log(filteredData)

        if(filteredData.length === 0){
            
                    setData([
                        {
                            'msg':'No Reqest For This Pet',
                        }
                    ])
              
            
        }else{
            setData(filteredData);
        }
       


    }
  getData();

    
    },[])

    const handleReq =async (req) =>{
        const res = await fetch(`http://assignment-9-backend-steel.vercel.app/pet/req/${req}/${id}`,{
            method:'PATCH'
        });
        
    }
    
  return (
    <div className="p-5 ">
        {data.length === 0 ? <div className="w-fit mx-auto"><Spinner /></div>: (data[0]?.msg ? <div className="text-xl">{data[0]?.msg}</div>:<div>
            {data.map(x => {
                return (
                    <div className="border rounded-2xl flex justify-between items-center p-4">
                        <div className="left">
                            <div className="px-1 w-fit font-bold text-xs  rounded-full bg-amber-200">{x.status}</div>
                            <h1 className="text-xl font-bold">{x.user.name}</h1>
                            <p>{x.message}</p>
                        </div>
                        <div className="right flex flex-col gap-1">
                            
                            {x.status === 'pending' && (
                                <><button onClick={async () => {

                                    handleReq('accepted')
                                    

                                    



                            }} className={`btn btn-primary disabled`}>Accept</button>
                            <button onClick={()=>{
                                handleReq('rejected')
                            }} className="btn btn-secondary">Reject</button></>
                            )}

                        </div>

                    </div>
                )
            })}
        </div>) }
    </div>
  )
}

export default Req