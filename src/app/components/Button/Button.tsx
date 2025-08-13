import { ReactNode } from "react";

import Link from "next/link";

import s from "./Button.module.scss";

type TButtonProps = {
  children: ReactNode;
  href?: string;
};

export const Button = ({ children, href = "#" }: TButtonProps) => {
  return (
    <Link href={href} className={s.button} target="_blank">
      <div>
        <p>{children}</p>
      </div>
    </Link>
  );
};
