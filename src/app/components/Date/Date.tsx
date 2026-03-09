import { motion } from "framer-motion";
import s from "./Date.module.scss";

export const DateComponents = () => {
  const dates = ["24", "25", "26"];
  const datesAfter = ["28", "29", "30"];

  return (
    <motion.div className={s.date__container} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }}>
      {dates.map((date, index) => (
        <motion.p
          key={date}
          className={s.date__other}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {date}
        </motion.p>
      ))}
      <motion.div
        className={s.date__event}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className={s.date__week}>суббота</p>
        <p className={s.date__wedding}>27</p>
        <p className={s.date__month}>июня</p>
      </motion.div>
      {datesAfter.map((date, index) => (
        <motion.p
          key={date}
          className={s.date__other}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {date}
        </motion.p>
      ))}
    </motion.div>
  );
};
