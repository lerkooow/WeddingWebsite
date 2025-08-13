"use client";

import { useState } from "react";

import Image from "next/image";

import { Input } from "./Input";
import { Checkbox } from "./Checkbox";
import { Button } from "../Button";

import { drinksData } from "@/data";

import s from "./Form.module.scss";

export const Form = () => {
  const [attendance, setAttendance] = useState<"yes" | "no" | "">("");
  const [fullName, setFullName] = useState("");
  const [plusOneName, setPlusOneName] = useState("");
  const [drinks, setDrinks] = useState<string[]>([]);
  const [otherDrink, setOtherDrink] = useState("");
  const [allergies, setAllergies] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const toggleDrink = (drink: string) => {
    setDrinks((prev) => (prev.includes(drink) ? prev.filter((d) => d !== drink) : [...prev, drink]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyUBV9V20oh5Py5HnoYWHrx0h-iZsy0oz5zuQLHcTdxY4MmLgYQn5QTeA8x7HqDj3jQ0A/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attendance, fullName, plusOneName, drinks, otherDrink, allergies }),
      });

      setStatus("success");

      setAttendance("");
      setFullName("");
      setPlusOneName("");
      setDrinks([]);
      setOtherDrink("");
      setAllergies("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className={s.form}>
      <h3>АНКЕТА</h3>
      <form className={s.form__wrapper} onSubmit={handleSubmit}>
        <div className={s.form__checkboxWrapper}>
          <p>Вы будете присутствовать?</p>
          <div className={s.form__checkbox}>
            <Checkbox checked={attendance === "yes"} onChange={() => setAttendance("yes")} />
            <label>Да, обязательно!</label>
          </div>
          <div className={s.form__checkbox}>
            <Checkbox checked={attendance === "no"} onChange={() => setAttendance("no")} />
            <label>Нет, к сожалению</label>
          </div>
        </div>

        <div className={s.form__item}>
          <label>Имя Фамилия</label>
          <Input placeholder="Имя Фамилия" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>

        <div className={s.form__item}>
          <label>Будет ли с вами человек +1? Если да, напишите его имя и фамилию</label>
          <Input placeholder="Имя Фамилия" value={plusOneName} onChange={(e) => setPlusOneName(e.target.value)} />
        </div>

        <div className={s.form__checkboxWrapper}>
          <p>Предпочтения по напиткам (можно выбрать несколько)</p>
          {drinksData.map((drink) => (
            <div key={drink} className={s.form__checkbox}>
              <Checkbox checked={drinks.includes(drink)} onChange={() => toggleDrink(drink)} />
              <label>{drink}</label>
            </div>
          ))}
          <div className={s.form__item}>
            <Input placeholder="Другое" value={otherDrink} onChange={(e) => setOtherDrink(e.target.value)} />
          </div>
        </div>

        <div className={s.form__item}>
          <label>Аллергии, непереносимость продуктов</label>
          <Input placeholder="У меня аллергия на..." value={allergies} onChange={(e) => setAllergies(e.target.value)} />
        </div>

        <div className={s.form__button}>
          <Button>
            {status === "loading" ? <Image src="/loading.svg" alt="Loading" width={24} height={24} className={s.form__loadingIcon} /> : status === "success" ? "Отправлено!" : "ОТПРАВИТЬ АНКЕТУ"}
          </Button>
        </div>
      </form>
    </div>
  );
};
