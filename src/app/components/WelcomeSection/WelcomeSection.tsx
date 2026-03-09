import Image from "next/image";
import { motion } from "framer-motion";

import s from "./WelcomeSection.module.scss";

export const WelcomeSection = () => {
  return (
    <div className={s.welcomeSection}>
      <Image src="/welcome.png" alt="Welcome" fill className={s.welcomeSection__image} priority />
      <motion.div className={s.welcomeSection__contentWrapper} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}>
        <div className={s.welcomeSection__content}>
          <motion.p className={s.welcomeSection__firstName} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}>
            Руслан
          </motion.p>
          <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}>
            &
          </motion.span>
          <motion.p className={s.welcomeSection__secondName} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}>
            Валерия
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};
