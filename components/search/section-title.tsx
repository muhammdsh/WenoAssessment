import { Box, Divider, Text } from "@gluestack-ui/themed";
import { colors } from "../constants/colors";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <>
      <Text fontSize={16} fontWeight="500" color={colors.naturalGray900}>
        {title}
      </Text>
      <Box h={12} />

      <Divider />
      <Box h={12} />
    </>
  );
};
