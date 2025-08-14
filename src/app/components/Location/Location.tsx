import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../Button";

import s from "./Location.module.scss";

export const Location = () => {
  return (
    <motion.div
      className={s.location}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3>ЛОКАЦИЯ</h3>
      <motion.div className={s.location__map} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
        <Image src="/location.jpg" alt="Location" width={250} height={250} className={s.location__image} />
        <p>Хотим Едим, загородный клуб</p>
        <p className={s.location__address}>Красивая поляна, 4/1</p>
      </motion.div>

      <motion.div className={s.location__button} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
        <Button href="https://go.2gis.com/yf54F" link>
          ПЕРЕЙТИ К КАРТЕ
        </Button>
      </motion.div>
    </motion.div>
  );
};
