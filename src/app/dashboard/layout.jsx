"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  List,
  Inbox,
  PlusCircle,
  Heart,
  MessageCircle,
  Settings,
  PawPrint,
  Plus,
  Eye,
  CheckCircle,
  TrendingUp,
  Menu,
  MenuIcon,
  Cross,
  CrossIcon,
  XIcon,
  ListChecks,
} from "lucide-react";
import { useState } from "react";

// ─── Sidebar nav config ───────────────────────────────────────────────────────
const mainNav = [
  {label:"Overview",href:'/dashboard',icon:ListChecks},
  { label: "My listings", href: "/dashboard/listing",  icon: List },
  { label: "My requests", href: "/dashboard/myrequests", icon: Inbox },
  
];

const manageNav = [
  { label: "Add pet",   href: "/dashboard/addpet",   icon: PlusCircle },
  
];

// ─── Mock data ────────────────────────────────────────────────────────────────





const statusBadge = {
  available: "bg-emerald-50 text-emerald-700",
  pending:   "bg-amber-50 text-amber-700",
  adopted:   "bg-blue-50 text-blue-700",
  approved:  "bg-blue-50 text-blue-700",
};

const statusLabel = {
  available: "Available",
  pending:   "Pending",
  adopted:   "Adopted",
  approved:  "Approved",
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function NavSection({ items, label ,setSideber,sideber}) {
  const pathname = usePathname();
  return (
    <div className="bg-white">
      <p className="px-2 pb-1 pt-4 text-[10px] font-medium uppercase tracking-widest text-gray-400">
        {label}
      </p>
      {items.map(({ label: text, href, icon: Icon, badge }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={() => setSideber(!sideber)}
            className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors ${
              active
                ? "bg-emerald-50 font-medium text-emerald-700"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            }`}
          >
            <Icon size={17} className={active ? "text-emerald-600" : ""} />
            <span className="flex-1">{text}</span>
            {badge && (
              <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                {badge}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}




function Sidebar({sideber,setSideber}) {
  return (
    <div className="flex h-[500px]  sm:h-full   p-10  flex-col gap-1 w-[250px] sm:w-auto absolute bg-white sm:relative  z-10 border-r-gray-300 px-3 py-5 mt-20 md:mt-30">
      <h1 className="font-semibold text-2xl border-b">
        DashBoard
      </h1>
     
    

      <NavSection items={mainNav} label="Main" setSideber={setSideber} sideber={sideber}/>
      <NavSection items={manageNav} label="Manage" />

      {/* User footer */}
      <div className="mt-auto border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2.5 rounded-lg px-2 py-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
            SA
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Sara Ahmed</p>
            <p className="text-[11px] text-gray-400">Shelter admin</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Settings size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}




export default function DashboardLayout({ children }) {
  const [sideber,setSideber] = useState(false);
  
  return (
    <>
    <div className="flex mt-20 ml-5 border-b pb-3 sm:hidden gap-3"> <button onClick={() => setSideber(!sideber)}>{sideber ? <XIcon />:<Menu />}</button> DashBoard</div>
     
    <div className="sm:grid h-screen  sm:grid-cols-[220px_1fr] overflow-hidden bg-white">

      
      
      {sideber && <div className="absolute "><Sidebar sideber={sideber} setSideber={setSideber} /></div>}
      <div className="hidden sm:block "><Sidebar /></div>
      <main className="h-full overflow-y-auto">
        {children}
      </main>
    </div>
    </>
  );
}


