"use client";

import { useState } from "react";

import { Input } from "./Input";
import { Checkbox } from "./Checkbox";
import { Button } from "../Button";

import s from "./Form.module.scss";

export const Form = () => {
  const [attendance, setAttendance] = useState<"yes" | "no" | "">("");
  const [fullName, setFullName] = useState("");
  const [plusOneName, setPlusOneName] = useState("");
  const [drinks, setDrinks] = useState<string[]>([]);
  const [otherDrink, setOtherDrink] = useState("");
  const [allergies, setAllergies] = useState("");

  const toggleDrink = (drink: string) => {
    setDrinks((prev) => (prev.includes(drink) ? prev.filter((d) => d !== drink) : [...prev, drink]));
  };

  return (
    <div className={s.form}>
      <h3>АНКЕТА</h3>
      <form className={s.form__wrapper}>
        {/* Присутствие */}
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

        {/* Имя */}
        <div className={s.form__item}>
          <label>Имя Фамилия</label>
          <Input placeholder="Имя Фамилия" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>

        {/* Плюс один */}
        <div className={s.form__item}>
          <label>Будет ли с вами человек +1? Если да, напишите его имя и фамилию</label>
          <Input placeholder="Имя Фамилия" value={plusOneName} onChange={(e) => setPlusOneName(e.target.value)} />
        </div>

        {/* Напитки */}
        <div className={s.form__checkboxWrapper}>
          <p>Предпочтения по напиткам (можно выбрать несколько)</p>
          {["Вино Белое", "Вино Красное", "Виски", "Водка", "Шампанское"].map((drink) => (
            <div key={drink} className={s.form__checkbox}>
              <Checkbox checked={drinks.includes(drink)} onChange={() => toggleDrink(drink)} />
              <label>{drink}</label>
            </div>
          ))}
          <div className={s.form__item}>
            <Input placeholder="Другое" value={otherDrink} onChange={(e) => setOtherDrink(e.target.value)} />
          </div>
        </div>

        {/* Аллергии */}
        <div className={s.form__item}>
          <label>Аллергии, непереносимость продуктов</label>
          <Input placeholder="У меня аллергия на..." value={allergies} onChange={(e) => setAllergies(e.target.value)} />
        </div>

        <div className={s.form__button}>
          <Button>ОТПРАВИТЬ АНКЕТУ</Button>
        </div>
      </form>
    </div>
  );
};
