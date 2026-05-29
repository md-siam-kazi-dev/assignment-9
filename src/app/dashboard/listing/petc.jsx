"use client";

import {
  ArrowRight,
  Calendar,
  Check,
  CircleAlertIcon,
  Mail,
  MapPin,
  Mars,
  Pencil,
  Trash2,
  Venus,
  X,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import Req from "./req";

export default function PetCard({ pet, onDelete, onEdit }) {
  const router = useRouter();
  const [openReq, setOpenReq] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [form, setForm] = useState({
    _id: pet._id,
    petName: pet.petName,
    species: pet.species,
    breed: pet.breed,
    gender: pet.gender,
    ageValue: pet.age?.value,
    ageUnit: pet.age?.unit,
    healthStatus: pet.healthStatus,
    vaccinationStatus: pet.vaccinationStatus?.status,
    adoptionFee: pet.adoptionFee,
    isAdopted: pet.isAdopted,
    city: pet.location?.city,
    state: pet.location?.state,
    ownerEmail: pet.ownerEmail,
    imageUrl: pet.imageUrl,
    description: pet.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSave = async () => {
     setEditOpen(false);
    const msg = await fetch("http://assignment-9-backend-k687.vercel.app/addpet", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
   
  };

  const handleDelete = async () => {
    setDeleteOpen(false);
    router.push("/dashboard");

    const msg = await fetch(`http://assignment-9-backend-k687.vercel.app/addpet/${pet._id}`, {
      method: "DELETE",
    });
    toast.success("pet deleted successfully");
  };

  return (
    <>
      {/* ── Card ── */}
      <div className="group w-[340px] rounded-[20px] border border-black/[0.07] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]">
        {/* Image */}
        <div className="relative h-[220px] overflow-hidden">
          <img
            src={form.imageUrl}
            alt={form.petName}
            onError={(e) => (e.currentTarget.src = "/images.png")}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Fee */}
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[13px] font-semibold text-[#185FA5] backdrop-blur-sm">
            ${form.adoptionFee}
          </span>

          {/* Status */}
          <span
            className={`absolute top-3 right-3 rounded-full px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-sm ${
              form.isAdopted ? "bg-gray-500/90" : "bg-[#1D9E75]/90"
            }`}
          >
            {form.isAdopted ? "Adopted" : "Available"}
          </span>
        </div>

        {/* Body */}
        <div className="px-[18px] pb-[18px] pt-4">
          {/* Name row */}
          <div className="mb-1 flex items-start justify-between">
            <div>
              <h2 className="text-[22px] font-medium tracking-[-0.4px] text-gray-900 leading-tight">
                {form.petName}
              </h2>
              <p className="mt-0.5 text-[13px] text-gray-400">
                {form.breed} · {form.species}
              </p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
              {form.gender === "Female" ? (
                <Venus size={16} className="text-pink-500" />
              ) : (
                <Mars size={16} className="text-blue-600" />
              )}
            </div>
          </div>

          {/* Meta */}
          <div className="mt-2.5 mb-3 flex flex-wrap gap-3">
            <span className="flex items-center gap-1.5 text-[13px] text-gray-400">
              <Calendar size={14} />
              {form.age?.value} {form.age?.unit}
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-gray-400">
              <MapPin size={14} />
              {form.location?.city}, {form.location?.state}
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-gray-400 truncate max-w-full">
              <Mail size={14} className="shrink-0" />
              <span className="truncate">{form.ownerEmail}</span>
            </span>
          </div>

          {/* Pills */}
          <div className="mb-3.5 flex flex-wrap gap-1.5">
            <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-[12px] text-green-700">
              {form.healthStatus}
            </span>
            {form.vaccinationStatus?.rabies && (
              <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[12px] text-gray-500">
                Vaccinated
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setDeleteOpen(true)}
              className="flex h-[38px] flex-1 items-center justify-center gap-1.5 rounded-[10px] border border-red-200 bg-red-50 text-[13px] font-medium text-red-700 transition-opacity hover:opacity-80 active:scale-95"
            >
              <Trash2 size={14} />
              Delete
            </button>

            <button
              onClick={() => setEditOpen(true)}
              className="flex h-[38px] flex-1 items-center justify-center gap-1.5 rounded-[10px] border border-blue-200 bg-blue-50 text-[13px] font-medium text-blue-700 transition-opacity hover:opacity-80 active:scale-95"
            >
              <Pencil size={14} />
              Edit
            </button>

            <Link
              href={`/${pet._id}/${form.petName}`}
              className="flex h-[38px] flex-1 items-center justify-center gap-1.5 rounded-[10px] bg-[#1D9E75] text-[13px] font-medium text-white transition-opacity hover:opacity-85 active:scale-95"
            >
              <ArrowRight size={14} />
              Details
            </Link>

            <button
              onClick={() => setOpenReq(true)}
              className="flex h-[38px] flex-1 items-center justify-center gap-1.5 rounded-[10px] border border-blue-200 bg-blue-50 text-[13px] font-medium text-blue-700 transition-opacity hover:opacity-80 active:scale-95"
            >
              <CircleAlertIcon size={14} />
              Requests
            </button>
          </div>
        </div>
      </div>

      {/* ── Delete Confirm Dialog ── */}
      {deleteOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={(e) => e.target === e.currentTarget && setDeleteOpen(false)}
        >
          <div className="w-full max-w-sm rounded-2xl border border-black/[0.07] bg-white p-6">
            <div className="mb-1 flex items-center gap-2">
              <Trash2 size={18} className="text-red-500" />
              <h3 className="text-[16px] font-medium text-gray-900">
                Delete {pet.petName}?
              </h3>
            </div>
            <p className="mb-5 text-[13px] text-gray-400 leading-relaxed">
              This action cannot be undone. The listing for{" "}
              <span className="font-medium text-gray-600">{pet.petName}</span>{" "}
              will be permanently removed.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setDeleteOpen(false)}
                className="flex h-9 flex-1 items-center justify-center rounded-[10px] border border-gray-200 bg-transparent text-[13px] font-medium text-gray-500 transition hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-[10px] bg-red-500 text-[13px] font-medium text-white transition hover:opacity-85 active:scale-95"
              >
                <Trash2 size={14} />
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Edit Dialog ── */}
      {editOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={(e) => e.target === e.currentTarget && setEditOpen(false)}
        >
          <div className="flex w-full max-w-lg flex-col rounded-2xl border border-black/[0.07] bg-white max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <div className="flex items-center gap-2">
                <Pencil size={17} className="text-blue-500" />
                <span className="text-[15px] font-medium text-gray-900">
                  Edit — {pet.petName}
                </span>
              </div>
              <button
                onClick={() => setEditOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition hover:bg-gray-50"
              >
                <X size={15} />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto px-5 py-4 space-y-5 flex-1">
              {/* Basic Info */}
              <Section label="Basic info">
                <Field label="Pet name">
                  <input
                    name="petName"
                    value={form.petName}
                    onChange={handleChange}
                    className={input}
                  />
                </Field>
                <Field label="Species">
                  <select
                    name="species"
                    value={form.species}
                    onChange={handleChange}
                    className={input}
                  >
                    {["Cat", "Dog", "Rabbit", "Bird", "Other"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Breed">
                  <input
                    name="breed"
                    value={form.breed}
                    onChange={handleChange}
                    className={input}
                  />
                </Field>
                <Field label="Gender">
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className={input}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </Field>
              </Section>

              {/* Age */}
              <Section label="Age">
                <Field label="Value">
                  <input
                    name="ageValue"
                    type="number"
                    min={0}
                    value={form.ageValue}
                    onChange={handleChange}
                    className={input}
                  />
                </Field>
                <Field label="Unit">
                  <select
                    name="ageUnit"
                    value={form.ageUnit}
                    onChange={handleChange}
                    className={input}
                  >
                    {["days", "weeks", "months", "years"].map((u) => (
                      <option key={u}>{u}</option>
                    ))}
                  </select>
                </Field>
              </Section>

              {/* Health & Status */}
              <Section label="Health & status">
                <Field label="Health status">
                  <select
                    name="healthStatus"
                    value={form.healthStatus}
                    onChange={handleChange}
                    className={input}
                  >
                    {[
                      "Healthy",
                      "Needs care",
                      "Under treatment",
                      "Recovered",
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Vaccination">
                  <select
                    name="vaccinationStatus"
                    value={form.vaccinationStatus}
                    onChange={handleChange}
                    className={input}
                  >
                    {[
                      "Fully vaccinated",
                      "Partially vaccinated",
                      "Not vaccinated",
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Adoption fee ($)">
                  <input
                    name="adoptionFee"
                    type="number"
                    min={0}
                    value={form.adoptionFee}
                    onChange={handleChange}
                    className={input}
                  />
                </Field>
                <Field label="Adopted?">
                  <select
                    name="isAdopted"
                    value={String(form.isAdopted)}
                    onChange={handleChange}
                    className={input}
                  >
                    <option value="false">No — Available</option>
                    <option value="true">Yes — Adopted</option>
                  </select>
                </Field>
              </Section>

              {/* Location & Contact */}
              <Section label="Location & contact">
                <Field label="City">
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className={input}
                  />
                </Field>
                <Field label="State">
                  <input
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className={input}
                  />
                </Field>
                <Field label="Owner / shelter email" full>
                  <input
                    name="ownerEmail"
                    readOnly
                    type="email"
                    value={form.ownerEmail}
                    onChange={handleChange}
                    className={input}
                  />
                </Field>
                <Field label="Image URL" full>
                  <input
                    name="imageUrl"
                    type="url"
                    value={form.imageUrl}
                    onChange={handleChange}
                    className={input}
                  />
                </Field>
              </Section>

              {/* Description */}
              <Section label="Description">
                <Field label="Description" full>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={3}
                    className={`${input} !h-auto resize-y py-2`}
                  />
                </Field>
              </Section>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-2 border-t border-gray-100 px-5 py-3.5">
              <button
                onClick={() => setEditOpen(false)}
                className="flex h-9 items-center px-4 rounded-[10px] border border-gray-200 text-[13px] font-medium text-gray-500 transition hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex h-9 items-center gap-1.5 px-5 rounded-[10px] bg-[#1D9E75] text-[13px] font-medium text-white transition hover:opacity-85 active:scale-95"
              >
                <Check size={14} />
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Requests Dialog  */}
      {openReq && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={(e) => e.target === e.currentTarget && setDeleteOpen(false)}
        >
          <div className="flex w-full max-w-lg flex-col p-4 rounded-2xl border border-black/[0.07] bg-white max-h-[90vh] overflow-hidden">

          {/* reqest data show here  */}
          <Req id={pet._id} />

          <button className="btn border-1 mx-auto rounded-2xl border-gray-500 w-fit mr-0 btn-outline" onClick={() => setOpenReq(false)}><XIcon /> Close </button>
          
          
          
          </div>
        </div>
      )}
    </>
  );
}

const input =
  "h-9 w-full rounded-lg border border-gray-200 px-3 text-[13px] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition";

function Section({ label, children }) {
  return (
    <div>
      <p className="mb-2.5 text-[11px] font-medium uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1.5">
        {label}
      </p>
      <div className="grid grid-cols-2 gap-3">{children}</div>
    </div>
  );
}

function Field({ label, full, children }) {
  return (
    <div className={`flex flex-col gap-1 ${full ? "col-span-2" : ""}`}>
      <label className="text-[12px] font-medium text-gray-400">{label}</label>
      {children}
    </div>
  );
}
