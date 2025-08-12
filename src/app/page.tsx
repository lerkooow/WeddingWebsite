import { Button } from "./components/Button";
import { Greetings } from "./components/Greetings";
import { Location } from "./components/Location";
import { Separator } from "./components/Separator";
import { WelcomeSection } from "./components/WelcomeSection";
import { Countdown } from "./components/Сountdown";

import s from "./page.module.scss";

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.page__container}>
        <WelcomeSection />
        <Separator hearts />
        <Greetings />
        <Separator />
        <Countdown />
        <Location />
      </div>
    </div>
  );
}
