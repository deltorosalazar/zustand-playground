import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let peopleStore = (set) => {
  return {
    people: ["John Doe", "Jane Doe"],
    addPerson: (person) => {
      set((state) => ({
        people: [...state.people, person]
      }));
    }
  };
};

peopleStore = devtools(peopleStore);

// Allows to persist the data in localStorage
peopleStore = persist(peopleStore, {
  name: "people_zustand"
  // There is also possible to blacklist some element
  // blacklist: ['darkMode']
});

let settingsStore = (set) => {
  return {
    darkMode: false,
    toggleDarkMode: () => {
      set((state) => {
        return {
          darkMode: !state.darkMode
        };
      });
    }
  };
};

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore);

export const useSettingStore = create(settingsStore);
export const usePeopleStore = create(peopleStore);
