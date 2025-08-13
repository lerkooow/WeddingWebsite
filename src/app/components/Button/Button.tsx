import { ReactNode } from "react";

import Link from "next/link";

import s from "./Button.module.scss";

type TButtonProps = {
  children: ReactNode;
  href?: string;
  link?: boolean;
  disabled?: boolean;
};

export const Button = ({ children, href = "#", link, disabled = false }: TButtonProps) => {
  return link ? (
    <Link href={href} className={s.link} target="_blank" rel="noopener noreferrer">
      <div>
        <p>{children}</p>
      </div>
    </Link>
  ) : (
    <button className={s.button} type="submit" disabled={disabled}>
      <p>{children}</p>
    </button>
  );
};
