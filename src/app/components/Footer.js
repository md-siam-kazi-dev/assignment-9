import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa6";

const socials = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaXTwitter, href: "https://x.com", label: "X" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
];

const links = ["About", "Adopt", "Contact", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="bg-[#0f1117] text-white px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-7 mb-6">

          {/* Brand */}
          <div>
            <p className="text-xl font-medium">
              Paw<span className="text-[#1D9E75]">Nest</span>
            </p>
            <p className="mt-1 text-[13px] text-white/40">
              Find your perfect furry companion
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.06] text-white/60 transition hover:bg-white/[0.12] hover:text-white"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Links */}
          <nav className="flex flex-wrap gap-5">
            {links.map((l) => (
              <Link
                key={l}
                href={`/${l.toLowerCase()}`}
                className="text-[13px] text-white/40 transition hover:text-white/85"
              >
                {l}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[12px] text-white/25">
            © {new Date().getFullYear()} PawFind. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}