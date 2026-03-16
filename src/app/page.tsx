"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Details } from "./components/Details";
import { DressCode } from "./components/DressCode";
import { Form } from "./components/Form";
import { Greetings } from "./components/Greetings";
import { Location } from "./components/Location";
import { WelcomeSection } from "./components/WelcomeSection";
import { Countdown } from "./components/Сountdown";
import { DateWithPath } from "./components/DateWithPath";
import { PageLoader } from "./components/PageLoader";
import { Footer } from "./components/Footer/Footer";

import s from "./page.module.scss";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <PageLoader isVisible={isLoading} />
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
          <Image src="./flowers.svg" width={150} height={100} alt="flower" />
          <Footer />
        </div>
      </div>
    </>
  );
}
