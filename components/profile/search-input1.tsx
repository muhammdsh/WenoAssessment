import React from "react";
import { Input, InputField, InputSlot } from "@gluestack-ui/themed";
import { colors } from "../constants/colors";
import { icons } from "../constants/icons";

const SearchInput = ({
  onChangeText,
}: {
  onChangeText: (placesValue: string) => void;
}) => {
  return (
    <Input
      $focus-borderColor={colors.primary500}
      flex={5}
      bgColor={colors.light}
      rounded={20}
      h={50}
    >
      <InputSlot paddingStart={8}>{icons.search.SearchIcon}</InputSlot>
      <InputField onChangeText={onChangeText} placeholder="Search Places" />
    </Input>
  );
};

export default SearchInput;
