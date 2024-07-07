import React from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SectionTitle({
  title,
  onPress,
  withoutMargin,
  withoutViewAll = false,
}: {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  withoutMargin?: boolean;
  withoutViewAll?: boolean;
}) {
  return (
    <View
      style={{
        marginVertical: 24,
        marginHorizontal: withoutMargin ? 0 : 12,
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, color: "black", fontWeight: "600" }}>
        {title}
      </Text>
      {withoutViewAll ? null : (
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              fontSize: 15,
              color: "black",
              textDecorationLine: "underline",
            }}
          >
            View all
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
