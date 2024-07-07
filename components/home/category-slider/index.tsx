import React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CategoryItem, { CategoryItemSlider } from "./category-item";

const images: CategoryItemSlider[] = [
  {
    image: require("../../../assets/images/categories-slider/slider-image.jpeg"),
    id: "12",
    description: "A pizza the action!",
    description2: "Welcome to flavor town",
    title: "Shrimply the best",
  },
  {
    image: require("../../../assets/images/categories-slider/slider-2.jpeg"),
    id: "1",
    description: "A pizza the action!",
    description2: "Welcome to flavor town",
    title: "Shrimply the best",
  },
];
export default function CategorySlider() {
  const width = Dimensions.get("window").width;

  return (
    <Carousel
      loop
      width={width}
      height={width}
      autoPlay={false}
      data={images}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ index }) => <CategoryItem {...images[index]} />}
    />
  );
}
