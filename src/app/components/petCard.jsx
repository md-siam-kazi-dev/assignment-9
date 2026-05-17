'use client'
import { useState } from "react";


const Badge = ({ children, color }) => {
  const colors = {
    green: { bg: "#EAF3DE", text: "#3B6D11" },
    pink: { bg: "#FBEAF0", text: "#993556" },
    blue: { bg: "#E6F1FB", text: "#185FA5" },
    teal: { bg: "#E1F5EE", text: "#0F6E56" },
    amber: { bg: "#FAEEDA", text: "#854F0B" },
  };
  const c = colors[color] || colors.blue;
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        fontSize: 12,
        fontWeight: 500,
        padding: "3px 10px",
        borderRadius: 999,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
};

const HeartIcon = ({ filled }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#D4537E" : "none"} stroke={filled ? "#D4537E" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const MapPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const CakeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" /><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2 1 2 1" /><path d="M2 21h20" /><path d="M7 8v2" /><path d="M12 8v2" /><path d="M17 8v2" /><path d="M7 4h.01" /><path d="M12 4h.01" /><path d="M17 4h.01" />
  </svg>
);

export default function PetCard({pet}) {
  


  const ageLabel =
    pet.age?.years
      ? `${pet.age.years} yr${pet.age.years > 1 ? "s" : ""}${pet.age.months ? ` ${pet.age.months}mo` : ""}`
      : "Age unknown";

  return (
    
      <div className="mx-auto " style={{
        width: 350,
        background: "#fff",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
      }}>

        {/* Image */}
        <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
          <img
            src={pet.imageUrl}
            alt={pet.petName}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />

          {/* Top row overlays */}
          <div style={{ position: "absolute", top: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Badge color={pet.isAdopted ? "amber" : "green"}>
              {pet.isAdopted ? "Adopted" : "Available"}
            </Badge>
            
          </div>

          {/* Fee badge bottom right */}
          <div style={{ position: "absolute", bottom: 14, right: 14 }}>
            <span style={{
              background: "rgba(255,255,255,0.92)",
              color: "#185FA5",
              fontFamily: "sans-serif",
              fontSize: 14,
              fontWeight: 600,
              padding: "5px 12px",
              borderRadius: 999,
            }}>
              ${pet.adoptionFee}
            </span>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>

          {/* Name + meta row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.5px" }}>
                {pet.petName}
              </h2>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: "#888", fontFamily: "sans-serif" }}>
                {pet.breed} · {pet.species}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-end" }}>
              <Badge color="pink">{pet.gender}</Badge>
              <Badge color="teal">{pet.healthStatus}</Badge>
              {pet.vaccinationStatus?.isVaccinated && <Badge color="blue">Vaccinated</Badge>}
            </div>
          </div>

          {/* Quick stats */}
          <div style={{ display: "flex", gap: 14, marginBottom: 14, fontFamily: "sans-serif", fontSize: 13, color: "#666" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <CakeIcon /> {ageLabel}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <MapPin /> {pet.location?.city}, {pet.location?.state}
            </span>
          </div>

          {/* Description */}
         

          {/* Contact toggle */}
    
            <div style={{
              background: "#f4f9ff",
              border: "0.5px solid #B5D4F4",
              borderRadius: 10,
              padding: "10px 14px",
              marginBottom: 14,
              fontFamily: "sans-serif",
              fontSize: 13,
            }}>
              <p style={{ margin: 0, color: "#888", fontSize: 12 }}>Listed by</p>
              <a href={`mailto:${pet.ownerEmail}`} style={{ color: "#185FA5", textDecoration: "none", fontWeight: 500 }}>
                {pet.ownerEmail}
              </a>
            </div>
          

          {/* Actions */}
          <div style={{ display: "flex", gap: 10 }}>
           
            <button
              style={{
                flex: 2,
                padding: "11px 0",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "sans-serif",
                borderRadius: 12,
                cursor: "pointer",
                border: "none",
                background: "#1D9E75",
                color: "#fff",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Adopt {pet.petName} 🐾
            </button>
          </div>
        </div>
      </div>
    
  );
}