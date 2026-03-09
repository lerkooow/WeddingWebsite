"use client";

import Image from "next/image";
import { Details } from "./components/Details";
import { DressCode } from "./components/DressCode";
import { Form } from "./components/Form";
import { Greetings } from "./components/Greetings";
import { Location } from "./components/Location";
import { Schedule } from "./components/Schedule";
import { WelcomeSection } from "./components/WelcomeSection";
import { Countdown } from "./components/Сountdown";
import { DateComponents } from "./components/Date";

import s from "./page.module.scss";

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.page__container}>
        <WelcomeSection />
        <Greetings />
        <Image src="./flowers.svg" width={150} height={100} alt="flower" />
        <DateComponents />
        <Countdown />
        <Image src="./flowers.svg" width={150} height={100} alt="flower" />
        <Location />
        <Schedule />
        <DressCode />
        <Details />
        <Form />
      </div>
    </div>
  );
}
