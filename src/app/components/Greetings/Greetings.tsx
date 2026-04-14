import Image from "next/image";

import { useRef, useState, useEffect } from "react";

import { motion } from "framer-motion";

import s from "./Greetings.module.scss";

export const Greetings = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Автозапуск заблокирован", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className={s.greetings}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <p className={s.greetings__title}>
        ДОРОГИЕ НАШИ
        <br /> РОДНЫЙ И БЛИЗКИЕ!
      </p>
      <hr style={{ border: "none", backgroundColor: "#6a90b5", height: "1px", width: "64px" }} />
      <audio id="myAudio" src="/music.mp3" ref={audioRef} style={{ display: "none" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p className={s.audioControl} onClick={toggleAudio}>
          {isPlaying ? <Image src="/speaker.svg" width={36} height={36} alt="Звук включен" /> : <Image src="/muted.svg" width={36} height={36} alt="Звук выключен" />}
        </p>
        <p className={s.greetings__musicDescription}>
          Если вас отвлекает музыка,
          <br /> ее можно выключить
        </p>
      </div>
      <hr style={{ border: "none", backgroundColor: "#6a90b5", height: "1px", width: "64px" }} />
      <p className={s.greetings__description}>Мы начинаем новую главу нашей жизни и будем счастливы, если вы разделите этот день вместе с нами!</p>
    </motion.div>
  );
};
