import React from "react";
import { Input, InputField, InputSlot } from "@gluestack-ui/themed";
import { colors } from "../constants/colors";
import { icons } from "../constants/icons";
import { router } from "expo-router";

const SearchInputButton = () => {
  return (
    <Input
      onTouchEndCapture={() => {
        router.push("/Search");
      }}
      isReadOnly
      flex={5}
      bgColor={colors.light}
      rounded="$full"
      h={56}
    >
      <InputSlot paddingStart={8}>{icons.search.SearchIcon}</InputSlot>
      <InputField placeholder="Search Places" />
    </Input>
  );
};

export default SearchInputButton;
