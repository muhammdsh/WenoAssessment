import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { icons } from "@/components/constants/icons";
import AppBar from "@/components/common/header";
import { colors } from "@/components/constants/colors";
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome6>["name"];
//   color: string;
// }) {
//   return <FontAwesome6 size={18} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  return (
    <>
      {/* <FontAwesome name="house" /> */}
      <AppBar />

      <Tabs
        screenOptions={{
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          tabBarInactiveTintColor: colors.darkGray,
          tabBarActiveTintColor: colors.primaryColor,
          tabBarLabelStyle: { fontWeight: "500" },
          tabBarStyle: {
            paddingTop: 4,
            height: 85,
            borderTopColor: colors.light,
          },
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            headerShown: false,
            //  title: "Home",
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) =>
              icons.bottomTabs.SearchIcon({ stroke: color }),
          }}
        />

        <Tabs.Screen
          name="Trips"
          options={{
            headerShown: false,
            tabBarLabel: "Trips",

            tabBarIcon: ({ color }) =>
              icons.bottomTabs.TripsIcon({ fill: color }),
          }}
        />
        <Tabs.Screen
          name="Reservation"
          options={{
            headerShown: false,
            tabBarLabel: "Reservation",

            tabBarIcon: ({ color }) =>
              icons.bottomTabs.ReservationIcon({ stroke: color }),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            headerShown: false,
            tabBarLabel: "Profile",

            tabBarIcon: ({ color }) =>
              icons.bottomTabs.ProfileIcon({ stroke: color }),
          }}
        />
      </Tabs>
    </>
  );
}
