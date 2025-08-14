import Image from "next/image";

import s from "./WelcomeSection.module.scss";

export const WelcomeSection = () => {
  return (
    <div className={s.welcomeSection}>
      <Image src="/welcome.jpg" alt="Welcome" fill className={s.welcomeSection__image} priority />
      <div className={s.welcomeSection__contentWrapper}>
        <div className={s.welcomeSection__content}>
          <h1>RUSLAN & VALERIIA</h1>
          <p>27 June 2026</p>
        </div>
      </div>
    </div>
  );
};
