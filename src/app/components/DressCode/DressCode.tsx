import Image from "next/image";

import { dressCodeColors } from "@/data";

import s from "./DressCode.module.scss";

export const DressCode = () => {
  return (
    <div className={s.dressCode}>
      <h3>ДРЕССКОД</h3>
      <div className={s.dressCode__wrapperDed}>
        <div className={s.dressCode__container}>
          <Image src="/dresscode.jpg" alt="Dress Code" width={200} height={200} className={s.dressCode__image} />
          <div className={s.dressCode__wrapper}>
            {dressCodeColors.map((item, index) => (
              <div key={index} style={{ backgroundColor: item.color }} className={s.dressCode__color}></div>
            ))}
          </div>
        </div>
        <p className={s.dressCode__description}>
          Мы постарались подобрать удобную цветовую
          <br /> гамму, и нам будет очень приятно, если вы <br /> поддрежите наш выбор
        </p>
      </div>
    </div>
  );
};
