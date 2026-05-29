'use client'

import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const AddPage = () => {
  const {data} = useSession();
  const router = useRouter();
  const user = data?.user;
    const handleAddPet =async (e) => {
      e.preventDefault()
       const {data:tokenData} = await authClient.token();
       const token = tokenData?.token;
        
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data.entries());
        const result= await fetch('http://assignment-9-backend-steel.vercel.app/addpet',{
          method:'POST',
          headers:{
            Authorization:`b ${token}`,
            "content-Type":'application/json',
          },
          body:JSON.stringify(formData),
        })
        console.log(result)
        router.push('/')
        toast.success('Pet Added Successful')


    }
  return (
    
        <div className="container-div mb-30 mt-20 md:mt-40">
      <h1 className="section-heading mb-20">Add a Pet for Adoption</h1>{" "}
      <form className="space-y-4 " onSubmit={handleAddPet}>
       
       <div className="border mb-10 space-y-5 border-gray-200 rounded-2xl p-10 shadow-xl">
        <h1 className="text-2xl font-bold mb-10">Basic Info</h1>
         <div>
          <label className="block mb-1 font-medium text-xl">Pet Name</label>
          <input
            type="text"
            name="petName"
            placeholder="Enter pet name"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Species */}
        <div>
          <label className="block mb-1 font-medium text-xl">Species</label>
          <input
            type="text"
            name="species"
            placeholder="Cat / Dog"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Breed */}
        <div>
          <label className="block text-xl mb-1 font-medium">Breed</label>
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Age */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xl mb-1 font-medium">Age Value</label>
            <input
              type="number"
              name="ageValue"
              placeholder="1"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-xl mb-1 font-medium">Age Unit</label>
            <select name="ageUnit" className="w-full border p-2 rounded">
              <option value="months">Months</option>
              <option value="years">Years</option>
            </select>
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-xl mb-1 font-medium">Gender</label>
          <select name="gender" className="w-full border p-2 rounded">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-xl mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="https://..."
            className="w-full border p-2 rounded"
          />
        </div>
       </div>





        {/* Health Status */}
       <div className="border mb-10 border-gray-200 rounded-2xl space-y-5 p-10 shadow-xl">
        <h1 className="text-2xl font-bold mb-10">Health Info</h1>
         <div>
          <label className="block text-xl mb-1 font-medium">Health Status</label>
          <input
            type="text"
            name="healthStatus"
            placeholder="Healthy"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Vaccinated */}
        <div>
          <label className="flex text-xl items-center gap-2">
            <input type="checkbox" name="isVaccinated" />
            Vaccinated
          </label>
        </div>

        {/* Vaccines */}
        <div>
          <label className="block mb-1 text-xl font-medium">Vaccines</label>
          <input
            type="text"
            name="vaccines"
            placeholder="FVRCP, Rabies, FeLV"
            className="w-full border p-2 rounded"
          />
        </div>
       </div>

        {/* Location */}
       <div className="border space-y-5 mb-10 border-gray-200 rounded-2xl p-10 shadow-xl">
        <h1 className="text-2xl font-bold mb-10">Location</h1>
         <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 text-xl font-medium">City</label>
            <input
              type="text"
              name="city"
              placeholder="Seattle"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-xl mb-1 font-medium">State</label>
            <input
              type="text"
              name="state"
              placeholder="WA"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 text-xl font-medium">Country</label>
            <input
              type="text"
              name="country"
              placeholder="USA"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
       </div>

        {/* Adoption Fee */}
       <div className="border mb-10 border-gray-200 space-y-5 rounded-2xl p-10 shadow-xl">
        <h1 className="text-2xl font-bold mb-10">Listing Info</h1>
         <div>
          <label className="block mb-1 text-xl font-medium">Adoption Fee</label>
          <input
            type="number"
            name="adoptionFee"
            placeholder="85"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block  text-xl mb-1 font-medium">Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Write description..."
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        {/* Owner Email */}
        <div>
          <label className="block mb-1 text-xl font-medium">Owner Email</label>
          <input
            type="email"
            readOnly
            name="ownerEmail"
            placeholder="example@gmail.com"
            value={user?.email}
            className="w-full border p-2 rounded"
          />
        </div>

        
       </div>

        {/* Submit Button */}
        <button type="submit" className="bg-black font-bold text-white px-4 py-2 rounded">
          Add Pet for Adoption
        </button>
      </form>
    </div>
    
  );
};

export default AddPage;
