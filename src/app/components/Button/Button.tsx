import { ReactNode } from "react";

import s from "./Button.module.scss";
import Link from "next/link";

type TButtonProps = {
  children: ReactNode;
  href: string;
};

export const Button = ({ children, href }: TButtonProps) => {
  return (
    <Link href={href} className={s.button}>
      <div>
        <p>{children}</p>
      </div>
    </Link>
  );
};
