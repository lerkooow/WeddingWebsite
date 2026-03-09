import s from "./Date.module.scss";

export const DateComponents = () => {
  return (
    <div className={s.date__container}>
      <p className={s.date__other}>24</p>
      <p className={s.date__other}>25</p>
      <p className={s.date__other}>26</p>
      <div className={s.date__event}>
        <p className={s.date__week}>суббота</p>
        <p className={s.date__wedding}>27</p>
        <p className={s.date__month}>июня</p>
      </div>
      <p className={s.date__other}>28</p>
      <p className={s.date__other}>29</p>
      <p className={s.date__other}>30</p>
    </div>
  );
};
