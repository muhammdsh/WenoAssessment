import { CategoryItemSlider } from "@/components/home/category-slider/category-item";
import React, { createRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

export default function ProductImageSlider({
  images,
}: {
  images: CategoryItemSlider[];
}) {
  const width = Dimensions.get("window").width;

  const [selectedImage, setSelectedImage] = useState(0);
  const ref = createRef<ICarouselInstance>();
  return (
    <View>
      <View>
        <Carousel
          ref={ref}
          style={{ backgroundColor: "red", alignItems: "center" }}
          loop
          width={width - 28}
          height={width - 28}
          autoPlay={false}
          data={images}
          pagingEnabled
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setSelectedImage(index)}
          renderItem={({ index }) => (
            <Image
              key={images[index].id}
              style={{ width: "100%", height: width - 14 }}
              source={images[index].image}
            />
          )}
        />
        <View
          style={{
            borderWidth: 1,
            width: 70,
            height: 45,
            borderRadius: 6,
            borderColor: "#dddddd",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            bottom: 14,
            end: 14,
          }}
        >
          <Text style={{ fontSize: 16 }}>
            {selectedImage + 1} / {images.length}
          </Text>
        </View>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        style={{ height: 110 }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                borderBottomWidth: selectedImage === index ? 2 : 0,
              }}
              onPress={() => {
                setSelectedImage(index);
                ref.current?.scrollTo({ index });
              }}
            >
              <Image
                style={{ width: 100, height: 100 }}
                key={item.id}
                source={item.image}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
