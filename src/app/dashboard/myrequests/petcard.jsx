'use client'
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

const STATUS_CONFIG = {
  Pending:  { label: "Pending",  dot: "bg-amber-400",   badge: "bg-amber-50 text-amber-700 border border-amber-200"   },
  Approved: { label: "Approved", dot: "bg-emerald-400",  badge: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  Rejected: { label: "Rejected", dot: "bg-rose-400",    badge: "bg-rose-50 text-rose-700 border border-rose-200"     },
};

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);

const PetAvatar = ({ name }) => {
  const initials = name?.slice(0, 2).toUpperCase() || "??";
  const colors = [
    "from-violet-400 to-purple-500",
    "from-sky-400 to-blue-500",
    "from-emerald-400 to-teal-500",
    "from-rose-400 to-pink-500",
    "from-amber-400 to-orange-500",
  ];
  const color = colors[name?.charCodeAt(0) % colors.length] || colors[0];
  return (
    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0`}>
      <span className="text-white font-bold text-lg tracking-wide">{initials}</span>
    </div>
  );
};

const formatDate = (dateStr) => {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

export default function PetRequestCard({ request, onView, onCancel })
 {
    const router = useRouter()
  const [cancelling, setCancelling] = useState(false);
  const status = STATUS_CONFIG[request.status] || STATUS_CONFIG.Pending;

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/pet/req/${id}`,{
        method:'DELETE'
    })
    setCancelling(true);
    await onCancel?.(request._id);
    setCancelling(false);
  };

  return (
    <div className="relative bg-white mt-10 lg:mt-20 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">

      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${
        request.status === "Approved" ? "bg-gradient-to-r from-emerald-400 to-teal-400"
        : request.status === "Rejected" ? "bg-gradient-to-r from-rose-400 to-pink-400"
        : "bg-gradient-to-r from-amber-400 to-orange-400"
      }`} />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-4">
          <img src={request.pet.imageUrl} className="w-13 h-13 rounded-2xl"></img>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-slate-800 text-base truncate">
                {request.pet?.petName || "Unknown Pet"}
              </h3>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${status.badge}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                {status.label}
              </span>
            </div>
            {request.pet?.breed && (
              <p className="text-xs text-slate-400 mt-0.5 truncate">{request.pet.breed}</p>
            )}
          </div>
        </div>

        {/* Dates */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-slate-50 rounded-xl px-3 py-2.5">
            <div className="flex items-center gap-1.5 text-slate-400 mb-1">
              <CalendarIcon />
              <span className="text-[10px] uppercase tracking-widest font-semibold">Requested</span>
            </div>
            <p className="text-xs font-semibold text-slate-600">{formatDate(request.requestDate || request.createdAt)}</p>
          </div>
          <div className="bg-slate-50 rounded-xl px-3 py-2.5">
            <div className="flex items-center gap-1.5 text-slate-400 mb-1">
              <CalendarIcon />
              <span className="text-[10px] uppercase tracking-widest font-semibold">Pickup</span>
            </div>
            <p className="text-xs font-semibold text-slate-600">{formatDate(request.pickupDate)}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => router.push(`/${request.pet._id}/${request.pet.petName}`)}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors duration-150"
          >
            <EyeIcon />
            View Details
          </button>
          <button
            onClick={() => handleDelete(request.pet._id)}
            disabled={cancelling}
            className="flex items-center justify-center gap-1.5 px-4 border border-slate-200 hover:border-rose-200 hover:bg-rose-50 text-slate-500 hover:text-rose-500 text-xs font-semibold py-2.5 rounded-xl transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cancelling ? (
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            ) : (
              <TrashIcon />
            )}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}