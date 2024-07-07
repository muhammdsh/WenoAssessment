import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
export type CategoryItemData = {
  id: string;
  image: any;
  title: string;
};

export default function CategoryItem({
  id,
  image,
  title,
  onPress,
}: CategoryItemData & { onPress?: () => void }) {
  return (
    <TouchableOpacity
      key={id}
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginStart: 18,
      }}
      onPress={onPress}
    >
      <Image
        source={image}
        style={{ height: 180, width: 180, marginBottom: 14 }}
      />
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );
}
