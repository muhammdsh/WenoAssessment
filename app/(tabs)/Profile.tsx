import { colors } from "@/components/constants/colors";
import SearchHeader from "@/components/profile/search-header";
import CreateTravel from "@/components/profile/sections/create-travel";
import Explore from "@/components/profile/sections/explore";
import { Box, ScrollView } from "@gluestack-ui/themed";
import React from "react";
export default function Profile() {
  return (
    <ScrollView flex={1} bgColor={colors.background}>
      <Box w="$full" p={16}>
        <SearchHeader />
        <Box h={16} />
        <CreateTravel />
      </Box>
      <Explore />
    </ScrollView>
  );
}
