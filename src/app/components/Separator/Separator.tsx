import Image from "next/image";

import s from "./Separator.module.scss";

type TSeparatorProps = {
  hearts?: boolean;
};

export const Separator = ({ hearts }: TSeparatorProps) => {
  return (
    <div className={s.separator}>
      <div className={s.separator__line}></div>
      {hearts && <Image src="/heart.svg" alt="Heart" width={13} height={15} className={s.separator__image} />}
    </div>
  );
};
