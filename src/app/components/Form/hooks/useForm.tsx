"use client";

import { useState } from "react";

export type Attendance = "yes" | "no" | "plus" | "";

export const useForm = () => {
  const [attendance, setAttendance] = useState<Attendance>("");
  const [fullName, setFullName] = useState("");
  const [plusOneName, setPlusOneName] = useState("");
  const [children, setChildren] = useState("");
  const [drinks, setDrinks] = useState<string[]>([]);
  const [otherDrink, setOtherDrink] = useState("");
  const [allergies, setAllergies] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const toggleDrink = (drink: string) => {
    setDrinks((prev) => (prev.includes(drink) ? prev.filter((d) => d !== drink) : [...prev, drink]));
  };

  const isFormValid = (() => {
    if (!attendance) return false;
    if (attendance === "no") return fullName.trim() !== "";
    if (attendance === "yes") return fullName.trim() !== "";
    if (attendance === "plus") return fullName.trim() !== "" && plusOneName.trim() !== "";
    return false;
  })();

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData();

      formData.append("attendance", attendance);
      formData.append("fullName", fullName);
      formData.append("plusOneName", plusOneName);
      formData.append("children", children);
      formData.append("drinks", drinks.join(", "));
      formData.append("otherDrink", otherDrink);
      formData.append("allergies", allergies);

      const res = await fetch("https://script.google.com/macros/s/AKfycbw4llP80CCsCfcPU-n4J8fSvWJW3aMXRIqen57RzNTSPtHVwVvLMS7t69-xOmcxrPz2Jg/exec", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.result === "success") {
        setStatus("success");
        setShowSuccessModal(true);

        setAttendance("");
        setFullName("");
        setPlusOneName("");
        setChildren("");
        setDrinks([]);
        setOtherDrink("");
        setAllergies("");
      } else {
        throw new Error("Ошибка отправки");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return {
    attendance,
    fullName,
    plusOneName,
    children,
    allergies,
    drinks,
    otherDrink,
    isFormValid,
    showSuccessModal,
    status,
    closeSuccessModal,
    handleSubmit,
    setAllergies,
    setChildren,
    setFullName,
    setAttendance,
    setPlusOneName,
    toggleDrink,
    setOtherDrink,
  };
};
