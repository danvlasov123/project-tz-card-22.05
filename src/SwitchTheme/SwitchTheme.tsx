import { FC, useState, useEffect } from "react";

import "./SwitchTheme.scss";

import { setDataTheme, getDataTheme, ThemeVariants } from "../themeUtil";

const SwitchTheme: FC = () => {
  const theme = getDataTheme();

  const [stateTheme, setStateTheme] = useState<ThemeVariants>(theme);

  const handleToggle = () => {
    setDataTheme(theme === "light" ? "dark" : "light");
    setStateTheme(stateTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setDataTheme(theme);

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider" />
      </label>
      <p>{stateTheme}</p>
    </div>
  );
};

export { SwitchTheme };
