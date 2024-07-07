import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import CategoryItem, { CategoryItemData } from "./category-item";
import SectionTitle from "@/components/common/section-title";
import { router } from "expo-router";

const products: CategoryItemData[] = [
  {
    id: "1",
    image: require("@/assets/images/products/product-1.jpeg"),
    title: "Fruit & Vegetables",
  },
  {
    id: "2",
    image: require("@/assets/images/products/product-2.jpeg"),
    title: "Meat & Fish",
  },
  {
    id: "3",
    image: require("@/assets/images/products/product-3.jpeg"),
    title: "Cheese & Dairy",
  },
];
export default function index() {
  return (
    <>
      <SectionTitle title="Shop Groceries" />
      <FlatList
        data={products}
        style={{ marginBottom: 24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <CategoryItem
              {...item}
              onPress={() => router.push(`/(tabs)/Home/Category/${item.id}`)}
            />
          );
        }}
      />
    </>
  );
}
