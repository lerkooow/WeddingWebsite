import Image from "next/image";

import { schedule } from "@/data";

import s from "./Schedule.module.scss";

export const Schedule = () => {
  return (
    <div className={s.schedule}>
      <h3>ПРОГРАММА ДНЯ</h3>
      {schedule.map((item, index) => (
        <div key={item.time} className={s.schedule__wrapper}>
          <p className={s.schedule__time}>{item.time}</p>
          <p className={s.schedule__title}>{item.title}</p>
          <p className={s.schedule__description}>{item.description}</p>
          {index + 1 < schedule.length && <Image src="/heart.svg" alt="Heart" width={13} height={15} className={s.separator__image} />}
        </div>
      ))}
    </div>
  );
};
