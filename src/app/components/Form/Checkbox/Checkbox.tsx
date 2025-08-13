import s from "./Checkbox.module.scss";

type TCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const Checkbox = ({ checked, onChange }: TCheckboxProps) => {
  return <input type="checkbox" className={s.checkbox} checked={checked} onChange={(e) => onChange(e.target.checked)} />;
};
