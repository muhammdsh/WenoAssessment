import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Box, VStack } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";

const SecondBackground = () => {
  const width = Dimensions.get("window").width;
  const hight = Dimensions.get("window").height;

  return (
    <Box h={620}>
      <VStack pl={"40%"}>
        <Image
          alt="3"
          w={310}
          h={310}
          resizeMode="contain"
          source={require("../../../assets/images/startup/second-step/bg.png")}
        />
        <Image
          alt="2"
          w={310}
          h={310}
          resizeMode="contain"
          source={require("../../../assets/images/startup/second-step/bg2.png")}
        />
        <Box position="absolute" sx={{ left: "40%", top: "19%" }}>
          <Image
            alt="2"
            w={55}
            resizeMode="contain"
            source={require("../../../assets/images/startup/second-step/dollar.png")}
          />
        </Box>
      </VStack>
      <Box position="absolute" sx={{ top: "47%" }}>
        <Image
          alt="2"
          w={170}
          h={170}
          resizeMode="contain"
          source={require("../../../assets/images/startup/second-step/shape.png")}
        />
      </Box>
      <Box position="absolute" alignSelf="center">
        <Image
          alt="1"
          marginTop={"24%"}
          p={12}
          w={width * 0.88}
          h={hight * 0.6}
          resizeMode="contain"
          source={require("../../../assets/images/startup/second-step/group.png")}
        />
      </Box>
    </Box>
  );
};

export default SecondBackground;
