import Image from "next/image";

import s from "./WelcomeSection.module.scss";

export const WelcomeSection = () => {
  return (
    <div className={s.welcomeSection}>
      <Image src="/welcome.png" alt="Welcome" fill className={s.welcomeSection__image} priority />
      <div className={s.welcomeSection__contentWrapper}>
        <div className={s.welcomeSection__content}>
          <p className={s.welcomeSection__firstName}>Руслан</p>
          <span>&</span>
          <p className={s.welcomeSection__secondName}>Валерия</p>
        </div>
      </div>
    </div>
  );
};
