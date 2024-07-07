import { Box, Checkbox, HStack, VStack, Text } from "@gluestack-ui/themed";
import { colors } from "../constants/colors";
import { CheckboxIndicator } from "@gluestack-ui/themed";

export const PlaceItem = ({
  id,
  title,
  name,
  flag,
  isChecked,
  onSelected,
}: {
  title: string;
  name: string;
  flag: string;
  isChecked: boolean;
  onSelected: (isSelected: boolean) => void;
  id: string;
}) => {
  return (
    <Box
      paddingVertical={14}
      paddingHorizontal={8}
      borderBottomWidth={1}
      borderColor={colors.borderGray}
    >
      <HStack>
        <Box flex={1} justifyContent="center" alignItems="flex-start">
          <Text>🇳🇱</Text>
        </Box>
        <Box justifyContent="center" flex={5}>
          <VStack>
            <Text fontSize={16} fontWeight={"500"} color={colors.dark}>
              {title}
            </Text>
            <Text
              fontSize={14}
              mt={2}
              fontWeight={"500"}
              color={colors.naturalGray600}
            >
              {name}
            </Text>
          </VStack>
        </Box>
        <Box flex={1} alignItems="flex-end" justifyContent="center">
          <Checkbox
            isChecked={isChecked}
            aria-label={id!.toString()}
            value={id!.toString()}
            onChange={onSelected}
          >
            <CheckboxIndicator />
          </Checkbox>
        </Box>
      </HStack>
    </Box>
  );
};
