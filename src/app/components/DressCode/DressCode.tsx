"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { dressCodeColors } from "@/data";
import s from "./DressCode.module.scss";
import Link from "next/link";

export const DressCode = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={s.dressCode}>
      <h3>Дресс-код</h3>

      <div className={s.dressCode__wrapperDed}>
        <motion.p className={s.dressCode__description} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
          Мы с трепетом готовимся к нашему особому дню! Будет здорово, если в своих нарядах вы поддержите цветовую гамму нашей свадьбы
        </motion.p>

        <div className={s.dressCode__palette}>
          {dressCodeColors.map((color, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={color.img}
                className={s.dressCode__colorItem}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={s.dressCode__circle}
                  animate={{ width: isActive ? 130 : 62, borderRadius: isActive ? 18 : 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  onClick={() => toggle(index)}
                >
                  <motion.img src={color.img} alt={color.name} className={s.dressCode__circleImg} animate={{ opacity: isActive ? 0.5 : 1 }} transition={{ duration: 0.25 }} />
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        className={s.dressCode__colorName}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        {color.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className={s.dressCode__description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Для мужчин темный (синий, черный) или светлый (бежевый, коричневый) низ и светлый верх
        </motion.p>

        <motion.div
          className={s.dressCode__buttonWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
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
