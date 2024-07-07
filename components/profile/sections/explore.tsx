import { colors } from "@/components/constants/colors";
import { icons } from "@/components/constants/icons";
import { Box, HStack, Text } from "@gluestack-ui/themed";
import React from "react";
const Explore = () => {
  return (
    <Box
      bgColor={colors.primary50}
      w={"$full"}
      h={400}
      borderTopWidth={1}
      borderColor={colors.naturalGray}
      p={16}
    >
      <HStack alignItems="center">
        {icons.profile.ExploreIcon}

        <Text
          marginStart={2}
          fontWeight="500"
          fontSize={20}
          color={colors.dark}
        >
          Explore
        </Text>
      </HStack>
    </Box>
  );
};

export default Explore;
