"use client";

import { useState } from "react";
import Image from "next/image";

import { drinksData } from "@/data";

import s from "./Form.module.scss";
import { Modal } from "../Modal";

type Attendance = "yes" | "no" | "plus" | "";

const DrinksBlock = ({ drinks, toggleDrink, otherDrink, setOtherDrink }: { drinks: string[]; toggleDrink: (d: string) => void; otherDrink: string; setOtherDrink: (v: string) => void }) => (
  <div className={s.form__checkboxWrapper}>
    <p>Предпочтения по алкоголю (можно выбрать несколько вариантов)</p>
    {drinksData.map((drink) => (
      <div key={drink} className={s.form__checkbox}>
        <input type="checkbox" id={`drink-${drink}`} checked={drinks.includes(drink)} onChange={() => toggleDrink(drink)} />
        <label htmlFor={`drink-${drink}`}>{drink}</label>
      </div>
    ))}
    <div className={s.form__item}>
      <label>Свой вариант:</label>
      <input className={s.form__input} placeholder="Напишите свой вариант" value={otherDrink} onChange={(e) => setOtherDrink(e.target.value)} />
    </div>
  </div>
);

export const Form = () => {
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

  return (
    <div className={s.form}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
        <span className={s.form__eyebrow}>guest form</span>
        <div className={s.form__titleRow}>
          <h3 className={s.form__title}>Анкета гостя</h3>
        </div>
      </div>
      <form className={s.form__wrapper} onSubmit={handleSubmit}>
        <div className={s.form__radioGroup}>
          <p>Вы будете присутствовать?</p>
          {[
            { value: "yes", label: "Да, обязательно!" },
            { value: "no", label: "Нет, к сожалению(" },
            { value: "plus", label: "Да, и буду с парой" },
          ].map(({ value, label }) => (
            <div key={value} className={s.form__radio}>
              <input type="radio" id={`attendance-${value}`} name="attendance" checked={attendance === value} onChange={() => setAttendance(value as Attendance)} />
              <label htmlFor={`attendance-${value}`}>{label}</label>
            </div>
          ))}
        </div>

        {attendance === "no" && (
          <div className={s.form__fieldsBlock}>
            <div className={s.form__item}>
              <label>Имя Фамилия (обязательно)</label>
              <input className={s.form__input} placeholder="Имя Фамилия" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
          </div>
        )}

        {attendance === "yes" && (
          <div className={s.form__fieldsBlock}>
            <div className={s.form__item}>
              <label>Имя Фамилия (обязательно)</label>
              <input className={s.form__input} placeholder="Имя Фамилия" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className={s.form__item}>
              <label>Дети (имя/возраст, если будут)</label>
              <input className={s.form__input} placeholder="Имя, возраст" value={children} onChange={(e) => setChildren(e.target.value)} />
            </div>
            <div className={s.form__item}>
              <label>Аллергия, предпочтения по еде (рыба, мясо, веганское и т.д.)</label>
              <input className={s.form__input} placeholder="У меня аллергия на..." value={allergies} onChange={(e) => setAllergies(e.target.value)} />
            </div>
            <DrinksBlock drinks={drinks} toggleDrink={toggleDrink} otherDrink={otherDrink} setOtherDrink={setOtherDrink} />
          </div>
        )}

        {attendance === "plus" && (
          <div className={s.form__fieldsBlock}>
            <div className={s.form__item}>
              <label>Имя Фамилия (обязательно)</label>
              <input className={s.form__input} placeholder="Имя Фамилия" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className={s.form__item}>
              <label>Имя Фамилия пары (обязательно)</label>
              <input className={s.form__input} placeholder="Имя Фамилия пары" value={plusOneName} onChange={(e) => setPlusOneName(e.target.value)} />
            </div>
            <div className={s.form__item}>
              <label>Дети (имя/возраст, если будут)</label>
              <input className={s.form__input} placeholder="Имя, возраст" value={children} onChange={(e) => setChildren(e.target.value)} />
            </div>
            <div className={s.form__item}>
              <label>Аллергия, предпочтения по еде (рыба, мясо, веганское и т.д.)</label>
              <input className={s.form__input} placeholder="У меня аллергия на..." value={allergies} onChange={(e) => setAllergies(e.target.value)} />
            </div>
            <DrinksBlock drinks={drinks} toggleDrink={toggleDrink} otherDrink={otherDrink} setOtherDrink={setOtherDrink} />
          </div>
        )}

        {attendance && (
          <div className={s.form__button}>
            <button type="submit" className={s.form__submitBtn} disabled={status === "loading" || !isFormValid}>
              {status === "loading" ? <Image src="/loading.svg" alt="Loading" width={20} height={20} /> : "Отправить"}
            </button>
          </div>
        )}
      </form>

      {showSuccessModal && <Modal closeSuccessModal={closeSuccessModal} />}
    </div>
  );
};
