import SectionTitle from "@/components/common/section-title";
import { Href, router, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { CategoryItemData } from "../category/category-item";
import ProductItem from "./product-item";
const products: CategoryItemData[] = [
  {
    id: "1",
    image: require("@/assets/images/products/product-4.jpeg"),
    title: "Fresh Red Grapefruit, Each",
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
export default function FeaturedCategory() {
  const [newPath, seNewPath] = useState<string>();
  const pathSegments = useSegments();

  useEffect(() => {
    seNewPath(pathSegments.join("/"));
  }, []);
  return (
    <>
      <SectionTitle title="Featured Collection" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 24 }}
        data={products}
        renderItem={({ item, index }) => {
          return (
            <ProductItem
              id={item.id}
              image={item.image}
              title={item.title}
              onPress={() => {
                router.push(
                  `${newPath}/Product/${item.id}` as Href<"Pathname">
                );
              }}
              onAddToCart={() => {}}
              marginStart={index === 0 ? 18 : 0}
              marginEnd={index === products.length - 1 ? 18 : 0}
            />
          );
        }}
      />
    </>
  );
}
