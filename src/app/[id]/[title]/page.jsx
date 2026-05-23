
import Img from "./Img";


import { Dialog, DialogContent, DialogDescription, DialogHeader , DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default async function  PetDetailsPage({params}) {
    const {id} = await params;

    
  const user = u?.email
  const getData = async (pid) => {
        const res = await fetch(`http://localhost:5000/${pid}`);
        const data = await res.json();
        return data;
    }
   
     const pets =await getData(id);
     const pet = pets[0]
    

  return (
    <div className="container-div mt-30 text-[#1a1410]">
      {/* Header */}
     

      {/* Hero */}
      <section className="grid min-h-screen grid-cols-1 pt-[70px] ">
        {/* Image */}
        <div className="relative overflow-hidden">
          <Img img = {pet.imageUrl} pname={pet.petName} />

        
        </div>

        {/* Content */}
        <div className="relative flex flex-col justify-center  px-8 py-16 lg:px-20">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#c4854a]">
            {pet.breed} · {pet.location.city}, {pet.location.state}
          </p>

          <h1 className="text-[4rem] font-light leading-[0.9] tracking-tight md:text-[6rem]">
           
            <span className="italic text-[#c4854a]">{pet.petName}.</span>
          </h1>

          <p className="mt-6 max-w-md text-[17px] leading-8 text-[#7a6f62]">
            A majestic soul with a silky coat and a gentle, independent spirit
            — looking for a calm, loving home to call her own.
          </p>

          {/* Pills */}
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#e2d9cc] bg-white px-4 py-2 text-xs text-[#7a6f62]">
              {pet.age.value} {pet.age.unit}
            </span>

            <span className="rounded-full border border-[#e2d9cc] bg-white px-4 py-2 text-xs text-[#7a6f62]">
              {pet.gender}
            </span>

            <span className="rounded-full border border-[#b5d4be] bg-[#e8f2eb] px-4 py-2 text-xs text-[#4a7c59]">
              ✓ Vaccinated
            </span>

            <span className="rounded-full border border-[#e8c9a8] bg-[#f7ede0] px-4 py-2 text-xs text-[#c4854a]">
              {pet.healthStatus}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex gap-[10px]">
           <Dialog>
            <DialogTrigger className="rounded-sm bg-[#1a1410] px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:-translate-y-1 hover:bg-[#2d2520]">
              Adopt {pet.petName}
            </DialogTrigger>

            {user? pet.ownerEmail != user.email ? <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden gap-0">
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
            </DialogContent> : <DialogContent>
    <DialogHeader>
      <DialogTitle>This is Your Listed Pet.You cannot Adopt This pet</DialogTitle>
     
    </DialogHeader>
  </DialogContent>: <DialogContent>
    <DialogHeader>
      <DialogTitle>Login or Sign up First To Adopt this Pet</DialogTitle>
     
    </DialogHeader>
  </DialogContent>}</Dialog>
          
          
        </div>

            <p className="text-sm text-[#7a6f62]">
              Adoption fee{" "}
              <span className="font-semibold text-black">
                ${pet.adoptionFee}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-[#c4854a]">
              Her Story
            </p>

            <h2 className="mb-6 text-5xl font-normal leading-tight">
              Quiet grace,
              <br />
              endless wonder.
            </h2>

            <p className="text-[17px] leading-9 text-[#4a4038]">
              {pet.description}
            </p>

            <hr className="my-10 border-[#e2d9cc]" />

            
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 overflow-hidden rounded gap-1 ">
            {[
              ["Species", pet.species],
              ["Breed", pet.breed],
              ["Age", `${pet.age.value} Years`],
              ["Gender", pet.gender],
              ["Adoption Fee", `$${pet.adoptionFee}`],
              ["Best With", "Only Pet"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border border-[#e2d9cc] bg-[#faf8f4] p-6 rounded-2xl transition hover:bg-[#f7ede0]"
              >
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#7a6f62]">
                  {label}
                </p>

                <h3 className="mt-2 text-3xl font-semibold">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health */}
      <section id="health" className=" px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-[#c4854a]">
            Health & Wellness
          </p>

          <h2 className="text-5xl">Ready to thrive.</h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* Card */}
            <div className="rounded-md border border-[#e2d9cc] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-3xl">🩺</div>

              <h3 className="mb-3 text-2xl font-semibold">
                Health Status
              </h3>

              <p className="leading-7 text-[#7a6f62]">
                {pet.petName} is in excellent health and receives regular vet care.
              </p>
            </div>

            {/* Vaccines */}
            <div className="rounded border border-[#e2d9cc] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-3xl">💉</div>

              <h3 className="mb-3 text-2xl font-semibold">
                Vaccinations
              </h3>

              <p className="leading-7 text-[#7a6f62]">
                Fully vaccinated and protected.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {pet.vaccinationStatus.vaccines.map((vaccine) => (
                  <span
                    key={vaccine}
                    className="rounded-full border border-[#b5d4be]  bg-[#e8f2eb] px-4 py-2 text-xs text-[#4a7c59]"
                  >
                    {vaccine}
                  </span>
                ))}
              </div>
            </div>

            {/* Ideal Home */}
            <div className="rounded border border-[#e2d9cc] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-3xl">🐾</div>

              <h3 className="mb-3 text-2xl font-semibold">
                Ideal Home
              </h3>

              <p className="leading-7 text-[#7a6f62]">
                Calm and quiet environments where she can feel safe and loved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section
        id="location"
        className="bg-[#000602] rounded-2xl mb-4 px-6 py-20 text-white lg:px-10"
      >
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-[#e8c9a8]">
              Where to Find Her
            </p>

            <h2 className="text-5xl leading-tight">
              {pet.location.city},
              <br />
              Oregon.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-[#cfc6bb]">
              {pet.petName} is currently under the care of {pet.location.country} Cat Club.
            </p>
          </div>

          {/* Box */}
          <div className="rounded border border-white/10 bg-white/5 p-10">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-[#c4854a]" />

                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#cfc6bb]">
                    City
                  </p>

                  <h3 className="mt-1 text-2xl">
                    {pet.location.city}
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-[#c4854a]" />

                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#cfc6bb]">
                    State
                  </p>

                  <h3 className="mt-1 text-2xl">
                    {pet.location.state}, {pet.location.country}
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-[#4a7c59]" />

                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#cfc6bb]">
                    Shelter Contact
                  </p>

                  <h3 className="mt-1 text-lg">
                    {pet.ownerEmail}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
    </div>
  );
}