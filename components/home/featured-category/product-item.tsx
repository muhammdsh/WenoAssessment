import React from "react";
import { CategoryItemData } from "../category/category-item";
import {
  DimensionValue,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Button from "@/components/common/button";

export default function ProductItem({
  marginEnd,
  marginStart,
  marginBottom,
  onPress,
  id,
  image,
  imageSize,
  width,
  buttonWidth,
  height,
  borderWidth,
  onAddToCart,
  title,
}: CategoryItemData & {
  onPress?: () => void;
  marginStart?: number;
  marginEnd?: number;
  marginBottom?: number;
  imageSize?: DimensionValue | undefined;
  width?: number;
  buttonWidth?: number;
  height?: number | null;
  borderWidth?: number;
  onAddToCart?: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          borderWidth: borderWidth ?? 0.2,
          alignItems: "center",
          marginStart: marginStart ?? 0,
          marginEnd: marginEnd ?? 0,
          marginBottom: marginBottom ?? 0,
          width: width ?? null,
          height: height ?? null,
          //    backgroundColor: "red",
          paddingVertical: 8,
          paddingHorizontal: 18,
        }}
      >
        <Image
          source={image}
          style={{
            height: imageSize ?? 180,
            width: imageSize ?? 180,
            marginBottom: 14,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 13,
            fontWeight: "bold",
            marginBottom: 6,
          }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 12, color: "gray", marginBottom: 32 }}>
          3.0 oz
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "500", marginBottom: 14 }}>
          $1
        </Text>
        <Button onPress={onAddToCart} width={buttonWidth ?? 180}>
          <Text style={{ color: "white", fontWeight: "600" }}>+ Cart</Text>
        </Button>
      </View>
    </TouchableOpacity>
  );
}
