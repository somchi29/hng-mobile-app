import React from "react";
import { View, Button, Linking } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 9, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Visit My GitHub Repository"
        // onPress={() => Linking.openURL("https://github.com/")}
       onPress={() => Linking.openURL('https://github.com/kelly29Dev/hng-mobile-app')} />

      
      <Button
        title="HNG Hire"
        onPress={() => Linking.openURL("https://hng.com")}
      />
    </View>
  );
};

export default App;
