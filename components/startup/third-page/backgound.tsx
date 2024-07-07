import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Box, VStack } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";

const ThirdBackground = () => {
  const width = Dimensions.get("window").width;
  const hight = Dimensions.get("window").height;

  return (
    <Box h={620}>
      <VStack>
        <Image
          pl="10%"
          alt="3"
          w={390}
          h={300}
          resizeMode="contain"
          source={require("../../../assets/images/startup/third-step/bg.png")}
        />
        <Box pl="40%">
          <Image
            alt="2"
            w={390}
            h={290}
            size="xl"
            resizeMode="contain"
            source={require("../../../assets/images/startup/third-step/bg2.png")}
          />
        </Box>
      </VStack>

      <Box position="absolute" alignSelf="center">
        <Image
          alt="1"
          marginTop={"24%"}
          p={12}
          w={width * 0.8}
          h={hight * 0.5}
          resizeMode="contain"
          source={require("../../../assets/images/startup/third-step/group.png")}
        />
      </Box>
    </Box>
  );
};

export default ThirdBackground;
