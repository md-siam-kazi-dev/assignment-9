'use client'

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
import Img from "./Img";
import Modal from "./Modal";

const API_URL = "https://ass9-backend-zeta.vercel.app";

export default function PetDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [pet, setPet] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const session = await authClient.getSession();

        if (!session?.data?.user) {
          router.push("/login");
          return;
        }

        setUser(session.data.user);

        const { data: tokenData } = await authClient.token();
        const token = tokenData?.token;

        const res = await fetch(`${API_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const pets = await res.json();
        setPet(pets?.[0] || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPet();
    }
  }, [id, router]);

  if (loading) {
    return <div className="container-div mt-20">Loading...</div>;
  }

  if (!pet) {
    return <div className="container-div mt-20">Pet not found</div>;
  }

  return (
    <div className="container-div mt-30 text-[#1a1410]">
      <section className="grid min-h-screen grid-cols-1 pt-[70px]">
        <div className="relative overflow-hidden">
          <Img img={pet.imageUrl} pname={pet.petName} />
        </div>

        <div className="relative flex flex-col justify-center px-8 py-16 lg:px-20">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#c4854a]">
            {pet?.breed} · {pet?.location?.city}, {pet?.location?.state}
          </p>

          <h1 className="text-[4rem] font-light leading-[0.9] tracking-tight md:text-[6rem]">
            <span className="italic text-[#c4854a]">{pet?.petName}.</span>
          </h1>

          <p className="mt-6 max-w-md text-[17px] leading-8 text-[#7a6f62]">
            A majestic soul with a silky coat and a gentle, independent spirit
            — looking for a calm, loving home to call her own.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#e2d9cc] bg-white px-4 py-2 text-xs text-[#7a6f62]">
              {pet?.age?.value} {pet?.age?.unit}
            </span>
            <span className="rounded-full border border-[#e2d9cc] bg-white px-4 py-2 text-xs text-[#7a6f62]">
              {pet?.gender}
            </span>
            <span className="rounded-full border border-[#b5d4be] bg-[#e8f2eb] px-4 py-2 text-xs text-[#4a7c59]">
              ✓ Vaccinated
            </span>
            <span className="rounded-full border border-[#e8c9a8] bg-[#f7ede0] px-4 py-2 text-xs text-[#c4854a]">
              {pet?.healthStatus}
            </span>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex gap-[10px]">
              <Modal user={user} pet={pet} />
            </div>
            <p className="text-sm text-[#7a6f62]">
              Adoption fee{" "}
              <span className="font-semibold text-black">
                ${pet?.adoptionFee}
              </span>
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
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
              {pet?.description}
            </p>
            <hr className="my-10 border-[#e2d9cc]" />
          </div>

          <div className="grid grid-cols-2 overflow-hidden rounded gap-1">
            {[
              ["Species", pet?.species],
              ["Breed", pet?.breed],
              ["Age", `${pet?.age?.value || ""} Years`],
              ["Gender", pet?.gender],
              ["Adoption Fee", `$${pet?.adoptionFee}`],
              ["Best With", "Only Pet"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border border-[#e2d9cc] bg-[#faf8f4] p-6 rounded-2xl transition hover:bg-[#f7ede0]"
              >
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#7a6f62]">
                  {label}
                </p>
                <h3 className="mt-2 text-3xl font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="health" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-[#c4854a]">
            Health & Wellness
          </p>
          <h2 className="text-5xl">Ready to thrive.</h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-md border border-[#e2d9cc] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-3xl">🩺</div>
              <h3 className="mb-3 text-2xl font-semibold">Health Status</h3>
              <p className="leading-7 text-[#7a6f62]">
                {pet?.petName} is in excellent health and receives regular vet
                care.
              </p>
            </div>

            <div className="rounded border border-[#e2d9cc] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-3xl">💉</div>
              <h3 className="mb-3 text-2xl font-semibold">Vaccinations</h3>

              <p className="leading-7 text-[#7a6f62]">
                Fully vaccinated and protected.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {pet?.vaccinationStatus?.vaccines?.map((vaccine) => (
                  <span
                    key={vaccine}
                    className="rounded-full border border-[#b5d4be] bg-[#e8f2eb] px-4 py-2 text-xs text-[#4a7c59]"
                  >
                    {vaccine}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded border border-[#e2d9cc] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-3xl">🐾</div>
              <h3 className="mb-3 text-2xl font-semibold">Ideal Home</h3>

              <p className="leading-7 text-[#7a6f62]">
                Calm and quiet environments where she can feel safe and loved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}