import { Box } from "@gluestack-ui/themed";
import { colors } from "../constants/colors";
import PrimaryButton from "../common/button";

export const Footer = ({
  isDisabled = true,
  onPress,
}: {
  isDisabled?: boolean;
  onPress: () => void;
}) => {
  return (
    <Box
      //sx={{ bottom: 0, position: "absolute" }}
      p={16}
      w={"$full"}
      h={120}
      bgColor={colors.primary50}
      borderTopWidth={1}
      borderColor={colors.primary100}
    >
      <PrimaryButton
        isDisabled={isDisabled}
        title="Show results"
        onPress={onPress}
      />
    </Box>
  );
};
