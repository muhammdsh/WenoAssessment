import { colors } from "@/components/constants/colors";
import { ButtonText, Button } from "@gluestack-ui/themed";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  onPress?: () => void;
  isDisabled?: boolean;
};
export default function PrimaryButton({
  title,
  onPress,
  isDisabled = false,
}: Props) {
  return (
    <Button
      $disabled-bgColor={colors.light}
      $disabled-borderWidth={1}
      $disabled-borderColor={colors.naturalGray}
      isDisabled={isDisabled}
      onPress={onPress}
      borderRadius={48}
      bgColor={colors.primary500}
      h={48}
      w={"$full"}
    >
      <ButtonText
        fontSize={16}
        fontWeight="500"
        color={isDisabled ? colors.naturalGray400 : colors.light}
      >
        {title}
      </ButtonText>
    </Button>
  );
}
