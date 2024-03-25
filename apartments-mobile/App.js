import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PropertyList from "./views/ApartmentList";
import ApartmentDetailView from "./views/ApartmentDetails";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
      }}
      source={require("./assets/favicon.png")}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={PropertyList}
            options={{
              title: "Property Listings",
              headerStyle: {
                backgroundColor: "#00b8f5",
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                margin: 20,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Details"
            component={ApartmentDetailView}
            options={{
              title: "Property Details",
              headerStyle: {
                backgroundColor: "#00b8f5",
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                margin: 20,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
