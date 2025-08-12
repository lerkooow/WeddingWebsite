import s from "./Greetings.module.scss";

export const Greetings = () => {
  return (
    <div className={s.greetings}>
      <h2>ДОРОГИЕ ГОСТИ!</h2>
      <p>Дорогие гости, мы приглашаем вас разделить с нами этот радостный день, в который мы станем семьей!</p>
    </div>
  );
};
