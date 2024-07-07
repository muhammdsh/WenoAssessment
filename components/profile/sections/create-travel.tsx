import PrimaryButton from "@/components/common/button";
import { colors } from "@/components/constants/colors";
import { images } from "@/components/constants/images";
import { Box, Center, Image, Text } from "@gluestack-ui/themed";
import React from "react";
const CreateTravel = () => {
  return (
    <Box>
      <Image
        alt="1"
        source={images.profile.profileImage}
        w={"$full"}
        resizeMode="contain"
        h={314}
      />
      <Box h={12} />
      <Text
        textAlign="center"
        fontSize={20}
        fontWeight="600"
        mb={12}
        color={colors.primary500}
      >
        Smooth Way to Split Payment
      </Text>
      <Text
        textAlign="center"
        fontSize={16}
        mb={12}
        fontWeight="500"
        color={colors.dark}
      >
        {"Effortless planning, pooking, and\npayment management together"}
      </Text>
      <Center>
        <PrimaryButton title="Create Your Travel Group!" onPress={() => {}} />
      </Center>
    </Box>
  );
};

export default CreateTravel;
