import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DashBoard = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const {token} =  await auth.api.getToken({
    headers: await headers(),
  });
 

  const getData = async () => {
    if (user) {
      const res = await fetch(`http://assignment-9-backendsiam.vercel.app/user/${user.email}`);
      const reqes = await fetch ('http://assignment-9-backendsiam.vercel.app/pet/req',{
        headers:{
          Authorization : `beareer ${token}`
        }
      });
      
      const resData = await res.json();
      const reqData = await reqes.json();
      const x = reqData.filter(p => p.user.id === user.id)
      return {
        resData,
        reqData
      };
    }
  };

  const data = await getData();
  const listing = data.resData.length;
  const myRequest = data.reqData.length;


  return (
    <div className="min-h-screen mt-20 md:mt-40 section-heading">
      <h1 className="section-heading mb-10">DashBoard</h1>
      <div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
        <div className="w-50 h-50   flex-col gap-4 shadow border rounded-2xl flex justify-center items-center "><p className="font-bold text-2xl">Total Listing</p><p className="text-xl font-semibold text-red-500">{listing}</p></div>
        <div className="w-fit mx-auto">
        <div className="w-50 h-50  flex-col gap-4 shadow border rounded-2xl flex justify-center items-center "><p className="font-bold text-2xl">My Requests</p><p className="text-xl font-semibold text-red-500">{myRequest}</p></div>
      </div>
      </div>
      
    </div>
  );
};

export default DashBoard;
