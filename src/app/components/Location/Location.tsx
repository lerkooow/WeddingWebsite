import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../Button";

import s from "./Location.module.scss";
import Link from "next/link";

export const Location = () => {
  return (
    <motion.div
      className={s.location}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3>Место проведения</h3>

      <motion.div className={s.location__map} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
        <p>Шатер Хотим Едим</p>
        <p className={s.location__address}>г. Уфа, Озеро Архимандритское</p>
        <Image src="/location.png" alt="Location" width={440} height={320} className={s.location__image} />
        <button className={s.location__button}>
          <Link href="https://go.2gis.com/n25sT">Открыть карту</Link>
        </button>
      </motion.div>
    </motion.div>
  );
};
