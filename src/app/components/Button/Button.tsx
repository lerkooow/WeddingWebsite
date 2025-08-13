import { ReactNode } from "react";

import Link from "next/link";

import s from "./Button.module.scss";

type TButtonProps = {
  children: ReactNode;
  href?: string;
  link?: boolean;
};

export const Button = ({ children, href = "#", link }: TButtonProps) => {
  return (
    <>
      {link ? (
        <Link href={href} className={s.link} target="_blank" rel="noopener noreferrer">
          <div>
            <p>{children}</p>
          </div>
        </Link>
      ) : (
        <button className={s.button} type="submit">
          <p>{children}</p>
        </button>
      )}
    </>
  );
};
