import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
  setMode: () => {
    alert("você precisa me configurar primeiro");
  },
  toggleMode: () => {
    alert("você precisa me configurar primeiro");
  },
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialMode);

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
}
