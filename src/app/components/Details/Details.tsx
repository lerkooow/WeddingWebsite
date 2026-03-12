import { motion } from "framer-motion";
import s from "./Details.module.scss";

export const Details = () => {
  return (
    <motion.div className={s.details} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <span className={s.details__eyebrow}>details</span>
      <div className={s.details__titleRow}>
        <h3 className={s.details__title}>Детали</h3>
      </div>

      <div className={s.details__container}>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
          Чтобы праздник прошёл комфортно для всех гостей, мы подготовили анкету. Пожалуйста, заполните её до <strong style={{ color: "#4a6a8a" }}>26.05.2026</strong>
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
          Если у вас возникнут вопросы, наш свадебный организатор <a href="#">Анастасия</a> с радостью поможет
        </motion.p>
      </div>
    </motion.div>
  );
};
