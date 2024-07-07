import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Box, VStack } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";

export interface StartupOptions {
  background: React.ReactNode;
  id: number;
  title: string;
  description: string;
}
const Background = () => {
  const width = Dimensions.get("window").width;
  const hight = Dimensions.get("window").height;

  return (
    <Box>
      <VStack>
        <Image
          alt="3"
          w={310}
          h={310}
          resizeMode="contain"
          source={require("../../../assets/images/startup/first-step/bg.png")}
        />
        <Image
          alt="2"
          w={310}
          h={310}
          resizeMode="contain"
          source={require("../../../assets/images/startup/first-step/bg2.png")}
        />
        <Box position="absolute" sx={{ right: 40, top: "43%" }}>
          <Image
            alt="2"
            w={55}
            resizeMode="contain"
            source={require("../../../assets/images/startup/first-step/settings.png")}
          />
        </Box>
      </VStack>
      <Box position="absolute" alignSelf="center">
        <Image
          alt="1"
          marginTop={"25%"}
          p={12}
          w={width * 0.93}
          h={hight * 0.51}
          resizeMode="contain"
          source={require("../../../assets/images/startup/first-step/group.png")}
        />
      </Box>
    </Box>
  );
};

export default Background;
