import AppBar from "@/components/common/header";
import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <>
      <Stack
        screenOptions={{
          fullScreenGestureEnabled: true,

          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
