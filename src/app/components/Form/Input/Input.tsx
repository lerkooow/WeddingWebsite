import { ChangeEvent } from "react";

import s from "./Input.module.scss";

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ type = "text", placeholder = "Input", value, onChange, required }: InputProps) => {
  return <input type={type} placeholder={placeholder} className={s.input} value={value} onChange={onChange} required={required} />;
};
