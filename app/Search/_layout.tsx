import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ActionBar from "@/components/common/header/action-bar";
import { usePlacesStore } from "@/services/zustand/store";
import { isEmpty } from "lodash";

const SearchLayout = () => {
  const reset = usePlacesStore((state) => state.reset);
  const selectedPlaces = usePlacesStore((state) => state.selectedPlaces);
  return (
    <>
      <ActionBar
        onBack={() => {
          if (isEmpty(selectedPlaces)) reset();
        }}
        onReset={() => {
          reset();
        }}
      />
      <Stack
        screenOptions={{
          fullScreenGestureEnabled: true,
          gestureEnabled: true,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerShown: false, gestureEnabled: true }}
        />
        <Stack.Screen
          name="Location"
          options={{ headerShown: false, gestureEnabled: true }}
        />
      </Stack>
    </>
  );
};

export default SearchLayout;
