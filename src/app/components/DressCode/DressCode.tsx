import Image from "next/image";
import { motion } from "framer-motion";
import { dressCodeColors } from "@/data";

import s from "./DressCode.module.scss";
import Link from "next/link";

export const DressCode = () => {
  return (
    <div className={s.dressCode}>
      <h3>Дресс-код</h3>

      <div className={s.dressCode__wrapperDed}>
        <motion.p className={s.dressCode__description} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
          Мы очень ждем и с трепетом готовимся к нашиму дню! Будет здорово, если своими нарядами вы поодержите палитру нашей свадьбы
        </motion.p>
        <motion.div
          className={s.dressCode__container}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image src="/dresscode.png" alt="dresscode" width={375} height={300} className={s.dressCode__image} />
        </motion.div>

        <motion.p className={s.dressCode__description} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
          Для мужчин темный (синий, черный) или светлый (бежевый, коричневый) низ и светлый верх
        </motion.p>

        <motion.div
          className={s.dressCode__buttonWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="" className={s.dressCode__button}>
            Подборка нарядов
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
