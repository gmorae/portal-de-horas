import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar, SafeAreaView } from "react-native";

import Routes from "./src/router";
import { stylertTheme } from "./src/theme";
import { colors } from "./src/theme/colors";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={stylertTheme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
}