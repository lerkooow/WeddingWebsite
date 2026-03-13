"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { dressCodeColors } from "@/data";

import s from "./DressCode.module.scss";

export const DressCode = () => {
  return (
    <section className={s.dressCode}>
      <motion.div className={s.dressCode__header} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }} viewport={{ once: true }}>
        <span className={s.dressCode__eyebrow}>dress code</span>
        <div className={s.dressCode__titleRow}>
          <h3 className={s.dressCode__title}>Дресс-код</h3>
        </div>
      </motion.div>

      <div className={s.dressCode__carouselWrap}>
        <div className={s.dressCode__carousel}>
          {dressCodeColors.map((color, index) => (
            <motion.div
              key={color.img}
              className={s.dressCode__card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className={s.dressCode__cardInner}>
                <img src={color.img} alt={color.name} className={s.dressCode__cardImg} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className={s.dressCode__scrollHint} initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5 9H13M13 9L9.5 5.5M13 9L9.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      <motion.div className={s.dressCode__footer} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
        <p className={s.dressCode__description}>Мы будем рады, если вы поддержите нашу цветовую гамму. Для мужчин — тёмный или светлый низ и светлый верх.</p>
        <Link href="" className={s.dressCode__button}>
          Подборка нарядов
        </Link>
      </motion.div>
    </section>
  );
};
