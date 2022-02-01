import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let settingsStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark }))
});

let peopleStore = (set) => ({
  people: ["John Doe", "Jane Doe"],
  addPerson: (person) => set((state) => ({ people: [...state.people, person] }))
});

const PokemonStore = (set) => ({
  pokemons: [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Ivysaur" },
    { id: 3, name: "Venusaur" },
    { id: 4, name: "Charmander" },
    { id: 5, name: "Charmeleon" }
  ],
  addPokemons: (pokemon) =>
    set((state) => ({
      pokemons: [
        { name: pokemon.name, id: Math.random() * 100 },
        ...state.pokemons
      ]
    })),
  removePokemon: (id) =>
    set((state) => ({
      pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id)
    }))
});

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: "user_settings" });

peopleStore = devtools(peopleStore);
peopleStore = persist(peopleStore, { name: "people_list" });

export const useSettingsStore = create(settingsStore);
export const usePeopleStore = create(peopleStore);
export const usePokemonStore = create(PokemonStore);
