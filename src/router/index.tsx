import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "../screens/Onboarding";
import Login from "../screens/Login";
import Home from '../screens/Home';
import NewAppointment from "../screens/NewAppointment";
import ListAppointment from '../screens/ListAppointment';

import { colors } from "../theme/colors";
import useAuth from "../hooks/useAuth";

const Navigator = createStackNavigator().Navigator;
const Screen = createStackNavigator().Screen;

const Routes = () => {
  const { signed } = useAuth()
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
        {
          !signed ? (
            <>
              <Screen name="onboarding" component={Onboarding} />
              <Screen name="login" component={Login} />
            </>
          ) : (
            <>
              <Screen name="home" component={Home} />
              <Screen name="newAppointment" component={NewAppointment} />
              <Screen name="listAppointment" component={ListAppointment} />
            </>
          )
        }

      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;