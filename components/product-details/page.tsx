import Counter from "@/components/common/counter";
import OutlinedButton from "@/components/common/outlined-button";
import RatingView from "@/components/common/rating";
import { CategoryItemSlider } from "@/components/home/category-slider/category-item";
import ProductImageSlider from "@/components/product-details/product-image-slider";
import RelatedProducts from "@/components/product-details/related-products";
import { Divider } from "@gluestack-ui/themed";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const images: CategoryItemSlider[] = [
  {
    image: require("@/assets/images/product-details/product-details-1.jpeg"),
    id: "12",
    description: "A pizza the action!",
    description2: "Welcome to flavor town",
    title: "Shrimply the best",
  },
  {
    image: require("@/assets/images/product-details/product-details-2.jpeg"),
    id: "1",
    description: "A pizza the action!",
    description2: "Welcome to flavor town",
    title: "Shrimply the best",
  },
  {
    image: require("@/assets/images/product-details/product-details-3.jpeg"),
    id: "4",
    description: "A pizza the action!",
    description2: "Welcome to flavor town",
    title: "Shrimply the best",
  },
  {
    image: require("@/assets/images/product-details/product-details-4.jpeg"),
    id: "2",
    description: "A pizza the action!",
    description2: "Welcome to flavor town",
    title: "Shrimply the best",
  },
];
function ProductPage() {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        padding: 14,
      }}
    >
      <ProductImageSlider images={images} />
      <View style={{ marginTop: 24 }} />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Fresh Red Grapefruit, Each
        <Text style={{ color: "gray", fontSize: 14 }}>{"   3.0 oz"}</Text>
      </Text>
      <View style={{ marginTop: 24 }} />
      <RatingView value={4} />
      <View style={{ marginTop: 24 }} />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginEnd: 2,
          }}
        >
          $1
        </Text>
        <Text style={{ fontSize: 14, alignSelf: "flex-start", paddingTop: 3 }}>
          {95}
        </Text>
      </View>
      <View style={{ marginTop: 24 }} />

      <View style={{ flexDirection: "row" }}>
        <Counter
          onChanged={(value) => {
            console.log("value", value);
          }}
        />
        <View style={{ width: 14 }} />
        <OutlinedButton hight={50} onPress={() => {}}>
          <Text style={{ color: "#3f8746", fontSize: 16, fontWeight: "500" }}>
            Add to cart
          </Text>
        </OutlinedButton>
      </View>
      <View style={{ marginTop: 24 }} />
      <Divider />
      <View style={{ marginTop: 24 }} />
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>
        Description
      </Text>
      <Text style={{ fontSize: 16 }}>
        Grapefruit is the perfect balance between tart and sweet. The balance
        between tart and sweet is great for both savory and sweet dishes any
        time of day. Enjoy half of a grapefruit sprinkled with sugar with some
        eggs in the morning for a light, sweet breakfast.
      </Text>
      <View style={{ marginTop: 24 }} />
      <RelatedProducts />
      <View style={{ marginTop: 24 }} />
    </ScrollView>
  );
}

export default ProductPage;
