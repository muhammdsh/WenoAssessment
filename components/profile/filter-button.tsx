import React from "react";
import { Box } from "@gluestack-ui/themed";
import { colors } from "../constants/colors";
import { icons } from "../constants/icons";
import { TouchableOpacity } from "react-native";

const FilterButton = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Box
        h={56}
        w={56}
        rounded="$full"
        bgColor={colors.light}
        borderColor={colors.borderGray}
        borderWidth={1}
        softShadow="4"
        justifyContent="center"
        alignItems="center"
      >
        {icons.search.FilterIcon}
      </Box>
    </TouchableOpacity>
  );
};

export default FilterButton;
