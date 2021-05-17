import { useEffect } from "react";
import Input from "./components/Input";
import PeopleList from "./components/PeopleList";
import { useSettingStore } from "./store";
import "./styles.css";

const App = () => {
  // It is possible to do this, but is not good.
  // When anything changes in the state, the component will re render
  // const { darkMode, toggleDarkMode } = useStore();

  const toggleDarkMode = useSettingStore((state) => state.toggleDarkMode);
  const darkMode = useSettingStore((state) => state.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.querySelector(".App").classList.add("dark");
    } else {
      document.querySelector(".App").classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <h2>People</h2>
      <Input />
      <PeopleList />
    </div>
  );
};

export default App;
