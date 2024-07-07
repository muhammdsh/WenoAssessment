import { Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import { colors } from "../constants/colors";
import { icons } from "../constants/icons";
import { TouchableOpacity } from "react-native";

export const HistoryCard = () => {
  return (
    <Box
      marginStart={16}
      w={303}
      bgColor={colors.light}
      borderRadius={13}
      borderWidth={1}
      borderColor={colors.borderGray}
      p={16}
    >
      <HStack justifyContent="flex-start">
        <Box flex={1}>{icons.profile.HistoryIcon}</Box>
        <Box flex={3}>
          <VStack>
            <Text fontSize={14} color={colors.naturalGray900} fontWeight="600">
              Berlin, Germany
            </Text>
            <Text
              mt={4}
              fontSize={13}
              color={colors.naturalGray600}
              fontWeight="400"
            >
              3 July - 11 July 2024
            </Text>
            <HStack mt={8}>
              <Text
                fontSize={13}
                color={colors.naturalGray600}
                fontWeight="400"
              >
                Guest
              </Text>
              <Box w={6} />
              {icons.profile.PersonIcon}
              <Box w={4} />

              {icons.profile.PersonIcon}
            </HStack>
            <TouchableOpacity onPress={() => {}}>
              <Text
                mt={16}
                color={colors.naturalGray900}
                fontSize={13}
                fontWeight="600"
                underline
              >
                Delete History
              </Text>
            </TouchableOpacity>
          </VStack>
        </Box>
        <Box flex={1} alignItems="flex-end">
          <Box
            h={16}
            w={16}
            borderRadius={"$full"}
            borderWidth={1}
            borderColor={colors.naturalGray}
          />
        </Box>
      </HStack>
    </Box>
  );
};
