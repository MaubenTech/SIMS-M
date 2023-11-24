import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import HomePageSalutation from "./HomePageSalutation";

type HomePageWrapperProps = {};

const withHomePageWrapper = <P extends object>(WrappedComponent: React.ComponentType<P & HomePageWrapperProps>) => {
  const WithHomePageWrapper = (props: P) => {
    return (
      <View>
        {/* <WrappedComponent {...props} /> */}
        <HomePageSalutation />
        <WrappedComponent {...props} />
      </View>
    );
  };

  return WithHomePageWrapper;
};

const styles = StyleSheet.create({});

export default withHomePageWrapper;
