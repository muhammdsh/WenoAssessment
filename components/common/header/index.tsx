import { colors } from "@/components/constants/colors";
import { icons } from "@/components/constants/icons";
import { Box, HStack } from "@gluestack-ui/themed";
import { ReactNode } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AppBar({
  isExplore = false,
  onTextChanged,
}: {
  isExplore?: boolean;
  onTextChanged?: (value: string) => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <Box bgColor="white">
      <SafeAreaView />
      <HStack
        marginTop={insets.top}
        // bgColor="red"
        paddingHorizontal={20}
        height={57}
        alignItems="center"
        justifyContent="flex-end"
      >
        <IconButton icon={icons.header.ChatIcon} onPress={() => {}} />
        <Box w={24} />
        <IconButton icon={icons.header.NotificationIcon} onPress={() => {}} />
      </HStack>
    </Box>
  );
}
export interface IconButtonProps {
  onPress: () => void;
  icon: ReactNode;
}

const IconButton = ({ onPress, icon }: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        alignItems="center"
        justifyContent="center"
        bgColor={colors.lightGray}
        p={"$1.5"}
        w={32}
        h={32}
        rounded={"$full"}
      >
        {icon}
      </Box>
    </TouchableOpacity>
  );
};
