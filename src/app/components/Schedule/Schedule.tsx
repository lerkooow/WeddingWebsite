import Image from "next/image";
import { motion } from "framer-motion";

import { schedule } from "@/data";
import s from "./Schedule.module.scss";

export const Schedule = () => {
  return (
    <motion.div className={s.schedule} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <h3>ПРОГРАММА ДНЯ</h3>

      {schedule.map((item, index) => (
        <motion.div
          key={item.time}
          className={s.schedule__wrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          viewport={{ once: true }}
        >
          <p className={s.schedule__time}>{item.time}</p>
          <p className={s.schedule__title}>{item.title}</p>
          <p className={s.schedule__description}>{item.description}</p>

          {index + 1 < schedule.length && <Image src="/heart.svg" alt="Heart" width={13} height={15} className={s.separator__image} />}
        </motion.div>
      ))}
    </motion.div>
  );
};
