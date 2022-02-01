import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Input from "./components/Input";
import People from "./components/People";
import Pokemon from "./components/Pokemon";
import { useSettingsStore } from "./store";

function App() {
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const dark = useSettingsStore((state) => state.dark);
  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [dark]);
  return (
    <div className="App">
      <h2>Zustand Example</h2>
      <button onClick={toggleDarkMode}>Toggle Dark mode</button>
      <h2>People</h2>
      <Input />
      <People />
      <Pokemon />
      <Form />
    </div>
  );
}

export default App;
