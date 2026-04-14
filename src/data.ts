type TSchedule = {
  time: string;
  title: string;
};

export const schedule: TSchedule[] = [
  {
    time: "15:00",
    title: "Cбор гостей",
  },
  {
    time: "16:00",
    title: "Начало нашей свадебной церемонии",
  },
  {
    time: "17:00",
    title: "Банкет",
  },
  {
    time: "23:00",
    title: "Финал",
  },
];

export const drinksData: string[] = ["Безалкогольные напитки (можете написать свой вариант)", "Вино Белое", "Вино Красное", "Виски", "Водка", "Шампанское"];

export const dressCodeColors: { name: string; img: string }[] = [
  { name: "Бежевый", img: "/beige.svg" },
  { name: "Нежно-голубой", img: "/blue.svg" },
  { name: "Нежно-розовый", img: "/pink.svg" },
  { name: "Карамельный", img: "/caramel.svg" },
  { name: "Нежно-желтый", img: "/yellow2.jpg" },
  { name: "Нежно-зеленый", img: "/green1.jpg" },
];
