import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const API_URL = "https://assignment-9-backendsiam.vercel.app";

const DashBoard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const { user } = session;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  let listing = 0;
  let myRequest = 0;

  try {
    const [res, reqes] = await Promise.all([
      fetch(`${API_URL}/user/${user.email}`),
      fetch(`${API_URL}/pet/req`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    ]);

    const resData = await res.json();
    const reqData = await reqes.json();

    listing = resData?.length ?? 0;
    myRequest = reqData?.length ?? 0;

  } catch (err) {
    console.error("Dashboard fetch error:", err);
  }

  return (
    <div className="min-h-screen mt-20 md:mt-40 section-heading">
      <h1 className="section-heading mb-10">DashBoard</h1>
      <div className="w-fit grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto">
        <div className="w-50 h-50 flex-col gap-4 shadow border rounded-2xl flex justify-center items-center">
          <p className="font-bold text-2xl">Total Listing</p>
          <p className="text-xl font-semibold text-red-500">{listing}</p>
        </div>
        <div className="w-fit mx-auto">
          <div className="w-50 h-50 flex-col gap-4 shadow border rounded-2xl flex justify-center items-center">
            <p className="font-bold text-2xl">My Requests</p>
            <p className="text-xl font-semibold text-red-500">{myRequest}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;