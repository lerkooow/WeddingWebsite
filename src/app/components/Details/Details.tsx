import { motion } from "framer-motion";
import s from "./Details.module.scss";

export const Details = () => {
  return (
    <motion.div className={s.details} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <h3>Детали</h3>

      <div className={s.details__container}>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          Ваши улыбки и смех дарят нам незабываемое счастье, а пожелания в конвертах помогут осуществить мечты!
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
          Для вашего комфортного времяпровождения мы подготовили анкету гостя <strong>(просьба заполнить до 26.05.2026)</strong>
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
          Если возникли вопросы, обращайтесь к нашему свадебному организатору <a href="#">Анастасии</a>
        </motion.p>
      </div>
    </motion.div>
  );
};
