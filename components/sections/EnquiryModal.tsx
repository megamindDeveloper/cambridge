"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { useSearchParams } from "next/navigation";
import { COUNTRY_CODES } from "./AdmissionsForm";
import toast from "react-hot-toast";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WEBHOOK_URL = "/api/enquiry";

export default function EnquiryModal({ isOpen = true, onClose }: EnquiryModalProps) {
  const [countryCode, setCountryCode] = useState("+91");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childAge, setChildAge] = useState("");
  const [grade, setGrade] = useState("");
  const [location, setLocation] = useState("");
  const [visitDate, setVisitDate] = useState("");
  
  // ADDED: State to toggle input type cleanly
  const [dateInputType, setDateInputType] = useState("text"); 
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "enquiry_modal",
          parentName,
          phone: `${countryCode}${phone}`,
          childAge,
          grade,
          location,
          visitDate,
          premise: "campbridge",
          utm_source: searchParams.get("utm_source") || "",
          utm_medium: searchParams.get("utm_medium") || "",
          utm_campaign: searchParams.get("utm_campaign") || "",
          campaign: searchParams.get("campaign") || "",
          ad_group: searchParams.get("ad_group") || "",
          ad_name: searchParams.get("ad_name") || "",
          ad_id: searchParams.get("ad_id") || "",
        }),
      });

      setSubmitting(false);
      toast.success("Enquiry submitted. Thank you!");
      onClose();
      setParentName("");
      setPhone("");
      setChildAge("");
      setGrade("");
      setLocation("");
      setVisitDate("");
    } catch (err) {
      console.error("Webhook submission failed:", err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[550px] rounded-[20px] bg-white p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 cursor-pointer top-6 text-gray-400 hover:text-primary transition-colors"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Heading */}
        <div className="mb-8 mt-8 md:mt-0 text-center">
          <h2 className="text-2xl md:text-[30px]  font-bold text-primary leading-tight">
            Admissions Open {new Date().getFullYear()}-{(new Date().getFullYear() + 1).toString().slice(-2)} <br /> Enquire for Nursery <br className="md:hidden"/> to Grade 10
          </h2>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Parent Name"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full border-b border-primary/50 py-2 bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-gray-800 transition-colors"
              required
            />
          </div>

          <div className="flex items-center border-b border-primary/50 py-2 transition-colors focus-within:border-gray-800">
            <select
            aria-label="country-code"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="bg-transparent text-gray-500 font-medium text-base md:text-xl focus:outline-none cursor-pointer appearance-none"
              style={{ WebkitAppearance: "none", MozAppearance: "none" }}
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <span className="mr-4 text-primary/50 font-medium">|</span>
            <input
              type="tel"
              placeholder="Parent Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Child's Age"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              className="w-full border-b border-primary/50 py-2 bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-gray-800 transition-colors"
              required
            />
            <input
              type="text"
              placeholder="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full border-b border-primary/50 py-2 bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-gray-800 transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Located in"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border-b border-primary/50 py-2 bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-gray-800 transition-colors"
              required
            />
          </div>

          {/* UPDATED DATE INPUT SECTION */}
          <div className="relative w-full">
            <input
              type={dateInputType}
              placeholder="Preferred Visit Date"
              value={
                dateInputType === "text" && visitDate
                  ? visitDate.split("-").reverse().join("-") // Reverses "yyyy-mm-dd" into "dd-mm-yyyy" cleanly
                  : visitDate
              }
              onChange={(e) => setVisitDate(e.target.value)}
              onFocus={() => setDateInputType("date")}
              onBlur={() => setDateInputType("text")}
              className="w-full border-b border-primary/50 py-2 bg-transparent text-primary placeholder-primary/90 text-base md:text-xl focus:outline-none focus:border-gray-800 transition-colors"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <Button type="submit" className="" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}