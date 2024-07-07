import Button from "@/components/common/button";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageSourcePropType,
} from "react-native";

export type CategoryItemSlider = {
  id: string;
  image: ImageSourcePropType | undefined;
  title: string;
  description: string;
  description2: string;
};

export default function CategoryItem({
  id,
  description,
  image,
  title,
  description2,
}: CategoryItemSlider) {
  const width = Dimensions.get("window").width;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Image
        style={{ resizeMode: "cover", width: width, height: width }}
        source={image}
      />
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 16,
          }}
        >
          {description}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 32,
          }}
        >
          {description2}
        </Text>

        <Button onPress={() => {}}>
          <Text style={{ color: "white", fontSize: 16 }}>Shop</Text>
        </Button>
      </View>
    </View>
  );
}
