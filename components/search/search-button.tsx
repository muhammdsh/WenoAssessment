import { Box, HStack, Text } from "@gluestack-ui/themed";
import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";

export const SearchButton = ({
  title,
  result = "",
  icon,
  onPress,
}: {
  icon: ReactNode;
  title: string;
  result?: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        borderRadius={48}
        borderWidth={1}
        borderColor={colors.naturalGray}
        bgColor={colors.light}
        p={16}
        h={56}
        justifyContent="center"
      >
        <HStack>
          {icon}
          <Box w={12} />
          <Text
            numberOfLines={1}
            overflow="hidden"
            fontSize={16}
            fontWeight="500"
          >
            {!!result ? result : title}
          </Text>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};
