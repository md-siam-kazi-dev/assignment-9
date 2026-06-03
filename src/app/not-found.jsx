import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <DotLottieReact
      src="/not.lottie"
      loop
      autoplay
    />

      <Link href="/" className="btn btn-primary">Back To Home</Link>
    </div>
  );
}