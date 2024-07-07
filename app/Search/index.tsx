import { colors } from "@/components/constants/colors";
import { icons } from "@/components/constants/icons";
import { Footer } from "@/components/search/footer";
import { HistorySection } from "@/components/search/history-section";
import { SearchButton } from "@/components/search/search-button";
import { SectionTitle } from "@/components/search/section-title";
import { usePlacesStore } from "@/services/zustand/store";
import { Box, VStack } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { isEmpty } from "lodash";
import React from "react";
const Index = () => {
  const selectedPlaces = usePlacesStore((state) => state.selectedPlaces);
  return (
    <VStack flex={1} bgColor={colors.background}>
      <Box p={16}>
        <SearchButton
          title="Where?"
          result={selectedPlaces.join(", ")}
          icon={icons.profile.LocationIcon}
          onPress={() => {
            router.push("/Search/Location");
          }}
        />
        <Box h={8} />
        <SearchButton title="When?" icon={icons.profile.DateIcon} />
        <Box h={8} />
        <SearchButton title="Guests?" icon={icons.profile.UserIcon} />
      </Box>

      <HistorySection />
      <Box mt={16} paddingHorizontal={16}>
        <SectionTitle title="Trips" />
      </Box>
      <Box flex={1} justifyContent="flex-end">
        <Footer onPress={() => {}} isDisabled={isEmpty(selectedPlaces)} />
      </Box>
    </VStack>
  );
};

export default Index;
