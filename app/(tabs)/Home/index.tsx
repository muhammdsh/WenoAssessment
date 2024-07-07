import { ScrollView } from "@gluestack-ui/themed";

import { colors } from "@/components/constants/colors";
import React from "react";

export default function Home() {
  return (
    <>
      <ScrollView bgColor={colors.background} flex={1}></ScrollView>
    </>
  );
}
