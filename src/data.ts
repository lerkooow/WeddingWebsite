type TSchedule = {
  time: string;
  title: string;
  description: string;
};

type TDressCodeColor = {
  color: string;
};

export const schedule: TSchedule[] = [
  {
    time: "16:00",
    title: "СБОР ГОСТЕЙ",
    description: "Просим взять с собой хорошее настроение и не опаздывать",
  },
  {
    time: "17:00",
    title: "ЦЕРЕМОНИЯ",
    description: "Вы станете свидетелями самого трогательного события",
  },
  {
    time: "18:00",
    title: "БАНКЕТ",
    description: "Просим взять с собой хорошее настроение и не опаздывать",
  },
  {
    time: "23:00",
    title: "ФИНАЛЬНАЯ ЧАСТЬ",
    description: "Романтичексий фейверк с самыми близкими людьми",
  },
];

export const dressCodeColors: TDressCodeColor[] = [
  { color: "#D9D9D9" },
  { color: "#D9D9D9" },
  { color: "#D9D9D9" },
  { color: "#D9D9D9" },
  { color: "#D9D9D9" },
  { color: "#D9D9D9" },
  { color: "#D9D9D9" },
];

export const drinksData: string[] = ["Вино Белое", "Вино Красное", "Виски", "Водка", "Шампанское"];
