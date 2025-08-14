import Image from "next/image";
import { motion } from "framer-motion";
import { dressCodeColors } from "@/data";

import s from "./DressCode.module.scss";

export const DressCode = () => {
  return (
    <motion.div className={s.dressCode} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <h3>ДРЕССКОД</h3>

      <div className={s.dressCode__wrapperDed}>
        <motion.div
          className={s.dressCode__container}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image src="/dresscode.jpg" alt="Dress Code" width={200} height={200} className={s.dressCode__image} />

          <div className={s.dressCode__wrapper}>
            {dressCodeColors.map((item, index) => (
              <motion.div
                key={index}
                style={{ backgroundColor: item.color }}
                className={s.dressCode__color}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>

        <motion.p className={s.dressCode__description} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
          Мы постарались подобрать удобную цветовую
          <br /> гамму, и нам будет очень приятно, если вы <br /> поддержите наш выбор
        </motion.p>
      </div>
    </motion.div>
  );
};
