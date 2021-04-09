import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";

import { colors } from "../theme/colors";

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.white,
          },
        }}
      >
        <Screen name="onboarding" component={Onboarding} />
        <Screen name="home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;