import SectionTitle from "@/components/common/section-title";
import React from "react";
import { CategoryItemData } from "../category/category-item";
import { FlatList, View } from "react-native";
import ProductItem from "../featured-category/product-item";
import ProductsGrid from "@/components/common/products-grid";

export const products: CategoryItemData[] = [
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
  {
    id: "4",
    image: require("@/assets/images/products/product-1.jpeg"),
    title: "Meat & Fish",
  },
];
export default function ProductsSection() {
  return (
    <>
      <SectionTitle title="Products" />
      <ProductsGrid products={products} />
    </>
  );
}
