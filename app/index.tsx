import PrimaryButton from "@/components/common/button";
import Background, {
  StartupOptions,
} from "@/components/startup/first-page/background";
import SecondBackground from "@/components/startup/second-page/background";
import ThirdBackground from "@/components/startup/third-page/backgound";
import {
  Box,
  Button,
  ButtonText,
  Center,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useRef } from "react";
import { Animated, Dimensions, SafeAreaView } from "react-native";
import { PageIndicator } from "react-native-page-indicator";

export default function Startup() {
  const width = Dimensions.get("window").width;
  const hight = Dimensions.get("window").height;
  const scrollX = useRef(new Animated.Value(0)).current;

  const pages: StartupOptions[] = [
    {
      id: 1,
      title: "Smooth Group Travel Coordination",
      description:
        "Effortless Planning, Booking, and Payment Management Together",
      background: <Background />,
    },
    {
      id: 2,
      title: "Easiest Way to\nSplit Group Payment",
      description:
        "Minimizes Confusion, Make Convenient and Accessible for Everyone Involved",
      background: <SecondBackground />,
    },
    {
      id: 3,
      title: "Create Your\nCustomized Filter to Search",
      description:
        "Create Your Own Custom Filters and Use for More Smooth Search Experience",
      background: <ThirdBackground />,
    },
  ];

  const animatedCurrent = useRef(Animated.divide(scrollX, width)).current;

  return (
    <Box flex={1} bgColor="$white">
      <SafeAreaView />
      <Box>
        <Animated.ScrollView
          style={{ height: hight }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: true,
            }
          )}
        >
          {pages.map((e) => {
            return (
              <VStack h="$full" key={e.id} flex={1} w={width}>
                {e.background}
                <Box w={width} sx={{ bottom: "14%" }} position="absolute">
                  <VStack alignItems="center" paddingHorizontal={24} w={width}>
                    <Text
                      fontWeight="700"
                      sx={{ fontSize: 24 }}
                      textAlign="center"
                      color="$black"
                    >
                      {e.title}
                    </Text>
                    <Text
                      mt={14}
                      textAlign="center"
                      fontWeight="500"
                      color="$warmGray500"
                    >
                      {e.description}
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            );
          })}
        </Animated.ScrollView>
        <Box sx={{ left: width / 2 - 30, bottom: "30%" }} position="absolute">
          <PageIndicator
            color="#188EFC"
            count={pages.length}
            size={10}
            dashSize={35}
            current={animatedCurrent}
          />
        </Box>
        <Box
          paddingHorizontal={24}
          w={width}
          position="absolute"
          sx={{ bottom: "5%" }}
        >
          <Center>
            <PrimaryButton
              title="Get started"
              onPress={() => {
                router.push("/(tabs)/Home");
              }}
            />
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
