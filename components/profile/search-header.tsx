import React from "react";
import SearchInput from "./search-input-button";
import FilterButton from "./filter-button";
import { Box, HStack } from "@gluestack-ui/themed";
import SearchInputButton from "./search-input-button";

const SearchHeader = () => {
  return (
    <HStack>
      <SearchInputButton />
      <Box w={12} />
      <FilterButton />
    </HStack>
  );
};

export default SearchHeader;
