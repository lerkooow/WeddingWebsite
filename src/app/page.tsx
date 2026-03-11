"use client";

import Image from "next/image";
import { Details } from "./components/Details";
import { DressCode } from "./components/DressCode";
import { Form } from "./components/Form";
import { Greetings } from "./components/Greetings";
import { Location } from "./components/Location";
import { WelcomeSection } from "./components/WelcomeSection";
import { Countdown } from "./components/Сountdown";
import { DateWithPath } from "./components/DateWithPath";

import s from "./page.module.scss";

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.page__container}>
        <WelcomeSection />
        <Greetings />
        <Image src="./flowers.svg" width={150} height={100} alt="flower" />
        <DateWithPath />
        <Countdown />
        <Location />
        <DressCode />
        <Details />
        <Form />
      </div>
    </div>
  );
}
