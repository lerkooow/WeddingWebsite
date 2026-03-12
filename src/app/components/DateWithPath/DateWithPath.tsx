"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import s from "./DateWithPath.module.scss";

const PATH_D = `
  M 193 57
  C 210 70,  235 84,  247 101
  C 259 118, 259 133, 256 148
  C 254 164, 247 178, 234 191
  C 220 205, 200 214, 181 219
  C 159 225, 137 225, 115 224
  C  93 223,  73 220,  59 216
  C  49 213,  43 210,  43 210
  C  46 222,  56 241,  68 262
  C  83 285,  98 300, 117 317
  C 137 334, 154 343, 176 356
  C 198 368, 210 374, 232 381
  C 254 388, 271 390, 293 389
  C 315 388, 330 383, 344 374
  C 359 366, 369 355, 372 345
  C 375 337, 372 329, 365 325
  C 355 320, 340 319, 318 322
  C 291 326, 264 333, 234 343
  C 203 354, 181 364, 151 378
  C 120 392,  93 407,  66 427
  C  39 446,  20 461,  10 479
  C   2 493,   5 506,  12 518
  C  22 533,  39 546,  68 563
  C 100 582, 137 598, 164 612
`;

export const DateWithPath = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 95%", "end 95%"],
  });

  // Анимируем strokeDashoffset напрямую через rAF — минуем React render и Framer overhead
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    let rafId: number;

    const update = () => {
      const p = scrollYProgress.get();
      const off = len * (1 - Math.min(Math.max(p, 0), 1));
      path.style.strokeDashoffset = `${off}`;
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [scrollYProgress]);

  const dates = ["24", "25", "26"];
  const datesAfter = ["28", "29", "30"];

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
