import Image from "next/image";

import { Button } from "../Button";

import s from "./Location.module.scss";

export const Location = () => {
  return (
    <div className={s.location}>
      <h3>ЛОКАЦИЯ</h3>
      <div className={s.location__map}>
        <Image src="/location.jpg" alt="Location" width={250} height={250} className={s.location__image} />
        <p>Хотим Едим, загородный клуб</p>
        <p className={s.location__address}>Красивая поляна, 4/1</p>
      </div>
      <div className={s.location__button}>
        <Button href="https://go.2gis.com/yf54F" link>
          ПЕРЕЙТИ К КАРТЕ
        </Button>
      </div>
    </div>
  );
};
