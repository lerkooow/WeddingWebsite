"use client";

import { Details } from "./components/Details";
import { DressCode } from "./components/DressCode";
import { Form } from "./components/Form";
import { Greetings } from "./components/Greetings";
import { Location } from "./components/Location";
import { Schedule } from "./components/Schedule";
import { Separator } from "./components/Separator";
import { WelcomeSection } from "./components/WelcomeSection";
import { Countdown } from "./components/Сountdown";

import s from "./page.module.scss";

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.page__container}>
        <WelcomeSection />
        <Greetings />
        <Separator hearts />
        <Countdown />
        <Separator hearts />
        <Location />
        <Separator hearts />
        <Schedule />
        <Separator hearts />
        <DressCode />
        <Separator hearts />
        <Details />
        <Separator hearts />
        <Form />
      </div>
    </div>
  );
}
