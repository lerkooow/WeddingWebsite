import { motion } from "framer-motion";
import s from "./Greetings.module.scss";

export const Greetings = () => {
  return (
    <motion.div
      className={s.greetings}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <p>Дорогие родные и близкие, мы начинаем новую главу нашей жизни и будем счастливы, если вы разделите этот день вместе с нами!</p>
    </motion.div>
  );
};
