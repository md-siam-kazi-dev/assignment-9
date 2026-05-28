'use client'

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useRouter } from "next/navigation"



const BTN = () => {
    const router = useRouter();
  return (
    <ShimmerButton onClick={() => router.push('/allpets')}  className="shadow-2xl mx-auto md:mx-0 mb-10 banner-btn mt-7">
          <span className="text-center  text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white mx-auto w-fit dark:to-slate-900/10">
           Adopt Now
          </span>
        </ShimmerButton>
  )
}

export default BTN