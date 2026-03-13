"use client";

import { motion } from "framer-motion";

import { PATH_D, useDateWithPath } from "./hooks/useDateWithPath";

import s from "./DateWithPath.module.scss";

export const DateWithPath = () => {
  const { sectionRef, pathRef, dates, datesAfter } = useDateWithPath();
  return (
    <div className={s.dwp} ref={sectionRef}>
      <motion.h2 className={s.dwp__title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
        июнь 2026 • суббота
      </motion.h2>

      <motion.div className={s.dwp__dates} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }}>
        {dates.map((d, index) => (
          <motion.p
            key={d}
            className={s.dwp__day}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {d}
          </motion.p>
        ))}

        <motion.div
          className={s.dwp__event}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className={s.dwp__wedding}>27</p>
        </motion.div>

        {datesAfter.map((d, index) => (
          <motion.p
            key={d}
            className={s.dwp__day}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {d}
          </motion.p>
        ))}
      </motion.div>

      <div className={s.dwp__canvas}>
        <svg viewBox="0 0 375 660" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.dwp__svg}>
          <path ref={pathRef} d={PATH_D} stroke="#a0bbd6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>

        <motion.div
          className={s.dwp__item}
          style={{ top: 110, left: 85 }}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className={s.dwp__time}>15:00</p>
          <p className={s.dwp__label}>Сбор гостей</p>
          <p className={s.dwp__label}>Фуршет</p>
        </motion.div>

        <motion.div
          className={s.dwp__item}
          style={{ top: 240, right: 70 }}
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className={s.dwp__time}>16:00</p>
          <p className={s.dwp__label}>Начало нашей</p>
          <p className={s.dwp__label}>свадебной церемонии</p>
        </motion.div>

        <motion.div
          className={s.dwp__item}
          style={{ top: 335, left: 10 }}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className={s.dwp__time}>17:00</p>
          <p className={s.dwp__label}>Банкет</p>
        </motion.div>

        <motion.div
          className={s.dwp__item}
          style={{ top: 465, left: 35 }}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className={s.dwp__time}>23:00</p>
          <p className={s.dwp__label}>Трогательное завершение нашего свадебного дня</p>
        </motion.div>
      </div>
    </div>
  );
};
