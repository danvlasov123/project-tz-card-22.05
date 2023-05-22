import { FC } from "react";
import { Card } from "./Card/Card";
import { SwitchTheme } from "./SwitchTheme/SwitchTheme";

import { bg } from "./source";

export type TypeCard = {
  images: string[];
  rate: number;
  subtitle: string;
  title: string;
  description: string;
  capacity: number;
  country: string;
};
const App: FC = (): JSX.Element => {
  const db: TypeCard[] = [
    {
      images: [bg, bg, bg],
      rate: 3.7,
      subtitle: "Writers’ Tears",
      title: "Whiskey Writers' Tears Red Head, Writers’ Tears",
      description: "Speyside Single Malt Scotch Whisky Distillery Bottling",
      capacity: 500,
      country: "Ireland",
    },
    {
      images: [bg, bg, bg],
      rate: 3.7,
      subtitle: "Writers’ Tears",
      title: "Whiskey Writers' Tears Red Head, Writers’ Tears",
      description: "Speyside Single Malt Scotch Whisky Distillery Bottling",
      capacity: 500,
      country: "Ireland",
    },
    {
      images: [bg, bg, bg],
      rate: 3.7,
      subtitle: "Writers’ Tears",
      title: "Whiskey Writers' Tears Red Head, Writers’ Tears",
      description: "Speyside Single Malt Scotch Whisky Distillery Bottling",
      capacity: 500,
      country: "Ireland",
    },
  ];

  return (
    <div className="app">
      <div style={{ margin: "1rem 0" }}>
        <SwitchTheme />
      </div>
      <div className="card-list">
        {db.map((card, k) => {
          return <Card data={card} key={k} />;
        })}
      </div>
    </div>
  );
};

export { App };
