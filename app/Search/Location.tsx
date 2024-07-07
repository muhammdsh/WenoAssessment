import PrimaryButton from "@/components/common/button";
import { colors } from "@/components/constants/colors";
import SearchInput from "@/components/profile/search-input1";
import { useQuery } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Box,
  Checkbox,
  CheckboxIndicator,
  FlatList,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { searchPlacesQuery } from "@/services/datasource/places/queries";
import {
  CellRendererProps,
  ListRenderItem,
  ListRenderItemInfo,
} from "react-native";
import { debounce, isEmpty } from "lodash";
import { icons } from "@/components/constants/icons";
import { usePlacesStore } from "@/services/zustand/store";
import { router } from "expo-router";
import { PlaceItem } from "@/components/search/place-item";
import { Footer } from "@/components/search/footer";
import { SearchItemModel } from "@/services/datasource/places/types";

const Location = () => {
  const {
    searchValue,
    places,
    setPlaces,
    setSearchValue,
    selectPlaces,
    selectedPlaces,
    resetSearchValue,
    reset,
    isSelected,
    apply,
  } = usePlacesStore();

  const { register, setValue, handleSubmit, watch } = useForm();

  const { data, isLoading } = useQuery({
    ...searchPlacesQuery({ limit: "10", q: searchValue! }),
    enabled: !isEmpty(searchValue),
  });

  const debouncedSearch = debounce((text) => {
    setSearchValue(text);
  }, 500);

  useEffect(() => {
    if (!!data && !isEmpty(searchValue)) {
      if (data.features) setPlaces(data.features);
    }
  }, [data]);

  return (
    <>
      <Box bgColor={colors.background} flex={1} p={16}>
        <Box h={50} flexWrap="wrap" mb={16}>
          <SearchInput
            onChangeText={(placeValue) => {
              if (placeValue === "") {
                reset();
              }
              //   setValue(placeValue);
              debouncedSearch(placeValue);
            }}
          />
        </Box>
        {isLoading ? (
          <Box flex={1}>
            <Spinner />
          </Box>
        ) : (
          <FlatList
            data={places}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }: ListRenderItemInfo<SearchItemModel>) => {
              return (
                <PlaceItem
                  key={item.properties.osm_id}
                  flag=""
                  isChecked={item.isSelected}
                  title={item.properties.name ?? ""}
                  name={item.properties.country}
                  id={item!.toString()}
                  onSelected={(isSelected) => {
                    console.log("isSelected", item.isSelected);
                    selectPlaces(item, isSelected);
                  }}
                />
              );
            }}
          />
        )}
      </Box>
      <Footer
        isDisabled={!isSelected}
        onPress={() => {
          apply();
          resetSearchValue();
          router.back();
        }}
      />
    </>
  );
};

export default Location;
