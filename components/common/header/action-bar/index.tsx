import { colors } from "@/components/constants/colors";
import { icons } from "@/components/constants/icons";
import { Box, HStack, Text } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { ReactNode } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ActionBar({
  onReset,
  onBack,
}: {
  onReset?: () => void;
  onBack?: () => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <Box bgColor="white">
      <SafeAreaView />
      <HStack
        mt={insets.top}
        paddingHorizontal={20}
        height={57}
        alignItems="center"
        borderBottomWidth={1}
        borderColor={colors.naturalGray}
        //justifyContent="space-between"
      >
        <Box flex={1}>
          <TouchableOpacity
            onPress={() => {
              if (!!onBack) {
                onBack();
              }
              router.back();
            }}
          >
            <HStack alignItems="center">
              {icons.common.BackIcon}
              <Text
                marginStart={8}
                fontSize={14}
                fontWeight="500"
                color={colors.darkGray}
              >
                Back
              </Text>
            </HStack>
          </TouchableOpacity>
        </Box>
        <Box alignItems="center" flex={1}>
          <Text fontSize={20} fontWeight="500" color={colors.dark}>
            Search
          </Text>
        </Box>
        <Box alignItems="flex-end" flex={1}>
          <TouchableOpacity onPress={onReset}>
            <Text fontSize={14} fontWeight="500" color={colors.darkGray}>
              Reset
            </Text>
          </TouchableOpacity>
        </Box>
      </HStack>
    </Box>
  );
}
