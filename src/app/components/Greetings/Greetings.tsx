import { motion } from "framer-motion";
import s from "./Greetings.module.scss";

export const Greetings = () => {
  return (
    <div className={s.greetings}>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        ДОРОГИЕ ГОСТИ!
      </motion.h2>

      <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
        Мы искренне приглашаем вас разделить с нами самый важный день в нашей жизни. Ваше присутствие сделает наше торжество еще более особенным и незабываемым. Давайте вместе создадим прекрасные
        воспоминания, которые будут согревать наши сердца долгие годы!
      </motion.p>
    </div>
  );
};
