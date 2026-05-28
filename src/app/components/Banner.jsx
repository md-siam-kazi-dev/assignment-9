'use client'



import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
gsap.registerPlugin(SplitText);

const Banner = () => {
  const router = useRouter()
   
    
  return (
    <div className='banner container-div text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 mt-20 md:mt-40'>
        <div className='left'>
            <h1 className='text-4xl banner-h1 md:text-4xl lg:text-6xl xl:text-7xl
             font-extrabold'>PawNest</h1>
             <p className='text-gray-500 banner-p font-semibold w-8/10 mx-auto md:mt-7 md:mx-0  mt-7 text-[18px] sm:text-xl md:text-2xl' >Find your perfect furry friend and give a rescued pet a loving home.</p>
             <ShimmerButton onClick={() => router.push('/allpets')}  className="shadow-2xl mx-auto md:mx-0 mb-10 banner-btn mt-7">
      <span className="text-center  text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10">
       Adopt Now
      </span>
    </ShimmerButton>
        </div>
        <div className='w-fit'>
            <img src='/hero.jpg' className='w-[300px] banner-img sm:w-[500px] lg:w-[700px] -rotate-12 rounded-4xl '></img>
        </div>
    </div>
  )
}

export default Banner