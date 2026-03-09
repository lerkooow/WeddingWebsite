import { motion } from "framer-motion";
import s from "./Greetings.module.scss";

export const Greetings = () => {
  return (
    <div className={s.greetings}>
      <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
        Дорогие родные и близкие, мы женимся и мечтаем разделить этот день с вами!
      </motion.p>
    </div>
  );
};
