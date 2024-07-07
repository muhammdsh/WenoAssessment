import { create } from "zustand";
import { SearchItemModel } from "../datasource/places/types";

interface PlacesState {
  searchValue: string | null | undefined;
  places: SearchItemModel[];
  selectedPlaces: string[];
  isSelected: boolean;
  setSearchValue: (value: string) => void;
  setPlaces: (newPlaces: SearchItemModel[]) => void;
  selectPlaces: (item: SearchItemModel, value: boolean) => void;
  resetSearchValue: () => void;
  apply: () => void;
  reset: () => void;
}

export const usePlacesStore = create<PlacesState>()((set) => ({
  searchValue: "",
  places: [],
  selectedPlaces: [],
  isSelected: false,
  setSearchValue: (value: string) => set((state) => ({ searchValue: value })),
  setPlaces: (newPlaces: SearchItemModel[]) =>
    set((state) => ({ places: [...newPlaces] })),
  selectPlaces: (item: SearchItemModel, value: boolean) =>
    set((state) => {
      item.isSelected = value;
      const sortedList = state.places.sort((a, b) => {
        return b.isSelected === a.isSelected ? 0 : a.isSelected ? -1 : 1;
      });
      return {
        places: [...sortedList],
        isSelected: sortedList.some((e) => e.isSelected),
      };
    }),
  apply: () =>
    set((state) => ({
      selectedPlaces: state.places
        .filter((e) => e.isSelected)
        .map((e) => e.properties.name),
    })),
  resetSearchValue: () =>
    set((state) => ({
      searchValue: "",
    })),
  reset: () =>
    set((state) => ({
      places: [],
      selectedPlaces: [],
      searchValue: "",
      isSelected: false,
    })),
}));
